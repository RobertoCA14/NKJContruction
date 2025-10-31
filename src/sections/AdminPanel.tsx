import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebaseConfig";
import imageCompression from "browser-image-compression";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { signOut } from "firebase/auth";

const AdminPanel: React.FC = () => {
  const [category, setCategory] = useState("completed");
  const [location, setLocation] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [value, setValue] = useState("");
  const [developer, setDeveloper] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [zoomGallery, setZoomGallery] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copyright, setCopyright] = useState("");
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    setProgress(0);

    const compressedFiles: File[] = [];
    const previews: string[] = [];
    const total = files.length;

    for (let i = 0; i < total; i++) {
      const file = files[i];
      try {
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };

        const compressed = await imageCompression(file, options);

        if (compressed.size > 4 * 1024 * 1024) {
          alert(`⚠️ ${file.name} is still too large (max 4 MB).`);
          continue;
        }

        compressedFiles.push(compressed);
        previews.push(URL.createObjectURL(compressed));
      } catch (err) {
        console.error("❌ Compression error:", err);
      }
      setProgress(Math.round(((i + 1) / total) * 100));
    }

    if (compressedFiles.length > 0) {
      setImages((prev) => [...prev, ...compressedFiles]);
      setPreviewUrls((prev) => [...prev, ...previews]);
    }

    setTimeout(() => setUploading(false), 500);
  };

  const uploadImages = async (): Promise<string[]> => {
    if (!images.length) return [];
    const formData = new FormData();

    images.forEach((file, index) => formData.append(`file_${index}`, file));

    setUploading(true);
    try {
      const res = await fetch("https://nkj-backend.vercel.app/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploading(false);
      if (data.success && data.urls) return data.urls;
      return [];
    } catch (err) {
      console.error("❌ Upload error:", err);
      setUploading(false);
      return [];
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    // 🚫 Validar que haya al menos una imagen (nueva o existente)
    if (images.length === 0 && existingImages.length === 0) {
      setMessage("⚠️ Please upload at least one image before saving.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    try {
      const uploadedUrls = images.length ? await uploadImages() : [];
      const combinedImages = [...existingImages, ...uploadedUrls];

      const projectData: any = {
        category,
        location,
        images: combinedImages,
        createdAt: Timestamp.now(),
        copyright,
      };

      if (category !== "completed") {
        projectData.squareFootage = squareFootage;
        projectData.value = value;
        projectData.developer = developer;
      }

      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), projectData);
        setExistingImages(combinedImages);
        setPreviewUrls(combinedImages);
        setMessage("✅ Project updated.");
      } else {
        await addDoc(collection(db, "projects"), projectData);
        setMessage("✅ Project saved.");
      }

      resetForm();
      refreshProjects();
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Error while saving project.");
    }
  };

  const refreshProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const resetForm = () => {
    setCategory("completed");
    setLocation("");
    setSquareFootage("");
    setValue("");
    setDeveloper("");
    setEditingId(null);
    setImages([]);
    setPreviewUrls([]);
    setExistingImages([]);
    setCopyright("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveImage = (url: string) => {
    setPreviewUrls((prev) => prev.filter((u) => u !== url));
    setExistingImages((prev) => prev.filter((u) => u !== url));
  };

  const handleEdit = (project: any) => {
    setEditingId(project.id);
    setCategory(project.category);
    setLocation(project.location);
    setSquareFootage(project.squareFootage || "");
    setValue(project.value || "");
    setDeveloper(project.developer || "");
    setPreviewUrls(project.images || []);
    setExistingImages(project.images || []);
    setCopyright(project.copyright || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string, images?: string[]) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    await deleteDoc(doc(db, "projects", id));
    setMessage("🗑 Project deleted.");

    if (images?.length) {
      for (const url of images) {
        try {
          await fetch("https://nkj-backend.vercel.app/api/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
          });
        } catch {}
      }
    }
    refreshProjects();
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const openGallery = (images: string[], index: number) => {
    setZoomGallery(images);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* 🔹 Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admin Panel
        </h1>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="font-semibold block mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="completed">Completed</option>
              {/* <option value="upcoming">Upcoming</option> */}
              <option value="recent">Recent</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Copyright</label>
            <input
              type="text"
              value={copyright}
              onChange={(e) => setCopyright(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder=""
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Images</label>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />

            {uploading && (
              <div className="w-full bg-gray-200 h-3 rounded mt-3">
                <div
                  className="bg-red-700 h-3 rounded transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-3">
              {previewUrls.map((url, i) => (
                <div key={i} className="relative">
                  <img
                    src={url}
                    onClick={() => openGallery(previewUrls, i)}
                    className="w-full h-28 object-cover rounded border cursor-pointer hover:scale-105 transition"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(url)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-0.5 text-sm hover:bg-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded"
          >
            {uploading
              ? "Uploading images..."
              : editingId
              ? "Update Project"
              : "Save Project"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-gray-700 font-semibold">
            {message}
          </p>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded"
        >
          Log out
        </button>
      </div>

      {/* 🔹 Project list */}
      <div className="w-full max-w-6xl mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Saved Projects
        </h2>

        {["completed", "upcoming", "recent"].map((cat) => {
          const filtered = projects.filter((p) => p.category === cat);
          if (!filtered.length) return null;

          return (
            <div key={cat} className="mb-14">
              <h3 className="text-2xl font-semibold text-red-700 mb-8 text-center uppercase">
                {cat}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl w-full max-w-sm"
                  >
                    {p.images?.length ? (
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => openGallery(p.images, 0)}
                      >
                        <img
                          src={p.images[0]}
                          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Fondo oscuro al hacer hover */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Copyright dentro de la imagen */}
                        {p.copyright && (
                          <p className="absolute bottom-2 left-3 text-[13px] italic text-gray-200 bg-black/60 px-2 py-[1px] rounded-md">
                            © {p.copyright}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-72 flex items-center justify-center bg-gray-200 text-gray-500 italic">
                        No image
                      </div>
                    )}

                    <div className="p-5 text-center">
                      <h3 className="text-lg font-bold text-black-600 mb-1">
                        {p.location}
                      </h3>
                      <p className="text-sm text-gray-600 capitalize">
                        {p.category}
                      </p>
                      {/* {p.copyright && (
                        <p className="text-xs text-gray-500 italic mt-1">
                          {p.copyright}
                        </p>
                      )} */}

                      <div className="flex justify-center gap-4 mt-4">
                        <button
                          onClick={() => handleEdit(p)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(p.id, p.images)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {zoomGallery && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setZoomGallery(null)}
        >
          {/* Flecha izquierda */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === 0 ? zoomGallery.length - 1 : prev - 1
              );
            }}
            className="absolute left-6 text-white text-4xl font-bold select-none"
          >
            ‹
          </button>

          {/* Contenedor de imagen ampliada */}
          <div className="relative">
            <img
              src={zoomGallery[currentIndex]}
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
            />

            {/* Copyright dentro de la imagen */}
            {projects
              .filter((p) => p.images.includes(zoomGallery[currentIndex]))
              .map((p) =>
                p.copyright ? (
                  <span
                    key={p.id}
                    className="absolute bottom-3 left-4 text-[15px] text-white/80 italic bg-black/75 px-2 py-1 rounded-md"
                  >
                    © {p.copyright}
                  </span>
                ) : null
              )}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % zoomGallery.length);
            }}
            className="absolute right-6 text-white text-4xl font-bold select-none"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

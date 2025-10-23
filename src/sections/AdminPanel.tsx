import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebaseConfig";
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
  const [images, setImages] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 🧠 Load existing projects
  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  // 📸 Local preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setImages(files);
    if (files) {
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewUrls(previews);
    }
  };

  // ☁️ Upload images
  const uploadImages = async (): Promise<string[]> => {
    if (!images) return [];
    const urls: string[] = [];
    setUploading(true);

    for (const file of Array.from(images)) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("https://nkj-backend.vercel.app/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success && data.url) urls.push(data.url);
      } catch (err) {
        console.error("❌ Image upload error:", err);
      }
    }

    setUploading(false);
    return urls;
  };

  // 💾 Save or update project
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const uploadedUrls = images ? await uploadImages() : [];
      const finalImages = uploadedUrls.length > 0 ? uploadedUrls : previewUrls;

      const projectData: any = {
        category,
        location,
        images: finalImages,
        createdAt: Timestamp.now(),
      };

      if (category !== "completed") {
        projectData.squareFootage = squareFootage;
        projectData.value = value;
        projectData.developer = developer;
      }

      if (editingId) {
        const projectRef = doc(db, "projects", editingId);
        await updateDoc(projectRef, projectData);
        setMessage("✅ Project updated successfully.");
      } else {
        await addDoc(collection(db, "projects"), projectData);
        setMessage("✅ Project saved successfully.");
      }

      setImages(null);
      setPreviewUrls([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      resetForm();
      refreshProjects();

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error(error);
      setMessage("❌ Error saving the project.");
    }
  };

  // 🔄 Refresh list
  const refreshProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // 🔙 Reset form
  const resetForm = () => {
    setCategory("completed");
    setLocation("");
    setSquareFootage("");
    setValue("");
    setDeveloper("");
    setEditingId(null);
  };

  // ✏️ Edit project
  const handleEdit = (project: any) => {
    setEditingId(project.id);
    setCategory(project.category);
    setLocation(project.location);
    setSquareFootage(project.squareFootage || "");
    setValue(project.value || "");
    setDeveloper(project.developer || "");
    setPreviewUrls(project.images || []);
    setMessage("✏️ Edit mode activated.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🗑️ Delete project
  const handleDelete = async (id: string, images?: string[]) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    await deleteDoc(doc(db, "projects", id));
    setMessage("🗑️ Project deleted.");

    if (images && images.length > 0) {
      for (const url of images) {
        try {
          await fetch("https://nkj-backend.vercel.app/api/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
          });
        } catch (err) {
          console.warn("⚠️ Could not delete from Blob:", err);
        }
      }
    }

    refreshProjects();
  };

  // 🚪 Logout
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* 🔹 Form Section (igualito) */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Administrative Panel
        </h1>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Campos igual que antes */}
          <div>
            <label className="font-semibold block mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
              <option value="recent">Recent</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-1">Address</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {category !== "completed" && (
            <>
              <div>
                <label className="font-semibold block mb-1">
                  Square Footage
                </label>
                <input
                  type="number"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="font-semibold block mb-1">
                  Contract Value
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="font-semibold block mb-1">Developer</label>
                <input
                  type="text"
                  value={developer}
                  onChange={(e) => setDeveloper(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </>
          )}

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
          </div>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-2">
              {previewUrls.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="preview"
                  className="w-full h-28 object-cover rounded border"
                />
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
              ? "Update project"
              : "Save project"}
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

      {/* 🔹 Project List (solo mejoradas imágenes + zoom) */}
      <div className="w-full max-w-6xl mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Saved Projects
        </h2>

        {["completed", "upcoming", "recent"].map((cat) => {
          const filtered = projects.filter((p) => p.category === cat);
          if (filtered.length === 0) return null;

          return (
            <div key={cat} className="mb-14">
              <h3 className="text-2xl font-semibold text-red-700 mb-8 text-center uppercase tracking-wide">
                {cat} Projects
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                {filtered.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl w-full max-w-sm"
                  >
                    {project.images?.length > 0 ? (
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => setZoomImage(project.images[0])}
                      >
                        <img
                          src={project.images[0]}
                          alt={project.location}
                          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    ) : (
                      <div className="w-full h-72 flex items-center justify-center bg-gray-200 text-gray-500 italic">
                        No image
                      </div>
                    )}

                    <div className="p-5 text-center">
                      <h3 className="text-lg font-bold text-red-700 mb-1">
                        {project.location}
                      </h3>
                      <p className="text-sm text-gray-600 capitalize">
                        {project.category}
                      </p>
                      {project.squareFootage && (
                        <p className="text-sm text-gray-600 mt-1">
                          📐 {project.squareFootage} ft²
                        </p>
                      )}
                      {project.value && (
                        <p className="text-sm text-gray-600">
                          💰 ${project.value}
                        </p>
                      )}
                      {project.developer && (
                        <p className="text-sm text-gray-600">
                          🏗️ {project.developer}
                        </p>
                      )}

                      <div className="flex justify-center gap-4 mt-4">
                        <button
                          onClick={() => handleEdit(project)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(project.id, project.images)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded transition"
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

      {/* 🖼 Modal Zoom */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl cursor-pointer animate-fadeIn"
          />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

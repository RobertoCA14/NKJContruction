import React, { useState, useEffect } from "react";
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

  // 🧠 Cargar proyectos existentes
  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  // 📸 Mostrar vista previa local
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

  // 📤 Subir imágenes (solo funciona en producción real)
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
        if (data.url) urls.push(data.url);
      } catch (err) {
        console.warn("⚠️ No se pudo subir la imagen (modo desarrollo).");
      }
    }

    setUploading(false);
    return urls;
  };

  // 💾 Guardar o actualizar proyecto
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newImages = await uploadImages();
      const projectData: any = {
        category,
        location,
        // 👇 Si no hay URL reales, guardamos las locales (solo para pruebas)
        images: newImages.length ? newImages : previewUrls,
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
        setMessage("✅ Proyecto actualizado correctamente.");
      } else {
        await addDoc(collection(db, "projects"), projectData);
        setMessage("✅ Proyecto guardado correctamente.");
      }

      resetForm();
      refreshProjects();
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al guardar el proyecto.");
    }
  };

  // 🔄 Recargar lista
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
    setImages(null);
    setPreviewUrls([]);
    setEditingId(null);
  };

  const handleEdit = (project: any) => {
    setEditingId(project.id);
    setCategory(project.category);
    setLocation(project.location);
    setSquareFootage(project.squareFootage || "");
    setValue(project.value || "");
    setDeveloper(project.developer || "");
    setPreviewUrls(project.images || []);
    setMessage("✏️ Modo edición activado.");
  };

  const handleDelete = async (id: string, images?: string[]) => {
    if (!confirm("¿Seguro que deseas eliminar este proyecto?")) return;

    // 1️⃣ Eliminar del Firestore
    await deleteDoc(doc(db, "projects", id));
    setMessage("🗑️ Proyecto eliminado.");

    // 2️⃣ Eliminar las imágenes del backend (Vercel Blob)
    if (images && images.length > 0) {
      for (const url of images) {
        try {
          await fetch("https://nkj-backend.vercel.app/api/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
          });
        } catch (err) {
          console.warn("⚠️ No se pudo eliminar del Blob:", err);
        }
      }
    }

    refreshProjects();
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Panel Administrativo
        </h1>

        {/* Formulario */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="font-semibold block mb-1">Categoría</label>
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
            <label className="font-semibold block mb-1">Dirección</label>
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
            <label className="font-semibold block mb-1">Imágenes</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>

          {/* 👇 Vista previa de imágenes */}
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
              ? "Subiendo imágenes..."
              : editingId
              ? "Actualizar proyecto"
              : "Guardar proyecto"}
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
          Cerrar sesión
        </button>
      </div>

      {/* Listado de proyectos */}
      <div className="w-full max-w-5xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Proyectos guardados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              {project.images?.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.location}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h3 className="text-lg font-bold mt-2 text-red-700">
                {project.location}
              </h3>
              <p className="text-sm text-gray-600 capitalize">
                {project.category}
              </p>

              {project.value && (
                <p className="text-sm text-gray-600">
                  💰 ${project.value} — {project.squareFootage} ft²
                </p>
              )}

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

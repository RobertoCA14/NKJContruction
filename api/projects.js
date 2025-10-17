import { put } from "@vercel/blob";
import fs from "fs/promises";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const config = { api: { bodyParser: false } };

// ✅ Importar formidable dinámicamente (fix para Vercel)
const getFormidable = async () => {
  const formidable = await import("formidable");
  return formidable.default;
};

// 🔥 Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWXTNuKFIThwKOQ9nOkSYO3m9HDTcwG7k",
  authDomain: "nkjconstruction-385c2.firebaseapp.com",
  projectId: "nkjconstruction-385c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const formidable = await getFormidable();
    const form = formidable();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("❌ Error al parsear el formulario:", err);
        return res.status(400).json({ error: "Error al procesar el formulario" });
      }

      try {
        const uploadedUrls = [];

        // ✅ Asegurar compatibilidad si solo hay una imagen
        const imageFiles = Array.isArray(files.images)
          ? files.images
          : files.images
          ? [files.images]
          : [];

        for (const file of imageFiles) {
          const data = await fs.readFile(file.filepath);
          const blob = await put(`projects/${file.originalFilename}`, data, {
            access: "public",
            contentType: file.mimetype,
          });
          uploadedUrls.push(blob.url);
        }

        const docRef = await addDoc(collection(db, "projects"), {
          category: fields.category?.[0] || "",
          location: fields.location?.[0] || "",
          imageUrls: uploadedUrls,
          createdAt: new Date().toISOString(),
        });

        return res.status(200).json({
          success: true,
          id: docRef.id,
          imageUrls: uploadedUrls,
        });
      } catch (error) {
        console.error("🔥 Error interno:", error);
        return res.status(500).json({ error: "Error al subir el proyecto" });
      }
    });
  } catch (error) {
    console.error("💥 Error general:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

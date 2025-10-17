import { put } from "@vercel/blob";
import formidable from "formidable";
import fs from "fs/promises";
import pkg from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const { initializeApp } = pkg;

export const config = { api: { bodyParser: false } };

// ✅ Configuración de Firebase
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
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("❌ Error parseando formulario:", err);
        return res.status(400).json({ error: "Error procesando formulario" });
      }

      try {
        const uploadedUrls = [];

        const fileArray = Array.isArray(files.images)
          ? files.images
          : [files.images].filter(Boolean);

        for (const file of fileArray) {
          const data = await fs.readFile(file.filepath);
          const blob = await put(`projects/${file.originalFilename}`, data, {
            access: "public",
            contentType: file.mimetype,
          });
          uploadedUrls.push(blob.url);
        }

        // 🔥 Guardar en Firestore
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
  } catch (outerError) {
    console.error("🔥 Error global:", outerError);
    return res.status(500).json({ error: "Fallo general del servidor" });
  }
}

import { put } from "@vercel/blob";
import formidable from "formidable";
import fs from "fs/promises";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const config = { api: { bodyParser: false } };

// 🔥 Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWXTNuKFIThwKOQ9nOkSYO3m9HDTcwG7k",
  authDomain: "nkjconstruction-385c2.firebaseapp.com",
  projectId: "nkjconstruction-385c2",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(400).json({ error: "Error al procesar el formulario" });

    try {
      const uploadedUrls = [];

      for (const file of files.images || []) {
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

      res.status(200).json({ success: true, id: docRef.id, imageUrls: uploadedUrls });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al subir el proyecto" });
    }
  });
}

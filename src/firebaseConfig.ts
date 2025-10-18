import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 👈 agrega esto

const firebaseConfig = {
  apiKey: "AIzaSyDWXTNuKFIThwKOQ9nOkSYO3m9HDTcwG7k",
  authDomain: "nkjconstruction-385c2.firebaseapp.com",
  projectId: "nkjconstruction-385c2",
  storageBucket: "nkjconstruction-385c2.appspot.com", // ✅ CORREGIDO
  messagingSenderId: "41092179555",
  appId: "1:41092179555:web:a4dd815f231b7ea1323a56",
  measurementId: "G-CB01GEKD00",
};

const app = initializeApp(firebaseConfig);

// Exportaciones
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ necesario para subir imágenes
export default app;

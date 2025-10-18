// src/utils/isAllowedAdmin.ts
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../firebaseConfig"; // importa tu instancia principal de Firebase

const db = getFirestore(app);

/**
 * Verifica si un correo está autorizado como administrador
 */
export async function isAllowedAdmin(email: string): Promise<boolean> {
  try {
    console.log("📘 Consultando allowedAdmins con:", email);

    const docRef = doc(db, "allowedAdmins", email);
    const docSnap = await getDoc(docRef);
    console.log("🔍 Verificando admin:", email, "=>", docSnap.exists());
    return docSnap.exists();
  } catch (error) {
    console.error("❌ Error consultando allowedAdmins:", error);
    return false;
  }
}

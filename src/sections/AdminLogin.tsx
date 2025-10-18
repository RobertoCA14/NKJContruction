import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { isAllowedAdmin } from "../utils/isAllowedAdmin";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Primero iniciar sesión (autenticación)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userEmail = userCredential.user.email;

      // Luego verificar en allowedAdmins
      if (userEmail) {
        const allowed = await isAllowedAdmin(userEmail);
        if (!allowed) {
          setMessage(
            "🚫 Acceso denegado: no estás autorizado como administrador."
          );
          await auth.signOut(); // salir por seguridad
          setLoading(false);
          return;
        }
        navigate("/admin");
      }
    } catch (error: any) {
      console.error("❌ Error en login:", error);
      setMessage("❌ Error: " + error.message);
    }
    setLoading(false);
  };

  // 👇 Login con Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;

      if (userEmail) {
        const allowed = await isAllowedAdmin(userEmail);
        if (!allowed) {
          setMessage("🚫 Este correo no tiene acceso como administrador.");
          await auth.signOut();
          return;
        }
        navigate("/admin");
      }
    } catch (error: any) {
      console.error("❌ Error en Google Login:", error);
      setMessage("❌ Error: " + error.message);
    }
    setLoading(false);
  };

  // 👇 Recuperación de contraseña
  const handleForgotPassword = async () => {
    if (!email) {
      setMessage(
        "⚠️ Ingresa tu correo primero para enviar el enlace de recuperación."
      );
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("📩 Se ha enviado un enlace de recuperación a tu correo.");
    } catch (error: any) {
      console.error("❌ Error en recuperación:", error);
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Acceso Administrativo
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Correo administrativo"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-700 text-white py-3 rounded hover:bg-red-800 transition"
          >
            {loading ? "Iniciando sesión..." : "Ingresar"}
          </button>
        </form>

        <button
          onClick={handleForgotPassword}
          className="w-full text-sm text-blue-600 hover:underline mt-3"
        >
          Olvidé mi contraseña
        </button>

        <div className="mt-4 text-center text-gray-500">o</div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-black py-2 rounded"
        >
          Iniciar sesión con Google
        </button>

        {message && (
          <p className="text-center text-sm text-red-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;

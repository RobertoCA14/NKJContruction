// App.tsx
// App.tsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

// Secciones públicas
import Home from "./sections/home";
import Services from "./sections/services";
import Projects from "./sections/projects";
import Contact from "./sections/ContactSection";

// Secciones administrativas
import AdminLogin from "./sections/AdminLogin";
import AdminPanel from "./sections/AdminPanel";

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  // 🧠 Atajo secreto para abrir el login admin
  useEffect(() => {
    const openAdmin = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
        window.location.href = "/admin-login";
      }
    };
    window.addEventListener("keydown", openAdmin);
    return () => window.removeEventListener("keydown", openAdmin);
  }, []);

  if (loading) {
    // 👇 Evita el “parpadeo” y pantalla en blanco mientras Firebase carga
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Cargando autenticación...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Login administrativo */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Panel administrativo protegido */}
        <Route
          path="/admin"
          element={
            user ? <AdminPanel /> : <Navigate to="/admin-login" replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

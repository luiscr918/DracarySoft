// src/routers/AppRoutes.tsx
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import Layout from "../components/layout/Layout";
import { ServiciosPage } from "../pages/ServiciosPage";
import { ProyectosPage } from "../pages/ProyectosPage";

const Placeholder = ({ title }: { title: string }) => (
  <Layout>
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "2rem",
            color: "#F0F4FF",
            marginBottom: "1rem",
          }}
        >
          {title}
        </h1>
        <p style={{ fontFamily: "'Exo 2', sans-serif", color: "#4A5A7A" }}>
          Página en construcción
        </p>
      </div>
    </div>
  </Layout>
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route path="/proyectos" element={<ProyectosPage />} />
      <Route path="/precios" element={<Placeholder title="Precios" />} />
      <Route path="/beneficios" element={<Placeholder title="Beneficios" />} />
      <Route path="/nosotros" element={<Placeholder title="Nosotros" />} />
      <Route path="/contacto" element={<Placeholder title="Contacto" />} />
    </Routes>
  );
};

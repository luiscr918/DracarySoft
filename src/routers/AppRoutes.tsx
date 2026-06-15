import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ServiciosPage } from "../pages/ServiciosPage";
import { ProyectosPage } from "../pages/ProyectosPage";
import { BeneficiosPage } from "../pages/BeneficiosPage";
import { NosotrosPage } from "../pages/NosotrosPage";
import { ContactoPage } from "../pages/ContactoPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route path="/proyectos" element={<ProyectosPage />} />
      <Route path="/beneficios" element={<BeneficiosPage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

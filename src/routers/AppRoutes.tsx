import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
  import("../pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const ServiciosPage = lazy(() =>
  import("../pages/ServiciosPage").then((m) => ({ default: m.ServiciosPage })),
);
const ProyectosPage = lazy(() =>
  import("../pages/ProyectosPage").then((m) => ({ default: m.ProyectosPage })),
);
const BeneficiosPage = lazy(() =>
  import("../pages/BeneficiosPage").then((m) => ({ default: m.BeneficiosPage })),
);
const NosotrosPage = lazy(() =>
  import("../pages/NosotrosPage").then((m) => ({ default: m.NosotrosPage })),
);
const ContactoPage = lazy(() =>
  import("../pages/ContactoPage").then((m) => ({ default: m.ContactoPage })),
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);
const PreguntasFrecuentesPage = lazy(() =>
  import("../pages/PreguntasFrecuentesPage").then((m) => ({ default: m.PreguntasFrecuentesPage })),
);

const PageFallback = () => (
  <div
    className="flex items-center justify-center"
    style={{ minHeight: "60vh", background: "#050B14" }}
  >
    <div
      className="w-8 h-8 border-2 rounded-full animate-spin"
      style={{
        borderColor: "rgba(46,134,171,0.3)",
        borderTopColor: "#5DADE2",
      }}
    />
  </div>
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

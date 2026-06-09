import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div
      style={{
        background: "#050B14",
        minHeight: "100vh",
        fontFamily: "'Exo 2', sans-serif",
        position: "relative",
      }}
    >
      {/* ── VIDEO DE FONDO ─────────────────────────────────────────────── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.8, // ajusta entre 0.1 – 0.3 a tu gusto
          pointerEvents: "none",
        }}
      >
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura encima del video para mantener legibilidad */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,11,20,0.55) 0%, rgba(5,11,20,0.35) 50%, rgba(5,11,20,0.75) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── CONTENIDO ──────────────────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}

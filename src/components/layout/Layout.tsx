import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgVideo from "../../assets/vids/bg1.mp4";
import bgImage from "../../assets/imgs/fonditoDracarys.jpg";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isReduced = prefersReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (videoRef.current && window.innerWidth >= 768 && !isReduced) {
      videoRef.current.play().catch(() => {});
    }
  }, [isReduced]);

  return (
    <div
      style={{
        background: "#050B14",
        minHeight: "100vh",
        fontFamily: "'Exo 2', sans-serif",
        position: "relative",
      }}
    >
      {/* ── FONDO MÓVIL: imagen estática ───────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

      {/* ── FONDO DESKTOP: video ───────────────────────────────────────── */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.8,
          pointerEvents: "none",
          display: window.innerWidth >= 768 ? "block" : "none",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* ── OVERLAY gradiente ──────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,11,20,0.55) 0%, rgba(5,11,20,0.35) 50%, rgba(5,11,20,0.45) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── CONTENIDO ──────────────────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={isReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={isReduced ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}

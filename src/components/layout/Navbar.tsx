import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { List as Menu, X, Flame } from "@phosphor-icons/react";
import logoImg from "/dracarysAlternativeLogo.svg";

const NAV_LINKS = [
  { path: "/", label: "Inicio" },
  { path: "/servicios", label: "Servicios" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/beneficios", label: "Beneficios" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/preguntas-frecuentes", label: "FAQ" },
];

// ─── Liquid Glass CSS (inyectado una sola vez) ───────────────────────────────
const LIQUID_GLASS_STYLES = `
  @keyframes liquidSpecular {
    0%   { transform: translateX(-120%) skewX(-20deg); }
    100% { transform: translateX(220%)  skewX(-20deg); }
  }

  .liquid-glass-nav {
    /* Capa de vidrio */
    background: rgba(255, 255, 255, 0.045) !important;
    backdrop-filter: blur(28px) saturate(180%) brightness(1.08) !important;
    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.08) !important;

    /* Borde luminoso superior (bevel) */
    border-top: 1px solid rgba(255, 255, 255, 0.18) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
    border-left: none !important;
    border-right: none !important;

    /* Sombra interna + externa para profundidad */
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.12),
      inset 0 -1px 0 rgba(0,0,0,0.08),
      0 8px 32px rgba(0,0,0,0.45),
      0 2px 8px rgba(0,0,0,0.3) !important;
  }

  /* Reflejo especular que cruza la navbar */
  .liquid-glass-nav::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 20%,
      rgba(255,255,255,0.04) 40%,
      rgba(255,255,255,0.09) 50%,
      rgba(255,255,255,0.04) 60%,
      transparent 80%
    );
    pointer-events: none;
    z-index: 0;
  }

  /* Rim light (bevel inferior sutil) */
  .liquid-glass-nav::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(93,173,226,0.15) 30%,
      rgba(255,255,255,0.08) 50%,
      rgba(93,173,226,0.15) 70%,
      transparent
    );
    pointer-events: none;
  }

  /* Liquid glass para el menú mobile */
  .liquid-glass-mobile {
    background: rgba(5, 11, 20, 0.55) !important;
    backdrop-filter: blur(32px) saturate(200%) brightness(1.05) !important;
    -webkit-backdrop-filter: blur(32px) saturate(200%) brightness(1.05) !important;
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.1),
      0 20px 60px rgba(0,0,0,0.7) !important;
  }

  /* Botón hamburguesa con micro glass */
  .liquid-glass-btn {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(12px) saturate(150%) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.1) !important;
    transition: all 0.2s ease !important;
  }
  .liquid-glass-btn:hover {
    background: rgba(192,57,43,0.12) !important;
    border-color: rgba(192,57,43,0.3) !important;
  }

  /* CTA pill con glass + gradiente rojo */
  .liquid-glass-cta {
    background: linear-gradient(
      135deg,
      rgba(192,57,43,0.85),
      rgba(169,50,38,0.9)
    ) !important;
    backdrop-filter: blur(12px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(12px) saturate(150%) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 4px 16px rgba(192,57,43,0.4),
      0 1px 4px rgba(0,0,0,0.3) !important;
    position: relative;
    overflow: hidden;
  }
  .liquid-glass-cta::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.12),
      transparent
    );
    border-radius: inherit;
    pointer-events: none;
  }
  .liquid-glass-cta:hover {
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.25),
      0 4px 24px rgba(192,57,43,0.65),
      0 1px 6px rgba(0,0,0,0.4) !important;
  }
`;

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.textContent = LIQUID_GLASS_STYLES;
  document.head.appendChild(style);
  stylesInjected = true;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    injectStyles();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMenuOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return (
    <>
      <motion.nav
        aria-label="Navegación principal"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "liquid-glass-nav" : ""
        }`}
        style={{
          // Estado sin scroll: gradiente sutil, sin glass todavía
          background: scrolled
            ? undefined // la clase CSS lo maneja
            : "linear-gradient(180deg, rgba(5,11,20,0.7) 0%, transparent 100%)",
          borderBottom: scrolled ? undefined : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={logoImg}
                  alt="DracarySoft"
                  className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ boxShadow: "0 0 20px rgba(192,57,43,0.6)" }}
                />
              </div>
              <div className="flex items-baseline gap-0">
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#F0F4FF",
                    letterSpacing: "0.05em",
                  }}
                >
                  DRACARY
                </span>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#C0392B",
                    letterSpacing: "0.03em",
                  }}
                >
                  SOFT
                </span>
              </div>
            </NavLink>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className="relative px-4 py-2 group"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className="relative z-10 text-sm font-medium tracking-wide transition-colors duration-200"
                        style={{ color: isActive ? "#5DADE2" : "#8899BB" }}
                      >
                        {link.label}
                      </span>
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300"
                        style={{
                          width: isActive ? "70%" : "0%",
                          background: "linear-gradient(90deg, #C0392B, #A93226)",
                        }}
                      />
                      <span
                        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <NavLink
                to="/contacto"
                className="liquid-glass-cta hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#fff",
                }}
              >
                <Flame size={14} />
                Contáctanos
              </NavLink>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="liquid-glass-btn md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ color: "#5DADE2" }}
                aria-label="Menú"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="liquid-glass-mobile fixed top-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
                    style={({ isActive }) => ({
                      fontFamily: "'Cinzel', serif",
                      color: isActive ? "#5DADE2" : "#8899BB",
                      background: isActive
                        ? "rgba(255,255,255,0.05)"
                        : "transparent",
                      borderLeft: isActive
                        ? "2px solid #C0392B"
                        : "2px solid transparent",
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-3 pt-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <NavLink
                  to="/contacto"
                  className="liquid-glass-cta flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#fff",
                  }}
                >
                  <Flame size={14} />
                  Contáctanos
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import logoImg from "/dracarysAlternative.svg";

const NAV_LINKS = [
  { path: "/", label: "Inicio" },
  { path: "/servicios", label: "Servicios" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/precios", label: "Precios" },
  { path: "/beneficios", label: "Beneficios" },
  { path: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5,11,20,0.92)"
            : "linear-gradient(180deg, rgba(5,11,20,0.8) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(46,134,171,0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={logoImg}
                  alt="DracarySoft"
                  className="w-9 h-9 rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ boxShadow: "0 0 12px rgba(46,134,171,0.5)" }}
                />
                {/* ← hover glow era naranja */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                {/* ← era gradiente rojo→naranja, ahora rojo sólido */}
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
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
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className="relative z-10 text-sm font-medium tracking-wide transition-colors duration-200"
                        style={{ color: isActive ? "#5DADE2" : "#8899BB" }}
                      >
                        {link.label}
                      </span>
                      {/* ← underline era rojo→naranja, ahora rojo oscuro */}
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300"
                        style={{
                          width: isActive ? "70%" : "0%",
                          background:
                            "linear-gradient(90deg, #C0392B, #A93226)",
                        }}
                      />
                      <span
                        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "rgba(46,134,171,0.06)" }}
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
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  // ← era rojo→naranja
                  background: "linear-gradient(135deg, #C0392B, #A93226)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(192,57,43,0.35)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(192,57,43,0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(192,57,43,0.35)")
                }
              >
                <Flame size={14} />
                Contáctanos
              </NavLink>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200"
                style={{
                  background: menuOpen
                    ? "rgba(192,57,43,0.15)"
                    : "rgba(46,134,171,0.1)",
                  border: "1px solid rgba(46,134,171,0.2)",
                  color: "#5DADE2",
                }}
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
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(5,11,20,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(46,134,171,0.2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}
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
                      fontFamily: "'Exo 2', sans-serif",
                      color: isActive ? "#5DADE2" : "#8899BB",
                      background: isActive
                        ? "rgba(46,134,171,0.1)"
                        : "transparent",
                      // ← era #E67E22
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
                style={{ borderTop: "1px solid rgba(46,134,171,0.15)" }}
              >
                <NavLink
                  to="/contacto"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm"
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    // ← era rojo→naranja
                    background: "linear-gradient(135deg, #C0392B, #A93226)",
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

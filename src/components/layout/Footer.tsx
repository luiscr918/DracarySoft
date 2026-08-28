import { NavLink } from "react-router-dom";
import { Flame } from "@phosphor-icons/react";
import logoImg from "/dracarysAlternativeLogo.svg";
import { SOCIAL_LINKS } from "../../constants/social";

const LINKS_COL1 = [
  { path: "/servicios", label: "Servicios" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];
const LINKS_COL2 = [
  { path: "/beneficios", label: "Beneficios" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/contacto", label: "Contacto" },
];



export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-24 overflow-hidden"
      style={{
        // Base sólida levemente más clara que el body (#050B14)
        // para que el "glass" se distinga del fondo de página
        background:
          "linear-gradient(180deg, rgba(13,22,38,0.35) 0%, rgba(8,15,28,0.35) 100%)",
        backdropFilter: "blur(10px)",

        // Bevel superior luminoso (la línea de "cristal")
        borderTop: "1px solid rgba(255,255,255,0.10)",

        // Sombra interior que simula profundidad del vidrio
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 80px rgba(46,134,171,0.04)",
      }}
    >
      {/* Capa 1: tinte de vidrio — simula el "frosted" con gradiente */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(93,173,226,0.02) 50%, rgba(255,255,255,0.01) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                loading="lazy"
                src={logoImg}
                alt="DracarySoft"
                className="w-10 h-10 object-contain"
              />
              <div className="flex items-baseline">
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
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
                    fontSize: "1.1rem",
                    color: "#C0392B",
                  }}
                >
                  SOFT
                </span>
              </div>
            </div>

            <p
              style={{
                color: "#4A5A7A",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                maxWidth: "300px",
                fontFamily: "'Exo 2', sans-serif",
              }}
            >
              Soluciones digitales modernas para pequeños y medianos negocios
              que buscan crecer en el entorno digital.
            </p>

            {/* Social — iconos con micro glass (funciona porque hay contraste vs fondo del footer) */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.1)",
                    color: "#4A5A7A",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#5DADE2";
                    el.style.borderColor = "rgba(93,173,226,0.4)";
                    el.style.background = "rgba(93,173,226,0.12)";
                    el.style.boxShadow =
                      "inset 0 1px 0 rgba(255,255,255,0.18), 0 0 14px rgba(93,173,226,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#4A5A7A";
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.boxShadow =
                      "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.1)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links col 1 */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#5DADE2",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                marginBottom: "1rem",
              }}
            >
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2">
              {LINKS_COL1.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{
                      color: "#4A5A7A",
                      fontFamily: "'Exo 2', sans-serif",
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Links col 2 */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#5DADE2",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                marginBottom: "1rem",
              }}
            >
              EMPRESA
            </h4>
            <ul className="space-y-2">
              {LINKS_COL2.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{
                      color: "#4A5A7A",
                      fontFamily: "'Exo 2', sans-serif",
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              color: "#2A3A5A",
              fontSize: "0.78rem",
              fontFamily: "'Exo 2', sans-serif",
            }}
          >
            © {year} DracarySoft. Todos los derechos reservados.
          </p>
          <div
            className="flex items-center gap-1"
            style={{
              color: "#2A3A5A",
              fontSize: "0.78rem",
              fontFamily: "'Exo 2', sans-serif",
            }}
          >
            <span>Hecho en Ecuador</span>
            <Flame size={12} style={{ color: "#C0392B" }} />
            <span
              style={{
                margin: "0 0.4rem",
                color: "rgba(42,58,90,0.4)",
              }}
            >
              ·
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("ds_cookie_consent");
                window.location.reload();
              }}
              className="transition-colors duration-200 hover:text-white"
              style={{
                color: "#2A3A5A",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
            >
              Cookies
            </button>
            <span
              style={{
                margin: "0 0.4rem",
                color: "rgba(42,58,90,0.4)",
              }}
            >
              ·
            </span>
            <NavLink
              to="/politica-de-cookies"
              className="transition-colors duration-200 hover:text-white"
              style={{
                color: "#2A3A5A",
                fontFamily: "'Exo 2', sans-serif",
                textDecoration: "none",
              }}
            >
              Política de cookies
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

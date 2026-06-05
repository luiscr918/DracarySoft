import { NavLink } from "react-router-dom";
import { Flame, MailIcon } from "lucide-react";
import logoImg from "/dracarysAlternativeLogo.svg";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { GiThunderBlade } from "react-icons/gi";

const LINKS_COL1 = [
  { path: "/servicios", label: "Servicios" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/precios", label: "Precios" },
];
const LINKS_COL2 = [
  { path: "/beneficios", label: "Beneficios" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/contacto", label: "Contacto" },
];

const SOCIAL = [
  { icon: GiThunderBlade, href: "#", label: "GitHub" },
  { icon: BsInstagram, href: "#", label: "Instagram" },
  { icon: LiaLinkedin, href: "#", label: "LinkedIn" },
  { icon: MailIcon, href: "#", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050B14 0%, #0A0F1E 100%)",
        borderTop: "1px solid rgba(46,134,171,0.12)",
      }}
    >
      {/* Glow top ← era naranja */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(192,57,43,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
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
                {/* ← era gradiente rojo→naranja, ahora rojo sólido */}
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

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(46,134,171,0.08)",
                    border: "1px solid rgba(46,134,171,0.2)",
                    color: "#4A5A7A",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#5DADE2";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(93,173,226,0.4)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(46,134,171,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4A5A7A";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(46,134,171,0.2)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(46,134,171,0.08)";
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
          style={{ borderTop: "1px solid rgba(46,134,171,0.1)" }}
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
            {/* ← era #E67E22 */}
            <Flame size={12} style={{ color: "#C0392B" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

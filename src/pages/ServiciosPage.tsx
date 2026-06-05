import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Smartphone,
  Zap,
  TrendingUp,
  ShoppingCart,
  Settings,
  Flame,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Layout from "../components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

// ─── Datos ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Globe,
    title: "Páginas Web para emprendedores",
    tagline: "Tu vitrina digital profesional",
    desc: "Diseñamos sitios web modernos, rápidos y fáciles de administrar que ayudan a tu emprendimiento a ganar credibilidad y clientes.",
    features: [
      "Diseño responsive",
      "Optimización SEO básica",
      "Carga rápida",
      "Gestión sencilla",
    ],
    color: "#2E86AB",
    glow: "rgba(46,134,171,0.25)",
    gradient:
      "linear-gradient(135deg, rgba(46,134,171,0.12), rgba(10,15,30,0.8))",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    tagline: "Convierte visitas en clientes",
    desc: "Páginas de aterrizaje diseñadas para captar leads y ventas con mensajes claros y formularios simples.",
    features: [
      "Textos orientados a la acción",
      "Formularios efectivos",
      "Diseño móvil",
      "Medición de resultados",
    ],
    color: "#C0392B",
    glow: "rgba(192,57,43,0.25)",
    gradient:
      "linear-gradient(135deg, rgba(192,57,43,0.10), rgba(10,15,30,0.8))",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    tagline: "Herramientas que hacen tu día a día más fácil",
    desc: "Creamos aplicaciones web a medida para digitalizar procesos clave de tu emprendimiento y mejorar la experiencia de tus clientes.",
    features: [
      "Panel de control funcional",
      "Formularios y automatizaciones",
      "Acceso seguro",
      "Actualizaciones prácticas",
    ],
    color: "#5DADE2",
    glow: "rgba(93,173,226,0.25)",
    gradient:
      "linear-gradient(135deg, rgba(93,173,226,0.10), rgba(10,15,30,0.8))",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    tagline: "Vende sin límites horarios",
    desc: "Creamos tiendas en línea completas y funcionales para que puedas vender tus productos las 24 horas del día con una experiencia de compra fluida y segura.",
    features: [
      "Catálogo de productos",
      "Pasarela de pagos",
      "Gestión de inventario",
      "Notificaciones automáticas",
    ],
    color: "#C0392B",
    glow: "rgba(192,57,43,0.25)",
    gradient:
      "linear-gradient(135deg, rgba(192,57,43,0.10), rgba(10,15,30,0.8))",
  },
  {
    icon: TrendingUp,
    title: "Presencia Digital",
    tagline: "Estrategia para crecer online",
    desc: "Asesoramos y ejecutamos estrategias integrales para que tu negocio tenga visibilidad real en internet, desde la identidad digital hasta la captación de clientes.",
    features: [
      "Identidad de marca digital",
      "Estrategia de contenido",
      "Google My Business",
      "Análisis de competencia",
    ],
    // ← era #F39C12 / rgba(243,156,18,...)
    color: "#2E86AB",
    glow: "rgba(46,134,171,0.25)",
    gradient:
      "linear-gradient(135deg, rgba(46,134,171,0.12), rgba(10,15,30,0.8))",
  },
  {
    icon: Settings,
    title: "Mantenimiento Web",
    tagline: "Tu sitio siempre en óptimas condiciones",
    desc: "Nos encargamos de mantener tu sitio web seguro, actualizado y funcionando perfectamente para que tú te enfoque en lo que mejor sabes hacer: tu negocio.",
    features: [
      "Actualizaciones periódicas",
      "Copias de seguridad",
      "Monitoreo 24/7",
      "Soporte técnico",
    ],
    color: "#1B4F72",
    glow: "rgba(27,79,114,0.25)",
    gradient:
      "linear-gradient(135deg, rgba(27,79,114,0.15), rgba(10,15,30,0.8))",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Consulta inicial",
    desc: "Conversamos sobre tu negocio, tus objetivos y lo que necesitas.",
  },
  {
    step: "02",
    title: "Propuesta y plan",
    desc: "Preparamos una propuesta a medida con tiempos y costos claros.",
  },
  {
    step: "03",
    title: "Diseño y desarrollo",
    desc: "Construimos tu solución con tecnologías modernas y eficientes.",
  },
  {
    step: "04",
    title: "Entrega y soporte",
    desc: "Lanzamos tu proyecto y te acompañamos en cada paso.",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────

export function ServiciosPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".srv-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        },
      );
    }

    const steps = processRef.current?.querySelectorAll(".proc-step");
    if (steps) {
      gsap.fromTo(
        steps,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: processRef.current, start: "top 80%" },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(46,134,171,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,134,171,1) 1px, transparent 1px), linear-gradient(90deg, rgba(46,134,171,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* ← era #E67E22 */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              color: "#C0392B",
              letterSpacing: "0.3em",
              marginBottom: "1rem",
            }}
          >
            LO QUE HACEMOS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Soluciones digitales{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2E86AB, #5DADE2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              que encienden
            </span>{" "}
            tu negocio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "1.05rem",
              color: "#4A5A7A",
              lineHeight: 1.8,
            }}
          >
            Desde una página web hasta una herramienta digital accesible,
            adaptamos cada solución a las necesidades reales de tu
            emprendimiento.
          </motion.p>
        </div>
      </section>

      {/* ── CARDS DE SERVICIOS ─────────────────────────────────────────────── */}
      <section ref={cardsRef} className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(
            ({
              icon: Icon,
              title,
              tagline,
              desc,
              features,
              color,
              glow,
              gradient,
            }) => (
              <div
                key={title}
                className="srv-card group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: gradient,
                  border: "1px solid rgba(46,134,171,0.1)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `${color}35`;
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 20px 48px ${glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(46,134,171,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                <p
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "0.7rem",
                    color,
                    letterSpacing: "0.15em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {tagline.toUpperCase()}
                </p>

                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#E8EEF8",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "0.83rem",
                    color: "#4A5A7A",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                  }}
                >
                  {desc}
                </p>

                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2
                        size={13}
                        style={{ color, flexShrink: 0 }}
                      />
                      <span
                        style={{
                          fontFamily: "'Exo 2', sans-serif",
                          fontSize: "0.78rem",
                          color: "#6677AA",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}50, transparent)`,
                  }}
                />
              </div>
            ),
          )}
        </div>
      </section>

      {/* ── PROCESO ───────────────────────────────────────────────────────── */}
      <section ref={processRef} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            {/* ← era #E67E22 */}
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.7rem",
                color: "#C0392B",
                letterSpacing: "0.3em",
                marginBottom: "0.75rem",
              }}
            >
              CÓMO TRABAJAMOS
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#F0F4FF",
              }}
            >
              Proceso simple y transparente para tu emprendimiento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }, i) => (
              <div key={step} className="proc-step relative">
                {i < PROCESS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full h-px z-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(46,134,171,0.3), transparent)",
                      width: "100%",
                    }}
                  />
                )}
                <div
                  className="relative z-10 p-5 rounded-2xl"
                  style={{
                    background: "rgba(10,15,30,0.6)",
                    border: "1px solid rgba(46,134,171,0.1)",
                  }}
                >
                  <div
                    className="text-3xl font-black mb-3"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      // ← era con naranja, ahora azul→rojo
                      background:
                        "linear-gradient(135deg, rgba(46,134,171,0.5), rgba(192,57,43,0.4))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.9rem",
                      color: "#E8EEF8",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontSize: "0.8rem",
                      color: "#4A5A7A",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div
          className="max-w-2xl mx-auto text-center p-10 rounded-3xl relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,79,114,0.2), rgba(192,57,43,0.1))",
            border: "1px solid rgba(46,134,171,0.2)",
          }}
        >
          {/* ← glow era naranja */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.08) 0%, transparent 70%)",
            }}
          />

          {/* ← era #E67E22 */}
          <Flame
            size={28}
            className="mx-auto mb-4"
            style={{ color: "#C0392B" }}
          />

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              marginBottom: "0.75rem",
            }}
          >
            ¿No sabes cuál necesitas?
          </h2>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "0.95rem",
              color: "#4A5A7A",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Cuéntanos de tu negocio y te recomendamos la solución ideal sin
            compromisos.
          </p>
          <NavLink
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              // ← era rojo→naranja
              background: "linear-gradient(135deg, #C0392B, #A93226)",
              color: "#fff",
              boxShadow: "0 6px 24px rgba(192,57,43,0.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(192,57,43,0.65)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(192,57,43,0.4)")
            }
          >
            Consulta gratuita
            <ChevronRight size={14} />
          </NavLink>
        </div>
      </section>
    </Layout>
  );
}

import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flame,
  Globe,
  Smartphone,
  Zap,
  ArrowRight,
  Code2,
  Layers,
  TrendingUp,
} from "lucide-react";
import Layout from "../components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

// ─── Datos ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Globe,
    title: "Páginas Web",
    desc: "Sitios modernos, rápidos y optimizados para SEO que generan confianza y atraen clientes.",
    color: "#2E86AB",
    glow: "rgba(46,134,171,0.3)",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    desc: "Herramientas digitales a medida que optimizan los procesos internos de tu negocio.",
    color: "#C0392B", // ← era #E67E22
    glow: "rgba(192,57,43,0.3)", // ← era rgba(230,126,34,0.3)
  },
  {
    icon: Zap,
    title: "Landing Pages",
    desc: "Páginas de aterrizaje diseñadas para convertir visitas en clientes reales.",
    color: "#5DADE2",
    glow: "rgba(93,173,226,0.3)",
  },
  {
    icon: TrendingUp,
    title: "Presencia Digital",
    desc: "Estrategia y herramientas para que tu negocio destaque en el entorno digital.",
    color: "#C0392B",
    glow: "rgba(192,57,43,0.3)",
  },
];

const STATS = [
  { value: "100%", label: "Proyectos entregados", icon: Code2 },
  { value: "PME", label: "Enfoque en pequeños negocios", icon: Layers },
  { value: "5★", label: "Satisfacción del cliente", icon: Flame },
];

const EMBER_PARTICLES = Array.from({ length: 22 }).map((_, i) => {
  const size = Math.random() * 3 + 1.5;
  const isBlue = i % 4 === 0;

  return {
    size,
    isBlue,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.15,
    blur: Math.random() > 0.5 ? "0.5px" : "0",
    animation: `floatEmber ${3 + Math.random() * 5}s ease-in-out ${Math.random() * 4}s infinite`,
  };
});

// ─── Partículas de brasa ───────────────────────────────────────────────────────

function EmberParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {EMBER_PARTICLES.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            // ← era #F39C12 / #E67E22 — ahora solo rojo y azul
            background: particle.isBlue
              ? "#5DADE2"
              : i % 2 === 0
                ? "#C0392B"
                : "#922B21",
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            filter: `blur(${particle.blur})`,
            animation: particle.animation,
          }}
        />
      ))}
      <style>{`
        @keyframes floatEmber {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
          50%       { transform: translateY(-25px) translateX(8px) scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

// ─── Rejilla de circuitos ──────────────────────────────────────────────────────

function CircuitGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(46,134,171,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(46,134,171,1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────

export function HomePage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = servicesRef.current?.querySelectorAll(".service-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: servicesRef.current, start: "top 80%" },
        },
      );
    }

    const statItems = statsRef.current?.querySelectorAll(".stat-item");
    if (statItems) {
      gsap.fromTo(
        statItems,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
        },
      );
    }

    if (ctaSectionRef.current) {
      gsap.fromTo(
        ctaSectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ctaSectionRef.current, start: "top 85%" },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Fondo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(27,79,114,0.18) 0%, #050B14 70%)",
          }}
        />
        {/* ← glow era rgba(230,126,34,0.07) — ahora rojo */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(192,57,43,0.07) 0%, transparent 65%)",
            filter: "blur(30px)",
          }}
        />

        <CircuitGrid />
        <EmberParticles />

        {/* Línea decorativa izquierda */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-30">
          <div
            className="w-px h-20"
            style={{
              background: "linear-gradient(180deg, transparent, #2E86AB)",
            }}
          />
          {/* ← era #E67E22 */}
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#C0392B" }}
          />
          <div
            className="w-px h-20"
            style={{
              background: "linear-gradient(180deg, #2E86AB, transparent)",
            }}
          />
        </div>

        {/* Contenido hero */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(46,134,171,0.1)",
              border: "2px solid rgba(46,134,171,0.25)",
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "0.75rem",
              color: "#5DADE2",
              letterSpacing: "0.15em",
            }}
          >
            {/* ← era #E67E22 */}
            <Flame size={11} style={{ color: "#C0392B" }} />
            SOLUCIONES DIGITALES PARA EMPRENDEDORES
          </motion.div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center "
          >
            <img
              src="/dracarysAlternativeLogo.svg"
              alt="DracarySoft Logo"
              className="h-56 md:h-60 object-contain"
            />
          </motion.div>

          {/* Título principal */}
          <motion.h1
            ref={heroTitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
            style={{ lineHeight: 1.1 }}
          >
            <span
              className="block"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 700,
                color: "#F0F4FF",
                letterSpacing: "0.02em",
                textShadow: "0 0 40px rgba(46,134,171,0.3)",
              }}
            >
              Enciende
            </span>
            <span
              className="block"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 700,
                // ← era azul→naranja, ahora azul→rojo
                background:
                  "linear-gradient(135deg, #5DADE2 0%, #2E86AB 40%, #C0392B 80%, #922B21 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.02em",
              }}
            >
              tu negocio digital.
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-10 mx-auto"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#6677AA",
              lineHeight: 1.8,
              maxWidth: "560px",
              fontWeight: 300,
            }}
          >
            Creamos páginas web y aplicaciones pensadas para emprendedores y
            pequeños negocios que quieren
            <span style={{ color: "#8899BB", fontWeight: 400 }}>
              {" "}
              atraer más clientes
            </span>
            , mejorar su imagen profesional y crecer en el
            <span style={{ color: "#8899BB", fontWeight: 400 }}>
              {" "}
              entorno digital
            </span>
            con soluciones accesibles.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NavLink
              to="/servicios"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                // ← gradiente rojo oscuro en lugar de rojo→naranja
                background: "linear-gradient(135deg, #C0392B, #A93226)",
                color: "#fff",
                boxShadow: "0 6px 24px rgba(192,57,43,0.4)",
                letterSpacing: "0.05em",
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
              <Flame size={15} />
              Ver Servicios
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </NavLink>

            <NavLink
              to="/proyectos"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                background: "transparent",
                color: "#5DADE2",
                border: "1px solid rgba(93,173,226,0.3)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(46,134,171,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(93,173,226,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(93,173,226,0.3)";
              }}
            >
              Ver Proyectos
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="relative py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div
                key={i}
                className="stat-item text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(10,15,30,0.6)",
                  border: "1px solid rgba(46,134,171,0.12)",
                }}
              >
                {/* ← era #E67E22 */}
                <Icon
                  size={18}
                  className="mx-auto mb-3"
                  style={{ color: "#C0392B" }}
                />
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 700,
                    color: "#F0F4FF",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "0.75rem",
                    color: "#4A5A7A",
                    marginTop: "0.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS PREVIEW ────────────────────────────────────────────────── */}
      <section ref={servicesRef} className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
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
              ¿QUÉ HACEMOS?
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#F0F4FF",
                lineHeight: 1.2,
              }}
            >
              Servicios que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2E86AB, #5DADE2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                impulsan tu emprendimiento
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc, color, glow }) => (
              <div
                key={title}
                className="service-card group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: "rgba(10,15,30,0.7)",
                  border: "1px solid rgba(46,134,171,0.1)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `${color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 16px 40px ${glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(46,134,171,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#E8EEF8",
                    marginBottom: "0.6rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "0.82rem",
                    color: "#4A5A7A",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
              style={{ fontFamily: "'Exo 2', sans-serif", color: "#4A5A7A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5DADE2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5A7A")}
            >
              Ver todos los servicios
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section
        ref={ctaSectionRef}
        className="relative py-24 px-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(192,57,43,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(27,79,114,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* ← era #E67E22 */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              color: "#C0392B",
              letterSpacing: "0.3em",
              marginBottom: "1rem",
            }}
          >
            ¿LISTO PARA EMPEZAR?
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.25,
              marginBottom: "1.25rem",
            }}
          >
            Lleva tu emprendimiento al siguiente nivel
          </h2>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "1rem",
              color: "#4A5A7A",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Cuéntanos de tu proyecto y te ayudamos a hacerlo realidad.
          </p>
          <NavLink
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              background: "linear-gradient(135deg, #C0392B, #A93226)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(192,57,43,0.45)",
              letterSpacing: "0.06em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(192,57,43,0.65)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(192,57,43,0.45)")
            }
          >
            <Flame size={15} />
            Hablemos
            <ArrowRight size={14} />
          </NavLink>
        </div>
      </section>
    </Layout>
  );
}

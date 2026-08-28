import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Flame,
  Globe,
  DeviceMobile as Smartphone,
  Lightning as Zap,
  ArrowRight,
  Code as Code2,
  Stack as Layers,
  TrendUp as TrendingUp,
  CaretDown as ChevronDown,
  Sparkle as Sparkles,
  MagnifyingGlass as Search,
  PenNib as PenTool,
  Rocket,
  type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
type LucideIcon = ComponentType<IconProps>;
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";
import { Reveal } from "../components/animations/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GlassCard } from "../components/ui/GlassCard";
import { CraftCard } from "../components/ui/CraftCard";
import { BrandIcon } from "../components/ui/BrandIcon";
import { Magnetic } from "../components/animations/Magnetic";
import { Counter } from "../components/animations/Counter";
import { Marquee } from "../components/animations/Marquee";
import { TiltCard } from "../components/animations/TiltCard";
import { PROJECTS, type Project } from "../constants/projects";

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
    color: "#C0392B",
    glow: "rgba(192,57,43,0.3)",
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

const TECH = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "GSAP",
  "Framer Motion",
  "SEO Local",
  "Firebase",
  "Node.js",
  "Vite",
  "AdonisJS",
  "PostgreSQL",
];

const STATS = [
  { value: 10, suffix: "+", label: "Proyectos entregados", icon: Code2 },
  { value: 100, suffix: "%", label: "Satisfacción del cliente", icon: Flame },
  { value: 2, suffix: "+", label: "Años de experiencia", icon: Layers },
  { value: 24, suffix: "/7", label: "Acompañamiento", icon: TrendingUp },
];

const PROCESS: { n: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    n: "01",
    title: "Descubrimiento",
    desc: "Analizamos tu negocio, competencia y objetivos para trazar una estrategia digital clara y medible.",
    icon: Search,
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Prototipos de alta fidelidad centrados en la experiencia y en convertir visitas en clientes.",
    icon: PenTool,
  },
  {
    n: "03",
    title: "Construcción",
    desc: "Desarrollo con código limpio, rápido y optimizado para buscadores y dispositivos móviles.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Lanzamiento",
    desc: "Despliegue, capacitación y soporte continuo para que operes sin fricciones desde el día uno.",
    icon: Rocket,
  },
];

const PLANS = [
  {
    name: "Landing Page",
    price: "Desde $4,000",
    unit: "MXN",
    desc: "El embudo de ventas perfecto para redes sociales.",
    features: ["Optimización estricta móvil", "Formularios de captación", "Botón flotante a WhatsApp"],
    glow: "rgba(46,134,171,0.3)",
    featured: false,
  },
  {
    name: "Sitio Empresarial",
    price: "Desde $7,000",
    unit: "MXN",
    desc: "Tu oficina principal en Google, con autoridad.",
    features: ["Diseño totalmente responsivo", "Catálogo de servicios", "Código optimizado SEO Local"],
    glow: "rgba(192,57,43,0.3)",
    featured: true,
  },
  {
    name: "Tienda en Línea",
    price: "Desde $10,000",
    unit: "MXN",
    desc: "Tu negocio operando 24/7 con pagos seguros.",
    features: ["Pasarelas Stripe / PayPal", "Correos de compra automáticos", "Panel para tus productos"],
    glow: "rgba(93,173,226,0.3)",
    featured: false,
  },
];

const SPOTLIGHT = PROJECTS.slice(0, 6);

// ─── Tarjeta de caso de éxito ─────────────────────────────────────────────────

function SpotlightCard({ project }: { project: Project }) {
  const { icon: Icon, title, client, color, glow, localImage, liveUrl, year } = project;
  const inner = (
    <TiltCard className="h-full group">
      <CraftCard glow={glow} className="h-full p-5 overflow-hidden">
        <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
          {localImage ? (
            <img
              loading="lazy"
              src={localImage}
              alt={`Preview de ${title}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `${color}12`, border: `1px solid ${color}22` }}
            >
              <BrandIcon icon={Icon} from={color} to="#FFFFFF" size={30} />
            </div>
          )}
          {liveUrl && (
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${color}cc, rgba(0,0,0,0.7))` }}
            >
              <span
                className="inline-flex items-center gap-1.5"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Ver proyecto <ArrowRight size={14} />
              </span>
            </div>
          )}
        </div>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            color,
            letterSpacing: "0.12em",
          }}
        >
          {client.toUpperCase()} · {year}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--color-text-soft)",
            marginTop: "0.35rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
      </CraftCard>
    </TiltCard>
  );

  if (liveUrl) {
    return (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
}

// ─── Componente principal ──────────────────────────────────────────────────────

export function HomePage() {
  const scrollToNext = () => {
    const el = document.getElementById("confianza");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <SEO title="Inicio" url="/" />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto container-x">
          <Reveal delay={0.1}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: "rgba(46,134,171,0.1)",
                border: "1px solid rgba(46,134,171,0.25)",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                color: "var(--color-accent-light)",
                letterSpacing: "0.15em",
              }}
            >
              <Flame size={11} style={{ color: "var(--color-fire)" }} />
              SOLUCIONES DIGITALES PARA EMPRENDEDORES
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--color-accent-light)",
                fontWeight: 500,
                marginBottom: "1.5rem",
                letterSpacing: "0.01em",
              }}
            >
              Páginas web desde $100 · Landing pages informativas
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex justify-center mb-6">
              <img
                src="/dracarysAlternativeLogo.svg"
                alt="DracarySoft Logo"
                width="420"
                height="280"
                fetchPriority="high"
                className="h-52 md:h-60 object-contain"
                style={{ filter: "drop-shadow(0 0 40px rgba(46,134,171,0.3))" }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <h1 className="mb-6" style={{ lineHeight: 1.05 }}>
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontWeight: 800,
                  color: "var(--color-text)",
                  letterSpacing: "-0.03em",
                }}
              >
                Enciende
              </span>
              <span
                className="block text-gradient"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                tu negocio digital.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.55}>
            <p
              className="mb-10 mx-auto"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--color-text-dim)",
                lineHeight: 1.8,
                maxWidth: "560px",
                fontWeight: 300,
              }}
            >
              Creamos páginas web y aplicaciones pensadas para emprendedores y
              pequeños negocios que quieren{" "}
              <span style={{ color: "var(--color-text-soft)", fontWeight: 400 }}>
                atraer más clientes
              </span>
              , mejorar su imagen profesional y crecer en el{" "}
              <span style={{ color: "var(--color-text-soft)", fontWeight: 400 }}>
                entorno digital
              </span>{" "}
              con soluciones accesibles.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Magnetic>
                <NavLink
                  to="/servicios"
                  className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "linear-gradient(135deg, #C0392B, #A93226)",
                    color: "#fff",
                    boxShadow:
                      "0 12px 30px rgba(192,57,43,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
                    letterSpacing: "0.04em",
                  }}
                >
                  <Flame size={15} />
                  Ver Servicios
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </NavLink>
              </Magnetic>

              <Magnetic>
                <NavLink
                  to="/proyectos"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "var(--font-body)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--color-accent-light)",
                border: "1px solid rgba(93,173,226,0.3)",
                letterSpacing: "0.05em",
              }}
                >
                  Ver Proyectos
                </NavLink>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.9}>
            <button
              onClick={scrollToNext}
              aria-label="Explorar sitio"
              className="mt-16 inline-flex flex-col items-center gap-2"
              style={{ color: "var(--color-muted)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                }}
              >
                EXPLORAR
              </span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── CONFIANZA / TECNOLOGÍAS ──────────────────────────────────────────── */}
      <section id="confianza" className="relative py-12">
        <div className="container-x">
          <Reveal>
            <p
              className="text-center mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                color: "var(--color-muted)",
                textTransform: "uppercase",
              }}
            >
              Tecnologías que usamos para construir tu éxito
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Marquee speed={36}>
            {TECH.map((t) => (
              <span
                key={t}
                className="px-5 py-2 rounded-full text-sm whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-text-dim)",
                  border: "1px solid var(--color-line)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {t}
              </span>
            ))}
          </Marquee>
        </Reveal>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS.map(({ value, suffix, label, icon: Icon }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <GlassCard className="text-center p-6 h-full">
                  <Icon
                    size={18}
                    className="mx-auto mb-3"
                    style={{ color: "var(--color-fire)" }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      lineHeight: 1,
                    }}
                  >
                    <Counter to={value} suffix={suffix} />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--color-muted)",
                      marginTop: "0.5rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS PREVIEW ────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="¿QUÉ HACEMOS?"
              title={
                <>
                  Servicios que{" "}
                  <span className="text-gradient">impulsan tu emprendimiento</span>
                </>
              }
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {SERVICES.map(({ icon: Icon, title, desc, color, glow }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <CraftCard glow={glow} className="p-7 h-full cursor-pointer">
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center">
                    <span
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `radial-gradient(circle, ${glow}, transparent 70%)`,
                        filter: "blur(10px)",
                      }}
                    />
                    <BrandIcon icon={Icon} from={color} to="#FFFFFF" size={26} className="relative" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--color-text-soft)",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.84rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {desc}
                  </p>
                  <span
                    className="pointer-events-none absolute bottom-0 left-7 right-7 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                  />
                </CraftCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="text-center mt-10">
              <NavLink
                to="/servicios"
                className="inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted)" }}
              >
                Ver todos los servicios
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── METODOLOGÍA (numerada 01–04) ────────────────────────────────────── */}
      <section className="relative py-24 px-6">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="CÓMO TRABAJAMOS"
              title={
                <>
                  Un proceso que{" "}
                  <span className="text-gradient">vuela alto</span>
                </>
              }
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {PROCESS.map(({ n, title, desc, icon: Icon }, i) => (
              <Reveal key={n} delay={i * 0.08}>
                <CraftCard className="p-7 h-full relative overflow-hidden">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "3.2rem",
                        fontWeight: 800,
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(93,173,226,0.5)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {n}
                    </span>
                    <BrandIcon icon={Icon} from="var(--color-fire)" to="#FFFFFF" size={24} className="mt-1" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--color-text-soft)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.84rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {desc}
                  </p>
                </CraftCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS DE ÉXITO (spotlight) ──────────────────────────────────────── */}
      <section className="relative py-24 px-6">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="PROYECTOS REALES"
              title={
                <>
                  Infraestructuras que{" "}
                  <span className="text-gradient">facturan</span>
                </>
              }
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {SPOTLIGHT.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <SpotlightCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="text-center mt-10">
              <NavLink
                to="/proyectos"
                className="inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted)" }}
              >
                Ver todos los proyectos
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PLANES / PRECIOS ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="INVERSIÓN"
              title={
                <>
                  Planes que se adaptan a{" "}
                  <span className="text-gradient">tu momento</span>
                </>
              }
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08}>
                <CraftCard
                  glow={plan.glow}
                  className="p-7 h-full flex flex-col"
                >
                  {plan.featured && (
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(192,57,43,0.7), transparent)",
                      }}
                    />
                  )}
                  {plan.featured && (
                    <span
                      className="self-start px-3 py-1 rounded-full text-xs mb-4"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: "rgba(192,57,43,0.12)",
                        border: "1px solid rgba(192,57,43,0.3)",
                        color: "var(--color-fire)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      MÁS ELEGIDO
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--color-muted)",
                      marginTop: "0.4rem",
                      marginBottom: "1.25rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {plan.desc}
                  </p>
                  <div className="mb-5">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        color: "var(--color-muted)",
                        marginLeft: "0.35rem",
                      }}
                    >
                      {plan.unit}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "var(--color-text-dim)" }}
                      >
                        <BrandIcon
                          icon={Sparkles}
                          from={plan.featured ? "#C0392B" : "#5DADE2"}
                          to="#FFFFFF"
                          size={15}
                          className="mt-1 shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Magnetic>
                    <NavLink
                      to="/contacto"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: plan.featured
                          ? "linear-gradient(135deg, #C0392B, #A93226)"
                          : "rgba(46,134,171,0.12)",
                        color: plan.featured ? "#fff" : "var(--color-accent-light)",
                        border: plan.featured
                          ? "none"
                          : "1px solid rgba(93,173,226,0.3)",
                        boxShadow: plan.featured
                          ? "0 6px 24px rgba(192,57,43,0.4)"
                          : "none",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Cotizar
                      <ArrowRight size={14} />
                    </NavLink>
                  </Magnetic>
                </CraftCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6">
        <div className="container-x">
          <Reveal>
            <div
              className="max-w-2xl mx-auto text-center p-10 md:p-14 rounded-[var(--radius-card)] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(27,79,114,0.2), rgba(192,57,43,0.1))",
                border: "1px solid var(--color-line-strong)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.12) 0%, transparent 70%)",
                }}
              />
              <Flame
                size={28}
                className="mx-auto mb-4"
                style={{ color: "var(--color-fire)" }}
              />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  lineHeight: 1.25,
                  marginBottom: "1.25rem",
                }}
              >
                Lleva tu emprendimiento al siguiente nivel
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                Cuéntanos de tu proyecto y te ayudamos a hacerlo realidad.
              </p>
              <Magnetic>
                <NavLink
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "linear-gradient(135deg, #C0392B, #A93226)",
                    color: "#fff",
                    boxShadow:
                      "0 12px 30px rgba(192,57,43,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
                    letterSpacing: "0.04em",
                  }}
                >
                  <Flame size={15} />
                  Hablemos
                  <ArrowRight size={14} />
                </NavLink>
              </Magnetic>

              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--color-muted)",
                }}
              >
                ¿Tienes dudas? Revisa nuestras{" "}
                <NavLink
                  to="/preguntas-frecuentes"
                  style={{
                    color: "var(--color-accent-light)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  preguntas frecuentes
                </NavLink>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FloatingPhoneButton />
    </Layout>
  );
}

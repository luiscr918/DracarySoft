import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Globe,
  DeviceMobile as Smartphone,
  Lightning as Zap,
  TrendUp as TrendingUp,
  ShoppingCart,
  Gear as Settings,
  Flame,
  CheckCircle as CheckCircle2,
  CaretRight as ChevronRight,
  Cpu,
  MapPin,
  Users,
} from "@phosphor-icons/react";
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";
import { CraftCard } from "../components/ui/CraftCard";
import { BrandIcon } from "../components/ui/BrandIcon";

// ─── Datos ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    label: "DESARROLLO",
    title: "Soluciones web y digitales",
    desc: "Creamos productos digitales a medida, desde páginas informativas hasta sistemas complejos.",
    color: "#2E86AB",
    services: [
      {
        icon: Globe,
        title: "Páginas Web",
        tagline: "Tu vitrina digital profesional",
        desc: "Sitios web modernos, rápidos y fáciles de administrar que ayudan a tu negocio a ganar credibilidad y atraer clientes.",
        features: [
          "Diseño responsive",
          "Optimización SEO básica",
          "Carga rápida",
          "Gestión sencilla",
        ],
        color: "#2E86AB",
        price: "Desde $250",
        glow: "rgba(46,134,171,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(46,134,171,0.12), rgba(10,15,30,0.8))",
      },
      {
        icon: Zap,
        title: "Landing Pages",
        tagline: "Convierte visitas en clientes",
        desc: "Páginas de aterrizaje diseñadas para captar leads y ventas con mensajes claros y llamadas a la acción efectivas.",
        features: [
          "Textos orientados a la acción",
          "Formularios efectivos",
          "Diseño móvil",
          "Medición de resultados",
        ],
        color: "#C0392B",
        price: "Desde $100",
        glow: "rgba(192,57,43,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(192,57,43,0.10), rgba(10,15,30,0.8))",
      },
      {
        icon: ShoppingCart,
        title: "Tiendas Online",
        tagline: "Vende sin límites horarios",
        desc: "Tiendas en línea completas para que puedas vender tus productos las 24 horas con una experiencia de compra fluida y segura.",
        features: [
          "Catálogo de productos",
          "Pasarela de pagos",
          "Gestión de inventario",
          "Notificaciones automáticas",
        ],
        color: "#C0392B",
        price: "Desde $500",
        glow: "rgba(192,57,43,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(192,57,43,0.10), rgba(10,15,30,0.8))",
      },
      {
        icon: Smartphone,
        title: "Aplicaciones Web",
        tagline: "Herramientas que simplifican tu día",
        desc: "Aplicaciones web a medida para digitalizar procesos clave de tu negocio y mejorar la experiencia de tus clientes.",
        features: [
          "Panel de control funcional",
          "Formularios y automatizaciones",
          "Acceso seguro",
          "Actualizaciones prácticas",
        ],
        color: "#5DADE2",
        price: "Desde $800",
        glow: "rgba(93,173,226,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(93,173,226,0.10), rgba(10,15,30,0.8))",
      },
      {
        icon: Cpu,
        title: "Sistemas a Medida",
        tagline: "Software hecho para tu negocio",
        desc: "Desarrollamos software personalizado para automatizar procesos, gestionar inventarios, usuarios o cualquier flujo interno de tu empresa o negocio.",
        features: [
          "Automatización de procesos",
          "Paneles administrativos",
          "Integración con sistemas existentes",
          "Escalable y seguro",
        ],
        color: "#2E86AB",
        price: "Desde $1000",
        glow: "rgba(46,134,171,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(46,134,171,0.12), rgba(10,15,30,0.8))",
      },
    ],
  },
  {
    label: "PRESENCIA DIGITAL",
    title: "Visibilidad real en internet",
    desc: "Te ayudamos a construir y fortalecer la imagen digital de tu negocio para que tus clientes te encuentren.",
    color: "#5DADE2",
    services: [
      {
        icon: TrendingUp,
        title: "Estrategia Digital",
        tagline: "Crece de forma inteligente",
        desc: "Asesoramos y ejecutamos estrategias para que tu negocio tenga visibilidad real en internet, desde la identidad digital hasta la captación de clientes.",
        features: [
          "Identidad de marca digital",
          "Estrategia de contenido",
          "Análisis de competencia",
          "Plan de crecimiento",
        ],
        color: "#2E86AB",
        price: "Cotización",
        glow: "rgba(46,134,171,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(46,134,171,0.12), rgba(10,15,30,0.8))",
      },
      {
        icon: MapPin,
        title: "Presencia en Google",
        tagline: "Que te encuentren fácilmente",
        desc: "Configuramos y optimizamos tu perfil de Google Maps y Google My Business para que clientes locales te encuentren rápido.",
        features: [
          "Registro en Google Maps",
          "Google My Business",
          "Información actualizada",
          "Gestión de reseñas",
        ],
        color: "#C0392B",
        price: "Cotización",
        glow: "rgba(192,57,43,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(192,57,43,0.10), rgba(10,15,30,0.8))",
      },
      {
        icon: Users,
        title: "Redes Sociales",
        tagline: "Conecta con tu audiencia",
        desc: "Creamos y configuramos tus perfiles en redes sociales con una identidad visual coherente e integración con tu sitio web y WhatsApp.",
        features: [
          "Creación de perfiles",
          "Identidad visual coherente",
          "Integración con WhatsApp",
          "Capacitación de uso",
        ],
        color: "#5DADE2",
        price: "Cotización",
        glow: "rgba(93,173,226,0.25)",
        gradient:
          "linear-gradient(135deg, rgba(93,173,226,0.10), rgba(10,15,30,0.8))",
      },
    ],
  },
  {
    label: "SOPORTE",
    title: "Tu aliado técnico permanente",
    desc: "No te dejamos solo después del lanzamiento. Mantenemos todo funcionando para que tú te enfoques en tu negocio.",
    color: "#1B4F72",
    services: [
      {
        icon: Settings,
        title: "Mantenimiento Web",
        tagline: "Tu sitio siempre en óptimas condiciones",
        desc: "Nos encargamos de mantener tu sitio web seguro, actualizado y funcionando perfectamente para que tú te enfoques en lo que mejor sabes hacer.",
        features: [
          "Actualizaciones periódicas",
          "Copias de seguridad",
          "Monitoreo 24/7",
          "Soporte técnico",
        ],
        color: "#1B4F72",
        price: "Desde $15/mes",
        glow: "rgba(27,79,114,0.35)",
        gradient:
          "linear-gradient(135deg, rgba(27,79,114,0.15), rgba(10,15,30,0.8))",
      },
    ],
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

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios digitales DracarySoft",
  provider: { "@type": "Organization", name: "DracarySoft" },
  serviceType: "Desarrollo web y presencia digital",
  description:
    "Soluciones digitales a medida para emprendedores: páginas web, aplicaciones web, landing pages, tiendas online, sistemas a medida, estrategia digital, presencia en Google y mantenimiento web.",
  areaServed: { "@type": "Country", name: "Ecuador" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios DracarySoft",
    itemListElement: [
      { "@type": "Offer", price: "100", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Landing Pages" } },
      { "@type": "Offer", price: "250", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Páginas Web" } },
      { "@type": "Offer", price: "500", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Tiendas Online" } },
      { "@type": "Offer", price: "800", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Aplicaciones Web" } },
      { "@type": "Offer", price: "1000", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Sistemas a Medida" } },
      { "@type": "Offer", price: "250", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Estrategia Digital" } },
      { "@type": "Offer", price: "50", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Presencia en Google" } },
      { "@type": "Offer", price: "100", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Redes Sociales" } },
      { "@type": "Offer", price: "15", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Mantenimiento Web" } },
    ],
  },
};

// ─── ServiceCard ──────────────────────────────────────────────────────────────

function ServiceCard({
  icon: Icon,
  title,
  tagline,
  desc,
  features,
  color,
  price,
  glow,
}: (typeof CATEGORIES)[0]["services"][0]) {
  return (
    <CraftCard glow={glow} className="p-7 h-full">
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center">
        <span
          className="absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(circle, ${glow}, transparent 70%)`,
            filter: "blur(10px)",
          }}
        />
        <BrandIcon icon={Icon} from={color} to="var(--color-text)" size={24} className="relative" />
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
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
          fontFamily: "var(--font-display)",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--color-text-soft)",
          marginBottom: "0.35rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.82rem",
          fontWeight: 700,
          color,
          marginBottom: "0.75rem",
        }}
      >
        {price}
        {price !== "Cotización" && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.62rem",
              fontWeight: 400,
              color: "var(--color-muted)",
              marginLeft: "0.5rem",
            }}
          >
            (precio referencial)
          </span>
        )}
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.83rem",
          color: "var(--color-muted)",
          lineHeight: 1.75,
          marginBottom: "1.25rem",
        }}
      >
        {desc}
      </p>

      <ul className="space-y-1.5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <BrandIcon icon={CheckCircle2} from={color} to="var(--color-text)" size={13} className="shrink-0" />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "var(--color-text-dim)",
              }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <span
        className="pointer-events-none absolute bottom-0 left-7 right-7 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </CraftCard>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function ServiciosPage() {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let st: typeof import("gsap/ScrollTrigger") | null = null;
    (async () => {
      st = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(st.ScrollTrigger);

      const cards = sectionsRef.current?.querySelectorAll(".srv-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionsRef.current, start: "top 80%" },
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
    })();

    return () => {
      if (st) st.ScrollTrigger.getAll().forEach((t: { kill: () => void }) => t.kill());
    };
  }, []);

  return (
    <Layout>
      <SEO title="Servicios" description="Soluciones digitales: páginas web, aplicaciones web, landing pages y presencia digital para emprendedores." url="/servicios" schema={SERVICE_SCHEMA} />
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-display)",
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
              fontFamily: "var(--font-display)",
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
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "#4A5A7A",
              lineHeight: 1.8,
            }}
          >
            Desde una página web hasta un sistema completo, adaptamos cada
            solución a las necesidades reales de tu negocio.
          </motion.p>
        </div>
      </section>

      {/* ── CATEGORÍAS + CARDS ────────────────────────────────────────────── */}
      <div ref={sectionsRef} className="px-6 space-y-24 pb-8">
        {CATEGORIES.map(({ label, title, desc, color, services }) => (
          <section key={label} className="max-w-6xl mx-auto">
            {/* Header de categoría */}
            <div className="flex items-start gap-5 mb-10">
              {/* línea lateral */}
              <div
                className="hidden sm:block w-1 rounded-full shrink-0 mt-1"
                style={{
                  height: "3.5rem",
                  background: `linear-gradient(180deg, ${color}, transparent)`,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    color,
                    letterSpacing: "0.35em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                    fontWeight: 700,
                    color: "#F0F4FF",
                    marginBottom: "0.4rem",
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    color: "#4A5A7A",
                    lineHeight: 1.6,
                    maxWidth: "520px",
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>

            {/* Divisor */}
            <div
              className="mb-8 h-px w-full"
              style={{
                background: `linear-gradient(90deg, ${color}30, transparent)`,
              }}
            />

            {/* Cards */}
            <div
              className={`grid grid-cols-1 gap-6 ${
                services.length === 1
                  ? "md:grid-cols-1 max-w-sm"
                  : services.length === 2
                    ? "md:grid-cols-2 max-w-2xl"
                    : services.length === 3
                      ? "md:grid-cols-2 lg:grid-cols-3"
                      : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── PROCESO ───────────────────────────────────────────────────────── */}
      <section ref={processRef} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              style={{
                fontFamily: "var(--font-display)",
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
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#F0F4FF",
              }}
            >
              Proceso simple y transparente
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
                <CraftCard className="relative z-10 p-5">
                  <div
                    className="text-3xl font-extrabold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(93,173,226,0.6)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {step}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--color-text-soft)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </CraftCard>
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
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.08) 0%, transparent 70%)",
            }}
          />

          <Flame
            size={28}
            className="mx-auto mb-4"
            style={{ color: "#C0392B" }}
          />

          <h2
            style={{
              fontFamily: "var(--font-display)",
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
              fontFamily: "var(--font-body)",
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
              fontFamily: "var(--font-body)",
              background: "linear-gradient(135deg, #C0392B, #A93226)",
              color: "var(--color-text)",
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
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "#4A5A7A",
              marginTop: "1.25rem",
            }}
          >
            ¿Dudas? Revisa nuestras{" "}
            <NavLink
              to="/preguntas-frecuentes"
              style={{
                color: "#5DADE2",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              preguntas frecuentes
            </NavLink>
          </p>
        </div>
      </section>

      <FloatingPhoneButton />
    </Layout>
  );
}

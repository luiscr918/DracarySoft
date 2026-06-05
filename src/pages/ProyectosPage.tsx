import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import {
  ExternalLink,
  Flame,
  Globe,
  Smartphone,
  Zap,
  ChevronRight,
  GitBranchIcon,
} from "lucide-react";
import Layout from "../components/layout/Layout";

gsap.registerPlugin(ScrollTrigger);

// ─── Tipos y datos ─────────────────────────────────────────────────────────────

type Category = "todos" | "web" | "app" | "landing";

interface Project {
  id: number;
  title: string;
  client: string;
  category: Category;
  tags: string[];
  desc: string;
  color: string;
  glow: string;
  icon: typeof Globe;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portal Corporativo",
    client: "Negocio Local",
    category: "web",
    tags: ["React", "TypeScript", "Tailwind"],
    desc: "Sitio web corporativo con sección de servicios, blog y formulario de contacto integrado. Diseño moderno y carga ultra rápida.",
    color: "#2E86AB",
    glow: "rgba(46,134,171,0.3)",
    icon: Globe,
    year: "2025",
  },
  {
    id: 2,
    title: "App de Gestión Interna",
    client: "PyME Ecuatoriana",
    category: "app",
    tags: ["React", "Node.js", "PostgreSQL"],
    desc: "Sistema de gestión de inventario y ventas con dashboard en tiempo real y reportes exportables a PDF.",
    // ← era #E67E22 / rgba(230,126,34,0.3)
    color: "#C0392B",
    glow: "rgba(192,57,43,0.3)",
    icon: Smartphone,
    year: "2025",
  },
  {
    id: 3,
    title: "Landing de Lanzamiento",
    client: "Startup Digital",
    category: "landing",
    tags: ["React", "Framer Motion", "GSAP"],
    desc: "Landing page de alto impacto para el lanzamiento de un producto digital con animaciones premium y CTA optimizado.",
    color: "#5DADE2",
    glow: "rgba(93,173,226,0.3)",
    icon: Zap,
    year: "2025",
  },
  {
    id: 4,
    title: "Tienda en Línea",
    client: "Comercio Minorista",
    category: "web",
    tags: ["Next.js", "Stripe", "Prisma"],
    desc: "E-commerce completo con catálogo, carrito, pasarela de pagos y panel de administración para el propietario.",
    color: "#C0392B",
    glow: "rgba(192,57,43,0.3)",
    icon: Globe,
    year: "2025",
  },
  {
    id: 5,
    title: "Dashboard de Métricas",
    client: "Agencia de Marketing",
    category: "app",
    tags: ["React", "Recharts", "API REST"],
    desc: "Panel de control con visualización de métricas en tiempo real, integración con redes sociales y reportes automáticos.",
    // ← era #F39C12 / rgba(243,156,18,0.3)
    color: "#1B4F72",
    glow: "rgba(27,79,114,0.3)",
    icon: Smartphone,
    year: "2024",
  },
  {
    id: 6,
    title: "Landing de Servicio",
    client: "Profesional Independiente",
    category: "landing",
    tags: ["React", "TypeScript", "SEO"],
    desc: "Página de captura de leads con copywriting persuasivo, testimonios animados y formulario de agendamiento.",
    color: "#1B4F72",
    glow: "rgba(27,79,114,0.3)",
    icon: Zap,
    year: "2024",
  },
];

const FILTERS: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "web", label: "Páginas Web" },
  { key: "app", label: "Aplicaciones" },
  { key: "landing", label: "Landing Pages" },
];

// ─── Card de proyecto ──────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const {
    icon: Icon,
    title,
    client,
    tags,
    desc,
    color,
    glow,
    year,
    liveUrl,
    repoUrl,
  } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "rgba(10,15,30,0.75)",
        border: "1px solid rgba(46,134,171,0.1)",
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}35`;
        (e.currentTarget as HTMLElement).style.boxShadow =
          `0 20px 48px ${glow}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(46,134,171,0.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon size={22} style={{ color }} />
        </div>
        <div className="flex items-center gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(46,134,171,0.1)",
                border: "1px solid rgba(46,134,171,0.2)",
                color: "#4A5A7A",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5DADE2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5A7A")}
            >
              <ExternalLink size={13} />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(46,134,171,0.1)",
                border: "1px solid rgba(46,134,171,0.2)",
                color: "#4A5A7A",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5DADE2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5A7A")}
            >
              <GitBranchIcon size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="mb-1">
        <span
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: "0.7rem",
            color,
            letterSpacing: "0.12em",
          }}
        >
          {client.toUpperCase()} · {year}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "#E8EEF8",
          marginBottom: "0.6rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: "0.82rem",
          color: "#4A5A7A",
          lineHeight: 1.75,
          marginBottom: "1.25rem",
        }}
      >
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              background: "rgba(46,134,171,0.08)",
              border: "1px solid rgba(46,134,171,0.15)",
              color: "#4A6A8A",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Línea bottom hover */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}50, transparent)`,
        }}
      />
    </motion.div>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────

export function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("todos");
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(192,57,43,0.1) 0%, transparent 70%)",
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

        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
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
            NUESTRO TRABAJO
          </p>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Proyectos que {/* ← era gradiente rojo→naranja */}
            <span
              style={{
                background: "linear-gradient(135deg, #C0392B, #922B21)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              hablan por sí solos
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "1.05rem",
              color: "#4A5A7A",
              lineHeight: 1.8,
            }}
          >
            Cada proyecto es una historia de transformación digital. Aquí
            mostramos lo que somos capaces de construir.
          </p>
        </div>
      </section>

      {/* ── FILTROS ────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  // ← era gradiente rojo→naranja
                  background:
                    activeFilter === key
                      ? "linear-gradient(135deg, #C0392B, #A93226)"
                      : "rgba(10,15,30,0.6)",
                  color: activeFilter === key ? "#fff" : "#4A5A7A",
                  border:
                    activeFilter === key
                      ? "1px solid transparent"
                      : "1px solid rgba(46,134,171,0.15)",
                  boxShadow:
                    activeFilter === key
                      ? "0 4px 16px rgba(192,57,43,0.35)"
                      : "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <p
            className="text-center mt-4"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "0.75rem",
              color: "#2A3A5A",
            }}
          >
            {filtered.length} proyecto{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  color: "#2A3A5A",
                  fontSize: "1rem",
                }}
              >
                No hay proyectos en esta categoría aún.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
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
            ¿Quieres ser el próximo?
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
            Tu proyecto podría estar aquí. Hablemos y construyamos algo que
            valga la pena mostrar.
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
            Iniciar mi proyecto
            <ChevronRight size={14} />
          </NavLink>
        </div>
      </section>
    </Layout>
  );
}

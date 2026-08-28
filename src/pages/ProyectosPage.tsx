import { useState, useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { ArrowSquareOut as ExternalLink, Flame, CaretRight as ChevronRight, GitBranch as GitBranchIcon, DownloadSimple as Download } from "@phosphor-icons/react";
import Layout from "../components/layout/Layout";
import { PROJECTS, PROJECT_FILTERS, type Category, type Project } from "../constants/projects";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";
import { CraftCard } from "../components/ui/CraftCard";
import { BrandIcon } from "../components/ui/BrandIcon";

const FILTERS = PROJECT_FILTERS;

// ─── Thumbnail con hover overlay (Opción 1) ────────────────────────────────────

function ProjectThumbnail({
  localImage,
  title,
  color,
  isClickable,
  isApk = false,
}: {
  localImage?: string;
  title: string;
  color: string;
  isClickable: boolean;
  isApk?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl mb-5"
      style={{ height: "160px" }}
    >
      {/* Skeleton mientras carga */}
      {!loaded && !error && (
        <div
          className="absolute inset-0 animate-pulse rounded-xl"
          style={{ background: "rgba(46,134,171,0.06)" }}
        />
      )}

      {/* Screenshot local */}
      {!error && localImage && (
        <img
          loading="lazy"
          src={localImage}
          alt={`Preview de ${title}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }}
        />
      )}

      {/* Fallback si falla la imagen */}
      {error && (
        <div
          className="absolute inset-0 rounded-xl flex items-center justify-center"
          style={{ background: `${color}10`, border: `1px solid ${color}20` }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              color: "#2A3A5A",
            }}
          >
            Preview no disponible
          </span>
        </div>
      )}

      {/* Overlay hover — solo si la card es clickeable */}
      {isClickable && loaded && (
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${color}cc, rgba(0,0,0,0.75))`,
          }}
        >
          {isApk ? (
            <Download size={22} color="var(--color-text)" />
          ) : (
            <ExternalLink size={22} color="var(--color-text)" />
          )}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              color: "var(--color-text)",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            {isApk ? "Descargar APK ↓" : "Ver proyecto →"}
          </span>
        </div>
      )}

      {/* Badge "Solo vista previa" si no tiene link */}
      {!isClickable && (
        <div
          className="absolute top-2 right-2 px-2 py-0.5 rounded-md"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            background: "rgba(0,0,0,0.55)",
            color: "#4A6A8A",
            border: "1px solid rgba(46,134,171,0.2)",
            backdropFilter: "blur(4px)",
          }}
        >
          Vista previa
        </div>
      )}
    </div>
  );
}

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
    localImage,
    apkUrl,
  } = project;

  const isClickable = Boolean(liveUrl || apkUrl);
  const hasPreview = Boolean(localImage);

  const openProject = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    } else if (apkUrl) {
      const link = document.createElement("a");
      link.href = apkUrl;
      link.download = "app-release.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProject();
    }
  };

  const cardContent = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <CraftCard
        glow={glow}
        className={`p-7 h-full ${isClickable ? "cursor-pointer" : ""}`}
        role={isClickable ? "link" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onClick={isClickable ? openProject : undefined}
        onKeyDown={isClickable ? handleKeyDown : undefined}
      >
        {/* ── Thumbnail con overlay ── */}
        {hasPreview && (
          <ProjectThumbnail
            localImage={localImage}
            title={title}
            color={color}
            isClickable={isClickable}
            isApk={Boolean(apkUrl)}
          />
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <BrandIcon
            icon={Icon}
            from={color}
            to="var(--color-text)"
            size={24}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
            {apkUrl && (
              <a
                href={apkUrl}
                download="app-release.apk"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(192,57,43,0.1)",
                  border: "1px solid rgba(192,57,43,0.2)",
                  color: "#4A5A7A",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0392B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5A7A")}
                title="Descargar APK"
              >
                <Download size={13} />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
              fontFamily: "var(--font-body)",
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
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--color-text-soft)",
            marginBottom: "0.6rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: "var(--color-muted)",
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
                fontFamily: "var(--font-body)",
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
        <span
          className="pointer-events-none absolute bottom-0 left-7 right-7 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
      </CraftCard>
    </motion.div>
  );

  return cardContent;
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
  }, []);

  return (
    <Layout>
      <SEO
        title="Proyectos"
        description="Portafolio de proyectos digitales: páginas web, aplicaciones web y landing pages creadas por DracarySoft."
        url="/proyectos"
      />
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
          ref={headerRef}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
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
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Proyectos que{" "}
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
              fontFamily: "var(--font-body)",
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
                aria-pressed={activeFilter === key}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  background:
                    activeFilter === key
                      ? "linear-gradient(135deg, #C0392B, #A93226)"
                      : "rgba(10,15,30,0.6)",
                  color: activeFilter === key ? "var(--color-text)" : "#4A5A7A",
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
              fontFamily: "var(--font-body)",
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
                  fontFamily: "var(--font-body)",
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
            ¿Quieres ser el próximo?
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
            Tu proyecto podría estar aquí. Hablemos y construyamos algo que
            valga la pena mostrar.
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
            Iniciar mi proyecto
            <ChevronRight size={14} />
          </NavLink>
        </div>
      </section>
      <FloatingPhoneButton />
    </Layout>
  );
}

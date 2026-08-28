import { motion } from "framer-motion";
import { Target, Sparkle as Sparkles, ShieldCheck } from "@phosphor-icons/react";
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";
import { CraftCard } from "../components/ui/CraftCard";
import { BrandIcon } from "../components/ui/BrandIcon";

const GitHubIcon = (props: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const VALUES = [
  {
    icon: Target,
    title: "Misión",
    desc: "Brindar soluciones digitales modernas, accesibles y efectivas para emprendedores y pequeños negocios.",
    color: "#C0392B",
  },
  {
    icon: Sparkles,
    title: "Visión",
    desc: "Ser reconocidos como un aliado confiable que impulsa el crecimiento digital de emprendimientos en Latinoamérica.",
    color: "#2E86AB",
  },
  {
    icon: ShieldCheck,
    title: "Valores",
    desc: "Compromiso, innovación, comunicación cercana y enfoque en resultados reales para cada proyecto.",
    color: "#5DADE2",
  },
];

const TEAM = [
  {
    name: "Luis Castillo",
    role: "Co-fundador · Tecnólogo Superior en Desarrollo de Software",
    bio: "Desarrollador full-stack. Apasionado por crear soluciones web rápidas y a medida para negocios reales.",
    github: "https://github.com/luiscr918",
    avatar: "https://github.com/luiscr918.png?s=460",
    color: "#C0392B",
    glow: "rgba(192,57,43,0.35)",
  },
  {
    name: "Katherine Pantoja",
    role: "Co-fundadora · Tecnóloga Superior en Desarrollo de Software",
    bio: "Desarrolladora full-stack. Enfocada en diseño intuitivo y experiencias que conectan con las personas.",
    github: "https://github.com/katypaola11",
    avatar: "https://github.com/katypaola11.png?s=460",
    color: "#2E86AB",
    glow: "rgba(46,134,171,0.35)",
  },
];

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": TEAM.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    image: member.avatar,
    url: member.github,
    sameAs: [member.github],
    worksFor: {
      "@type": "Organization",
      name: "DracarySoft",
      url: "https://dracarysoft.com",
    },
  })),
};

export function NosotrosPage() {
  return (
    <Layout>
      <SEO
        title="Nosotros"
        description="Conoce a DracarySoft: agencia digital enfocada en emprendedores y pequeños negocios. Nuestro equipo, enfoque, misión y visión."
        url="/nosotros"
        schema={PERSON_SCHEMA}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-14 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(192,57,43,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              color: "#C0392B",
              letterSpacing: "0.3em",
              marginBottom: "1rem",
            }}
          >
            QUIÉNES SOMOS
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.08,
              marginBottom: "1.25rem",
            }}
          >
            Somos el equipo que enciende tu presencia digital
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "#8899BB",
              lineHeight: 1.8,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            En DracarySoft acompañamos a emprendedores con soluciones web y
            digitales que están pensadas para negocios reales, con presupuesto
            inteligente y ejecución profesional.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              style={{
                width: "40px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(192,57,43,0.6))",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                color: "#2A3A5A",
                letterSpacing: "0.18em",
              }}
            >
              DRACARYSOFT · EST. 2025
            </span>
            <span
              style={{
                width: "40px",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(192,57,43,0.6), transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── ENFOQUE ───────────────────────────────────────────────────────── */}
      <section className="relative py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "rgba(10,15,30,0.8)",
              border: "1px solid rgba(46,134,171,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#F0F4FF",
                marginBottom: "1.25rem",
              }}
            >
              Nuestro enfoque
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "#8899BB",
                lineHeight: 1.9,
                marginBottom: "2rem",
                maxWidth: "640px",
              }}
            >
              Entendemos que cada emprendimiento es único. Por eso diseñamos
              soluciones versátiles, fáciles de usar y enfocadas en resultados
              reales: más clientes, mejor imagen y procesos digitales más
              eficientes.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Presupuesto inteligente", "Diseño a medida", "Soporte cercano"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-4 py-1.5 rounded-full text-xs"
                    style={{
                      fontFamily: "var(--font-body)",
                      background: "rgba(192,57,43,0.08)",
                      border: "1px solid rgba(192,57,43,0.18)",
                      color: "#C0392B",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {pill}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EQUIPO ────────────────────────────────────────────────────────── */}
      <section className="relative py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                color: "#C0392B",
                letterSpacing: "0.28em",
                marginBottom: "0.75rem",
              }}
            >
              DETRÁS DE CADA PROYECTO
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#F0F4FF",
              }}
            >
              Nuestro equipo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM.map(({ name, role, bio, github, avatar, color, glow }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full transition-transform duration-300 hover:-translate-y-2"
              >
                <CraftCard glow={glow} className="h-full p-8 text-center">
                  <div
                    className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full p-1 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${color}, transparent)`,
                      boxShadow: `0 0 0 1px ${color}40, 0 12px 36px ${glow}`,
                    }}
                  >
                    <img
                      loading="lazy"
                      src={avatar}
                      alt={`Foto de ${name}`}
                      width="460"
                      height="460"
                      className="w-full h-full rounded-full object-cover"
                      style={{ background: "#0A0F1E" }}
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--color-text-soft)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      color,
                      letterSpacing: "0.05em",
                      marginBottom: "1rem",
                    }}
                  >
                    {role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {bio}
                  </p>

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver perfil de GitHub de ${name}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      fontFamily: "var(--font-body)",
                      background: "rgba(46,134,171,0.1)",
                      border: `1px solid ${color}40`,
                      color: "#E8EEF8",
                    }}
                  >
                    <GitHubIcon size={14} />
                    GitHub
                  </a>
                </CraftCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISIÓN · VISIÓN · VALORES ─────────────────────────────────────── */}
      <section className="relative py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <CraftCard className="h-full p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <BrandIcon icon={Icon} from={color} to="var(--color-text)" size={22} />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        color: "#2A3A5A",
                        letterSpacing: "0.15em",
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text-soft)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {desc}
                  </p>
                </CraftCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FloatingPhoneButton />
    </Layout>
  );
}

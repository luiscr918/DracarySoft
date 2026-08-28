import { motion } from "framer-motion";
import { Cookie, ShieldCheck, Info, Gear as Settings, Eye } from "@phosphor-icons/react";
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";
import { CraftCard } from "../components/ui/CraftCard";
import { BrandIcon } from "../components/ui/BrandIcon";

const SECTIONS = [
  {
    icon: Info,
    title: "¿Qué son las cookies?",
    desc: "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo al visitar un sitio web. Sirven para que la web funcione correctamente, recuerde tus preferencias y, en algunos casos, mida el tráfico para mejorar la experiencia.",
  },
  {
    icon: Cookie,
    title: "¿Qué cookies usamos?",
    desc: "Usamos cookies técnicas (esenciales para el funcionamiento del sitio) y cookies de analítica a través de Google Analytics 4 / Google Tag Manager, que nos permiten conocer cómo se usa la web de forma anónima y agregada para seguir mejorando.",
  },
  {
    icon: Eye,
    title: "¿Qué NO hacemos con tus datos?",
    desc: "No vendemos datos personales a terceros, no usamos cookies de publicidad personalizada y no rastreamos tu navegación fuera de este sitio. La información que recogemos es agregada y anónima.",
  },
  {
    icon: Settings,
    title: "Cómo gestionar o revocar tu elección",
    desc: "Puedes cambiar tu decisión en cualquier momento usando el enlace «Cookies» que aparece en el pie de página de este sitio. También puedes borrar las cookies desde la configuración de tu navegador.",
  },
  {
    icon: ShieldCheck,
    title: "Contacto",
    desc: "Si tienes dudas sobre el uso de cookies o tus datos, escríbenos a dracarysoft@gmail.com y te responderemos a la brevedad.",
  },
];

export function PoliticaCookiesPage() {
  return (
    <Layout>
      <SEO
        title="Política de cookies"
        description="Conoce cómo DracarySoft usa las cookies: qué son, cuáles usamos, qué no hacemos con tus datos y cómo gestionar tu consentimiento."
        url="/politica-de-cookies"
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
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              color: "#C0392B",
              letterSpacing: "0.3em",
              marginBottom: "1rem",
            }}
          >
            TRANSPARENCIA
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Política de cookies
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.02rem",
              color: "#8899BB",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            En DracarySoft creemos en la transparencia. Aquí te explicamos de
            forma clara y sencilla cómo usamos las cookies en este sitio.
          </p>
        </div>
      </section>

      {/* ── CONTENIDO ─────────────────────────────────────────────────────── */}
      <section className="relative py-12 px-6">
        <div className="max-w-3xl mx-auto grid gap-5">
          {SECTIONS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <CraftCard className="flex gap-5 p-7 items-start">
                <BrandIcon icon={Icon} from="#5DADE2" to="var(--color-text)" size={20} className="shrink-0 mt-1" />
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "#2A3A5A",
                        letterSpacing: "0.15em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--color-text-soft)",
                      }}
                    >
                      {title}
                    </h2>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </CraftCard>
            </motion.div>
          ))}
        </div>
      </section>

      <FloatingPhoneButton />
    </Layout>
  );
}

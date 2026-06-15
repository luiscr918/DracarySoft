import { motion } from "framer-motion";
import { Target, Sparkles, ShieldCheck } from "lucide-react";
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";

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

export function NosotrosPage() {
  return (
    <Layout>
      <SEO title="Nosotros" description="Conoce a DracarySoft: agencia digital enfocada en emprendedores y pequeños negocios. Misión, visión y valores." url="/nosotros" />
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.75rem",
              color: "#C0392B",
              letterSpacing: "0.28em",
              marginBottom: "1rem",
            }}
          >
            QUIÉNES SOMOS
          </p>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Somos el equipo que enciende tu presencia digital
          </h1>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
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
        </div>
      </section>

      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(10,15,30,0.8)",
              border: "1px solid rgba(46,134,171,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#F0F4FF",
                marginBottom: "1rem",
              }}
            >
              Nuestro enfoque
            </h2>
            <p
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "1rem",
                color: "#8899BB",
                lineHeight: 1.9,
                marginBottom: "1.5rem", // ← añadido para separar del img
              }}
            >
              Entendemos que cada emprendimiento es único. Por eso diseñamos
              soluciones versátiles, fáciles de usar y enfocadas en resultados
              reales: más clientes, mejor imagen y procesos digitales más
              eficientes.
            </p>
            <img
              loading="lazy"
              src="/nosotrosImg.jpg"
              alt="DracarySoft equipo de trabajo"
              style={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div className="grid gap-6">
            {VALUES.map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl p-7"
                style={{
                  background: "rgba(10,15,30,0.8)",
                  border: "1px solid rgba(46,134,171,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${color}20`,
                    border: `1px solid ${color}30`,
                    color,
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#F0F4FF",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "0.95rem",
                    color: "#8899BB",
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FloatingPhoneButton />
    </Layout>
  );
}

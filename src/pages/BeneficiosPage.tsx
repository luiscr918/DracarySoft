import { motion } from "framer-motion";
import { Globe, ShieldCheck, Clock, TrendingUp, Sparkles } from "lucide-react";
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Credibilidad inmediata",
    desc: "Un sitio web profesional transmite confianza y ayuda a tu emprendimiento a destacar frente a la competencia.",
    color: "#C0392B",
  },
  {
    icon: Globe,
    title: "Presencia disponible 24/7",
    desc: "Tu negocio está visible siempre en internet, incluso cuando tú no estás conectado.",
    color: "#2E86AB",
  },
  {
    icon: TrendingUp,
    title: "Más oportunidades reales",
    desc: "Una presencia digital bien diseñada convierte visitantes en clientes y facilita el crecimiento.",
    color: "#5DADE2",
  },
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    desc: "Automatiza la comunicación y la captura de leads para que te concentres en hacer crecer tu emprendimiento.",
    color: "#1B4F72",
  },
  {
    icon: Sparkles,
    title: "Imagen moderna",
    desc: "Un diseño actual y elegante refuerza la percepción profesional de tu marca.",
    color: "#E67E22",
  },
];

export function BeneficiosPage() {
  return (
    <Layout>
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
            BENEFICIOS PARA NEGOCIOS
          </p>
          <img
            src="/dracarysAlternative.svg"
            alt="DracarySoft"
            style={{
              height: "250px",
              width: "auto",
              margin: "0 auto 1.5rem",
              display: "block",
            }}
          />
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
            Ventajas claras para tu negocio digital
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
            Descubre cómo una presencia web moderna y funcional puede acelerar
            tu crecimiento, mejorar tu imagen profesional y convertir más
            visitas en oportunidades.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8"
              style={{
                background: "rgba(10,15,30,0.8)",
                border: "1px solid rgba(46,134,171,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}30`,
                  color,
                }}
              >
                <Icon size={22} />
              </div>
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#F0F4FF",
                  marginBottom: "0.75rem",
                  lineHeight: 1.25,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: "0.95rem",
                  color: "#8899BB",
                  lineHeight: 1.8,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <FloatingPhoneButton />
    </Layout>
  );
}

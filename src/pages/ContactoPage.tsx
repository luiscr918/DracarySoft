import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "../components/layout/Layout";

export function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 20%, rgba(192,57,43,0.12) 0%, transparent 55%)",
          }}
        />
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
            CONTÁCTANOS
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
            Hablemos de tu próximo proyecto digital
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
            Escríbenos con los detalles de tu emprendimiento y te devolveremos
            una propuesta clara y accesible en poco tiempo.
          </p>
        </div>

        <div className="relative mt-16 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-3xl p-8"
            style={{
              background: "rgba(10,15,30,0.9)",
              border: "1px solid rgba(46,134,171,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="grid gap-6">
              <label className="flex flex-col gap-2 text-left">
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    color: "#8899BB",
                    fontSize: "0.9rem",
                  }}
                >
                  Nombre completo
                </span>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="rounded-2xl px-4 py-3 bg-[#0A0F1E] border border-[#1B2540] outline-none text-white"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                />
              </label>

              <label className="flex flex-col gap-2 text-left">
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    color: "#8899BB",
                    fontSize: "0.9rem",
                  }}
                >
                  Correo electrónico
                </span>
                <input
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="rounded-2xl px-4 py-3 bg-[#0A0F1E] border border-[#1B2540] outline-none text-white"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                />
              </label>

              <label className="flex flex-col gap-2 text-left">
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    color: "#8899BB",
                    fontSize: "0.9rem",
                  }}
                >
                  Mensaje
                </span>
                <textarea
                  required
                  rows={6}
                  placeholder="Cuéntanos sobre tu proyecto"
                  className="rounded-3xl px-4 py-4 bg-[#0A0F1E] border border-[#1B2540] outline-none text-white resize-none"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #C0392B, #A93226)",
                  color: "#fff",
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                Enviar mensaje
              </button>

              {submitted && (
                <p
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    color: "#5DADE2",
                  }}
                >
                  Gracias por escribirnos. Pronto te contactaremos.
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-3xl p-8"
            style={{
              background: "rgba(10,15,30,0.9)",
              border: "1px solid rgba(46,134,171,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#F0F4FF",
                marginBottom: "1rem",
              }}
            >
              Datos de contacto
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(93,173,226,0.15)",
                    color: "#5DADE2",
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1rem",
                      color: "#F0F4FF",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Email
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      color: "#8899BB",
                      lineHeight: 1.7,
                    }}
                  >
                    contacto@dracarysoft.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(192,57,43,0.15)",
                    color: "#C0392B",
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1rem",
                      color: "#F0F4FF",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Teléfono
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      color: "#8899BB",
                      lineHeight: 1.7,
                    }}
                  >
                    +593 9 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(46,134,171,0.15)",
                    color: "#2E86AB",
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1rem",
                      color: "#F0F4FF",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Ubicación
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      color: "#8899BB",
                      lineHeight: 1.7,
                    }}
                  >
                    Quito, Ecuador (servicios remotos disponibles)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

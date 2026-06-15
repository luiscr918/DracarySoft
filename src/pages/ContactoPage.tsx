import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { BsInstagram, BsTiktok, BsFacebook } from "react-icons/bs";
import { SEO } from "../components/seo/SEO";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleLinkEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.textShadow = "0 0 14px rgba(0,229,255,0.75)";
  };

  const handleLinkLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.textShadow = "0 0 8px rgba(0,229,255,0.4)";
  };

  return (
    <Layout>
      <SEO title="Contacto" description="Contáctanos para recibir una cotización personalizada para tu proyecto digital sin compromiso." url="/contacto" />
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 20%, rgba(192,57,43,0.12) 0%, transparent 55%)",
          }}
        />

        {/* Hero text */}
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
            ¿Listo para impulsar tu negocio digital?
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
            No manejamos tarifas fijas porque cada proyecto es distinto.
            Cuéntanos sobre tu emprendimiento y te preparamos una{" "}
            <span style={{ color: "#5DADE2", fontWeight: 600 }}>
              cotización personalizada
            </span>{" "}
            sin compromiso, adaptada a tus objetivos y presupuesto.
          </p>
        </div>

        {/* Form + Contact */}
        <div className="relative mt-16 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
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
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
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
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
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
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto y qué necesitas"
                  className="rounded-3xl px-4 py-4 bg-[#0A0F1E] border border-[#1B2540] outline-none text-white resize-none"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                />
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: "linear-gradient(135deg, #C0392B, #A93226)",
                  color: "#fff",
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                {status === "loading" ? "Enviando..." : "Solicitar cotización"}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} color="#5DADE2" />
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      color: "#5DADE2",
                    }}
                  >
                    ¡Mensaje recibido! Pronto te enviaremos tu cotización.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2">
                  <AlertCircle size={18} color="#C0392B" />
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      color: "#C0392B",
                    }}
                  >
                    Hubo un error al enviar. Intenta de nuevo.
                  </p>
                </div>
              )}
            </div>
          </motion.form>

          {/* Datos de contacto */}
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
                marginBottom: "0.5rem",
              }}
            >
              Datos de contacto
            </h2>
            <p
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "0.95rem",
                color: "#8899BB",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              También puedes contactarnos directamente por WhatsApp usando el
              botón flotante en la esquina inferior derecha.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  color: "#5DADE2",
                  bg: "rgba(93,173,226,0.15)",
                  label: "Email",
                  value: "dracarysoft@gmail.com",
                  href: "mailto:dracarysoft@gmail.com",
                },
                {
                  icon: BsInstagram,
                  color: "#E1306C",
                  bg: "rgba(225,48,108,0.15)",
                  label: "Instagram",
                  value: "@dracarysoft",
                  href: "https://www.instagram.com/dracarysoft/",
                },
                {
                  icon: BsTiktok,
                  color: "#F0F4FF",
                  bg: "rgba(240,244,255,0.1)",
                  label: "TikTok",
                  value: "@dracary.soft",
                  href: "https://www.tiktok.com/@dracary.soft?is_from_webapp=1&sender_device=pc",
                },
                {
                  icon: BsFacebook,
                  color: "#1877F2",
                  bg: "rgba(24,119,242,0.15)",
                  label: "Facebook",
                  value: "DracarySoft",
                  href: "https://www.facebook.com/profile.php?id=61590437895340",
                },
                {
                  icon: MapPin,
                  color: "#2E86AB",
                  bg: "rgba(46,134,171,0.15)",
                  label: "Ubicación",
                  value: "Quito, Ecuador (servicios remotos disponibles)",
                  href: "https://www.google.com/maps/search/?api=1&query=Quito%2C+Ecuador",
                },
              ].map(({ icon: Icon, color, bg, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: bg, color }}
                  >
                    <Icon size={20} />
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
                      {label}
                    </h3>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onMouseEnter={handleLinkEnter}
                      onMouseLeave={handleLinkLeave}
                      style={{
                        fontFamily: "'Exo 2', sans-serif",
                        color: "#00E5FF",
                        lineHeight: 1.7,
                        textShadow: "0 0 8px rgba(0,229,255,0.4)",
                        textDecoration: "none",
                        transition: "text-shadow 0.2s",
                      }}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <FloatingPhoneButton />
    </Layout>
  );
}

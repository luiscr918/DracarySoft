import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "ds_cookie_consent";

declare global {
  interface Window {
    loadGTM?: () => void;
    dataLayer?: unknown[];
  }
}

function grantConsent() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "consent",
    "update",
    {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    },
  ]);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem(STORAGE_KEY) === null,
  );

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    grantConsent();
    window.loadGTM?.();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Consentimiento de cookies"
          aria-live="polite"
          className="fixed bottom-6 left-6 right-6 sm:right-auto z-40 w-auto sm:max-w-sm"
          onKeyDown={(e) => {
            if (e.key === "Escape") reject();
          }}
        >
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(10,15,30,0.92)",
              border: "1px solid rgba(46,134,171,0.18)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#F0F4FF",
                letterSpacing: "0.08em",
                marginBottom: "0.6rem",
              }}
            >
              DRACARYSOFT Y LAS COOKIES
            </p>
            <p
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "0.85rem",
                color: "#8899BB",
                lineHeight: 1.7,
                marginBottom: "0.5rem",
              }}
            >
              Usamos cookies para medir el tráfico y mejorar tu experiencia.
              Puedes aceptar todas o solo las necesarias.
            </p>
            <a
              href="/politica-de-cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 transition-colors duration-200 hover:text-white"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "0.78rem",
                color: "#5DADE2",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Ver política de cookies
            </a>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={accept}
                className="flex-1 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  background: "linear-gradient(135deg, #C0392B, #A93226)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(192,57,43,0.35)",
                }}
              >
                Aceptar
              </button>
              <button
                onClick={reject}
                className="flex-1 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  background: "rgba(46,134,171,0.08)",
                  border: "1px solid rgba(46,134,171,0.2)",
                  color: "#4A6A8A",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#5DADE2";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(93,173,226,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#4A6A8A";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(46,134,171,0.2)";
                }}
              >
                Solo necesarias
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

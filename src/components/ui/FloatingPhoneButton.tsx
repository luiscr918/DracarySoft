export default function FloatingPhoneButton() {
  const waLink = "https://wa.me/593960550572";

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="fixed right-6 bottom-6 z-50 cursor-pointer"
    >
      <div className="relative w-16 h-16">
        {/* Glow externo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 blur-xl" />

        {/* Botón glass */}
        <div
          className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(37, 211, 102, 0.25)", // 🔥 transparente
            backdropFilter: "blur(12px)", // 🔥 glass real
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.4),
              inset 0 -2px 6px rgba(0,0,0,0.2),
              0 8px 25px rgba(37,211,102,0.35)
            `,
          }}
        >
          {/* Highlight tipo vidrio */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            }}
          />

          {/* Icono */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            style={{
              filter: "drop-shadow(0 0 6px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>
    </a>
  );
}

export default function FloatingPhoneButton() {
  const waLink = "https://wa.me/593912345678";

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="fixed right-6 bottom-6 z-50 cursor-pointer"
    >
      <div className="relative w-16 h-16">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-pulse" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 blur-sm" />
        <div
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: "#25D366" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={36}
            height={36}
          />
        </div>
      </div>
    </a>
  );
}

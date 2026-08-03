import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dragonImg from "/dracarysAlternativeLogo.svg";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface DragonIntroProps {
  onComplete: () => void;
}

export default function DragonIntro({ onComplete }: DragonIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragonRef = useRef<HTMLImageElement>(null);
  const eyeGlowRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textDracaryRef = useRef<HTMLSpanElement>(null);
  const textSoftRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const glowBlueRef = useRef<HTMLDivElement>(null);
  const glowRedRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      // ── Estado inicial ──────────────────────────────────────────────────
      gsap.set(dragonRef.current, {
        opacity: 0,
        scale: 0.75,
        y: 30,
        filter: "blur(8px)",
      });
      gsap.set(eyeGlowRef.current, { opacity: 0, scale: 0 });
      gsap.set(glowBlueRef.current, { opacity: 0, scale: 0.6 });
      gsap.set(glowRedRef.current, { opacity: 0, scale: 0.6 });
      gsap.set(textWrapperRef.current, { opacity: 0, y: 28 });
      gsap.set(textDracaryRef.current, {
        opacity: 0,
        x: -24,
        letterSpacing: "0.5em",
      });
      gsap.set(textSoftRef.current, {
        opacity: 0,
        x: 24,
        letterSpacing: "0.5em",
      });
      gsap.set(taglineRef.current, { opacity: 0, y: 10 });
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.55,
            ease: "power2.in",
            onComplete,
          });
        },
      });

      // ── 1. Glows aparecen primero (ambiente) ────────────────────────────
      tl.to(glowBlueRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      });
      tl.to(
        glowRedRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // ── 2. Dragón aparece desde el fondo ────────────────────────────────
      tl.to(
        dragonRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // ── 5. Texto aparece ─────────────────────────────────────────────────
      tl.to(
        textWrapperRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.1",
      );

      tl.to(
        textDracaryRef.current,
        {
          opacity: 1,
          x: 0,
          letterSpacing: "0.08em",
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.1",
      );

      tl.to(
        textSoftRef.current,
        {
          opacity: 1,
          x: 0,
          letterSpacing: "0.04em",
          duration: 0.65,
          ease: "power3.out",
        },
        "<",
      );

      tl.to(
        taglineRef.current,
        {
          opacity: 0.7,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      );

      // ── 6. Hold ──────────────────────────────────────────────────────────
      tl.to({}, { duration: 0.5 });

      // ── 7. Todo se eleva y desvanece ─────────────────────────────────────
      tl.to(
        [
          dragonRef.current,
          eyeGlowRef.current,
          glowBlueRef.current,
          glowRedRef.current,
        ],
        { y: -28, opacity: 0, duration: 0.55, ease: "power2.in" },
      );
      tl.to(
        [textWrapperRef.current, taglineRef.current],
        { y: -18, opacity: 0, duration: 0.45, ease: "power2.in" },
        "-=0.35",
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0A1628 0%, #050B14 100%)",
      }}
    >
      {/* Overlay de salida */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "#050B14" }}
      />

      {/* Glow azul (izquierda/arriba — de los cuernos) */}
      <div
        ref={glowBlueRef}
        className="absolute pointer-events-none"
        style={{
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(46,134,171,0.22) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-55%, -58%)",
          filter: "blur(24px)",
        }}
      />

      {/* Glow rojo (derecha/abajo — del fuego/cuerpo) */}
      <div
        ref={glowRedRef}
        className="absolute pointer-events-none"
        style={{
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(ellipse at 60% 60%, rgba(192,57,43,0.25) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-40%, -45%)",
          filter: "blur(28px)",
        }}
      />

      {/* Imagen del dragón */}
      <div className="relative">
        <img
          ref={dragonRef}
          src={dragonImg}
          alt="DracarySoft dragon"
          width="420"
          height="420"
          fetchPriority="high"
          style={{
            width: "clamp(280px, 38vw, 420px)",
            height: "clamp(280px, 38vw, 420px)",
            objectFit: "contain",
            objectPosition: "center",
            mixBlendMode: "screen",
            filter:
              "drop-shadow(0 0 32px rgba(46,134,171,0.45)) drop-shadow(0 0 16px rgba(192,57,43,0.35))",
          }}
        />

        {/* Glow del ojo — posicionado sobre el ojo amarillo del dragón */}
        {/* Ajusta top/left si la imagen cambia de tamaño */}
        <div
          ref={eyeGlowRef}
          className="absolute pointer-events-none"
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #FFD700 0%, #F39C12 40%, transparent 70%)",
            filter: "blur(4px)",
            // ~58% desde arriba, ~65% desde la izquierda — zona del ojo en la imagen
            top: "46%",
            left: "62%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 12px 4px rgba(255,215,0,0.5)",
          }}
        />
      </div>

      {/* Texto DRACARYSOFT */}
      <div
        ref={textWrapperRef}
        className="flex items-baseline mt-5 select-none"
        style={{ filter: "drop-shadow(0 0 18px rgba(192,57,43,0.35))" }}
      >
        <span
          ref={textDracaryRef}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            color: "#F0F4FF",
            letterSpacing: "0.08em",
            textShadow:
              "0 0 28px rgba(46,134,171,0.55), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          DRACARY
        </span>
        <span
          ref={textSoftRef}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            color: "#C0392B",
            letterSpacing: "0.04em",
            textShadow:
              "0 0 24px rgba(192,57,43,0.6), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          SOFT
        </span>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(0.65rem, 1.4vw, 0.85rem)",
          color: "#4A5A7A",
          letterSpacing: "0.3em",
          marginTop: "0.6rem",
        }}
      >
        ENCIENDE TU NEGOCIO DIGITAL
      </p>

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0)   translateX(0);   opacity: 0.3; }
          40%       { transform: translateY(-18px) translateX(6px);  opacity: 0.75; }
          70%       { transform: translateY(-9px)  translateX(-5px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

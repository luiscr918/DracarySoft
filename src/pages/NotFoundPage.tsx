import { NavLink } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/seo/SEO";

export function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Página no encontrada" description="La página que buscas no existe." />
      <section className="relative min-h-dvh flex flex-col items-center justify-center text-center px-6">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 10vw, 8rem)",
            fontWeight: 900,
            color: "#C0392B",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.2rem",
            color: "#8899BB",
            marginBottom: "2rem",
          }}
        >
          La página que buscas no existe o fue movida.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #C0392B, #A93226)",
            color: "#fff",
            fontFamily: "var(--font-body)",
          }}
        >
          Volver al inicio
        </NavLink>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "#4A5A7A",
            marginTop: "1.5rem",
          }}
        >
          También puedes revisar nuestras{" "}
          <NavLink
            to="/preguntas-frecuentes"
            style={{
              color: "#5DADE2",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            preguntas frecuentes
          </NavLink>
        </p>
      </section>
    </Layout>
  );
}

import Layout from "../components/layout/Layout";
import FloatingPhoneButton from "../components/ui/FloatingPhoneButton";
import { SEO } from "../components/seo/SEO";
import { CraftCard } from "../components/ui/CraftCard";

const FAQ_DATA = [
  {
    cluster: "Servicios y precios",
    questions: [
      {
        q: "¿Cuánto cuesta una landing page en Ecuador?",
        a: "Desde $100 para landing pages informativas sin estilos muy complejos: una sola página con diseño responsive, formulario de contacto, integración con WhatsApp y SEO técnico incluido. Landing pages con animaciones premium, pasarelas de pago o integraciones avanzadas tienen un costo mayor. Cotización gratuita en menos de 24 horas.",
      },
      {
        q: "¿Cuánto cuesta una página web institucional?",
        a: "Desde $250 para una página web institucional básica con hasta 5 secciones (Inicio, Servicios, Nosotros, Contacto, etc.). El precio final depende del número de secciones, animaciones, panel administrativo, blog o integraciones especiales. Cotización personalizada sin compromiso adaptada a tu presupuesto.",
      },
      {
        q: "¿Cuánto cuesta una tienda online?",
        a: "Desde $500 para una tienda online con catálogo de productos, carrito de compras, pasarela de pago básica, panel de administración y notificaciones automáticas. El precio sube según el número de productos, integraciones con sistemas de inventario, logística o pasarelas específicas.",
      },
      {
        q: "¿Cuánto cuesta una aplicación web a medida?",
        a: "Desde $800 para aplicaciones web a medida con lógica de negocio personalizada, panel de control, usuarios y roles. El costo final depende de la complejidad de las funcionalidades, integraciones con sistemas externos y el número de usuarios concurrentes esperados.",
      },
      {
        q: "¿Cuánto cuesta un sistema completo o avanzado?",
        a: "Desde $1000 para sistemas completos con múltiples módulos, roles avanzados, integraciones complejas, automatizaciones y reportes. Estos proyectos suelen tomar entre 6 y 12 semanas. El precio final depende del alcance, la cantidad de integraciones y la lógica de negocio requerida.",
      },
      {
        q: "¿Ofrecen planes de pago o financiamiento?",
        a: "Sí. Entendemos que los emprendedores en Ecuador necesitan flexibilidad. Podemos fraccionar el pago en cuotas durante el desarrollo del proyecto (típicamente 50% al iniciar y 50% al entregar) para que no tengas que desembolsar todo de una vez. Conversamos los detalles en la reunión inicial.",
      },
      {
        q: "¿Tienen planes de mantenimiento mensual?",
        a: "Sí. Ofrecemos mantenimiento desde $15 al mes para sitios básicos, que incluye actualizaciones de seguridad, copias de seguridad y monitoreo de funcionamiento. Planes más completos con cambios de contenido, soporte prioritario y actualizaciones de SEO desde $40 al mes.",
      },
      {
        q: "¿Qué incluye el servicio de página web?",
        a: "Nuestro servicio de página web incluye diseño responsive, SEO técnico básico (PageSpeed verde, meta etiquetas, sitemap y datos estructurados), formulario de contacto, integración con WhatsApp, hosting el primer año, dominio personalizado y capacitación. Según el plan, podemos incluir panel administrativo, blog, galería de imágenes y más.",
      },
    ],
  },
  {
    cluster: "Proceso de trabajo y tiempos",
    questions: [
      {
        q: "¿Cuánto tardan en hacer una página web?",
        a: "El tiempo de entrega depende del alcance del proyecto. Una landing page puede estar lista en 1 a 2 semanas. Una página web institucional de varias secciones suele tomar entre 2 y 4 semanas. Una tienda online o aplicación web puede tardar entre 4 y 8 semanas. Siempre te damos un cronograma claro antes de empezar.",
      },
      {
        q: "¿Cómo es el proceso de trabajo con DracarySoft?",
        a: "Nuestro proceso tiene 4 pasos: 1) Consulta inicial donde conversamos sobre tu negocio y objetivos. 2) Propuesta y plan con tiempos y costos claros. 3) Diseño y desarrollo con tecnologías modernas. 4) Entrega y soporte donde lanzamos tu proyecto y te acompañamos.",
      },
      {
        q: "¿Qué necesito para empezar un proyecto?",
        a: "Solo necesitas una idea clara de lo que quieres lograr con tu presencia digital. Lo demás lo manejamos nosotros: desde el diseño hasta la publicación. Si tienes logo, textos, fotos o referencias de sitios que te gustan, ¡mucho mejor! Pero si no, te asesoramos en cada paso.",
      },
      {
        q: "¿Hacen reuniones por videollamada?",
        a: "Sí. Trabajamos con clientes de todo Ecuador y también de forma remota. Hacemos reuniones por videollamada (Google Meet, Zoom o WhatsApp) para entender tu proyecto, mostrar avances y entregar el resultado final. No necesitas desplazarte.",
      },
      {
        q: "¿Quién escribe los textos de mi página web?",
        a: "Podemos ayudarte a redactar los textos de tu sitio web con un enfoque orientado a resultados y optimizado para SEO. También puedes proporcionarnos tus propios textos si prefieres un tono más personal. Lo importante es que el mensaje conecte con tus clientes.",
      },
    ],
  },
  {
    cluster: "Tecnologías y soporte",
    questions: [
      {
        q: "¿Con qué tecnologías trabajan?",
        a: "Usamos tecnologías modernas y eficientes como React, TypeScript, Tailwind CSS, Node.js, Firebase y Flutter para aplicaciones móviles. Elegimos la tecnología adecuada según las necesidades de cada proyecto, priorizando velocidad de carga, seguridad y facilidad de mantenimiento.",
      },
      {
        q: "¿Puedo editar el contenido de mi sitio yo mismo?",
        a: "Sí. Te entregamos tu sitio con un panel de administración fácil de usar donde puedes modificar textos, imágenes, productos y más sin necesidad de conocimientos técnicos. Además te capacitamos para que te sientas seguro manejando tu propia web.",
      },
      {
        q: "¿Ofrecen mantenimiento después del lanzamiento?",
        a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, copias de seguridad, monitoreo de funcionamiento y soporte técnico. Así tu sitio siempre está protegido y funcionando al máximo mientras tú te enfocas en tu negocio.",
      },
      {
        q: "¿Mi sitio web será seguro?",
        a: "Absolutamente. Todos nuestros sitios incluyen certificado SSL (HTTPS), protección contra ataques comunes, copias de seguridad automáticas y actualizaciones periódicas de seguridad. La protección de tus datos y los de tus clientes es nuestra prioridad.",
      },
      {
        q: "¿Qué pasa si necesito cambios después del lanzamiento?",
        a: "Si tienes un plan de mantenimiento, los cambios menores están incluidos. Para cambios más grandes, te cotizamos por separado según el alcance. Siempre estamos disponibles para ayudarte a evolucionar tu presencia digital.",
      },
    ],
  },
  {
    cluster: "SEO y presencia en Google",
    questions: [
      {
        q: "¿El SEO viene incluido en el precio de la página web?",
        a: "Sí. Todas nuestras páginas web incluyen SEO técnico básico sin costo adicional: estructura semántica, meta etiquetas, velocidad de carga optimizada (PageSpeed en verde), diseño responsive, sitemap y datos estructurados (schema.org). Esto ayuda a que Google indexe tu sitio correctamente. Para posicionamiento local (Google My Business) o SEO de contenido continuo, ofrecemos planes aparte desde $50 setup + $15 al mes.",
      },
      {
        q: "¿Ofrecen SEO local y de contenido como servicio aparte?",
        a: "Sí. Además del SEO técnico incluido en cada página web, ofrecemos SEO local desde $50 (setup de Google My Business + Google Maps + gestión de reseñas) con mantenimiento mensual desde $15. Para SEO de contenido continuo (artículos, keyword research, optimización) ofrecemos planes desde $40 al mes. Conversamos cuál se ajusta a tu negocio sin compromiso.",
      },
      {
        q: "¿Configuran Google My Business de mi negocio?",
        a: "Sí. Creamos, verificamos y optimizamos tu ficha de Google My Business con información actualizada, fotos profesionales, horarios, categorías correctas y gestión de reseñas. Este servicio tiene un costo de setup desde $50 y mantenimiento mensual desde $15.",
      },
      {
        q: "¿Cuánto tarda el SEO en dar resultados?",
        a: "El SEO es una estrategia de mediano y largo plazo. Los primeros resultados pueden verse entre 1 y 3 meses, pero el posicionamiento sólido suele tomar entre 4 y 8 meses. Lo importante es empezar cuanto antes y ser constante con el contenido y las actualizaciones.",
      },
    ],
  },
  {
    cluster: "Diseño y responsive",
    questions: [
      {
        q: "¿Mi sitio web se verá bien en celulares?",
        a: "Sí, todos nuestros sitios son responsive por defecto. Esto significa que se adaptan automáticamente a cualquier dispositivo: celular, tablet o computadora. Más del 60% del tráfico web en Ecuador viene de dispositivos móviles, así que diseñamos pensando primero en la experiencia móvil.",
      },
      {
        q: "¿Usan plantillas o hacen diseño a medida?",
        a: "Hacemos diseño a medida para cada cliente. No usamos plantillas genéricas porque cada negocio tiene su propia personalidad, colores, historia y objetivos. El diseño de tu sitio web será único, profesional y alineado con la identidad de tu marca.",
      },
      {
        q: "¿Puedo pedir cambios durante el diseño?",
        a: "¡Por supuesto! El proceso incluye rondas de revisión donde puedes solicitar ajustes de diseño, colores, tipografía y distribución. Queremos que quedes completamente satisfecho con el resultado. Los cambios mayores que estén fuera del alcance inicial pueden tener un costo adicional.",
      },
      {
        q: "¿Qué necesito para el diseño de mi sitio?",
        a: "Si tienes un logo, paleta de colores definida o manual de marca, podemos integrarlo al diseño. Si no tienes nada aún, no te preocupes: te ayudamos a definir una identidad visual coherente y profesional para tu sitio web desde cero.",
      },
    ],
  },
  {
    cluster: "E-commerce y sistemas a medida",
    questions: [
      {
        q: "¿Hacen tiendas online completas?",
        a: "Sí. Desarrollamos tiendas online con catálogo de productos, carrito de compras, pasarela de pagos integrada (PayPal, Stripe, transferencia bancaria), gestión de inventario, notificaciones automáticas y panel de administración. Todo pensado para que vender en línea sea fácil y seguro.",
      },
      {
        q: "¿Qué pasarelas de pago integran?",
        a: "Integramos PayPal, Stripe, PayPhone, Kushki y otras pasarelas disponibles en Ecuador y Latinoamérica. También podemos configurar transferencia bancaria y pago contra entrega. Conversamos cuál es la mejor opción para tu negocio.",
      },
      {
        q: "¿Desarrollan sistemas a medida para mi negocio?",
        a: "Sí. Creamos software personalizado para automatizar procesos internos: gestión de inventarios, facturación, reservas, seguimiento de clientes, paneles administrativos y más. Si tienes un proceso que quieres digitalizar, cuéntanos y te proponemos la solución.",
      },
      {
        q: "¿Pueden automatizar procesos de mi negocio?",
        a: "Sí. Identificamos los procesos repetitivos de tu negocio y los automatizamos para que ahorres tiempo y reduzcas errores. Desde formularios inteligentes hasta sincronización entre sistemas, podemos crear herramientas que hagan el trabajo pesado por ti.",
      },
    ],
  },
  {
    cluster: "Negocio y marca",
    questions: [
      {
        q: "¿Trabajan con emprendedores y pequeños negocios?",
        a: "Sí. Ese es justamente nuestro enfoque principal. DracarySoft nació para ayudar a emprendedores y pequeños negocios a tener presencia digital profesional sin los costos de una gran agencia. Entendemos los desafíos y presupuestos de quien está empezando o haciendo crecer su negocio.",
      },
      {
        q: "¿Atienden clientes fuera de Ecuador?",
        a: "Sí. Aunque estamos basados en Quito, Ecuador, trabajamos de forma 100% remota con clientes en cualquier país de habla hispana. Todo el proceso se maneja por videollamada, correo electrónico y WhatsApp.",
      },
      {
        q: "¿Necesito tener un logo para hacer mi página web?",
        a: "No es obligatorio pero ayuda mucho. Si no tienes logo, podemos diseñar uno básico como parte del proyecto o recomendarte diseñadores de confianza. Si ya tienes tu logo y paleta de colores, los integramos perfectamente al diseño de tu web.",
      },
      {
        q: "¿Puedo cancelar el servicio de mantenimiento cuando quiera?",
        a: "Sí. Nuestros planes de mantenimiento son mensuales y puedes cancelarlos en cualquier momento sin penalización. Eso sí, te recomendamos mantener un mantenimiento activo para proteger la seguridad y el rendimiento de tu sitio a largo plazo.",
      },
      {
        q: "¿Ofrecen garantía sobre su trabajo?",
        a: "Sí. Todos nuestros proyectos incluyen un período de garantía posterior al lanzamiento donde corregimos cualquier error sin costo adicional. Además, si tienes un plan de mantenimiento, tu sitio está siempre respaldado y actualizado.",
      },
    ],
  },
];

function buildFAQSchema() {
  const mainEntity = FAQ_DATA.flatMap((cluster) =>
    cluster.questions.map((item) => ({
      "@type": "Question" as const,
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.a,
      },
    })),
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://dracarysoft.com/" },
    { "@type": "ListItem", position: 2, name: "Preguntas Frecuentes", item: "https://dracarysoft.com/preguntas-frecuentes" },
  ],
};

export function PreguntasFrecuentesPage() {
  return (
    <Layout>
      <SEO
        title="Preguntas Frecuentes"
        description="Respuestas a las preguntas más comunes sobre páginas web, precios, diseño, SEO, e-commerce y servicios digitales para emprendedores en Ecuador."
        url="/preguntas-frecuentes"
        schema={{
          "@context": "https://schema.org",
          "@graph": [buildFAQSchema(), BREADCRUMB_SCHEMA],
        }}
      />
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.75rem",
              color: "#C0392B",
              letterSpacing: "0.28em",
              marginBottom: "1rem",
            }}
          >
            INFORMACIÓN ÚTIL
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Preguntas{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2E86AB, #5DADE2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              frecuentes
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "#8899BB",
              lineHeight: 1.8,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Respuestas claras sobre nuestros servicios, precios, proceso de trabajo y todo lo que necesitas saber para dar el salto digital con tu negocio.
          </p>
        </div>
      </section>

      <section className="relative pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {FAQ_DATA.map(({ cluster, questions }) => (
            <div key={cluster}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-1 rounded-full shrink-0"
                  style={{
                    height: "2.5rem",
                    background: "linear-gradient(180deg, #C0392B, transparent)",
                  }}
                />
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    fontWeight: 700,
                    color: "#F0F4FF",
                    lineHeight: 1.3,
                  }}
                >
                  {cluster}
                </h2>
              </div>

              <div className="space-y-3">
                {questions.map(({ q, a }) => (
                  <details
                    key={q}
                    className="group rounded-2xl transition-all duration-300"
                    style={{
                      background: "rgba(10,15,30,0.7)",
                      border: "1px solid rgba(46,134,171,0.1)",
                    }}
                  >
                    <summary
                      className="flex items-center justify-between px-6 py-4 cursor-pointer select-none"
                      style={{ listStyle: "none" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.95rem",
                          color: "#E8EEF8",
                          fontWeight: 500,
                          lineHeight: 1.5,
                          paddingRight: "2rem",
                        }}
                      >
                        {q}
                      </span>
                      <span
                        className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                        style={{
                          fontSize: "1.2rem",
                          color: "#5DADE2",
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <div
                      className="px-6 pb-5"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "#8899BB",
                        lineHeight: 1.8,
                      }}
                    >
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <CraftCard className="p-10 text-center">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--color-text-soft)",
                marginBottom: "0.75rem",
              }}
            >
              ¿No encontraste tu respuesta?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--color-muted)",
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              Escríbenos directamente y te respondemos en menos de 24 horas sin compromiso.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "var(--font-body)",
                background: "linear-gradient(135deg, #C0392B, #A93226)",
                color: "#fff",
                boxShadow: "0 6px 24px rgba(192,57,43,0.4)",
                textDecoration: "none",
              }}
            >
              Solicitar cotización
            </a>
          </CraftCard>
        </div>
      </section>
      <FloatingPhoneButton />
    </Layout>
  );
}

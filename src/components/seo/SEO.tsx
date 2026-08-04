import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  schema?: Record<string, unknown>;
}

const SITE_NAME = "DracarySoft";
const BASE_URL = "https://dracarysoft.com";
const DEFAULT_DESC =
  "Agencia digital especializada en páginas web, aplicaciones web, landing pages y presencia digital para pequeños negocios.";
const DEFAULT_IMG = "/dracarysAlternativeLogo.svg";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DracarySoft",
  url: "https://dracarysoft.com",
  logo: "https://dracarysoft.com/dracarysAlternativeLogo.svg",
  description: DEFAULT_DESC,
  email: "dracarysoft@gmail.com",
  sameAs: [
    "https://www.instagram.com/dracarysoft/",
    "https://www.tiktok.com/@dracary.soft",
    "https://www.facebook.com/profile.php?id=61590437895340",
    "https://github.com/dracarysoft",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "dracarysoft@gmail.com",
    availableLanguage: ["Spanish"],
  },
};

export function SEO({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMG,
  url,
  schema,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

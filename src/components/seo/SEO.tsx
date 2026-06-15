import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const SITE_NAME = "DracarySoft";
const BASE_URL = "https://dracarysoft.com";
const DEFAULT_DESC =
  "Agencia digital especializada en páginas web, aplicaciones web, landing pages y presencia digital para pequeños negocios.";
const DEFAULT_IMG = "/dracarysAlternativeLogo.svg";

export function SEO({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMG,
  url,
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
    </Helmet>
  );
}

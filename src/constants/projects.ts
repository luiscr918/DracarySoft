import type { LucideIcon } from "lucide-react";
import { Factory, Globe, Smartphone, Zap } from "lucide-react";
import totemImg from "../assets/imgs/totem-splash.png";
import totemAppImg from "../assets/imgs/totem-app.jpeg";
import newInoxImg from "../assets/imgs/projects/new-inox.jpg";
import extremeBullImg from "../assets/imgs/projects/extreme-bull.jpg";
import lincolnImg from "../assets/imgs/projects/lincoln.jpg";
import glowStudioImg from "../assets/imgs/projects/glow-studio.jpg";
import autoserviceImg from "../assets/imgs/projects/autoservice.jpg";
import gymproImg from "../assets/imgs/projects/gympro.jpg";
import cotizifyImg from "../assets/imgs/projects/cotizify.jpg";
import focusupImg from "../assets/imgs/projects/focusup.jpg";

export type Category = "todos" | "web" | "app" | "landing";

export interface Project {
  id: number;
  title: string;
  client: string;
  category: Category;
  tags: string[];
  desc: string;
  color: string;
  glow: string;
  icon: LucideIcon;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  localImage?: string;
  apkUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "New Inox — Ingeniería Industrial",
    client: "Fabricación en acero inoxidable",
    category: "web",
    tags: ["React", "TypeScript", "Tailwind", "SEO"],
    desc: "Sitio web corporativo para New Inox: diseño, fabricación y mantenimiento de equipos en acero inoxidable para los sectores industrial, alimentario, químico, farmacéutico y cervecería. Proyectos personalizados con enfoque en durabilidad, eficiencia y estándares de calidad.",
    color: "#90A4AE",
    glow: "rgba(144,164,174,0.3)",
    icon: Factory,
    year: "2026",
    liveUrl: "https://new-inox.com/",
    localImage: newInoxImg,
  },
  {
    id: 2,
    title: "Extreme Bull",
    client: "Toro mecánico para eventos",
    category: "landing",
    tags: ["React", "TypeScript", "Tailwind"],
    desc: "Landing page para el alquiler de toro mecánico en eventos: formulario de cotización, redes sociales y botón de WhatsApp integrados, con animación de scroll desde el hero.",
    color: "#E74C3C",
    glow: "rgba(231,76,60,0.3)",
    icon: Zap,
    year: "2026",
    liveUrl: "https://extremebull.new-inox.com/",
    localImage: extremeBullImg,
  },
  {
    id: 3,
    title: "Cotizify — SaaS de Cotizaciones",
    client: "Cotizador B2B Multiempresa",
    category: "app",
    tags: ["React", "TypeScript", "AdonisJS", "PostgreSQL"],
    desc: "SaaS B2B multi-tenant para generar cotizaciones profesionales: catálogo configurable por empresa, motor de reglas de precio sin código y página pública interactiva donde los clientes aceptan la cotización en línea.",
    color: "#16A085",
    glow: "rgba(22,160,133,0.3)",
    icon: Zap,
    year: "2026",
    liveUrl: "https://cotizify.dracarysoft.com/",
    localImage: cotizifyImg,
  },
  {
    id: 4,
    title: "FocusUp — Técnicas de Estudio",
    client: "EdTech · Productividad",
    category: "web",
    tags: ["React 19", "TypeScript", "Tailwind 4", "React Router 7"],
    desc: "App web gratuita que reúne las cuatro técnicas de estudio más efectivas: temporizador Pomodoro con estadísticas locales, grabación con cámara y micro para practicar Feynman, método Cornell exportable a PDF y plantillas editables de mapas mentales. Bilingüe español/inglés, con modo día/noche, optimizada para buscadores y sin registro.",
    color: "#14B8A6",
    glow: "rgba(20,184,166,0.3)",
    icon: Zap,
    year: "2026",
    liveUrl: "https://focusup.dracarysoft.com/",
    localImage: focusupImg,
  },
  {
    id: 5,
    title: "U.E. Lincoln Larrea",
    client: "Institución Educativa",
    category: "web",
    tags: ["React", "SEO", "Responsive"],
    desc: "Sitio web institucional para la Unidad Educativa Lincoln Larrea con información académica, noticias, galería de eventos y contacto para padres de familia.",
    color: "#27AE60",
    glow: "rgba(39,174,96,0.3)",
    icon: Globe,
    year: "2025",
    liveUrl: "https://uelincolnlarrea.netlify.app/",
    localImage: lincolnImg,
  },
  {
    id: 6,
    title: "Totem Restobar — Web",
    client: "Restaurante & Bar",
    category: "web",
    tags: ["Flutter Web", "Dart", "Firebase"],
    desc: "Sitio web para restaurante con menú interactivo, sistema de reservas en línea y galería de platos. Diseño elegante y atractivo.",
    color: "#C0392B",
    glow: "rgba(192,57,43,0.3)",
    icon: Globe,
    year: "2025",
    liveUrl: "https://totemsimulator.netlify.app/",
    localImage: totemImg,
  },
  {
    id: 7,
    title: "Glow Studio — Estética",
    client: "Centro de Estética",
    category: "landing",
    tags: ["Angular", "Framer Motion", "GSAP"],
    desc: "Landing page para centro de estética con catálogo de servicios, reserva de citas en línea y galería de resultados. Animaciones premium.",
    color: "#5DADE2",
    glow: "rgba(93,173,226,0.3)",
    icon: Zap,
    year: "2025",
    liveUrl: "https://estetica-simulator.netlify.app/",
    localImage: glowStudioImg,
  },
  {
    id: 8,
    title: "Totem Restobar — App",
    client: "Restaurante & Bar",
    category: "app",
    tags: ["Flutter", "Dart", "Firebase"],
    desc: "Aplicación móvil para restaurante con menú digital, pedidos en línea, seguimiento en tiempo real y sistema de fidelización de clientes.",
    color: "#C0392B",
    glow: "rgba(192,57,43,0.3)",
    icon: Smartphone,
    year: "2025",
    localImage: totemAppImg,
    apkUrl: "/app-release.apk",
  },
  {
    id: 9,
    title: "AutoService — Taller Web",
    client: "Taller Automotriz",
    category: "web",
    tags: ["React", "TypeScript", "SEO", "Firebase"],
    desc: "Sitio web para taller automotriz con catálogo de servicios, agendamiento de citas, testimonios de clientes y optimización SEO local.",
    color: "#1B4F72",
    glow: "rgba(27,79,114,0.3)",
    icon: Globe,
    year: "2025",
    liveUrl: "https://taller-simulator.netlify.app/",
    localImage: autoserviceImg,
  },
  {
    id: 10,
    title: "GymPro — Sitio Web",
    client: "Gimnasio Fitness",
    category: "web",
    tags: ["Angular", "TypeScript", "Tailwind", "Firebase"],
    desc: "Sitio web para gimnasio con planes de membresía, horarios de clases, galería y formulario de contacto. Diseño moderno y carga ultra rápida.",
    color: "#2E86AB",
    glow: "rgba(46,134,171,0.3)",
    icon: Globe,
    year: "2025",
    liveUrl: "https://gym-simulator.netlify.app/",
    localImage: gymproImg,
  },
];

export const PROJECT_FILTERS: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "web", label: "Páginas Web" },
  { key: "app", label: "Aplicaciones" },
  { key: "landing", label: "Landing Pages" },
];

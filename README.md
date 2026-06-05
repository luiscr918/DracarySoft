# DracarySoft — Sitio web

**Descripción**

Proyecto frontend para la presentación de DracarySoft: landing interactiva construida con React + Vite y animaciones GSAP/Framer Motion. Incluye componentes reutilizables, estilos con Tailwind y un diseño pensado para mostrar servicios, proyectos y contacto.

**Demo local**

- Requisitos: Node.js 16+ y npm o pnpm.
- Instalar dependencias:

```bash
npm install
```

- Levantar en modo desarrollo:

```bash
npm run dev
```

- Compilar para producción:

```bash
npm run build
```

- Previsualizar build:

```bash
npm run preview
```

**Estructura principal**

- `index.html` — entrada HTML.
- `src/` — código fuente:
  - `main.tsx`, `App.tsx` — bootstrap y rutas.
  - `components/` — componentes reutilizables (layout, animaciones, UI).
  - `pages/` — páginas públicas (Home, Servicios, Contacto, etc.).
  - `styles/tailwind.css` — estilos globales.
  - `assets/` — imágenes y fuentes.

**Tecnologías**

- React + TypeScript
- Vite
- Tailwind CSS
- GSAP y Framer Motion (animaciones)
- Lucide / react-icons (iconografía)

**Notas importantes / personalización**

- Tipografía: el proyecto incorpora la familia `Cinzel` para la marca. Para asegurar que se cargue correctamente, añade la importación de la fuente en `index.html` (Google Fonts) o en tus estilos globales si aún no está.
- Animación de entrada (DragonIntro): puedes ajustar su duración y comportamiento editando `src/components/animations/DragonIntro.tsx` (timeline de GSAP y duraciones).
- Logos: los assets del logo ya incluyen fondo transparente; evita aplicar `border-radius` o `box-shadow` en los `img` si quieres mostrar la imagen tal cual.

**Scripts disponibles (package.json)**

- `dev` — inicia Vite en modo desarrollo.
- `build` — genera la compilación de producción.
- `preview` — sirve la compilación para previsualizar.
- `lint` / `format` — (si están configurados) ejecutan lint/format.

Ejemplo:

```bash
npm run dev
```

**Cómo contribuir**

- Crear una rama por feature: `feature/mi-cambio`.
- Hacer PR con descripción clara y pruebas visuales (screenshots o video corto).
- Mantener consistencia en estilos y accesibilidad.

**Contacto**

Si necesitas ayuda con la personalización de animaciones, fuentes o despliegue, abre un issue o contáctame directamente.

---

_Generado y mantenido por el equipo DracarySoft._

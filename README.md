# TutvMedia 🎬

Una plataforma moderna para descubrir películas y series. Construida con **Astro.js**, **Tailwind CSS** y la API de **The Movie Database (TMDB)**.

## ✨ Características

- 🎯 **Diseño Minimalista**: Interfaz limpia y elegante con paleta de colores claros, azules y blancos
- 🚀 **Rendimiento Óptimo**: Sitio estático pre-renderizado con Astro.js para carga ultra-rápida
- 🎠 **Carruseles Dinámicos**: Navegación fluida entre películas con Embla Carousel
- 🎬 **Integración TMDB**: Acceso a miles de películas y series en tiempo real
- 📱 **Totalmente Responsive**: Optimizado para desktop, tablet y móvil
- 🎨 **Componentes Reutilizables**: Arquitectura escalable y mantenible
- ♿ **Accesibilidad**: Cumple con estándares WCAG 2.1

## 🛠️ Tech Stack

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| [Astro](https://astro.build) | ^5.15.9 | Framework principal |
| [Tailwind CSS](https://tailwindcss.com) | ^4.1.17 | Estilos y diseño |
| [Embla Carousel](https://www.embla-carousel.com) | ^8.6.0 | Carruseles dinámicos |
| [TypeScript](https://www.typescriptlang.org) | ^5+ | Tipado estático |

## 📋 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm** o **yarn**: gestor de paquetes
- **API Key de TMDB**: [obtener aquí](https://www.themoviedb.org/settings/api)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tutvmedia.git
cd tutvmedia
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita el archivo `.env` y añade tu API key de TMDB:

```env
PUBLIC_TMDB_API_KEY=tu_api_key_aqui
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📚 Estructura del Proyecto

```
tutvmedia/
├── src/
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── MovieCard.astro  # Tarjeta individual de película
│   │   └── MovieCarousel.astro # Carrusel dinámico
│   ├── layouts/
│   │   └── MainLayout.astro # Layout principal con header y footer
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── services/
│   │   └── tmdb.ts          # Servicios e integración API TMDB
│   ├── styles/
│   │   └── globals.css      # Estilos globales y configuración Tailwind
│   └── types/
│       └── movie.ts         # Tipos TypeScript para películas
├── public/                  # Archivos estáticos (favicon, etc.)
├── .env.example            # Variables de entorno de ejemplo
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts
```

## 🎯 Cómo Obtener tu API Key de TMDB

1. Visita [The Movie Database](https://www.themoviedb.org)
2. Crea una cuenta o inicia sesión
3. Ve a [Configuración → API](https://www.themoviedb.org/settings/api)
4. Solicita una API Key (aceptarás sus términos)
5. Copia tu API key v3 (con autenticación)
6. Pégala en tu archivo `.env`

## 📖 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación de producción
npm run preview

# Ejecutar comandos de Astro directamente
npm run astro -- --help
```

## 🎨 Personalización

### Paleta de Colores

Los colores están definidos en `tailwind.config.mjs`. La paleta principal usa tonos de azul claro:

```javascript
// tailwind.config.mjs
theme: {
  colors: {
    blue: {
      50: '#f0f9ff',   // Muy claro
      500: '#0ea5e9',  // Principal
      600: '#0284c7',  // Oscuro
    }
  }
}
```

## 🔄 Integración con TMDB API

El servicio principal está en `src/services/tmdb.ts`:

```typescript
// Obtener películas populares
import { getPopularMovies } from '@/services/tmdb';
const movies = await getPopularMovies(1);

// Buscar películas
import { searchMovies } from '@/services/tmdb';
const results = await searchMovies('Inception');

// Detalles de película
import { getMovieDetails } from '@/services/tmdb';
const movie = await getMovieDetails(550); // Fight Club

// Películas en tendencia
import { getTrendingMovies } from '@/services/tmdb';
const trending = await getTrendingMovies('week');
```

## 🚀 Deploy

### Vercel

1. Empuja tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Añade la variable `PUBLIC_TMDB_API_KEY` en Environment Variables
4. Vercel compilará y desplegará automáticamente

### Netlify

```bash
npm run build
```

Sube la carpeta `dist/` a Netlify y configura las variables de entorno.

## 📦 Performance

- ⚡ **Astro Static Generation**: Páginas pre-renderizadas
- 🖼️ **Optimización de Imágenes**: Carga perezosa automática
- 🎯 **Tailwind PurgeCSS**: CSS minimizado solo con estilos usados
- 📦 **Zero JavaScript innecesario**: Solo JavaScript requerido

### Métricas Esperadas

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

## 🙏 Créditos

- Datos de películas: [The Movie Database](https://www.themoviedb.org)
- Framework: [Astro](https://astro.build)
- Estilos: [Tailwind CSS](https://tailwindcss.com)
- Carruseles: [Embla Carousel](https://www.embla-carousel.com)

---

**Hecho con ❤️ por [Tu Nombre/Equipo]**

Última actualización: Noviembre 2024

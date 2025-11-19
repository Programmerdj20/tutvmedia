# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TutvMedia** is a modern movie and TV series discovery platform built with Astro.js and Tailwind CSS, integrating with The Movie Database (TMDB) API. The project uses Static Site Generation (SSG) for optimal performance with minimal client-side JavaScript.

## Common Development Commands

### Essential Commands

```bash
# Start development server
npm run dev

# Build the project for production
npm run build

# Preview the production build locally
npm run preview

# Run Astro CLI commands directly
npm run astro -- [command]
```

### Development Notes

- All builds use Astro's static generation by default
- API calls (TMDB) happen at build time, not runtime
- Development server runs on `localhost:4321` by default

## Architecture & Structure

### High-Level Architecture

**TutvMedia** follows a **Static Site Generation (SSG)** pattern:

1. **Build Time**: Astro pre-renders all pages to static HTML/CSS
2. **Data Fetching**: TMDB API calls occur during build, not at runtime
3. **Client Runtime**: Minimal JavaScript (only carousel interactions)
4. **Security**: API key kept server-side, never exposed to client

This approach ensures:
- Ultra-fast page loads (static files only)
- Excellent SEO (pre-rendered HTML)
- Low bandwidth usage
- Lighthouse Performance score of 95+

### Directory Structure

```
src/
├── components/           # Astro components (rendered server-side)
│   ├── MovieCard.astro   # Individual movie card with hover overlay effects
│   └── MovieCarousel.astro # Horizontal scrollable carousel with prev/next controls
│
├── layouts/
│   └── MainLayout.astro  # Base layout with header, footer, Google Fonts, and meta tags
│
├── pages/               # File-based routing (Astro)
│   └── index.astro      # Homepage: hero section + 2 carousels + CTA + info cards
│
├── services/
│   └── tmdb.ts          # TMDB API integration
│                         # Functions: getPopularMovies, searchMovies, getMovieDetails,
│                         # getTrendingMovies, getImageUrl
│
├── styles/
│   └── globals.css      # Tailwind v4 styles + TUTV theme + reusable components
│                         # Tailwind imported via @import "tailwindcss"
│                         # Custom components, animations, and scrollbar styling
│
└── types/
    └── movie.ts         # TypeScript interfaces for TMDB responses
                          # MovieResult, TMDBResponse, Movie (extended with genres, runtime, etc.)
```

### Key Design Decisions

1. **Astro Components Only**: No frontend frameworks (React, Vue) - pure HTML with minimal JS
2. **Type Safety**: Full TypeScript coverage for TMDB API integration
3. **Responsive Design**: Mobile-first approach using Tailwind utility classes
4. **CSS Architecture**: Tailwind v4 with custom @theme configuration inline in globals.css
5. **Error Handling**: Graceful fallbacks when TMDB API fails (empty carousels, placeholder images)
6. **Build-Time Data**: All movie data fetched at build time via Promise.all() for performance
7. **Google Fonts**: Exo 2 (display headings) and Inter (body text) loaded with preconnect optimization

### Data Flow

```
index.astro (Page)
  ├─> getPopularMovies() ──> TMDB API
  ├─> getTrendingMovies() ──> TMDB API
  └─> MovieCarousel (×2)
       └─> MovieCard (×N)
            └─> getImageUrl() ──> CDN
```

At build time, all movie data is fetched and rendered into static HTML. Users receive zero runtime API calls.

## Code Organization Patterns

### Services Layer (src/services/tmdb.ts)

- **Single Responsibility**: All TMDB API interactions centralized
- **Error Handling**: Try-catch with fallback responses (empty results)
- **Image URLs**: `getImageUrl()` standardizes poster/backdrop URLs with configurable sizes (w200, w500, original)
- **Language Support**: All API calls use `language=es-ES` (Spanish)
- **Pagination**: Supported in `getPopularMovies()` and `searchMovies()`

**Key Functions**:
- `getPopularMovies(page)` - Most viewed movies
- `getTrendingMovies(timeWindow)` - Trending by day/week
- `searchMovies(query, page)` - Movie search (infrastructure ready, not used in UI yet)
- `getMovieDetails(movieId)` - Full movie details (infrastructure ready, not used in UI yet)
- `getImageUrl(path, size)` - Convert TMDB paths to CDN URLs

### Components

**MovieCard.astro** (src/components/MovieCard.astro):
- Single `.astro` file with typed Props interface
- Displays poster, title, year, rating, and overview
- Hover overlay with full overview and "Ver Detalles" button
- Color-coded rating badge (green >= 7, yellow >= 5, red < 5)
- Uses `animate-fadeIn` animation class

**MovieCarousel.astro** (src/components/MovieCarousel.astro):
- Props: `title`, `subtitle` (optional), `movies` array
- Client-side JavaScript for scroll navigation (prev/next buttons)
- Dynamic ID generation based on title for multiple instances
- Responsive: Fixed widths (200px mobile, 240px desktop)
- Scroll amount: 300px per click
- Button visibility updates based on scroll position

**MainLayout.astro** (src/layouts/MainLayout.astro):
- Props: `title`, `description` (both optional with defaults)
- Includes Google Fonts with preconnect optimization
- Meta tags for SEO (description, keywords, author)
- Theme color meta tag (#00CEFF)
- Sticky header with navigation
- Footer with 4-column grid layout

### Styling Conventions

**Tailwind v4 Specifics**:
- CSS configuration at top of globals.css with `@import "tailwindcss"`
- Theme variables defined with `@theme` block (not config file)
- Custom components defined with `@apply` in `@layer components`
- Base typography defined in `@layer base`

**TUTV Color Palette** (from globals.css @theme):
- Primary Cyan: `#00CEFF` - Main brand color
- Cyan Dark: `#0088CC` - Hover states
- Cyan Light: `#B0E8FF` - Light accents
- Navy: `#0A1D37` - Dark backgrounds
- Almost Black: `#050B15` - Ultra dark backgrounds
- Soft Gray: `#A0B9CC` - Secondary text
- Medium Gray: `#556677` - Muted text

**Typography**:
- Display Font: 'Exo 2' (headings, buttons) - weights 400, 600, 700, 800
- Body Font: 'Inter' (paragraphs, general text) - weights 400, 500, 600, 700
- Headings use font-display variable, bold weights, tight tracking
- Smooth scroll enabled globally

**Reusable Component Classes**:

*Buttons*:
- `.btn-primary` - Cyan gradient button with hover shadow and scale transform
- `.btn-secondary` - Transparent with cyan border (outline style)
- `.btn-ghost` - Minimal text button for tertiary actions

*Cards*:
- `.card` - Base card with navy background, cyan border, backdrop blur
- `.card-premium` - Enhanced gradient background with larger padding and transform

*Text*:
- `.gradient-text` - Cyan to purple gradient text effect
- `.text-secondary` - Soft gray color for secondary content

*Badges & Effects*:
- `.badge-cyan` - Rounded pill with cyan background and border
- `.divider-cyan` - Horizontal gradient divider line
- `.glow-cyan` - Box shadow glow effect
- `.hero-bg` - Navy to black gradient background
- `.hero-gradient-overlay` - Subtle cyan/purple overlay

**Animation Classes**:
- `.animate-fadeIn` - Fade in with upward slide (0.6s)
- `.animate-slideIn` - Slide in from left (0.6s)
- `.animate-slideInRight` - Slide in from right (0.6s)
- `.animate-slideUp` - Slide up from below (0.8s)
- `.animate-pulse` - Opacity pulse (2s infinite)
- `.animate-glow` - Box shadow pulse (2s infinite)

**Custom Scrollbar** (Webkit):
- Track: Navy transparent background
- Thumb: Cyan gradient with rounded corners
- Hover: Cyan to purple gradient with glow

## Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration - includes @tailwindcss/vite plugin |
| `tailwind.config.mjs` | Empty for v4 (configuration is inline in globals.css) |
| `tsconfig.json` | Extends astro/tsconfigs/strict - strict type checking |
| `.env` | Contains PUBLIC_TMDB_API_KEY (not committed) |

## Technology Stack

| Technology | Version | Role |
|-----------|---------|------|
| Astro | ^5.15.9 | Framework - SSG, components, routing |
| Tailwind CSS | ^4.1.17 | Styling - utility-first CSS (devDependency) |
| @tailwindcss/vite | ^4.1.17 | Vite integration for Tailwind |
| TypeScript | (implicit) | Type safety |
| embla-carousel | ^8.6.0 | Carousel library (available but not currently used) |
| astro-icon | ^1.1.5 | Icon handling (devDependency) |

## Design System

**Brand Identity**:
- Logo: "TM" monogram in gradient box
- Brand Name: "TutvMedia" with gradient text
- Theme Color: #00CEFF (cyan)

**Spacing & Layout**:
- Max content width: 7xl (1280px)
- Section padding: py-12 to py-16
- Card padding: p-6 to p-8
- Gap between items: gap-4 to gap-8

**Border Radius**:
- Buttons: rounded-lg
- Cards: rounded-2xl
- Badges: rounded-full

**Shadows**:
- Standard: shadow-sm, shadow-md, shadow-lg, shadow-xl
- Cyan glow: shadow-cyan, shadow-cyan-lg (custom)

## Building & Deployment

### Building

```bash
npm run build
```

Output: Static files in `/dist` directory
- All pages pre-rendered to HTML
- CSS extracted and optimized
- Minimal JavaScript (only carousel scripts)
- Ready for any static hosting (Vercel, Netlify, Cloudflare Pages, etc.)

### Environment Variables

Required for build:
- `PUBLIC_TMDB_API_KEY` - TMDB API v3 authentication key

Public prefix means it's available at build time. The key is used server-side during build.

## Important Limitations & Future Work

**Not Yet Implemented**:
- Search functionality (UI component exists in service layer, not connected to UI)
- Movie detail pages (service function exists, no routing/pages)
- User authentication/lists
- Database integration
- "Explorar" and "Mi Lista" navigation links (currently placeholder #)

**Known Constraints**:
- All data fetched at build time (no dynamic updates without rebuild)
- Images cached by CDN - changes take time to propagate
- TMDB API rate limits apply during builds
- embla-carousel is installed but custom scroll implementation is used instead

## Debugging Tips

1. **Build Fails**: Check `PUBLIC_TMDB_API_KEY` in `.env` file
2. **Images Missing**: Verify TMDB API response includes `poster_path`/`backdrop_path`
3. **Carousel Not Working**: Check browser console for JavaScript errors; buttons may not show if at scroll boundaries
4. **Styling Issues**: Check globals.css for Tailwind configuration, not tailwind.config.mjs
5. **Fonts Not Loading**: Verify Google Fonts URL in MainLayout.astro head section
6. **API Warning**: Console shows "TMDB_API_KEY not found" if .env is missing

## Language & Localization

Project is configured for Spanish:
- All API calls: `language=es-ES`
- UI text: Spanish language
- HTML lang attribute: "es"
- Future: Create separate pages for other languages or add i18n support

## Code Conventions

- Use TypeScript interfaces for all props and API responses
- Export Props interface from .astro component frontmatter
- Use semantic HTML elements
- Prefix API-related environment variables with `PUBLIC_`
- Use `getImageUrl()` helper for all TMDB image URLs
- Apply Tailwind classes directly; create @layer components only for frequently reused patterns

---

**Last Updated**: November 2025 | Stack: Astro v5 + Tailwind CSS v4

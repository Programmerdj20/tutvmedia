# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📋 Project Overview

**TutvMedia** is a modern movie and TV series discovery platform built with Astro.js and Tailwind CSS, integrating with The Movie Database (TMDB) API. The project uses Static Site Generation (SSG) for optimal performance with minimal client-side JavaScript.

## 🛠️ Common Development Commands

### Essential Commands

```bash
# Build the project for production
npm run build

# Preview the production build locally
npm run preview

# Run Astro CLI commands directly
npm run astro -- [command]
```

### Development Notes

- **Development server is intentionally not started via command** - refer to project instructions if needed
- All builds use Astro's static generation by default
- API calls (TMDB) happen at build time, not runtime

## 🏗️ Architecture & Structure

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
│   ├── MovieCard.astro   # Individual movie card with hover effects
│   └── MovieCarousel.astro # Horizontal scrollable carousel with prev/next controls
│
├── layouts/
│   └── MainLayout.astro  # Base layout with header, footer, and slot for page content
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
│   └── globals.css      # Tailwind v4 styles + custom theme + reusable components
│                         # Tailwind imported via @import "tailwindcss"
│                         # Custom components: .btn-primary, .btn-secondary, .card
│
└── types/
    └── movie.ts         # TypeScript interfaces for TMDB responses
```

### Key Design Decisions

1. **Astro Components Only**: No frontend frameworks (React, Vue) - pure HTML with minimal JS
2. **Type Safety**: Full TypeScript coverage for TMDB API integration
3. **Responsive Design**: Mobile-first approach using Tailwind utility classes
4. **CSS Architecture**: Tailwind v4 with custom @theme configuration inline in globals.css
5. **Error Handling**: Graceful fallbacks when TMDB API fails (empty carousels, placeholder images)
6. **Build-Time Data**: All movie data fetched at build time via Promise.all() for performance

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

## 📚 Code Organization Patterns

### Services Layer (src/services/tmdb.ts)

- **Single Responsibility**: All TMDB API interactions centralized
- **Error Handling**: Try-catch with fallback responses (empty results)
- **Image URLs**: `getImageUrl()` standardizes poster/backdrop URLs with configurable sizes
- **Language Support**: All API calls use `language=es-ES` (Spanish)
- **Pagination**: Supported in `getPopularMovies()` and `searchMovies()`

**Key Functions**:
- `getPopularMovies(page)` - Most viewed movies
- `getTrendingMovies(timeWindow)` - Trending by day/week
- `searchMovies(query, page)` - Movie search (infrastructure ready, not used in UI yet)
- `getMovieDetails(movieId)` - Full movie details (infrastructure ready, not used in UI yet)
- `getImageUrl(path, size)` - Convert TMDB paths to CDN URLs

### Components

**MovieCard.astro** (movie display):
- Single `.astro` file - no client-side logic
- Props: `movie` object from TMDB
- Styling: Hover zoom, color-coded rating badge

**MovieCarousel.astro** (scrollable carousel):
- Props: `title`, `subtitle`, `movies` array
- Client-side JavaScript for scroll navigation
- Dynamic ID generation for multiple instances
- Responsive: Fixed widths (200px mobile, 240px desktop)

### Styling Conventions

**Tailwind v4 Specifics**:
- CSS configuration at top of globals.css with `@import "tailwindcss"`
- Theme colors defined with `@theme` block (not config file)
- Custom components (`.btn-primary`, `.card`) defined with `@apply`
- No tailwind.config.mjs needed for simple projects

**Reusable Classes**:
- `.btn-primary` - Blue gradient button
- `.btn-secondary` - White button with blue border
- `.card` - Card wrapper with shadow and border
- `.gradient-text` - Text with blue gradient

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration - includes @tailwindcss/vite plugin |
| `tailwind.config.mjs` | Empty for v4 (configuration is inline in globals.css) |
| `tsconfig.json` | Extends astro/tsconfigs/strict - strict type checking |
| `.env.example` | Template showing required PUBLIC_TMDB_API_KEY variable |

## 📦 Technology Stack

| Technology | Version | Role |
|-----------|---------|------|
| Astro | ^5.15.9 | Framework - SSG, components, routing |
| Tailwind CSS | ^4.1.17 | Styling - utility-first CSS |
| @tailwindcss/vite | ^4.1.17 | Vite integration for Tailwind |
| TypeScript | (implicit) | Type safety |
| Embla Carousel | ^8.6.0 | Carousel functionality (imported but not actively used in current carousel) |
| astro-icon | ^1.1.5 | Icon handling |

## 🎨 Design System

**Color Palette** (from globals.css theme):
- Primary: Blue 500 (`#0ea5e9`)
- Light: Blue 50-100 (backgrounds)
- Dark: Blue 600 (`#0284c7`, hover states)
- Neutral: Gray (text, borders)

**Typography**:
- Headings: Bold, large sizes (h1: 48-56px)
- Body: Regular weight, 16px base
- Smooth scroll enabled globally

## 🚀 Building & Deployment

### Building

```bash
npm run build
```

Output: Static files in `/dist` directory
- All pages pre-rendered to HTML
- CSS extracted and optimized
- No JavaScript files unless component scripts exist
- Ready for any static hosting (Vercel, Netlify, etc.)

### Environment Variables

Required for build:
- `PUBLIC_TMDB_API_KEY` - TMDB API v3 authentication key

Public prefix means it's available at build time and shipped in client code if used.

## ⚠️ Important Limitations & Future Work

**Not Yet Implemented**:
- Search functionality (UI component exists, not connected)
- Movie detail pages (service function exists, no routing)
- User authentication/lists
- Database integration

**Known Constraints**:
- All data fetched at build time (no dynamic updates without rebuild)
- Images cached by CDN - changes take time to propagate
- TMDB API rate limits apply during builds

## 🔍 Debugging Tips

1. **Build Fails**: Check `PUBLIC_TMDB_API_KEY` in `.env`
2. **Images Missing**: Verify TMDB API response includes `poster_path`/`backdrop_path`
3. **Carousel Not Working**: Check browser console for JavaScript errors in MovieCarousel
4. **Styling Issues**: Check globals.css for Tailwind configuration, not tailwind.config.mjs

## 📝 Language & Localization

Project is configured for Spanish:
- All API calls: `language=es-ES`
- UI text: Spanish language
- Future: Create separate pages for other languages or add i18n support

---

**Last Updated**: November 2024 | Stack: Astro v5 + Tailwind CSS v4
- tu rol para este proyecto es de web developer senior con alta experiencia en astro.js y tailwind
# 🚀 Guía de Inicio Rápido - TutvMedia

## Paso 1: Obtener tu API Key de TMDB (5 minutos)

1. Ve a https://www.themoviedb.org/settings/api
2. Regístrate o inicia sesión
3. Acepta los términos y solicita tu API Key
4. Copia la **API Key v3 (con autenticación)**

## Paso 2: Configurar el archivo .env (1 minuto)

```bash
# En el archivo .env (ya existe)
PUBLIC_TMDB_API_KEY=tu_api_key_aqui
```

Reemplaza `tu_api_key_aqui` con tu clave real.

## Paso 3: Iniciar el servidor (1 minuto)

```bash
npm run dev
```

Tu proyecto estará en: **http://localhost:3000**

## Estructura Actual

✅ **Ya implementado:**
- Página principal con hero section dinámico
- Carruseles de películas populares y tendencias
- Integración completa con TMDB API
- Layout minimalista con tema azul/blanco
- Componentes reutilizables (MovieCard, MovieCarousel)
- TypeScript con tipado estricto
- Tailwind CSS configurado
- README profesional

## Próximos Pasos Recomendados

1. **Página de detalles de película**
   ```bash
   # Crea: src/pages/movie/[id].astro
   ```

2. **Página de búsqueda**
   ```bash
   # Crea: src/pages/search.astro
   # Implementa: searchMovies() desde tmdb.ts
   ```

3. **Mi Lista (Local Storage)**
   ```bash
   # Agregar componentes para guardar favoritos
   ```

4. **Modo Oscuro**
   ```bash
   # Usar preferencias del sistema o toggle manual
   ```

## Comandos Útiles

```bash
# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación
npm run preview

# Ver ayuda de Astro
npm run astro -- --help
```

## Tips Profesionales

- **Componentes Astro**: Mejor rendimiento que React para esta app
- **Servicios TMDB**: Todos están en `src/services/tmdb.ts`
- **Estilos**: Usa Tailwind `@apply` en `src/styles/globals.css`
- **TypeScript**: Aprovecha `src/types/movie.ts` para seguridad

## Solución de Problemas

**API no trae datos:**
- Verifica que tu `PUBLIC_TMDB_API_KEY` sea correcta
- Comprueba que el archivo `.env` existe y está en la raíz
- Reinicia el servidor: `Ctrl+C` y `npm run dev`

**Build fallando:**
```bash
# Limpia la caché y reinstala
rm -rf node_modules dist .astro
npm install
npm run build
```

## Documentación

- 📚 [Astro Docs](https://docs.astro.build)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)
- 🎬 [TMDB API Docs](https://developer.themoviedb.org/docs)
- 🎠 [Embla Carousel Docs](https://www.embla-carousel.com)

---

**¡Listo para empezar! Cualquier duda, revisa el README principal.** 🎉

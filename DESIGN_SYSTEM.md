# Sistema de Diseño - TutvMedia

Guía completa del sistema de identidad de marca y componentes reutilizables de TutvMedia, inspirado en el logo azul vibrante.

---

## 🎨 Paleta de Colores

### Colores Primarios

| Nombre | Código HEX | Código RGB | Uso |
|--------|-----------|-----------|-----|
| **Cyan (Logo TUTV)** | `#00CEFF` | rgb(0, 206, 255) | Color principal, botones, acentos |
| **Cyan Dark** | `#0088CC` | rgb(0, 136, 204) | Hover states, sombras |
| **Navy** | `#0A1D37` | rgb(10, 29, 55) | Fondos oscuros, hero sections |
| **Almost Black** | `#050B15` | rgb(5, 11, 21) | Fondo ultra oscuro |
| **Cyan Light** | `#B0E8FF` | rgb(176, 232, 255) | Fondos claros, tarjetas |

### Escala de Grises

| Nombre | Código HEX | Uso |
|--------|-----------|-----|
| **White** | `#FFFFFF` | Texto sobre fondos oscuros, backgrounds |
| **Soft Gray** | `#A0B9CC` | Texto secundario |
| **Medium Gray** | `#556677` | Bordes sutiles |
| **Dark Gray** | `#2d3748` | Texto oscuro |

---

## 🔤 Tipografías

### Google Fonts Integradas

```html
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Tipografía Display (Exo 2)

Para títulos principales, headlines y elementos destacados.

| Uso | Tamaño | Peso | Ejemplo |
|-----|--------|------|---------|
| H1 | 56px - 64px | 800 | Títulos principales |
| H2 | 48px - 56px | 800 | Subtítulos principales |
| H3 | 36px - 48px | 700 | Encabezados de sección |
| H4 | 28px - 32px | 700 | Subencabezados |
| Buttons | 16px | 700 | Texto en botones |

### Tipografía Body (Inter)

Para texto descriptivo, párrafos y contenido principal.

| Uso | Tamaño | Peso | Espaciado |
|-----|--------|------|-----------|
| Párrafo | 16px | 400 | 1.625 (line-height) |
| Párrafo Destacado | 16px | 500 | 1.625 |
| Small Text | 14px | 400 | 1.5 |
| Label | 12px | 600 | 1.4 |

---

## 🎨 Degradados Recomendados

### Hero Principal / Fondos Grandes

```css
background: linear-gradient(135deg, #0A1D37 0%, #050B15 100%);
```

### Botones y CTAs

```css
background: linear-gradient(45deg, #00CEFF, #0088CC);
```

### Degradado Premium Neón (2025)

```css
background: linear-gradient(135deg, #00CEFF 0%, #7B00FF 100%);
```

### Tarjetas Sutil

```css
background: linear-gradient(145deg, rgba(10,29,55,0.8) 0%, rgba(5,11,21,0.95) 100%);
```

---

## 🔘 Componentes CSS Disponibles

### Botones

#### Botón Primario `.btn-primary`
Botón con gradiente cyan, sombra y efecto hover.

```html
<button class="btn-primary">Acción Principal</button>
```

**Estilos:**
- Gradiente: #00CEFF → #0088CC
- Padding: 14px 32px
- Border Radius: 8px
- Sombra: rgba(0, 206, 255, 0.3)
- Hover: Levantamiento 3px, sombra aumentada

#### Botón Secundario `.btn-secondary`
Botón outline blanco con borde cyan.

```html
<button class="btn-secondary">Acción Secundaria</button>
```

**Estilos:**
- Borde: 2px solid #00CEFF
- Background: Transparente (hover: rgba(0, 206, 255, 0.1))
- Color: Blanco
- Padding: 14px 32px

#### Botón Ghost `.btn-ghost`
Botón minimalista sin fondo.

```html
<button class="btn-ghost">Acción Terciaria</button>
```

**Estilos:**
- Color: #A0B9CC
- Hover: #00CEFF
- Sin borde ni fondo

### Tarjetas

#### Tarjeta Base `.card`
Tarjeta con backdrop blur y borde sutil.

```html
<div class="card">
  <h3>Contenido</h3>
  <p>Descripción</p>
</div>
```

**Estilos:**
- Background: rgba(10, 29, 55, 0.7) con backdrop-filter: blur(10px)
- Borde: 1px solid rgba(0, 206, 255, 0.3)
- Border Radius: 16px
- Padding: 24px
- Hover: Borde más visible, sombra cyan

#### Tarjeta Premium `.card-premium`
Tarjeta con gradiente de fondo.

```html
<div class="card-premium">
  <h3>Contenido Premium</h3>
  <p>Descripción destacada</p>
</div>
```

**Estilos:**
- Gradiente: rgba(10,29,55,0.8) → rgba(5,11,21,0.95)
- Borde: 1px solid rgba(0, 206, 255, 0.3)
- Padding: 32px
- Hover: Levantamiento 4px, sombra aumentada

### Textos

#### Texto con Gradiente `.gradient-text`
Texto con gradiente cyan a púrpura.

```html
<p class="gradient-text">Texto con Gradiente</p>
```

**Estilos:**
- Gradiente: #00CEFF → #7B00FF
- Font Family: Exo 2

#### Texto Secundario `.text-secondary`
Texto en color gris suave.

```html
<p class="text-secondary">Texto secundario</p>
```

**Color:** #A0B9CC

### Secciones

#### Hero Background `.hero-bg`
Fondo para secciones hero.

```html
<section class="hero-bg">
  <!-- Contenido -->
</section>
```

#### Overlay Gradiente `.hero-gradient-overlay`
Overlay con gradiente cyan a púrpura.

#### Badge Cyan `.badge-cyan`
Etiqueta pequeña con fondo cyan sutil.

```html
<span class="badge-cyan">Destacado</span>
```

#### Divisor `.divider-cyan`
Línea divisoria con gradiente cyan.

#### Efecto Glow `.glow-cyan`
Efecto de brillo alrededor de elementos.

```html
<div class="glow-cyan">Elemento brillante</div>
```

---

## ✨ Animaciones Disponibles

### Fade In `.animate-fadeIn`
Entrada suave con opacidad.
- Duración: 0.6s
- Easing: ease-out

### Slide In `.animate-slideIn`
Entrada deslizante desde la izquierda.
- Duración: 0.6s
- Easing: ease-out

### Slide In Right `.animate-slideInRight`
Entrada deslizante desde la derecha.
- Duración: 0.6s
- Easing: ease-out

### Slide Up `.animate-slideUp`
Entrada desde abajo.
- Duración: 0.8s
- Easing: ease-out

### Pulse `.animate-pulse`
Pulso continuo de opacidad.
- Duración: 2s
- Efecto: Parpadeo suave

### Glow `.animate-glow`
Efecto de brillo pulsante.
- Duración: 2s
- Efecto: Sombra variable

---

## 📱 Breakpoints Responsive

```css
--breakpoint-xs: 30rem (480px)
--breakpoint-sm: 40rem (640px)
--breakpoint-md: 48rem (768px)
--breakpoint-lg: 64rem (1024px)
--breakpoint-xl: 80rem (1280px)
--breakpoint-2xl: 96rem (1536px)
```

### Uso en Tailwind CSS

```html
<!-- Mobile: 1 columna, Tablet: 2 columnas, Desktop: 3 columnas -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <!-- Contenido -->
</div>
```

---

## 🌙 Scrollbar Personalizado

El scrollbar tiene un gradiente cyan a azul con efecto glow en hover.

**Estilos:**
- Track: rgba(10, 29, 55, 0.5)
- Thumb: linear-gradient(180deg, #00CEFF, #0088CC)
- Thumb Hover: linear-gradient(180deg, #00CEFF, #7B00FF) con glow

---

## 📐 Variables CSS Disponibles

Todas las variables están definidas en `src/styles/globals.css` y disponibles para usar:

```css
/* Colores */
var(--color-cyan)
var(--color-cyan-dark)
var(--color-navy)
var(--color-almost-black)
var(--color-cyan-light)
var(--color-white)
var(--color-soft-gray)
var(--color-medium-gray)
var(--color-dark-gray)

/* Tipografías */
var(--font-display)    /* Exo 2 */
var(--font-sans)       /* Inter */

/* Sombras */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
var(--shadow-xl)
var(--shadow-cyan)
var(--shadow-cyan-lg)
```

---

## 🎯 Mejores Prácticas

### 1. Responsive Design
- Siempre usar breakpoints de Tailwind para elementos responsive
- Móvil primero: diseñar para móvil, añadir `md:`, `lg:` para pantallas más grandes

### 2. Colores
- Usar `#00CEFF` para acciones principales (CTAs, botones)
- Usar `#0A1D37` para fondos oscuros
- Usar `#A0B9CC` para texto secundario

### 3. Tipografía
- Exo 2 (peso 700-800) para títulos y headlines
- Inter (peso 400-600) para body text

### 4. Sombras y Efectos
- Usar `.shadow-cyan` para elementos con foco cyan
- Usar `.card` para contenedores estándar
- Usar `.card-premium` para destacados

### 5. Animaciones
- Usar `.animate-fadeIn` para entrada de elementos
- Usar `.animate-slideUp` para efecto de aparición desde abajo
- No sobrecargar: máximo 1-2 animaciones por página

### 6. Spacing
- Usar múltiplos de 4px (Tailwind: `p-4`, `gap-4`, `mt-8`, etc.)
- Padding interior: 24px (`.card`) o 32px (`.card-premium`)

---

## 📦 Estructura CSS

```
globals.css
├── @import "tailwindcss"
├── @theme (Definición de variables)
├── @layer base (Tipografía base)
├── @layer components (Componentes reutilizables)
│   ├── Botones
│   ├── Tarjetas
│   ├── Textos
│   ├── Secciones
│   └── Efectos
├── Animaciones (@keyframes)
├── Smooth scroll
└── Scrollbar personalizado
```

---

## 🔄 Próximos Pasos

1. ✅ Sistema de colores configurado
2. ✅ Tipografías integradas
3. ✅ Componentes CSS creados
4. ⏳ Crear navbar con responsive design
5. ⏳ Actualizar página de inicio
6. ⏳ Crear página de detalles de película
7. ⏳ Implementar búsqueda

---

**Versión:** 1.0 | **Actualizado:** Noviembre 2024

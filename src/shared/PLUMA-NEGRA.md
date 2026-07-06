# PLUMA NEGRA — Sistema de diseño de Ravenmind

Concepto: negro sobre negro. El plumaje de un cuervo no es negro plano —
es un material con capas que gira hacia la luz. El sitio se construye igual:
capas tonales de negro, tipografía blanca como protagonista, y el azul
reservado como *destello* de iridiscencia que solo aparece al interactuar.

## 1 · Material (los cuatro negros)

| Token | Hex | Uso |
|---|---|---|
| `plume-0` | `#0A0A0B` | El más profundo. Hero y Contacto (apertura y cierre). |
| `plume-1` | `#111113` | Servicios, Nosotros. |
| `plume-2` | `#17171A` | Experiencia, Footer, superficies elevadas nivel 1. |
| `plume-3` | `#1E1E22` | Superficies elevadas nivel 2 (modal, inputs). |

**Reglas.** Cada sección vive en UN material. Secciones adyacentes nunca
comparten tono (secuencia actual: 0→1→2→1→0→2). El límite entre secciones
lo marca el cambio de material — prohibido usar bordes, líneas o sombras
como separadores de sección. Una superficie elevada usa el material uno o
dos pasos más claro que su fondo, sin transparencias ni `backdrop-blur`.

## 2 · Acento (`iris`)

`iris #00A3FF` **solo** puede aparecer en estados interactivos: hover,
focus visible, active, `::selection` y el link activo del nav.
Prohibido en: fondos, decoración, glows, sombras de color, texto estático,
bordes en reposo. `iris-deep #00349E` tiene un único uso pasivo permitido:
la capa de color del tratamiento duotono (`.tone-media`).

Si un elemento azul no responde a una acción del usuario, está mal usado.

## 3 · Tinta (texto)

| Token | Hex | Uso | Contraste sobre plume-3 |
|---|---|---|---|
| `ink` | `#FAFAFA` | Titulares, cuerpo principal | 17.5:1 |
| `ink-dim` | `#C7C7CC` | Cuerpo secundario | 10.9:1 |
| `ink-mute` | `#9B9BA1` | Metadata, labels | 4.6:1 (AA) |

No existe texto por debajo de `ink-mute`. `--color-muted #484848` (legacy)
queda solo para bordes/fondos — nunca texto.

## 4 · Motion

- **Curvas**: `ease-settle` (entradas), `ease-lift` (salidas), `ease-hold`
  (cambios in-place). **Duraciones**: `--motion-quick 150ms` (hover/focus),
  `--motion-base 300ms` (acordeón, menú), `--motion-enter 600ms` (reveals).
- Todo reveal se dispara **una sola vez** (`useScrollReveal` desconecta el
  observer al entrar). Nada se re-anima al re-scrollear.
- `prefers-reduced-motion: reduce` congela todas las animaciones y
  transiciones del sitio vía media query global y hace que los reveals
  nazcan visibles. Ningún componente necesita manejarlo a mano.
- Cada animación debe tener un propósito articulable. "Se ve bien" no es
  un propósito (se audita en Fase 7).

## 5 · Tipografía

- **Display — Archivo variable** (`.type-display`, `.type-headline`):
  expandida vía `font-stretch` (125% / 112%), peso 800/700, tracking
  ligeramente negativo, interlínea compacta. La expansión de ancho es el
  gesto tipográfico del sitio — prohibido `tracking-wide` en titulares.
- **Cuerpo — Geist**: escala fluida `display / headline / title-lg / lead /
  copy / note / caption` con `clamp()`. No se usan tamaños arbitrarios.

## 6 · Imagen (dispositivo firma: duotono)

Toda fotografía pasa por `.tone-media`: B/N + capa `iris-deep` fundida por
color. Rectangular, crop editorial. Prohibido: círculos, bordes de color,
glow. Al hover la capa azul cede (`opacity .85 → .55`) y la foto "gira
hacia la luz" — la iridiscencia del plumaje como microinteracción.

## 7 · Forma

Radios: `sharp 2px` (default), `soft 10px` (modal/form), `pill` (solo
controles píldora). Los radios legacy (20/38/29.5px) mueren en Fase 7.

## Estado de migración

- **Fase 1 (esta)**: tokens, materiales aplicados a las 6 superficies
  hook one-shot + reduced-motion, `::selection`/`:focus-visible` globales,
  Anton y JetBrains Mono fuera (Archivo + Geist), glow `neon` eliminado.
- La capa `DEPRECATED` de `index.css` mantiene vivo el layout anterior
  mientras las Fases 2–6 rediseñan sección por sección. Se elimina en Fase 7.

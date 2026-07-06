# Videos del sitio — especificación de producción

Dejar los archivos EXACTAMENTE con estos nombres en esta carpeta
(`public/videos/`). El sitio los detecta solo: no hay que tocar código.
Mientras un archivo no exista, su slot muestra la foto/duotono de respaldo.

## 1 · Retratos vivos (5 clips — hero y sección Nosotros)

| Archivo | Persona |
|---|---|
| `retrato-samuel.mp4` | Samuel Polo |
| `retrato-juan.mp4` | Juan Farelo |
| `retrato-santiago.mp4` | Santiago Torres |
| `retrato-lucas.mp4` | Lucas Carvajal |
| `retrato-berdugo.mp4` | Daniel Berdugo |

- **Encuadre:** vertical 4:5, **1080×1350** (mínimo 720×900). Pecho hacia
  arriba, mirada a cámara, el mismo encuadre para los 5.
- **Contenido:** plano fijo, "retrato que respira": micro-movimiento
  natural (parpadeo, respiración, giro leve de cabeza hacia cámara).
  Nada de gestos bruscos ni zoom — se reproduce como ambiente.
- **Luz/fondo:** fondo oscuro neutro y uniforme (pared gris/negra), luz
  frontal suave. Evitar ventanas y luces de color.
- **Duración:** 4–8 s en **loop perfecto** (primer y último frame casi
  idénticos, o grabar 10 s y recortar un ciclo estable).
- **Técnica:** 24–30 fps, **sin audio**. Si se graba con teléfono:
  estabilizado, 4K y exportar a 1080.

## 2 · Loop de proceso (1 clip — sección Cómo trabajamos)

- **Archivo:** `proceso.mp4` + poster `proceso-poster.jpg` (frame del video).
- **Encuadre:** horizontal 16:9, **1920×1080**.
- **Contenido:** montaje lento de trabajo real: editor con código propio,
  Figma del proyecto, terminal, PR review en GitHub. Tema oscuro en
  pantalla. Sin texto que necesite leerse (es textura, no demo).
- **Duración:** 8–15 s en loop. 24–30 fps. **Sin audio.**

## 3 · Formato de entrega (todos)

- **Códec:** MP4 · H.264 · `yuv420p` · `+faststart` (compatibilidad total).
- **Peso objetivo:** retratos ≤ 2 MB c/u · proceso ≤ 6 MB.
- **Sin pista de audio** (`-an`).
- Posters: JPG del primer frame, mismo nombre (`retrato-samuel.jpg`, …).

Comandos de referencia (ffmpeg):

```bash
# Retrato 4:5
ffmpeg -i entrada.mov -an -vf "scale=1080:1350:force_original_aspect_ratio=increase,crop=1080:1350,fps=30" \
  -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart retrato-samuel.mp4

# Proceso 16:9
ffmpeg -i entrada.mov -an -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30" \
  -c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart proceso.mp4

# Poster
ffmpeg -i retrato-samuel.mp4 -frames:v 1 -q:v 3 retrato-samuel.jpg
```

Notas de reproducción (ya resueltas en código): mudos, en loop, solo se
reproducen en viewport, y con `prefers-reduced-motion` queda el poster.

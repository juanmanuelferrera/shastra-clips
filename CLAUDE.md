# A la luz del Shastra - como hacer Clips - 

Proyecto para generar clips verticales (1080x1920) para YouTube Shorts e Instagram Reels.

## Comandos

```bash
npm run studio      # Abre el editor visual de Remotion
npm run render:30   # Renderiza clip de 30 segundos
npm run render:45   # Renderiza clip de 45 segundos
npm run render:60   # Renderiza clip de 60 segundos
npm run render:all  # Renderiza todos los clips
```

## Uso

1. Coloca el video fuente en `public/assets/`
2. Edita `src/Root.tsx` para configurar:
   - `videoSrc`: ruta al video (usar `staticFile("assets/video.mp4")`)
   - `subtitles`: array de subtítulos con timestamps
3. Ejecuta `npm run studio` para previsualizar
4. Ejecuta `npm run render:XX` para exportar

## Estructura de subtítulos

```typescript
const subtitles = [
  {
    text: "¿Por qué sufrimos?",
    startFrame: 0,
    endFrame: 90,  // 3 segundos a 30fps
    highlight: ["sufrimos"],  // palabras a resaltar en dorado
  },
];
```

## Branding

- Colores en `src/theme.ts`
- Logo arriba: "A LA LUZ DEL SHASTRA"
- CTA abajo: "@luzdelshastra"

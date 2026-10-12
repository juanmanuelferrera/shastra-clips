# Shastra Clips

Generador de clips verticales (1080×1920) para YouTube Shorts e Instagram Reels del canal «A la Luz del Shastra», hecho con Remotion. Recorta un vídeo fuente, le pone subtítulos con palabras resaltadas en dorado y la marca del canal («A LA LUZ DEL SHASTRA» arriba, «@luzdelshastra» abajo).

## Estructura

- `src/Root.tsx` — define las composiciones `Clip30s`, `Clip45s` y `Clip60s`: vídeo, tramo y subtítulos de cada una.
- `src/compositions/VerticalClip.tsx` — la composición vertical.
- `src/components/` — `Subtitles.tsx` y `Branding.tsx`.
- `src/theme.ts` — colores de la marca.
- `public/assets/` — vídeo fuente y subtítulos (`piloto.mp4`, `piloto_espanol.srt`, `piloto_english.srt`); no se versiona.
- `public/fonts/` — tipografías.
- `out/` — clips renderizados (`clip30s.mp4`, `clip45s.mp4`, `clip60s.mp4`); no se versiona.
- `CLAUDE.md` — instrucciones de uso y formato de los subtítulos.

## Uso

```bash
npm run studio       # editor visual de Remotion
npm run render:30    # out/clip30s.mp4
npm run render:45    # out/clip45s.mp4
npm run render:60    # out/clip60s.mp4
npm run render:all   # los tres
```

Para un clip nuevo: poner el vídeo en `public/assets/`, editar `videoSrc` y `subtitles` en `src/Root.tsx`, previsualizar con `studio` y renderizar. `node_modules/` está casi vacío: hará falta instalar las dependencias de `package.json` antes.

## Estado

- 28-mar-2026: commit inicial.
- 12-abr-2026: última actualización de `CLAUDE.md`.

## Repositorio

`https://github.com/juanmanuelferrera/shastra-clips.git` (remoto `origin`).

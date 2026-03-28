import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";

export const Branding: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Aparece después de 1 segundo y desaparece en los últimos 2 segundos
  const showStart = fps;
  const hideStart = durationInFrames - 2 * fps;

  const entryOpacity = interpolate(
    frame,
    [showStart, showStart + fps / 2],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const exitOpacity = interpolate(
    frame,
    [hideStart, hideStart + fps],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = Math.min(entryOpacity, exitOpacity);

  return (
    <>
      {/* Logo/Nombre arriba */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "12px 24px",
            borderRadius: 8,
          }}
        >
          <span
            style={{
              color: theme.colors.primary,
              fontSize: 28,
              fontFamily: theme.fonts.title,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            A LA LUZ DEL SHASTRA
          </span>
        </div>
      </div>

      {/* CTA abajo */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity,
        }}
      >
        <div
          style={{
            backgroundColor: theme.colors.primary,
            padding: "14px 32px",
            borderRadius: 30,
          }}
        >
          <span
            style={{
              color: theme.colors.secondary,
              fontSize: 24,
              fontFamily: theme.fonts.body,
              fontWeight: 700,
            }}
          >
            @luzdelshastra
          </span>
        </div>
      </div>
    </>
  );
};

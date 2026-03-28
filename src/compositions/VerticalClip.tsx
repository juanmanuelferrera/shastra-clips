import {
  AbsoluteFill,
  OffthreadVideo,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  staticFile,
} from "remotion";
import { Subtitles, SubtitleEntry } from "../components/Subtitles";
import { Branding } from "../components/Branding";
import { theme } from "../theme";

export interface VerticalClipProps {
  videoSrc?: string;
  subtitles?: SubtitleEntry[];
  showBranding?: boolean;
  startFrom?: number; // segundos desde donde empieza el clip en el video original
  cropOffsetX?: number; // porcentaje de desplazamiento horizontal (-50 a 50)
}

export const VerticalClip: React.FC<VerticalClipProps> = ({
  videoSrc = "",
  subtitles = [],
  showBranding = true,
  startFrom = 0,
  cropOffsetX = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      {/* Video de fondo - cropeado al centro para vertical */}
      {videoSrc && (
        <AbsoluteFill>
          <OffthreadVideo
            src={videoSrc}
            startFrom={startFrom * fps}
            style={{
              width: "auto",
              height: "100%",
              position: "absolute",
              left: `${50 + cropOffsetX}%`,
              transform: "translateX(-50%)",
            }}
          />
        </AbsoluteFill>
      )}

      {/* Overlay oscuro para mejor legibilidad */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Subtítulos */}
      <Subtitles entries={subtitles} />

      {/* Branding */}
      {showBranding && <Branding />}
    </AbsoluteFill>
  );
};

import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";

export interface SubtitleEntry {
  text: string;
  startFrame: number;
  endFrame: number;
  highlight?: string[]; // palabras a resaltar
}

interface SubtitlesProps {
  entries: SubtitleEntry[];
}

export const Subtitles: React.FC<SubtitlesProps> = ({ entries }) => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  const currentEntry = entries.find(
    (entry) => frame >= entry.startFrame && frame < entry.endFrame
  );

  if (!currentEntry) return null;

  // Animación de entrada
  const entryProgress = spring({
    frame: frame - currentEntry.startFrame,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  const opacity = interpolate(entryProgress, [0, 1], [0, 1]);
  const translateY = interpolate(entryProgress, [0, 1], [30, 0]);

  // Resaltar palabras clave
  const renderText = () => {
    if (!currentEntry.highlight || currentEntry.highlight.length === 0) {
      return currentEntry.text;
    }

    let result = currentEntry.text;
    currentEntry.highlight.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      result = result.replace(
        regex,
        `<span style="color: ${theme.colors.primary}; font-weight: bold;">$1</span>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 180,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 40px",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          backgroundColor: theme.subtitle.background,
          padding: theme.subtitle.padding,
          borderRadius: theme.subtitle.borderRadius,
          maxWidth: theme.subtitle.maxWidth,
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: theme.colors.text,
            fontSize: theme.subtitle.fontSize,
            lineHeight: theme.subtitle.lineHeight,
            fontFamily: theme.fonts.body,
            fontWeight: 600,
            textShadow: `2px 2px 4px ${theme.colors.shadow}`,
          }}
        >
          {renderText()}
        </span>
      </div>
    </div>
  );
};

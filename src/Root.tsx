import { Composition, staticFile } from "remotion";
import { VerticalClip, VerticalClipProps } from "./compositions/VerticalClip";

// Configuración para clips verticales (Shorts/Reels)
const VERTICAL_WIDTH = 1080;
const VERTICAL_HEIGHT = 1920;
const FPS = 30;

// Helper: segundos a frames (con offset de -1.3s para sincronizar mejor)
const OFFSET = -1.3;
const s = (seconds: number) => Math.round((seconds + OFFSET) * FPS);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Clip corto - 20 segundos - Gancho (0:00-0:20) */}
      <Composition
        id="Clip30s"
        component={VerticalClip}
        durationInFrames={20 * FPS}
        fps={FPS}
        width={VERTICAL_WIDTH}
        height={VERTICAL_HEIGHT}
        defaultProps={{
          videoSrc: staticFile("assets/piloto.mp4"),
          startFrom: 0,
          cropOffsetX: 18,
          subtitles: [
            { text: "Are they selling you spirituality?", startFrame: s(0.76), endFrame: s(7.58), highlight: ["selling"] },
            { text: "Think positive, the universe conspires in your favor...", startFrame: s(7.58), endFrame: s(16.42), highlight: ["positive"] },
            { text: "But no one explains why you keep suffering", startFrame: s(16.42), endFrame: s(20), highlight: ["suffering"] },
          ],
          showBranding: true,
        }}
      />

      {/* Clip medio - 45 segundos - Preguntas (0:20-1:05) */}
      <Composition
        id="Clip45s"
        component={VerticalClip}
        durationInFrames={45 * FPS}
        fps={FPS}
        width={VERTICAL_WIDTH}
        height={VERTICAL_HEIGHT}
        defaultProps={{
          videoSrc: staticFile("assets/piloto.mp4"),
          startFrom: 20,
          cropOffsetX: 18,
          subtitles: [
            // Timestamps relativos al clip (restar 20s del original)
            { text: "I've been searching for 40 years", startFrame: s(23.06-20), endFrame: s(28-20), highlight: ["40 years"] },
            { text: "Why do we suffer? Who am I?", startFrame: s(31.82-20), endFrame: s(35-20), highlight: ["suffer"] },
            { text: "What really happens when I die?", startFrame: s(35-20), endFrame: s(41.46-20), highlight: ["die"] },
            { text: "Why do religious organizations end up corrupted?", startFrame: s(41.46-20), endFrame: s(48.86-20), highlight: ["corrupted"] },
            { text: "These are the questions that matter", startFrame: s(50.14-20), endFrame: s(54-20), highlight: ["matter"] },
            { text: "The ones no one wants to touch", startFrame: s(54-20), endFrame: s(58.46-20), highlight: ["no one"] },
            { text: "Because they're uncomfortable", startFrame: s(58.46-20), endFrame: s(62-20), highlight: ["uncomfortable"] },
            { text: "Because they don't fit in a 30-second reel", startFrame: s(62-20), endFrame: s(65-20), highlight: ["30-second"] },
          ],
          showBranding: true,
        }}
      />

      {/* Clip largo - 60 segundos - Propuesta (1:40-2:40) */}
      <Composition
        id="Clip60s"
        component={VerticalClip}
        durationInFrames={60 * FPS}
        fps={FPS}
        width={VERTICAL_WIDTH}
        height={VERTICAL_HEIGHT}
        defaultProps={{
          videoSrc: staticFile("assets/piloto.mp4"),
          startFrom: 100,
          cropOffsetX: 18,
          subtitles: [
            // Timestamps relativos al clip (restar 100s del original)
            { text: "Too academic or too institutional", startFrame: s(100.22-100), endFrame: s(106.78-100), highlight: ["institutional"] },
            { text: "In the Light of the Shastra", startFrame: s(108.6-100), endFrame: s(113.56-100), highlight: ["Shastra"] },
            { text: "A weekly show where I answer your questions", startFrame: s(113.56-100), endFrame: s(119-100), highlight: ["questions"] },
            { text: "About life, suffering, death, institutions", startFrame: s(119-100), endFrame: s(124.14-100), highlight: ["life"] },
            { text: "Using texts thousands of years old", startFrame: s(124.14-100), endFrame: s(132.46-100), highlight: ["thousands"] },
            { text: "No institutional filter", startFrame: s(132.46-100), endFrame: s(136-100), highlight: ["No"] },
            { text: "No economic interest. No sectarianism.", startFrame: s(136-100), endFrame: s(140.48-100), highlight: ["No"] },
            { text: "All content is free. Always.", startFrame: s(140.48-100), endFrame: s(145-100), highlight: ["free"] },
            { text: "Knowledge is not sold. It's shared.", startFrame: s(145-100), endFrame: s(148.46-100), highlight: ["shared"] },
            { text: "If you want answers beyond 'think positive'", startFrame: s(148.46-100), endFrame: s(155-100), highlight: ["answers"] },
            { text: "This show is for you", startFrame: s(155-100), endFrame: s(160-100), highlight: ["you"] },
          ],
          showBranding: true,
        }}
      />
    </>
  );
};

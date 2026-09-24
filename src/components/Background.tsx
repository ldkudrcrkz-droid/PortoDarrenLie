import { useGlobalCursorGlow } from "../hooks/useCursorSpotlight";

function Background() {
  useGlobalCursorGlow();

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-cursor-glow" />
      <div className="bg-grid" />
      <div className="bg-noise" />
    </div>
  );
}

export default Background;

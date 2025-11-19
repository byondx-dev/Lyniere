import { useRef } from "react";

export function AnimatedBackground() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Clean background - no overlays */}
    </div>
  );
}
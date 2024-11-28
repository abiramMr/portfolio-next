"use client";

import { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  const customOptions: LenisOptions = {
    autoRaf: true,
    lerp: 1,
    duration: 5,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
  };

  return (
    <ReactLenis root options={customOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;

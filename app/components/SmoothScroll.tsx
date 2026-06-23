"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    // Optional: add any global scroll-related logic here
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 2.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

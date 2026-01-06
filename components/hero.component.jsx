"use client";

import { cn } from "@/lib";
import React, { useRef, useState } from "react";

export function HeroComponent() {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  const handleTimeUpdate = (e) => {
    const video = e.currentTarget;
    
    if (video.currentTime >= 7.3) {
      const fadeProgress = (video.currentTime - 7.3) / 0.2;
      setOpacity(1 - fadeProgress * 0.15);
    } else {
      setOpacity(1);
    }

    if (video.currentTime >= 7.5) {
      video.currentTime = 0;
      video.play();
      setOpacity(1);
    }
  };

  return (
    <div className={"relative w-full h-[75vh] overflow-hidden bg-black"}>
      <video
        ref={videoRef}
        src="/video/hero-animation.webm"
        autoPlay
        muted
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500",
          opacity === 1 ? "opacity-100" : "opacity-0"
        )}
        style={{ opacity }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={(e) => {
          e.currentTarget.play().catch(() => {});
        }}
      />
    </div>
  );
}
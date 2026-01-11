"use client";

import { div } from "framer-motion/client";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

export default function ThemeVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div></div>;
  }

  // Use different videos for different themes
  const videoSrc =
    theme === "light" ? "/videos/r-video-02.mp4" : "/videos/r-video-01-1.mp4";

  return (
    <video
      key={videoSrc} // Force re-render when video changes
      className="fixed top-0 left-0 w-full h-full opacity-100 object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';

interface VideoProps {
  videoSrc: string;
  captionSrc?: string;
  playbackRate?: number;
  className?: string;
}

export const Video: React.FC<VideoProps> = ({
  videoSrc,
  captionSrc,
  playbackRate = 0.5,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("📹 Video component mounted!");
    console.log("🔗 Video source received:", videoSrc);

    const video = videoRef.current;
    if (video) {
      video.playbackRate = playbackRate;
    }
  }, [videoSrc, playbackRate]);

  return (
    <video
      ref={videoRef}
      className={`w-full h-auto ${className}`} // Removed absolute positioning to avoid issues
      preload="auto"
      playsInline
      muted
      loop
      autoPlay
      controls // Added controls for testing
    >
      <source src={videoSrc} type="video/mp4" />
      {captionSrc && (
        <track src={captionSrc} kind="subtitles" srcLang="en" label="English" />
      )}
      Your browser does not support the video tag.
    </video>
  );
};

'use client';

import React, { useEffect, useRef } from 'react';

interface VideoProps {
  videoSrc: string;
  captionSrc?: string;
  playbackRate?: number; // Optional playback speed
}

export const Video: React.FC<VideoProps> = ({
  videoSrc,
  captionSrc,
  playbackRate = 0.5,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover" // Ensures full coverage without clipping
      preload="auto"
      playsInline
      muted
      loop
      autoPlay
    >
      <source src={videoSrc} type="video/mp4" />
      {captionSrc && (
        <track
          src={captionSrc}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      )}
      Your browser does not support the video tag.
    </video>
  );
};
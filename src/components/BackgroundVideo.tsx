import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  showPoster?: boolean;
  eager?: boolean;
  videoClassName?: string;
  controlPositionClassName?: string;
}

/** Decorative stock footage that stays silent, pauses off-screen, and respects reduced-motion preferences. */
export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  poster,
  showPoster = true,
  eager = false,
  videoClassName = '',
  controlPositionClassName = 'bottom-4 right-4',
}) => {
  const layerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [playbackOverride, setPlaybackOverride] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (eager) {
      setIsNearViewport(true);
      return;
    }
    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: '180px 0px', threshold: 0.01 }
    );
    observer.observe(layer);
    return () => observer.disconnect();
  }, [eager]);

  const shouldRenderVideo = !videoError && (!prefersReducedMotion || playbackOverride === true);
  const shouldPlay = shouldRenderVideo && (eager || isNearViewport) && (playbackOverride ?? !prefersReducedMotion);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!shouldPlay) {
      video.pause();
      return;
    }
    const playRequest = video.play();
    if (playRequest) playRequest.catch(() => setIsPlaying(false));
  }, [shouldPlay, src]);

  const togglePlayback = () => setPlaybackOverride(isPlaying ? false : true);
  const buttonLabel = isPlaying ? 'Pause background video' : 'Play background video';

  return (
    <>
      <div ref={layerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {showPoster && poster && (
          <img
            src={poster}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isReady && !videoError ? 'opacity-0' : 'opacity-100'}`}
          />
        )}
        {shouldRenderVideo && (
          <video
            ref={videoRef}
            src={src}
            poster={showPoster ? poster : undefined}
            autoPlay={shouldPlay}
            muted
            loop
            playsInline
            preload={eager ? 'auto' : isNearViewport ? 'metadata' : 'none'}
            onCanPlay={() => setIsReady(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              setVideoError(true);
              setIsPlaying(false);
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'} ${videoClassName}`}
          />
        )}
      </div>
      {!videoError && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={buttonLabel}
          aria-pressed={isPlaying}
          className={`absolute ${controlPositionClassName} z-30 inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/30 bg-[#001429]/70 p-2.5 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-[#001429]/90 focus-visible-brand`}
        >
          {isPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
        </button>
      )}
    </>
  );
};

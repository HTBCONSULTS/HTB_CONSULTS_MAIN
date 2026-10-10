import { VISUAL_ASSETS } from './visualAssets';

// Configuration for hero background video
// To provide a real background video file:
// 1. Place your video file at /public/media/hero-loop.mp4
// 2. Or change the videoSource path below.
// The site automatically uses the high-resolution executive photography fallback
// when video is absent, failed to load, or when the visitor enables prefers-reduced-motion.

export const HERO_VIDEO_CONFIG = {
  // Path relative to public root
  videoSource: '/media/hero-loop.mp4',
  
  // High-resolution photography fallback (generated from references)
  posterImage: VISUAL_ASSETS.homeHero,
  
  // Settings for background video behavior
  muted: true,
  loop: true,
  playsInline: true,
  preload: 'metadata' as const,
};

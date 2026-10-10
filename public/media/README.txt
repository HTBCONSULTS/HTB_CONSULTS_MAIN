HTB Consult background media
=============================

This folder contains locally hosted, silent stock footage used as decorative backgrounds:

- meeting-analysis-stock.mp4 — Pexels clip 7691548 (Yan Krukau), 1920x1080, 24 fps.
- team-collaboration-stock.mp4 — Pexels clip 7691551 (Yan Krukau), 1280x720, 24 fps.

Both files are H.264 MP4 with fast-start enabled and no audio. They are downloaded stock footage, not AI-generated. The source pages, creator names, license notes, and photo sources are recorded in ASSET_SOURCES.md.

The React BackgroundVideo component provides an Unsplash photo poster, loads footage near the viewport, pauses it while off-screen, and provides a pause/play control. It respects prefers-reduced-motion by showing a still poster until a visitor explicitly chooses to play the video.

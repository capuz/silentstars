---
repo: "CodeWithBasu/RhythmX"
name: "RhythmX"
description: "RhythmX is a powerful real-time music visualizer that transforms audio into a dynamic visual experience. Upload your favorite MP3, hit play, and watch vibrant frequency bars dance to every beat in perfect sync. 🎶✨  Built with modern web technologies, RhythmX blends smooth animations, real-time audio processing, and an interactive UI."
readmeQualityOk: true
url: "https://github.com/CodeWithBasu/RhythmX"
homepage: "https://rhythm-x.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["8d-audio", "audio-player", "audio-visualizer", "cross-platform", "modern-ui", "music-player", "open-source", "real-time-sync", "spatial-audio"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-01T07:06:17Z"
lastCommitAt: "2026-10-06T10:41:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 56
maintainers: ["CodeWithBasu"]
openGraphImageUrl: "https://opengraph.githubassets.com/82ff9c746dc5df3ba400d48a1d2ec934089a43230fc0d3bcd9fc51fd43303514/CodeWithBasu/RhythmX"
---

# 🎵 RhythmX — Premium Audio Visualizer App

RhythmX is a high-performance, real-time music visualizer built with **Next.js 16**, **MongoDB**, **Pusher**, and **Cloudinary**. It features ultra-low latency synchronization and high-fidelity neon visuals.

## 🚀 Key Features

- **Real-Time Party Sync**: Zero-latency playback alignment (<50ms) using Pusher Client Events.
- **High-Capacity Storage**: Bypasses Vercel's 4.5MB limit using direct Cloudinary binary uploads.
- **Dynamic Neon Visualizer**: Real-time HSL frequency mapping for immersive, glowing waves.
- **Social Interaction**: Instant floating emoji reactions that sync across all connected devices.
- **Progressive Web App (PWA)**: Installable on iOS, Android, and Desktop with full-screen support.

---

## ⚡ Technical Code Snippets

### 1. Zero-Latency Party Sync (Pusher)
We use Pusher's `client-events` to bypass the server entirely for sub-50ms synchronization across devices.

```typescript
// Unified sync beam for play, pause, and seek events
const sendSyncEvent = (action: string, time: number) => {
  if (partyChannelRef.current && isHost) {
    partyChannelRef.current.trigger('client-sync', {
      action,
      time,…

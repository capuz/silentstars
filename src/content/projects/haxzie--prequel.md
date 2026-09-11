---
repo: "haxzie/prequel"
name: "prequel"
description: "A macOS screen recorder and video editor. Electron shell over a native Rust capture and render core."
readmeQualityOk: true
url: "https://github.com/haxzie/prequel"
homepage: "https://prequel.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
stars: 35
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-12T15:54:58Z"
lastCommitAt: "2026-09-11T08:14:58Z"
lastReleaseAt: "2026-09-01T02:34:51Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["haxzie"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1332202946/959a4f9d-f400-49c0-bfbc-81a526c63350"
---

</p>

# prequel

A macOS screen recorder and video editor. Electron shell over a native Rust
core built on ScreenCaptureKit, AVFoundation, VideoToolbox and Metal.

Record a screen, a window or a dragged region, with the webcam and both audio
sources alongside it. Stop, and an editor opens on the take: composite the
webcam over the screen against a background, cut, zoom, and export an MP4 or a
GIF.

**Apple Silicon, macOS 14+.**

  </a>
</p>

```
apps/
  desktop/    @prequel/desktop — Electron 43 + Vite 8 + React 19
  web/        @prequel/web — Next.js 16 + Tailwind v4, the site and the dashboard
  api/        @prequel/api — Cloudflare Worker: accounts, teams, the shared library
packages/
  recorder/   @prequel/recorder — napi-rs addon, the only bridge from Node to Rust
  db/         @prequel/db — Drizzle schema for D1, and its migrations
  env/        @prequel/env — Zod-validated environment variables  ← edit src/env.ts
  typescript-config/  Shared tsconfig presets
crates/
  prequel-capture/    ScreenCaptureKit: permissions, targets, screen + audio recording
  prequel-camera/     AVFoundation: webcam enumeration and recording
  prequel-encode/     VideoToolbox via AVAssetWriter:…

---
repo: "kentcdodds/kody-video"
name: "kody-video"
description: "Kody Video (kody.video) — hold-to-record clips camera for the web. Privacy-first, on-device."
readmeQualityOk: true
url: "https://github.com/kentcdodds/kody-video"
homepage: "https://kody.video"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 26
forks: 4
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-07-26T15:45:07Z"
lastCommitAt: "2026-08-30T00:43:01Z"
lastReleaseAt: "2026-08-09T19:40:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 53
maintainers: ["kentcdodds", "cursoragent", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a08425b7d9a8a5d874d945a000d3e4a5121d5ef6a148b1b6e4aff4c877231825/kentcdodds/kody-video"
---

# Kody Video

Mobile-first web clips camera: **hold anywhere on the preview to record**, arrange clips on a filmstrip timeline, then tap **Go** to export/share — all **on-device**.

Kody Video is inspired by the OK Video interaction model: camera-first capture, quick clip cleanup, and one big OK/share moment. It is an independent project with its own name, mark, and implementation; it is not affiliated with OK Video and does not use OK Video trademarks or assets. The koala mascot is credited to the KCD community / [kentcdodds.com/kody](https://kentcdodds.com/kody). App artwork in `public/art/` was generated from that Kody reference (camera, timeline, share, app icon).

## Quick start

```bash
npm install
npm run dev
```

Open the printed localhost URL in Chrome (desktop or Android). Camera/microphone require a **secure context** (`http://localhost` or HTTPS).

```bash
npm run build      # production build + service worker
npm run preview    # serve dist (PWA cache active)
npm test           # storage/export-planner unit tests (Vitest browser mode, real Chromium)
npm run test:e2e   # Playwright e2e suite (fake camera/mic; recording, editor, playback, export, plans)
npm run…

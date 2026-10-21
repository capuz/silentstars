---
repo: "zivavu/OpenMosh"
name: "OpenMosh"
description: "No login Svelte image/video glitch studio"
readmeQualityOk: true
url: "https://github.com/zivavu/OpenMosh"
homepage: "https://OpenMosh.com"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [66, 32]
topics: ["glitch-art", "images", "svelte", "videos", "glitch", "photomosh", "graphics", "shaders", "video", "video-editor"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-02-23T19:05:57Z"
lastCommitAt: "2026-10-21T21:14:53Z"
lastReleaseAt: "2026-10-07T17:14:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["zivavu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bb010c05512b12134af4e31a1c6b92ab0a29411b6894842dfaa3c0832e7e334/zivavu/OpenMosh"
---

# OpenMosh

A browser-based glitch art studio, inspired by PhotoMosh. Drop in a photo or a video, pile on effects until it falls apart, hook the whole mess up to a song, and save the result. Nothing is uploaded anywhere, it all runs in your browser.

**[openmosh.com](https://openmosh.com/)**

---

## Getting started

OpenMosh uses [bun](https://bun.sh) as its package manager and runtime.

```bash
bun install        # Install dependencies
bun dev            # Start dev server (Vite)
bun run build      # Production build
bun preview        # Preview the production build
bun check          # TypeScript + Svelte type-check
bun test           # Unit suite (bun:test)
bun test:e2e       # End-to-end suite (Playwright, tests/e2e)
```

Built with Svelte 5, Vite, TypeScript and WebGL2. `mediabunny` handles WebM muxing; BPM detection is our own, with no dependencies.

---

## How to use it

Pick one of three modes on the upload screen.

**Single** takes one image or video. Animated GIFs count as video: they come in as a short clip, so they play, scrub and loop like any other one. SVGs are redrawn at the output size, so a logo stays sharp. Hit Mosh and you get a random stack of glitch…

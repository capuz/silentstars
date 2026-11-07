---
repo: "blit386/blit386"
name: "blit386"
description: "A palette-first WebGPU retro engine for TypeScript, inspired by RetroBlit."
readmeQualityOk: true
url: "https://github.com/blit386/blit386"
homepage: "https://blit386.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [49, 36]
topics: ["2d-game", "canvas", "fantasy-console", "game-engine", "pixel-art", "retro", "sprite", "typescript", "webgpu", "bitmap-font"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-25T06:04:54Z"
lastCommitAt: "2026-11-07T13:55:42Z"
lastReleaseAt: "2026-07-13T15:41:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 61
maintainers: ["vancura"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1122612880/e63746b4-b3ad-4220-9099-26b2063bee09"
discussionCount: 1
---

# BLIT386

BLIT386 is a palette-first retro game engine for the web, and this repository is the whole project - the engine, the
scaffolder that writes you a running game in one command, a few dozen commented demos, and the site that documents them.
Palette-first means you draw with numbered colors rather than RGBA pixels, so changing what color 3 _means_ recolors
everything drawn in it at once: a few bytes of palette upload, and water flows or the sky goes dark without a single
pixel being redrawn. TypeScript throughout, WebGPU where the browser has it, an automatic Canvas 2D fallback where it
does not.

## Quick start

You do not need to know anything about this repository to start. One command writes a complete, running project:

```bash
npm create blit386@latest my-game
cd my-game
npm run dev
```

It works with npm, pnpm, yarn, or bun - whichever you ran it with. Open the address it prints, edit `src/game.js`, and
the page updates as you type. The generated project comes with a starter game, local documentation, and the `blit` CLI.

Already have a project and just want the engine in it? That path starts at…

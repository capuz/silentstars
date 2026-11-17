---
repo: "solidjs/solid-image"
name: "solid-image"
description: "Image component"
readmeQualityOk: true
url: "https://github.com/solidjs/solid-image"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 5
createdAt: "2026-07-24T16:51:43Z"
lastCommitAt: "2026-11-17T14:33:16Z"
lastReleaseAt: "2026-11-17T14:29:43Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["lxsmnsyc", "github-actions[bot]", "subframe7536"]
openGraphImageUrl: "https://opengraph.githubassets.com/977985cf4fef0af1240134851dc4568e3142f2e13a8b1f496c650d1290f80362/solidjs/solid-image"
---

# `@solidjs/image`

Optimized image components and Vite tooling for [Solid](https://solidjs.com).

- `SolidImage` renders a responsive `<picture>` that reserves the aspect ratio, so the page does not shift while the image loads.
- The image loads once it scrolls into view. Mark the image above the fold as `eager` and it loads right away.
- A tiny preview of the image is inlined in the page and painted behind it, so there is something to look at from the first frame.
- Readers with no JavaScript still get the image.
- Your placeholder shows until the image is ready.
- The Vite plugin resizes and reformats local images at build time.
- Remote images go through your own URL mapping, so a CDN can serve the variants.

## Install

```bash
npm i @solidjs/image
```

Requirements:

- `solid-js` and `@solidjs/web` 2.0 or newer, and Vite 8 or newer. All three are peer dependencies. For Solid 1.x, use the 0.x versions of this package, maintained on the `solid-1` branch.
- Node 24 or newer for the Vite plugin. It uses [`sharp`](https://sharp.pixelplumbing.com) to process images.
- [`blurhash`](https://github.com/woltapp/blurhash) 2 or newer, only for the BlurHash preview. It is an optional…

---
repo: "koshimazaki/flux-api-control-surface"
name: "flux-api-control-surface"
description: "Local control surface to explore FLUX API with additional tools and MCP"
readmeQualityOk: true
url: "https://github.com/koshimazaki/flux-api-control-surface"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-29T00:59:23Z"
lastCommitAt: "2026-10-04T10:01:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 47
maintainers: ["koshimazaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/788170baba42ba70f690de8026a4943565d19097398945f1eb4739b081495a32/koshimazaki/flux-api-control-surface"
---

# FLUX API Control Surface

Local workbench for FLUX 3 Image, FLUX.2 image and FLUX 3 Video workflows: prompt
libraries, reference images, FLUX image tools, video scripting with keyframe permutations,
a server-owned generation queue, model evaluation records, output provenance,
local asset recovery, and agent-friendly routes.

This repo is local-first. It is safe to run as a developer tool, it is not a
hosted public image generator. Keep paid FLUX execution on your machine through
env vars or macOS Keychain, and use the optional Cloudflare Worker only as a
token-protected archive for generated outputs.

## Quick Start

```bash
cd ui
npm install
npm run dev -- --port 3017
```

Open `http://localhost:3017`.

Run checks:

```bash
cd ui
npm test
npm run lint
npm run build
```

## What It Does

- Generate and edit with FLUX 3 Image: text to image, image to image from up
  to ten references, whole-image edits, and precise edits where boxes change,
  keep, move or remove parts of the picture. Boxes also lay out a new image.
- Generate FLUX.2 images through local Next.js API routes.
- Generate FLUX 3 Video: text-to-video, one to ten ordered or explicitly timed
  keyframes, video…

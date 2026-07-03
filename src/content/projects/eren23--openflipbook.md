---
repo: "eren23/openflipbook"
name: "openflipbook"
description: "Open-source flipbook.page clone — every page is an AI-generated illustration, click anywhere to explore deeper. Next.js + FastAPI + Modal. BYO keys."
url: "https://github.com/eren23/openflipbook"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 47]
topics: ["ai-image-generation", "fal-ai", "fastapi", "flipbook", "gemini-api", "generative-ai", "infinite-canvas", "ltx-video", "modal", "nano-banana"]
stars: 164
forks: 39
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-23T20:19:44Z"
lastCommitAt: "2026-07-03T06:23:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 27
maintainers: ["eren23"]
openGraphImageUrl: "https://opengraph.githubassets.com/6587b371e7b43fcc18dd2297f3fc51d2af4f70dfa61c8d3a2bff9cb1d682a641/eren23/openflipbook"
discussionCount: 0
---

# openflipbook

> **An open-source [flipbook.page](https://flipbook.page) clone, image-is-the-UI.** Every page is an AI-generated illustration. Tap anywhere on the image and a vision model resolves what you tapped, turns it into the next page, and keeps going. Seed from a text query or drop in any image. Bring your own API keys; clone, run, hack.

## Demo

Sped up 4×: landing → `"how does a steam engine work"` deeplink → two click-to-explore hops. [Full-quality MP4 with audio](https://github.com/eren23/openflipbook/raw/main/apps/web/public/demo.mp4). Recorded with the Playwright driver under [`scripts/record-demo/`](scripts/record-demo/) — run `pnpm record-demo` to re-capture against your own stack.

## Why this exists

[flipbook.page](https://flipbook.page) is fun but closed. I wanted the same loop — one image per page, tap to explore — on a stack I actually own: my keys, my storage, my backend. This is that, MIT-licensed, with every piece swappable behind small provider interfaces in `apps/modal-backend/providers/`.

## TL;DR

- **One image per page**, rendered by fal (default balanced tier: [`nano-banana-pro`](https://fal.ai/models/fal-ai/nano-banana-pro)). Text inside the page…

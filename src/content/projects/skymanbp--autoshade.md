---
repo: "skymanbp/autoshade"
name: "autoshade"
description: "AI-assisted RAW photo developer: GPT vision advisor proposes an EditRecipe, a deterministic Rust engine renders it — Lightroom-compatible XMP sidecars, 24 RAW formats + baked images, measured (not guessed) Lightroom mask geometry, local GUI/web UI, AI denoise & segmentation sidecars"
readmeQualityOk: true
url: "https://github.com/skymanbp/autoshade"
homepage: "https://autoshade.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ai-photo-editing", "camera-raw", "denoising", "gpt", "image-processing", "lightroom", "photo-editor", "photography", "raw-development", "raw-photo-editor"]
stars: 245
forks: 53
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-26T18:55:41Z"
lastCommitAt: "2026-09-12T08:03:44Z"
lastReleaseAt: "2026-07-10T00:51:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 35
maintainers: ["skymanbp"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcb00f8c2a3c790058e200294faf9529fddb0c18406d6b4a63e9fa8d698b51eb/skymanbp/autoshade"
discussionCount: 3
---

# AutoShade

**AI-assisted automatic development of RAW photographs.**

An AI decides *what to change*. A deterministic Rust engine *does* it.
**In the recipe-development path, the AI never touches a pixel.**

[Download v1.3.0](https://github.com/skymanbp/autoshade/releases/tag/v1.3.0) ·
[Architecture](https://github.com/skymanbp/autoshade/blob/HEAD/docs/ARCHITECTURE.md) ·
[Release ledger](https://github.com/skymanbp/autoshade/blob/HEAD/docs/ROADMAP.md) ·
[MIT](https://github.com/skymanbp/autoshade/blob/HEAD/LICENSE)

</div>

---

## What AutoShade is

- A non-destructive developer for RAW and baked images: an AI proposal becomes
  a small, inspectable `EditRecipe` — bounded controls, a rationale, a
  confidence — rendered by one local Rust engine behind the app, the CLI and
  the web UI.
- The recipe is hand-editable, replayable a year later, and can be handed to
  Lightroom; generative tools are separate, opt-in, labelled paths.
- For anyone who wants an AI first pass on a card of RAWs and still wants to
  know *what* it changed, in numbers, before trusting it.

## Contents

- [What AutoShade is](#what-autoshade-is)
- [What it does](#what-it-does)
- [What is new…

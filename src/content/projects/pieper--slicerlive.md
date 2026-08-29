---
repo: "pieper/SlicerLive"
name: "SlicerLive"
description: "Live 3D Slicer scenes on the web — render MRML/MRB scenes in the browser, no install"
readmeQualityOk: true
url: "https://github.com/pieper/SlicerLive"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [60]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T21:30:01Z"
lastCommitAt: "2026-08-29T17:28:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["pieper"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa3be7c26207bfa262630a64d195b490001e9bf82a370bd8e4bdcbc84dc9a891/pieper/SlicerLive"
---

# slicerlive 🧬

⚠️ **EXPERIMENTAL & AI-ASSISTED** — This is an early-stage research project deliberately written with AI-assisted coding. Expect rapid change, incomplete features, and rough edges. Use at your own risk in production.

**Live 3D Slicer scenes on the web** — open a URL and a Slicer scene renders interactively in your browser on your own GPU, with no Slicer install and no server for the common case. The same TypeScript/WebGPU renderer also runs headless under Deno, so scenes too big for the browser can render on a remote GPU and stream to thin clients. Gateway eventually at **live.slicer.org**.

> **Status:** Early development. Experimental platform under active development with rapidly evolving architecture. Much of this codebase is written by AI agents working under human direction and review.

## What is slicerlive?

**slicerlive** is a **modular, open ecosystem** for bringing medical imaging scenes to life in the browser and beyond. Rather than a monolithic application, it's a collection of independently-useful components that work together:

- **Rendering** — WebGPU-powered 3D/MPR visualization with no scene-graph overhead
- **Sync** — Real-time bidirectional…

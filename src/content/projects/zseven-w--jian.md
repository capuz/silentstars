---
repo: "ZSeven-W/jian"
name: "jian"
description: "A Rust-native cross-platform UI framework. An .op file is an app."
readmeQualityOk: true
url: "https://github.com/ZSeven-W/jian"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["app-framework", "cross-platform", "declarative-ui", "native-ui", "rust", "ui-framework"]
stars: 22
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-19T08:55:28Z"
lastCommitAt: "2026-11-07T13:53:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 40
maintainers: ["Kayshen-X", "finiking"]
openGraphImageUrl: "https://opengraph.githubassets.com/60dfa3fa8206ac9b63f11b2d3b3aff2ddac7e18bfc1a305b07f5548f018a67a4/ZSeven-W/jian"
---

# Jian · 简

### *One `.op` file. A native window. AI in the loop. Pure Rust.*

Jian loads a single declarative document and turns it into a real, interactive,
hot-reloading, AI-controllable application — without a JS runtime, without a
DOM, without an Electron tax.

[**Quick start**](#-quick-start) ·
[**Why Jian?**](#-why-jian) ·
[**Architecture**](#-architecture) ·
[**AI surface**](#-ai-action-surface) ·
[**Roadmap**](#-roadmap)

---

## ✨ Highlights

- 🦀 **Pure-Rust runtime** — `winit` · `skia-safe` · `taffy` · `rstar`. No JS, no DOM, no V8.
- 📄 **One file is the app** — state, layout, bindings, events, AI capabilities — all in `.op`.
- ⚡ **Solid-style reactivity** — `Signal<T>` + `Effect`, fine-grained, single-threaded, allocation-light.
- 🎯 **Real gesture arena** — Tap · LongPress · Swipe · Scroll · multi-pointer **Pinch & Rotate**, with bubble-style hit dispatch.
- 🎨 **Pixel-stable rendering** — Skia raster, per-corner radii, gradients, shadows, image cache, Lucide icons; opt-in `textlayout` for full Paragraph shaping.
- 🤖 **AI-native by design** — every interactive node derives a `<scope>.<slug>_<hash4>` action (Tap stays unprefixed; DoubleTap / LongPress / Submit / Set…

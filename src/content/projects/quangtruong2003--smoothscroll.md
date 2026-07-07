---
repo: "quangtruong2003/SmoothScroll"
name: "SmoothScroll"
description: "Smooth mouse-wheel scrolling for Windows and macOS — native low-level input interception, frame-perfect easing, per-app exclusion. Built with Rust, Tauri 2, React."
readmeQualityOk: true
url: "https://github.com/quangtruong2003/SmoothScroll"
homepage: "https://quangtruong2003.github.io/SmoothScroll"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [47, 41]
topics: ["accessibility", "cross-platform", "desktop-app", "inertia-scroll", "input-method", "macos", "mouse-wheel", "productivity", "react", "rust"]
stars: 26
forks: 1
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-05-16T08:01:59Z"
lastCommitAt: "2026-07-07T06:39:47Z"
lastReleaseAt: "2026-07-07T03:52:19Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["quangtruong2003", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c66962273a7fce44458c68cacb2e6c625375e9d76666a4e8e2081962aa95eccc/quangtruong2003/SmoothScroll"
---

# SmoothScroll — Smooth Scrolling for Windows

🌐 **[Website & download → quangtruong2003.github.io/SmoothScroll](https://quangtruong2003.github.io/SmoothScroll/)**

**Smooth mouse-wheel scrolling for Windows 10 and Windows 11.** Native low-level input interception, frame-perfect easing, per-app exclusion. A free, open-source alternative to Logitech SmoothScroll, WizMouse, and Mac-style inertia scrolling utilities — built with Rust, Tauri 2, and React.

> **macOS support is coming soon.** Track progress in [issues](https://github.com/quangtruong2003/SmoothScroll/issues).

</p>

*Jerky native scroll → SmoothScroll eased scroll*

---

## Why SmoothScroll

Most mice and trackpads emit discrete wheel ticks that feel jagged on apps without native inertia. SmoothScroll sits between the OS and your applications, swallows raw wheel events, and re-emits them as fluid, eased pulses at 120 Hz — giving you Mac-style smooth scrolling on Windows. Configurable easing, per-application opt-out, system-tray UI, global hotkey toggle. Free, open-source, no telemetry.

## Features

- **Native input interception** — low-level mouse hook on Windows (`WH_MOUSE_LL`). Works in any app that accepts wheel…

---
repo: "iniFaiz/ts-music-serial"
name: "ts-music-serial"
description: "ts-music but can actually play music, with serial iterators for scanning metadata on music to compare with paralellism data and much more!"
url: "https://github.com/iniFaiz/ts-music-serial"
language: "Vue"
languages: ["Vue", "Rust"]
languagePcts: [52, 32]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-11-27T08:10:39Z"
lastCommitAt: "2026-07-03T06:22:32Z"
lastReleaseAt: "2026-06-22T13:35:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 42
maintainers: ["iniFaiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e2016db4a1c7772fc70ec1338fa70a7c141561493a3c03e3586c915fe75efc1/iniFaiz/ts-music-serial"
---

# Ts-Music

*A high-performance, native desktop music player built with Tauri 2, Vue 3, and Rust.*

</div>

---

## Overview

Ts-Music is a lightweight, cross-platform desktop music player designed for audiophiles who prefer local libraries. It is architected with a clean separation of concerns:
* **The Rust Backend (Tauri)** performs CPU-heavy file indexing, high-speed directory traversal, metadata extraction, audio decoding/processing, and integration with the host operating system.
* **The Vue 3 Frontend (Vite)** delivers a visually stunning, responsive user interface with rich animations, smooth transitions, and premium glassmorphic dark-mode aesthetics.

By shifting resource-intensive operations to native code, Ts-Music scans tens of thousands of local files in seconds while maintaining a low memory footprint and fluid UI responsiveness.

---

## Core Features

### Native Rust Audio Engine & Backend
* **High-Speed Directory Scanner:** Walks directories using Rayon for multi-threaded processing and jwalk for parallel traversal.
* **Robust Metadata Parsing:** Extracts titles, artists, albums, years, track numbers, and embedded cover art across diverse audio formats using…

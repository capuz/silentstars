---
repo: "leizongmin/ZeroWeb"
name: "ZeroWeb"
description: "An experimental cross-platform browser project written in Rust."
originalDescription: "一个用 Rust 写的实验性跨平台浏览器项目。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/leizongmin/ZeroWeb"
homepage: "https://zeroweb.leizm.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["browser-engine", "cross-platform", "css", "dom", "experimental", "layout-engine", "rendering", "rust", "wasm", "webview"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-05-30T06:33:02Z"
lastCommitAt: "2026-09-29T08:10:37Z"
lastReleaseAt: "2026-08-09T15:30:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["leizongmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/10e0dae05abe568a42b1a92027f4578d4cb4028cf1eef71a76ab35353136328b/leizongmin/ZeroWeb"
---

# ZeroWeb

ZeroWeb is an experimental cross-platform browser project written in Rust. This repository is doing two things at the same time:

Official Website: [zeroweb.leizm.com](https://zeroweb.leizm.com)

- An embeddable and reusable `ZeroWebView` library
- A complete `ZeroBrowser` browser application

The main project line aims to keep core code and dependency boundaries in its own hands, so the page kernel is gradually built up from Rust components with permissive licenses. DOM, CSS, layout, rendering, navigation, and security boundaries are all being built up layer by layer in this repository.

This is also an AI-first engineering experiment: humans are only responsible for solution design, critical decisions, and result validation, while code development is almost entirely completed autonomously by AI. We want to see how far AI can push such a complex system when architectural boundaries, testing, and acceptance criteria are clearly defined.

> [!IMPORTANT]
> This repository is still in the experimental stage and is primarily for learning, research, and engineering exploration. The core crates and tests already have substantial content, but the browser shell, complete…

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
lastCommitAt: "2026-09-21T09:13:51Z"
lastReleaseAt: "2026-08-09T15:30:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["leizongmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/65c3656cbf0b9fda97d0129dae48075c9dddd5df4cd132d4db04a07810325295/leizongmin/ZeroWeb"
---

# ZeroWeb

ZeroWeb is an experimental cross-platform browser project written in Rust. This repository is doing two things at the same time:

Official website: [zeroweb.leizm.com](https://zeroweb.leizm.com)

- An embeddable and reusable `ZeroWebView` library
- A complete `ZeroBrowser` browser application

The main line of the project will try to keep the core code and dependency boundaries in its own hands, so the page kernel is mainly built up gradually from Rust components with permissive licenses. DOM, CSS, layout, rendering, navigation, and security boundaries are all supplemented layer by layer in this repository.

This is also an AI-first engineering experiment: people are only responsible for solution design, critical decisions, and result verification, while code development is almost entirely completed autonomously by AI. We want to see how far AI can push such a complex system, given that architecture boundaries, testing, and acceptance are all clearly documented.

> [!IMPORTANT]
> This repository is still in the experimental stage, mainly for learning, research, and engineering exploration. The core crates and tests already have a lot of content, but the browser shell,…

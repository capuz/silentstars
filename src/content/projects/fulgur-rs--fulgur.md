---
repo: "fulgur-rs/fulgur"
name: "fulgur"
description: "Blazing fast HTML to PDF engine built on blitz and krilla"
url: "https://github.com/fulgur-rs/fulgur"
homepage: "https://fulgur.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["pdf", "rust"]
stars: 50
forks: 8
openIssues: 9
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-03-17T17:30:22Z"
lastCommitAt: "2026-07-04T06:13:30Z"
lastReleaseAt: "2026-04-16T18:41:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 36
maintainers: ["mitsuru", "fulgur-release-bot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d194b37839d5f535c1ea72198416ddd7a921d38c1732d393991c9b211b136652/fulgur-rs/fulgur"
discussionCount: 0
---

# Fulgur

A modern, lightweight alternative to wkhtmltopdf. Converts HTML/CSS to PDF without a browser engine.

Built in Rust for server-side workloads where memory footprint and startup time matter.

## Why Fulgur?

- **No browser required** — No Chromium, no WebKit, no headless browser. Single binary, instant cold start.
- **Low memory footprint** — Designed for server-side batch processing without blowing up your container's memory limits.
- **Deterministic output** — Same input always produces the same PDF, byte for byte. Safe for CI/CD and automated pipelines.
- **Template + JSON data** — Feed an HTML template and a JSON file to generate PDFs at scale. Built-in [MiniJinja](https://github.com/mitsuhiko/minijinja) engine.
- **Offline by design** — No network access. All assets (fonts, images, CSS) are explicitly bundled.

## Features

- HTML/CSS to PDF conversion with automatic page splitting
- CSS pagination control (`break-before`, `break-after`, `break-inside`, orphans/widows)
- CSS Generated Content for Paged Media (page counters, running headers/footers, margin boxes)
- Template engine with JSON data binding (MiniJinja)
- Image embedding (PNG / JPEG / GIF)
- Custom font…

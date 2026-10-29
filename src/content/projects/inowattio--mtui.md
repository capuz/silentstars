---
repo: "inowattio/MTUI"
name: "MTUI"
description: "Customizable, powerful and versatile Modbus Client."
readmeQualityOk: true
url: "https://github.com/inowattio/MTUI"
homepage: "https://inowattio.github.io/MTUI/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["modbus", "rs485", "tui"]
stars: 41
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-01-22T17:04:00Z"
lastCommitAt: "2026-10-29T12:26:31Z"
lastReleaseAt: "2026-06-20T18:14:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 52
maintainers: ["CosminPerRam", "github-actions[bot]", "nobrega8"]
openGraphImageUrl: "https://opengraph.githubassets.com/74524d7ce1b31c4d2734c6e9619bf600cd3c624e0fc62d4ddc35202452863832/inowattio/MTUI"
discussionCount: 0
---

# MTUI - Modbus Terminal User Interface
A keyboard-driven Modbus client for your terminal, built for speed and customizable down to the columns and keybinds.

Made in pure safe Rust, based on [tokio-modbus](https://crates.io/crates/tokio-modbus) and [ratatui](https://crates.io/crates/ratatui) (with [ratzilla](https://crates.io/crates/ratzilla) for the web demo).

Play the GIF to see a quick tour, or better yet, try it in your browser (mock device only): **<https://inowattio.github.io/MTUI/>**

## Features
- Modbus TCP, RTU, RTU-over-TCP and a built-in mock device for playing around
- Live register reading with auto-refresh, pause/resume and unit id selection
- Interpretation columns with configurable word order: u16, i16, hex, binary, ASCII, u32, i32, f32, f64, M10K (and more!)
- Panels: main view, pinned, labeled, custom rules and an address matrix
- Pin, label and custom-rule registers; jump to address or label
- Value graph for a register over time
- Register writes, with a write log and an optional read-only mode
- HTTP API (`POST /read`, `POST /write`, `POST /raw`, `GET /health`, see [openapi.yaml](https://github.com/inowattio/MTUI/blob/HEAD/openapi.yaml), can run standalone…

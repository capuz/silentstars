---
repo: "Moonbot-Tech/MoonTerminal"
name: "MoonTerminal"
description: "Development repository for the Moonbot cross-platform terminal"
readmeQualityOk: true
url: "https://github.com/Moonbot-Tech/MoonTerminal"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 10
forks: 7
openIssues: 35
closedIssues: 100
watchers: 0
contributors: 7
recentReleases: 4
createdAt: "2026-06-24T00:21:25Z"
lastCommitAt: "2026-09-29T10:04:15Z"
lastReleaseAt: "2026-07-13T08:26:53Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 64
maintainers: ["kirillDevPro", "guyverino", "ThusMad"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c30a5b74285f19191a63d4008327a767e9af740b710297b91ee81a155152feb/Moonbot-Tech/MoonTerminal"
---

</a>
</p>

<h1 align="center">MoonTerminal</h1>

  <b>Cross-platform desktop trading terminal for the Moonbot kernel</b><br>
  GPU-rendered charts · live MoonProto feed · Windows · macOS · Linux
</p>

</p>

  &nbsp;&nbsp;|&nbsp;&nbsp;
</p>

</p>

MoonTerminal is a native desktop trading terminal for the **[Moonbot](https://moonbot.pro)** cryptocurrency-trading kernel. It renders live charts, order books, orders, reports, and strategies for one or more Moonbot cores from a single GPU-accelerated window on Windows, macOS, and Linux.

> **Work in progress.** This is the active development workspace for the terminal — a GPUI shell, MoonUI integration, the MoonProto live feed, per-platform GPU chart rendering, and debug tooling. It is not a finished, packaged product yet.

</p>

## Features

- **GPU-rendered charts** — an own-pass GPU renderer on every platform (DirectX 11 on Windows, Metal on macOS, native `wgpu` on Linux). No CPU readback, so live scroll and zoom stay smooth without repainting the whole window.
- **Live MoonProto feed** — event-driven market data through a waker-based backend loop. The visible chart pulls data on the frame tick instead of constant polling.
-…

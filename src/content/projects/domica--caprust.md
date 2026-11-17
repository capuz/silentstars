---
repo: "Domica/CapRust"
name: "CapRust"
description: "Fast free CapCut Windows alternative for short/long-form creators. Features: AI captions, auto-reframe, overlay stickers, overlay text, CLAP/OTIO plugins, LUT import, video shorts templates/presets, object removal, face anonymize, background removal. All features on-device."
readmeQualityOk: true
url: "https://github.com/Domica/CapRust"
homepage: "https://domica.github.io/CapRust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["desktop-app", "ffmpeg", "mcp", "onnx", "open-source", "rust", "video-editing", "video-editing-software", "video-editor", "windows"]
stars: 8
forks: 1
openIssues: 5
closedIssues: 87
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-22T22:36:17Z"
lastCommitAt: "2026-11-17T12:18:32Z"
lastReleaseAt: "2026-10-02T11:11:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 65
maintainers: ["Domica"]
openGraphImageUrl: "https://opengraph.githubassets.com/3954ca6a5384c1a15da6620a61dde28668c97f82eda9f36aa8ebe59bae9fa086/Domica/CapRust"
discussionCount: 3
---

**Not another Electron wrapper.** Native binary, starts in under 500 ms. No cloud, no telemetry, MIT licensed.

*I started building it in my free time with AI assistance while playing with AI-generated videos (Minimax H3) — I wanted an editor that's fully customizable and works my way. If you like it, enjoy and use it. :)*

📖 **Full documentation: [full_readme.md](https://github.com/Domica/CapRust/blob/HEAD/full_readme.md)** with every feature, architecture, status table, testing and contributing.

---

## Install

**Windows 10 / 11, 64-bit.** Grab the latest installer from the
[Releases page](https://github.com/Domica/CapRust/releases/latest):

1. Run `CapRust-0.9.29-win64-setup.exe`.
2. The wizard installs per-user by default (no UAC prompt). Pick
   "Install for all users" if you prefer Program Files.
3. Launch CapRust from the Start Menu.

On first run CapRust offers to download a static FFmpeg build
(~110 MB) if neither `ffmpeg` nor `ffprobe` is on your `PATH`.
AI models (Whisper, Piper, ONNX) download on demand from
**Settings → AI Models**.

---

## What is CapRust?

A modern video editor focused on **short-form social content** (9:16, Reels, Shorts, TikTok). Rust + egui…

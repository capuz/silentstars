---
repo: "vjeux/fcp-headless-transitions"
name: "fcp-headless-transitions"
description: "Render Final Cut Pro / Motion transitions headlessly by driving FCP's real Motion engine (Ozone.framework) — no GUI, no Compressor, no media server."
readmeQualityOk: true
url: "https://github.com/vjeux/fcp-headless-transitions"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [68, 20]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-04T01:27:29Z"
lastCommitAt: "2026-07-25T06:01:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f172c4e5cef905acc33043d834cdf867b26aa530fae920eda1e80b7549a8acd8/vjeux/fcp-headless-transitions"
---

# fcp-headless-transitions

Render Final Cut Pro / Motion transitions **headlessly** — driving FCP's *real* Motion
render engine (`Ozone.framework`) from a standalone process, with **no GUI, no
Compressor, and no media server**.

Give it two images and it composites them through a built-in Motion transition (Push,
by default) exactly as Final Cut Pro would, writing out a PNG sequence (and optionally
an `mp4`). Built as ground truth for validating a from-scratch browser Motion renderer.

*Above: the built-in **Push** transition between two photos, rendered entirely headless
by FCP's Motion engine.*

## Why this is unusual

Final Cut Pro has **no scripting API for rendering** — its AppleScript dictionary only
exposes `get`, and there is no `--render` CLI. The only supported way to export is the
GUI Share sheet. This project instead loads Motion's actual render engine
(`Ozone.framework`, shared between FCP and Motion) directly into a process and drives it
programmatically, so you get pixel-for-pixel real-engine output with zero UI.

## Requirements

- macOS (Apple Silicon) with **Final Cut Pro** installed at `/Applications/Final Cut Pro.app`
- Xcode command-line tools (`clang++`)
-…

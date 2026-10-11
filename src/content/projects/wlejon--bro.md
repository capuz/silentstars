---
repo: "wlejon/bro"
name: "bro"
description: "a tool to build games and applications in html/css/js for windows, mac, and linux"
readmeQualityOk: true
url: "https://github.com/wlejon/bro"
homepage: "https://wlejon.github.io/bro/"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [63, 32]
topics: ["css", "game-development", "game-engine", "html", "js"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-04-01T03:43:59Z"
lastCommitAt: "2026-10-11T10:15:38Z"
lastReleaseAt: "2026-10-07T08:22:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 55
maintainers: ["wlejon"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b657361f0ae212c334b50695984533cab27c805ab9cc1cd9562f0d765cbf990/wlejon/bro"
fundingLinks: ["GITHUB:https://github.com/wlejon"]
---

# Bro

Build desktop apps and games in **HTML/CSS/JS** with 3D, physics, audio, and on-device AI, in one native process. Custom layout engine, Skia, and Vulkan 1.3 Core. Windows, Mac, and Linux.

** this is pre-alpha **

Each nightly zip also carries **[bronze](https://github.com/wlejon/bronze)** under `bronze/`, the AOT JavaScript compiler, and the binaries in the same zip load what it emits: `bro-headless myapp --print-host-globals > web_host.globals` writes the manifest of globals bro supplies, and `bronze build app.js -o myapp/app.dll --emit-shared --host-globals web_host.globals` turns an app's JavaScript into a native module that `bro myapp` runs.

## What can I compare it to?

Two familiar yardsticks, plus one that doesn't have a name yet:

- **Rendering parity with Chromium** (HTML/CSS). The app layer should look right.
- **Feature parity with Godot's engine** (no editor). 3D, physics, audio, the game runtime.
- **On-device generation and perception as a native engine subsystem.** Every modality the engine renders, it can also generate and understand, locally.

## Broworkshop

[broworkshop](https://github.com/wlejon/broworkshop) houses the apps built with bro used to…

---
repo: "vgrichina/berrry-wine"
name: "berrry-wine"
description: "Run real Windows 98 apps and games in your browser. An x86 emulator and Win32 layer written directly in WebAssembly Text, no OS image, no source ports."
readmeQualityOk: true
url: "https://github.com/vgrichina/berrry-wine"
homepage: "https://berrry.wine"
language: "JavaScript"
languages: ["JavaScript", "WebAssembly"]
languagePcts: [59, 37]
topics: ["emulators", "webassembly", "wine", "browser-games", "directx", "emulator", "retro-gaming", "retrocomputing", "reverse-engineering", "wasm"]
stars: 138
forks: 15
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-03T09:16:25Z"
lastCommitAt: "2026-10-31T09:53:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 26
maintainers: ["codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcf4a996543860632b2fa255f1ffcfd38c86476080ae1bc912b3b85857e09148/vgrichina/berrry-wine"
---

# Wine-Assembly: run real Windows 98 apps and games in your browser

**[Try it now → wine-assembly.berrry.app](https://wine-assembly.berrry.app)** · [Apps you can run](https://wine-assembly.berrry.app/apps/) · [The story of how it was built](https://wine-assembly.berrry.app/story.html) · [How it works: articles, design docs & reverse-engineering notes](https://wine-assembly.berrry.app/design/)

Wine-Assembly is a **Windows 98 emulator for the browser** that runs the original, unmodified `.exe` files. There is no operating-system image to boot and no source port to maintain: an x86 interpreter and a reimplementation of the Win32 API are written directly in WebAssembly Text (WAT), and the program's own machine code runs on them. Pinball, SkiFree, Solitaire, Minesweeper, Notepad, Paint, Winamp, DirectX games and 16-bit Windows 3.1 programs all launch in a tab, on desktop and on a phone.

Large parts of the reverse engineering, implementation, testing, and documentation were developed in collaboration with Claude Code and Codex. [PROJECT_STORY.md](https://github.com/vgrichina/berrry-wine/blob/HEAD/PROJECT_STORY.md) reconstructs that history from Git and the agent sessions that built…

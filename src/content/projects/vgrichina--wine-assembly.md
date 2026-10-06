---
repo: "vgrichina/wine-assembly"
name: "wine-assembly"
description: "Run real Windows 98 apps and games in your browser. An x86 emulator and Win32 layer written directly in WebAssembly Text, no OS image, no source ports."
readmeQualityOk: true
url: "https://github.com/vgrichina/wine-assembly"
homepage: "https://wine-assembly.berrry.app"
language: "JavaScript"
languages: ["JavaScript", "WebAssembly"]
languagePcts: [59, 39]
topics: ["emulators", "webassembly", "wine", "browser-games", "directx", "emulator", "retro-gaming", "retrocomputing", "reverse-engineering", "wasm"]
stars: 109
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-03T09:16:25Z"
lastCommitAt: "2026-10-06T10:41:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 30
maintainers: ["claude", "vgrichina"]
openGraphImageUrl: "https://opengraph.githubassets.com/820cbca61f46e1d98f9b6a4180bacf79cc3119a95c6694b1986530bfcda95ad4/vgrichina/wine-assembly"
---

# Wine-Assembly: run real Windows 98 apps and games in your browser

**[Try it now → wine-assembly.berrry.app](https://wine-assembly.berrry.app)** · [Apps you can run](https://wine-assembly.berrry.app/apps/) · [The story of how it was built](https://wine-assembly.berrry.app/story.html) · [How it works: articles, design docs & reverse-engineering notes](https://wine-assembly.berrry.app/design/)

Wine-Assembly is a **Windows 98 emulator for the browser** that runs the original, unmodified `.exe` files. There is no operating-system image to boot and no source port to maintain: an x86 interpreter and a reimplementation of the Win32 API are written directly in WebAssembly Text (WAT), and the program's own machine code runs on them. Pinball, SkiFree, Solitaire, Minesweeper, Notepad, Paint, Winamp, DirectX games and 16-bit Windows 3.1 programs all launch in a tab, on desktop and on a phone.

Large parts of the reverse engineering, implementation, testing, and documentation were developed in collaboration with Claude Code and Codex. [PROJECT_STORY.md](https://github.com/vgrichina/wine-assembly/blob/HEAD/PROJECT_STORY.md) reconstructs that history from Git and the agent sessions that built…

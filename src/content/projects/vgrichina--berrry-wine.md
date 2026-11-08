---
repo: "vgrichina/berrry-wine"
name: "berrry-wine"
description: "Run real Windows 98 apps and games in your browser. An x86 emulator and Win32 layer written directly in WebAssembly Text, no OS image, no source ports."
readmeQualityOk: true
url: "https://github.com/vgrichina/berrry-wine"
homepage: "https://berrry.wine"
language: "JavaScript"
languages: ["JavaScript", "WebAssembly"]
languagePcts: [62, 34]
topics: ["emulators", "webassembly", "wine", "browser-games", "directx", "emulator", "retro-gaming", "retrocomputing", "reverse-engineering", "wasm"]
stars: 140
forks: 17
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-03T09:16:25Z"
lastCommitAt: "2026-11-08T10:42:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 31
maintainers: ["codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe39172c7d7cd31fa54c6a6b3de2c392e795c544d704072eb16a525ca64483f3/vgrichina/berrry-wine"
---

# Wine-Assembly: run real Windows 98 apps and games in your browser

**[Try it now → wine-assembly.berrry.app](https://wine-assembly.berrry.app)** · [Apps you can run](https://wine-assembly.berrry.app/apps/) · [The story of how it was built](https://wine-assembly.berrry.app/story.html) · [How it works: articles, design docs & reverse-engineering notes](https://wine-assembly.berrry.app/design/)

Wine-Assembly is a **Windows 98 emulator for the browser** that runs the original, unmodified `.exe` files. There is no operating-system image to boot and no source port to maintain: an x86 interpreter and a reimplementation of the Win32 API are written directly in WebAssembly Text (WAT), and the program's own machine code runs on them. Pinball, SkiFree, Solitaire, Minesweeper, Notepad, Paint, Winamp, DirectX games and 16-bit Windows 3.1 programs all launch in a tab, on desktop and on a phone.

Large parts of the reverse engineering, implementation, testing, and documentation were developed in collaboration with Claude Code and Codex. [PROJECT_STORY.md](https://github.com/vgrichina/berrry-wine/blob/HEAD/PROJECT_STORY.md) reconstructs that history from Git and the agent sessions that built…

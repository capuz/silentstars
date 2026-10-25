---
repo: "nickprotop/ConsoleEx"
name: "ConsoleEx"
description: "SharpConsoleUI — A reactive terminal UI framework for .NET with a robust async model, per-window threads, a real compositor engine, 30+ controls, and NativeAOT support."
readmeQualityOk: true
url: "https://github.com/nickprotop/ConsoleEx"
homepage: "https://nickprotop.github.io/ConsoleEx/"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["console", "csharp", "developer-tools", "dotnet", "linux", "terminal", "terminal-ui", "tui", "windows"]
stars: 286
forks: 15
openIssues: 1
closedIssues: 54
watchers: 2
contributors: 9
recentReleases: 10
createdAt: "2025-02-11T15:36:40Z"
lastCommitAt: "2026-10-25T22:11:57Z"
lastReleaseAt: "2026-09-29T20:22:25Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["nickprotop", "OzeroHAX"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6c4ac78f4387a6e96e04a7b49b476ebb08d1f48c4dca2e75631e8b79b37fe5a/nickprotop/ConsoleEx"
discussionCount: 7
---

# SharpConsoleUI

A Terminal Application Framework for .NET — the terminal, as an application surface.

Build complete applications with overlapping windows, a real compositor, and reactive
component UI, rendered efficiently to any modern terminal. (The runtime ships as the
`SharpConsoleUI` NuGet package.)

Each window runs on its own async thread, with built-in marshalling back to the UI
thread. A DOM-based layout engine measures, arranges, and paints a tree of controls,
including responsive panes and flexible grids with fixed, auto-sized, and proportional
tracks, spans, and splitters. The compositor merges per-window buffers with per-cell
alpha blending, so overlapping windows, animated backgrounds, and tween/easing
animations all composite cleanly. A portal system for dropdowns, overlays, and toast
notifications. 30+ controls (including an embedded PTY terminal that runs a real shell,
a video player, data tables, tree views, and markdown), a plugin architecture, and
NativeAOT-ready.

### Watch it run

| | |
|:---:|:---:|
| [](https://www.youtube.com/watch?v=LOH_yuFBHss)<br>**[cxshell — a desktop in the terminal](https://www.youtube.com/watch?v=LOH_yuFBHss)**<br>Start menu,…

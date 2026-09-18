---
repo: "nickprotop/ConsoleEx"
name: "ConsoleEx"
description: "SharpConsoleUI — A reactive terminal UI framework for .NET with a robust async model, per-window threads, a real compositor engine, 30+ controls, and NativeAOT support."
readmeQualityOk: true
url: "https://github.com/nickprotop/ConsoleEx"
homepage: "https://nickprotop.github.io/ConsoleEx/"
language: "C#"
languages: ["C#"]
languagePcts: [92]
topics: ["console", "csharp", "developer-tools", "dotnet", "linux", "terminal", "terminal-ui", "tui", "windows"]
stars: 275
forks: 12
openIssues: 2
closedIssues: 42
watchers: 2
contributors: 6
recentReleases: 6
createdAt: "2025-02-11T15:36:40Z"
lastCommitAt: "2026-09-18T08:25:37Z"
lastReleaseAt: "2026-09-18T07:56:06Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 45
maintainers: ["nickprotop", "joezearing"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1f916893d35b9bfa70624d70fd4107926052405ce50579d3e07762e36941ffb/nickprotop/ConsoleEx"
discussionCount: 7
---

# SharpConsoleUI

</p>

</p>

</p>

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
| [](https://www.youtube.com/watch?v=LOH_yuFBHss)<br>**[cxshell — a desktop in the…

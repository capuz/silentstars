---
repo: "nickprotop/ConsoleEx"
name: "ConsoleEx"
description: "SharpConsoleUI — A reactive terminal UI framework for .NET with a robust async model, per-window threads, a real compositor engine, 30+ controls, and NativeAOT support."
url: "https://github.com/nickprotop/ConsoleEx"
homepage: "https://nickprotop.github.io/ConsoleEx/"
language: "C#"
languages: ["C#"]
languagePcts: [91]
topics: ["console", "csharp", "developer-tools", "dotnet", "linux", "terminal", "terminal-ui", "tui", "windows"]
stars: 240
forks: 7
openIssues: 2
closedIssues: 40
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2025-02-11T15:36:40Z"
lastCommitAt: "2026-07-03T06:23:17Z"
lastReleaseAt: "2026-05-31T10:46:24Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 46
maintainers: ["nickprotop"]
openGraphImageUrl: "https://opengraph.githubassets.com/2739c6ece39e5e89c2b3dfe0ac79d5bfc99a3fa88718707a142e8ea6e782d557/nickprotop/ConsoleEx"
discussionCount: 7
---

# SharpConsoleUI

</p>

</p>

</p>

A reactive, cross-platform terminal UI framework for .NET with a real compositor engine.

Each window runs on its own async thread, with built-in marshalling back to the UI
thread. A DOM-based layout engine measures, arranges, and paints a tree of controls,
including responsive panes and flexible grids with fixed, auto-sized, and proportional
tracks, spans, and splitters. The compositor merges per-window buffers with per-cell
alpha blending, so overlapping windows, animated backgrounds, and tween/easing
animations all composite cleanly. A portal system for dropdowns, overlays, and toast
notifications. 30+ controls (including an embedded PTY terminal that runs a real shell,
a video player, data tables, tree views, and markdown), a plugin architecture, and
NativeAOT-ready.

*Watch SharpConsoleUI in action on YouTube*

---

## What it is

SharpConsoleUI gives each window its own `CharacterBuffer`. A compositor merges
them — with occlusion culling, per-cell Porter-Duff alpha blending, and a
Measure→Arrange→Paint layout pipeline. Each window runs on its own async thread.
Gradient backgrounds propagate through every transparent control automatically.…

---
repo: "tui-cs/Terminal.Gui.templates"
name: "Terminal.Gui.templates"
description: "Template for dotnet new that creates a new Terminal.Gui project"
url: "https://github.com/tui-cs/Terminal.Gui.templates"
language: "C#"
languages: ["C#", "Shell"]
languagePcts: [79, 21]
stars: 56
forks: 7
openIssues: 3
closedIssues: 16
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2022-08-31T10:50:54Z"
lastCommitAt: "2026-06-28T02:02:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["tig", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e849fb0fada906530be8842915595fa90d06d0692484f53b4dc51fcbe1db077e/tui-cs/Terminal.Gui.templates"
---

# Terminal.Gui Templates

`dotnet new` templates for building [Terminal.Gui](https://github.com/tui-cs/Terminal.Gui) **v2** apps — designed so an **AI coding agent** can scaffold and extend a TUI app correctly. Every generated project ships an **`AGENTS.md`** with the canonical v2 patterns (Terminal.Gui v2 is a complete rewrite, so most online/training-data examples are v1 and won't compile).

## Install

```bash
dotnet new install Terminal.Gui.Templates
```

This installs the latest templates targeting current stable Terminal.Gui (net10.0).

## Create a project

Every template emits an `AGENTS.md` + `CLAUDE.md` — open `MyApp/AGENTS.md` first. It has the
canonical minimal app, the v1→v2 corrections table, `Pos`/`Dim` layout, common gotchas, and
links to Terminal.Gui's CI-validated docs.

### `tui` — a complete starter (recommended)

A real app to extend: a menu bar, a status bar, and interactive content, wired up with the canonical v2 patterns.

```bash
dotnet new tui -n MyApp
cd MyApp
dotnet run            # File > Quit (or the status bar) exits
```

### `tui-simple` — the minimal app

The smallest runnable v2 app: a `Window` with a label and a quit button, and a fully commented…

---
repo: "boxed/TurboKod"
name: "TurboKod"
description: "Experimental IDE inspired by TurboC++ 3"
url: "https://github.com/boxed/TurboKod"
homepage: "https://boxed.github.io/TurboKod/"
language: "Mojo"
languages: ["Mojo"]
languagePcts: [94]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-30T06:01:32Z"
lastCommitAt: "2026-07-03T12:21:07Z"
lastReleaseAt: "2026-06-16T06:01:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 57
maintainers: ["boxed"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c2f9d8783294f56ab11c8fe4ad9305241124287a41611029114fc113a6582a/boxed/TurboKod"
---

# Turbokod

A modern full featured IDE in the style of Borland Turbo C++ 3.0. Based on the modern C++ reference implementation of TurboVision [`magiblot/tvision`](https://github.com/magiblot/tvision).

The project has two layers:

1. **A TUI toolkit** in the spirit of Turbo Vision: cell-based double-buffered canvas, raw-mode terminal driver, tagged-union events, a `Drawable` trait with widgets, windows, menus, dialogs, scroll bars, dropdowns, status bar, and a desktop window manager.
2. **A code editor / IDE** built on top of that toolkit: multi-cursor editor, syntax highlighting via TextMate grammars, LSP and DAP integrations, spell checking, project-wide find/replace, file tree, git blame and gutter, run/debug targets, editorconfig support, undo/redo, soft wrap, minimap, tab bar.

The editor runs in any terminal, but ships with an optional native macOS `.app` wrapper (Swift / AppKit front-end loading the Mojo backend as a dylib) that gives it a real window, system clipboard, font fallback for emoji/CJK, and dock icon.

## Themes

| Dracula | Solarized Light |
|---|---|
|  |  |

[docs/themes.md](docs/themes.md) for the full list.

## Quickstart

```sh
./run.sh…

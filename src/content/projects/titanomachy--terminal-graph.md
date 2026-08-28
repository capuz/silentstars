---
repo: "titanomachy/terminal-graph"
name: "terminal-graph"
description: "Pure-Nim terminal charts with lines, bars, scatter plots, sparklines, surfaces, contours, responsive multiplots, and live dashboards."
readmeQualityOk: true
url: "https://github.com/titanomachy/terminal-graph"
homepage: "https://titanomachy.github.io/terminal-graph/"
language: "Nim"
languages: ["Nim"]
languagePcts: [99]
topics: ["barchart", "cli", "cli-tool", "graphs", "linegraph", "multi-plots", "streaming-graphs", "terminal", "terminal-app", "terminal-based"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-19T01:18:31Z"
lastCommitAt: "2026-08-28T15:33:56Z"
lastReleaseAt: "2026-08-24T19:24:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["titanomachy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3777de4e2f11e4b17adf784db2d5ed087419f17586be2ed56b939fa1d5eea553/titanomachy/terminal-graph"
---

# TerminalGraph

Pure-Nim terminal charts: connected lines, horizontal bars, static and live
OHLC candles, irregular XY and scatter plots, responsive multiplot dashboards,
2D surfaces, filled contours, and sparklines.

The package renders strings with Unicode and ANSI styling—there is no Python
runtime or external plotting backend. Importing `terminal_graph` has no side
effects and does not change terminal state.

</p>

## Platform support

TerminalGraph has been tested on Linux and Windows. On Windows I tested with the Terminal app which comes with Windows, other terminals may or may not work. It should also work on macOS through its standard POSIX terminal and ANSI/VT support, but macOS has not yet been tested directly.

## Requirements

- Nim 2.0.0 or newer
- [`terminal_style`](https://github.com/titanomachy/terminal-style) 0.1.1 or newer, installed from GitHub
- No runtime dependencies beyond `terminal_style`

## Contents

- [Platform support](#platform-support)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick start](#quick-start)
- [API overview](#api-overview)
  - [Connected lines](#connected-lines)
  - [Horizontal bars](#horizontal-bars)
  - [OHLC…

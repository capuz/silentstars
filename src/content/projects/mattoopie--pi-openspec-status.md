---
repo: "mattoopie/pi-openspec-status"
name: "pi-openspec-status"
description: "Pi coding agent OpenSpec status widget"
readmeQualityOk: true
url: "https://github.com/mattoopie/pi-openspec-status"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-23T12:46:07Z"
lastCommitAt: "2026-11-18T12:08:50Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 45
maintainers: ["mattoopie", "mcvanheerdt"]
openGraphImageUrl: "https://opengraph.githubassets.com/8607a31d9cf377160a2664f70b345875d14f9096f29a89afa5d03592a5581604/mattoopie/pi-openspec-status"
---

# pi-openspec-status

A [pi](https://pi.dev) coding agent extension that displays the active OpenSpec change status as a persistent TUI widget above the editor, with an interactive dialog for detailed views.

## Features

- **Persistent TUI widget** — always visible above the editor in interactive mode, automatically suppressed in non-interactive modes (`-p`, `--json`, headless RPC)
- **Single-change detailed view** — when one active change exists, shows the change name, schema, per-artifact status (proposal, design, specs, tasks), and a task progress bar with apply dependency hints
- **Multi-change overview** — when multiple active changes exist, shows a header with the active count followed by one condensed line per change with aligned change names, artifact labels, task counters, and blocked-dependency hints
- **Artifact status indicators** — uses filled circle (●) for done, open circle (○) for ready, and dotted circle (◌) for blocked, each colored with theme-aware success/muted/warning colors
- **Interactive dialog** — press `Ctrl+Alt+O` to open a scrollable dialog with full change details, task breakdowns, and dependency info
- **Automatic data refresh** — event-driven…

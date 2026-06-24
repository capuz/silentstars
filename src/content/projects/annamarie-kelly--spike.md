---
repo: "annamarie-kelly/spike"
name: "spike"
description: "An editor built for an AI world."
url: "https://github.com/annamarie-kelly/spike"
homepage: "https://annamarie-kelly.github.io/spike/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [51, 30]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-10T18:47:30Z"
lastCommitAt: "2026-06-24T00:23:38Z"
lastReleaseAt: "2026-06-13T23:00:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["annamarie-kelly"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8390bdad96c34aedb403b0013ac31943dde2247d1e4bce2fab7f6c883095c8c/annamarie-kelly/spike"
---

# spike

A native macOS shell around [Claude Code](https://www.anthropic.com/claude-code).

Claude Code already does the work: research, skills, file generation, tool use. What it lacks is a frame. Spike gives it one. A file tree, real terminals, a preview that doubles as an editor, and panes you can drag anywhere. The terminal is still the chat. Spike just makes it a place you want to live.

## What it does

- **Multiple named terminals.** Each tab is its own Claude Code session. Add with `+`, rename anytime (double-click or right-click), close with `×`.
- **Chrome-style tab groups.** Group sessions, name them, give each a color, collapse and expand. Groups are durable workspaces: each carries its own context prompt, injected into every session that spawns inside it.
- **Drag-to-dock tiling.** Grab a pane by its header and drop it on another pane's edge to split, or its center to stack. Drag a terminal tab off the strip to give that session its own pane. Drag a file from the tree onto an edge and the preview opens right there. The sidebar pins left or right. The layout persists.
- **A preview that edits.** Markdown (rendered, wikilinks clickable), HTML, CSV, JSON, images, PDF,…

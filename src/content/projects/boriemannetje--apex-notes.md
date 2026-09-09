---
repo: "boriemannetje/apex-notes"
name: "apex-notes"
description: "Apex Notes, Obsidian for hierarchical thinkers. a local-first Markdown knowledge graph app for agent-friendly notes, with aspriations to become the ultimate context / skill managment system"
readmeQualityOk: true
url: "https://github.com/boriemannetje/apex-notes"
homepage: "https://apex-notes.netlify.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["knowledge-graph", "local-first", "markdown", "notes", "tauri"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-09T01:52:58Z"
lastCommitAt: "2026-09-09T08:21:59Z"
lastReleaseAt: "2026-05-25T14:57:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 17
maintainers: ["boriemannetje"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdd26180ea5e04378627f13977b728a0b66b01051f83ebd001a2a1d7b00946b1/boriemannetje/apex-notes"
---

# Apex Notes

Apex Notes is a local desktop app for editing Markdown note hierarchies.

The graph is derived from frontmatter: `parent` creates hierarchy edges when present, and body `[[wiki links]]` create solid, semi-transparent contextual connections.

Download the latest build at [apex-notes.netlify.app](https://apex-notes.netlify.app) or from [GitHub Releases](https://github.com/boriemannetje/apex-notes/releases).

## Features

- Local-first Markdown notes
- Native folder access through Tauri
- Tree edges from frontmatter `parent`
- Semi-transparent reference edges from body `[[wiki links]]`
- Minimal, draggable graph view
- Bundled writing-agent skill in `skills/apex-notes-writing/`

## Run

```sh
npm install
npm run dev
```

This opens the Tauri desktop app. The desktop app uses native folder dialogs and Rust filesystem commands for local Markdown reads/writes.
`npm run serve` is used internally by `tauri dev` to host the frontend during local development; the app itself expects the Tauri shell for folder access and Trash support.

Click `Open notes folder` to edit an existing graph, or `Create folder` to start a new writable graph.

## Build

```sh
npm run build
```

This…

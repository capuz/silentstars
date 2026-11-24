---
repo: "Volpestyle/herdr-plugin-mermaid-preview"
name: "herdr-plugin-mermaid-preview"
description: "Live Mermaid previews for Claude Code and Codex output in Herdr"
readmeQualityOk: true
url: "https://github.com/Volpestyle/herdr-plugin-mermaid-preview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code", "herdr", "herdr-plugin", "mermaid", "openai-codex", "terminal"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T20:32:12Z"
lastCommitAt: "2026-11-24T14:08:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 10
maintainers: ["Volpestyle"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee674b28f4450539d546bbf712196b11ff6cbd5a57bac297a8b11d55ff1a4d44/Volpestyle/herdr-plugin-mermaid-preview"
---

# Herdr Preview

Herdr Preview watches the native Claude Code or Codex transcript behind a Herdr
pane or `herdr-core` (`hc`) terminal and displays what it finds live. It works
across all three Herdr environments:

- **Herdr TUI** (`herdr` 0.7.1 – 0.9.5+) — managed plugin tab over Kitty graphics
- **Herdr App** (`herdr-app` + `hc`) — native Kitty graphics terminal tab/split
  plus a native GPUI launcher mod (`mods/herdr-preview`)
- **Herdr Browser** (`herdr-app-browser` fork) — both native Kitty terminal mode
  and a live-reloading native Chromium preview mode (`--browser`)

It ships with two sources:

- **Mermaid** — every complete `mermaid`-fenced block in an assistant message,
  rendered locally and offline.
- **Images** — every image in the session: what you paste in, and what the agent
  looked at with its read tool. Screenshots it takes show up here without any
  filesystem watching, because the bytes are already in the transcript.

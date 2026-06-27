---
repo: "murashit/codex-panel"
name: "codex-panel"
description: "Codex in your Obsidian sidebar."
url: "https://github.com/murashit/codex-panel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 8
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-12T15:16:47Z"
lastCommitAt: "2026-06-27T06:22:27Z"
lastReleaseAt: "2026-05-15T22:49:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 55
maintainers: ["murashit", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5d0f74f96ce50d02d6a3feed9ca96172bc30af3ae38324043d6ff03d1354122/murashit/codex-panel"
---

# Codex Panel

Codex Panel brings your existing Codex setup into an Obsidian sidebar, so you can work with Codex beside your notes without switching to a terminal or separate app window.

If your Codex CLI or Codex.app environment is already configured, Codex Panel gives that setup a persistent Obsidian pane with note-aware links, threads, archives, and editor selections. It stays thin: runtime behavior continues to come from Codex, not from a separate plugin configuration layer.

## Why use it

- Reuse your existing Codex configuration and credentials.
- Work with persistent Codex threads in Obsidian panes, including multiple panels side by side and a sidebar thread list.
- Compose with Obsidian wikilinks, rendered vault links, and Codex file mentions.
- Review Codex file changes, rewrite selected note text, and archive useful threads without leaving the vault.

## How it works

Codex Panel runs `codex app-server` as a local child process and talks to it over stdio. Each open chat panel has its own app-server connection, active thread, pending requests, and composer draft. The vault root is passed to Codex as the working directory.

Models, reasoning defaults, sandboxing,…

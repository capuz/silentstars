---
repo: "just-be-dev/workspace"
name: "workspace"
description: "Where my work happens"
readmeQualityOk: true
url: "https://github.com/just-be-dev/workspace"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 37
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-29T22:22:44Z"
lastCommitAt: "2026-09-19T01:17:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 29
maintainers: ["just-be-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e3b788e877e15bc70f7757c60700505689e579ae3820447b9be8f38a3a0534e/just-be-dev/workspace"
---

# workspace

This is the configuration for the tools I use for agent driven development.

I'm trending towards doing as much in the terminal as I can and biasing towards tools
with high levels of customizability.

Uses the fantasic [`mise`](https://mise.jdx.dev) to bootstrap everything.

## What's inside

| Path                | Tool | Installed by | Symlinked to |
| ------------------- | ---- | ------------ | ------------ |
| `mise/workspace.toml` | Global mise tool config | `[dotfiles]` | `~/.config/mise/conf.d/workspace.toml` |
| `herdr/config.toml` | [herdr](https://herdr.dev) | `mise/workspace.toml` -> `herdr` | `~/.config/herdr/config.toml` |
| `herdr/plugins/dev-layout/` | Herdr plugin: four-pane dev layout | post-tools hook -> `herdr plugin link` | — |
| `herdr/plugin-config/jhochenbaum.hunkdiff/config.toml` | Herdr plugin config: hunk review round-trip | `mise.toml` -> `jhochenbaum/herdr-hunk-diff` | `~/.config/herdr/plugins/config/jhochenbaum.hunkdiff/config.toml` |
| — | [herdr-projects](https://github.com/eliasstravik/herdr-projects) coordinator and worktree plugin | post-tools hook -> `herdr plugin install` | — |
| `herdr-mirror/hosts.toml` |…

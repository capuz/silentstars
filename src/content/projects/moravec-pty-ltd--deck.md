---
repo: "Moravec-Pty-Ltd/deck"
name: "deck"
description: "A single browser app for driving Claude Code sessions and tmux terminals on one machine. Flat recency-sorted session list, structured Claude chat, polled terminal view. Runs headless under your Claude subscription auth, installs as a PWA over your tailnet."
readmeQualityOk: true
url: "https://github.com/Moravec-Pty-Ltd/deck"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [51, 35]
stars: 6
forks: 1
openIssues: 6
closedIssues: 138
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T13:18:14Z"
lastCommitAt: "2026-10-23T12:04:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["jinbe", "baaoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d55789f1fafa07c3d2d2ecdc335fb305b185a09b4be9726556f392d6b2e532c/Moravec-Pty-Ltd/deck"
---

# deck

A single browser app for driving Claude Code sessions and tmux terminals on one machine. One flat, recency-sorted list of every session, a structured chat view for Claude, and a polled terminal view for shells. Built to replace the aoe + gmux split. Light, dark, and e-ink themes (e-ink kills all motion and shadows).

It runs headless Claude Code under your normal subscription auth, so there's no API key to manage, and it installs as a PWA on a phone so you can drive sessions from anywhere on your tailnet.

## Screenshots

A structured chat view for Claude sessions, with inline diffs and collapsible tool output:

One flat, recency-sorted list of every session across Claude, pi, Codex, OpenCode, and shells:

A polled terminal view for tmux shells:

An inbox of everything waiting on you, answered in place:

Server-wide settings on one page:

Light, dark, and e-ink themes (e-ink drops all motion and shadows for a flat, monochrome render):

## Requirements

- Node 20 or newer
- [pnpm](https://pnpm.io) (the repo pins a version via `packageManager`)
- The `claude` CLI (Claude Code) on your `PATH`, already logged in
- `tmux` and `git`
- `tailscale` (optional, for remote/phone…

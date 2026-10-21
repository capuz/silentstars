---
repo: "alienxp03/kesh"
name: "kesh"
description: "Keyboard-driven Kitty session manager"
readmeQualityOk: true
url: "https://github.com/alienxp03/kesh"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-07-25T19:09:55Z"
lastCommitAt: "2026-10-21T08:47:52Z"
lastReleaseAt: "2026-07-31T19:30:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 43
maintainers: ["alienxp03"]
openGraphImageUrl: "https://opengraph.githubassets.com/f265db7022dafb3893775c30213fe027b29ce70b1ed90b09146ddc80a37f7b92/alienxp03/kesh"
---

# kesh

kesh is a keyboard-driven [Kitty](https://sw.kovidgoyal.net/kitty/) session manager,
powered by [Kitty session](https://sw.kovidgoyal.net/kitty/sessions).

## Features

- **Keyboard-driven Kitty picker** — browse and switch projects, sessions, tabs, windows, SSH hosts, and saved layouts.
- **Project layouts** — define workspaces, panes, startup commands, and worktree setup in `.kesh.yaml`.
- **Zoxide integration** — discover and open your frequently used projects quickly.
- **Save and restore sessions** — build on Kitty’s [session support](https://sw.kovidgoyal.net/kitty/sessions/) to save tabs, splits, and working directories, with optional foreground command restoration.
- **Git worktrees and pull requests** — create worktrees, clone repositories, and check out GitHub pull requests.
- **Native Kitty pins** — assign Kitty shortcuts to sessions during the current Kitty run.
- **Agent visibility** — find active `Codex`, `Claude` and `pi` windows with live terminal previews.

## Why Kitty instead of tmux?

kesh is built around Kitty’s native workspace features rather than a terminal
multiplexer. I used [sesh](https://github.com/joshmedeski/sesh) heavily in the
past, and kesh…

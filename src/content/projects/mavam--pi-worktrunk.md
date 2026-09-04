---
repo: "mavam/pi-worktrunk"
name: "pi-worktrunk"
description: "A pi extension that updates Worktrunk branch markers to show whether pi is working or waiting for input"
readmeQualityOk: true
url: "https://github.com/mavam/pi-worktrunk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-status", "git-worktree", "pi", "pi-extension", "status-indicator", "worktrunk", "wt", "branch-markers"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-04-14T07:05:02Z"
lastCommitAt: "2026-09-04T08:09:49Z"
lastReleaseAt: "2026-09-04T08:09:52Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 55
maintainers: ["mavam", "github-actions[bot]", "alexkarpandrus"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e6886012254f794b5c3b50c295a1a0c423bfb20c02e0f0571bc8b07c793384/mavam/pi-worktrunk"
---

# 🚦 pi-worktrunk

A [Pi](https://pi.dev) extension that runs Worktrunk commands, follows worktree
changes with linked sessions, and reports Pi status in `wt list`.

## 🚀 Installation

```sh
pi install npm:pi-worktrunk
```

## ✨ Usage

`/wt` accepts the same arguments as the `wt` CLI:

```text
/wt list
/wt switch main
/wt switch --create fix/parser
/wt land
/wt config show
```

Pi passes arguments directly to Worktrunk. Worktrunk flags and configured aliases
work without extension-specific syntax.

Two bare commands open compact Pi interfaces:

- `/wt list` opens the worktree inspector.
- `/wt switch` opens the worktree picker and moves to the selected worktree.

After other successful commands, Pi moves when Worktrunk reports a destination
or creates exactly one worktree. If the command removes the current worktree,
Pi recovers in a surviving worktree. Pi stays put when no unique destination can
be identified or when a command fails without removing the current worktree.

Each move creates a linked Pi session in the destination. The source session
remains available through `/resume`.

### 🏷️ Worktrunk aliases

Configured aliases pass directly through `/wt`:

```text
/wt land…

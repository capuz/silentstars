---
repo: "samzong/Recall"
name: "Recall"
description: "Switch agents. Keep the history. Local-first search across your AI coding sessions."
readmeQualityOk: true
url: "https://github.com/samzong/Recall"
homepage: "https://samzong.github.io/Recall/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["claude-code", "cli", "codex", "local-first", "opencode", "rust", "tui", "cursor", "gemini", "cline"]
stars: 109
forks: 14
openIssues: 26
closedIssues: 39
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-04-09T09:43:56Z"
lastCommitAt: "2026-11-08T14:14:30Z"
lastReleaseAt: "2026-05-30T17:26:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 33
maintainers: ["samzong", "github-actions[bot]", "delete-cloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/a932ac198587c3df530fa5f6f7f050e6a1c86779d800865b5f93f27a44daf7f5/samzong/Recall"
---

**English** | [Chinese](https://github.com/samzong/Recall/blob/HEAD/README.zh-CN.md)

# Recall

> Local-first search across every AI coding session on your machine.

Jump between Claude Code, Codex, and whatever comes next; Recall pulls those scattered local sessions into one searchable index, tracks usage when token metadata is available, and drops you back into the original CLI.

## Architecture

## Install

```bash
brew install samzong/tap/recall
```

## Usage

```bash
recall sync          # incremental sync of the current project (safe to run anytime)
recall sync --project all  # sync every project and run index-wide maintenance
recall               # launch TUI
recall usage         # usage dashboard
recall export --project all > recall-export.jsonl # export all sessions
recall import recall-export.jsonl --dry-run  # preview an import
recall session list  # list sessions for agents/scripts
recall session share --id <session-id> --format json  # publish one selected session
recall share list --format json  # list published share URLs
recall share unpublish <share-id> --yes  # take down one public page
recall info  # index stats and worker status
```

With Skill use **Recall**…

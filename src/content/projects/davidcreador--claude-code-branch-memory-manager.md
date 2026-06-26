---
repo: "Davidcreador/claude-code-branch-memory-manager"
name: "claude-code-branch-memory-manager"
description: "Automatically manages branch-specific CLAUDE.md files so Claude always has the right context for your current work. Switch branches seamlessly without losing your development context, notes, or current progress."
url: "https://github.com/Davidcreador/claude-code-branch-memory-manager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai", "ai-tools", "bash", "branching", "claude", "claude-ai", "claude-code", "context-management", "developer-tools", "git"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-08-20T00:54:15Z"
lastCommitAt: "2026-06-26T23:41:06Z"
lastReleaseAt: "2026-06-26T23:41:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 45
undervaluedScore: 25
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4a60b52aed7c0d56d1f86413187cf2cd0e9ae3130798001cd27062352a169d4e/Davidcreador/claude-code-branch-memory-manager"
---

# Claude Code Branch Memory Manager

Automatic branch-specific `CLAUDE.md` memory management for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). When you switch git branches, your Claude Code context switches with you.

## The Problem

When working across multiple git branches, your `CLAUDE.md` file contains context specific to one branch. Switching branches means Claude Code loses that context, or worse, has the wrong context for your current work.

## The Solution

Branch Memory Manager saves and loads branch-specific `CLAUDE.md` files automatically. Each branch gets its own memory, stored in `.claude/memories/`.

**As a Claude Code plugin** — memories switch automatically when you run `git checkout` or `git switch` inside Claude Code. No manual intervention needed.

**As a CLI** — manually save, load, and manage branch memories from your terminal.

## Quick Start

### Install as a Claude Code Plugin (Recommended)

Install from the plugin marketplace inside Claude Code:

```
/plugin marketplace add Davidcreador/claude-code-branch-memory-manager
/plugin install branch-memory@davidcreador
```

Or install the npm package and load it with `--plugin-dir`:

```bash
#…

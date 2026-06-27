---
repo: "wkentaro/git-hunk"
name: "git-hunk"
description: "Non-interactive git hunk staging for AI agents."
url: "https://github.com/wkentaro/git-hunk"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 11
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-15T01:31:03Z"
lastCommitAt: "2026-06-27T00:48:37Z"
lastReleaseAt: "2026-04-16T13:18:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 59
maintainers: ["wkentaro", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cd7f01c6648b73352d95fe07bb825f9f003ee9c8cd99536ae100e15a7d4eb58/wkentaro/git-hunk"
---

# git-hunk

Non-interactive, programmatic alternative to `git add -p`.

Every hunk gets a stable, content-based ID so you can inspect, filter, and
stage changes without interactive prompts.

## Why?

`git add -p` requires interactive input. That makes it unusable for:

- **AI agents** (Claude Code, Codex, etc.) that need to split changes into logical commits
- **Scripts & CI/CD** that automate commit organization
- **Editor integrations** that want hunk-level staging without shelling out to a TUI

`git-hunk` solves this by assigning each hunk a stable ID and exposing simple
stage/unstage/discard commands.

## Install

```bash
pip install git-hunk
```

Or with [uv](https://docs.astral.sh/uv/):

```bash
uv tool install git-hunk
```

Verify it works:

```bash
git-hunk --version
```

### For AI agents

A usage guide ships inside the CLI, so agents (Claude Code, Codex, etc.) can
load it on demand. It always matches the installed version, so it never goes
stale:

```bash
git-hunk skills get core
```

`git-hunk --help` points here first.

## Quick start

```bash
# See all hunks across staged, unstaged, and untracked files
git-hunk list

# Show the diff for a specific hunk
git-hunk show…

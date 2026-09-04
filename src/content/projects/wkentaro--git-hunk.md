---
repo: "wkentaro/git-hunk"
name: "git-hunk"
description: "Non-interactive git hunk staging for AI agents."
readmeQualityOk: true
url: "https://github.com/wkentaro/git-hunk"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 10
forks: 2
openIssues: 19
closedIssues: 85
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-03-15T01:31:03Z"
lastCommitAt: "2026-09-04T08:09:42Z"
lastReleaseAt: "2026-09-04T01:22:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 54
maintainers: ["wkentaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/f72bc349b6e2557e0d37821bc80a4790c9f37285fe0ed4008967b06015e6f6e8/wkentaro/git-hunk"
---

# git-hunk

Non-interactive, programmatic alternative to `git add -p`.

Every staged or unstaged Hunk gets a durable ID so you can inspect, filter, and
stage changes without interactive prompts. Duplicate Hunks get unique
Conditional IDs.

[Comparison](#comparison) • [Install](#install) • [For AI agents](#for-ai-agents) •
[Quick start](#quick-start) • [Usage](#usage) • [JSON output](#json-output)

## Why?

`git add -p` requires interactive input. That makes it unusable for:

- **AI agents** (Claude Code, Codex, etc.) that need to split changes into logical commits
- **Scripts & CI/CD** that automate commit organization
- **Editor integrations** that want hunk-level staging without shelling out to a TUI

`git-hunk` solves this by assigning each staged or unstaged Hunk a durable ID
and exposing simple stage/unstage/discard commands.

## Comparison

| | Interactive | Programmatic | Hunk IDs | Line-level control | JSON output |
| ---------------- | ----------- | ------------ | -------- | ------------------ | ----------- |
| `git add -p` | Yes | No | No | Yes | No |
| `git add <file>` | No | Yes | No | No | No |
| **`git-hunk`** | **No** | **Yes** | **Yes** | **Yes** | **Yes** |

###…

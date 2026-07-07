---
repo: "tomzhengy/harness-configs"
name: "harness-configs"
description: "claude & codex configs"
readmeQualityOk: true
url: "https://github.com/tomzhengy/harness-configs"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [50, 49]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-04T10:51:57Z"
lastCommitAt: "2026-07-07T06:42:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 57
maintainers: ["tomzhengy", "r0hin"]
openGraphImageUrl: "https://opengraph.githubassets.com/07e5511d841e571ed7ea3b334a5545dcdda4fc78432afdb1fcbba63c4705b6bd/tomzhengy/harness-configs"
---

# harness-configs

claude code and codex cli config files. please feel free to add suggestions!! i enjoy optimizing my agent workflows.

## claude code features

- **granular bash permissions** - read-only commands auto-allowed, write commands (git add/commit/merge/checkout/worktree) explicitly permitted
- **sound notifications** - async ping on permission prompts, idle prompts, auth, elicitations, and plan mode responses; glass sound when done
- **auto-formatting** - biome runs automatically when a project has biome config; otherwise prettier runs
- **auto-linting** - bun lint runs automatically after file changes
- **git worktree workflow** - auto-creates worktrees for non-trivial tasks to isolate branches across sessions
- **behavioral guardrails** - assumption surfacing, confusion management, change summaries
- **systems-first design** - iterates on system design before writing code
- **nia research rules** - integrated nia mcp for external code/docs research and indexing
- **custom statusline** - git branch, model, and context info

## codex harness features

- **instruction parity** - codex `AGENTS.md` mirrors the current claude workflow rules: bun-first js/ts, assumption…

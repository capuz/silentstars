---
repo: "jbaruch/coding-policy"
name: "coding-policy"
description: "General-purpose coding policy tile for AI agents"
readmeQualityOk: true
url: "https://github.com/jbaruch/coding-policy"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [54, 46]
stars: 7
forks: 2
openIssues: 4
closedIssues: 331
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-17T23:00:04Z"
lastCommitAt: "2026-11-12T05:43:45Z"
lastReleaseAt: "2026-10-25T23:46:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["jbaruch", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e103d7431b0dddfd191ad80086c3aabd7c681b675f692ebf8416cc477e4e3876/jbaruch/coding-policy"
---

# jbaruch/coding-policy

Coding policy plugin for Baruch's AI agents. Language-agnostic code quality rules plus Tessl-specific plugin authoring standards — covering commits, testing, error handling, skill structure, and script delegation.

## What's New

- Worktree and branch cleanup — anything origin can restore is removed without a word; work that exists nowhere else is reported, never touched
  - `check-leftover-worktrees` runs at session start for the session's own repository
  - An idle clean worktree whose HEAD origin holds is removed
  - A local branch origin holds or merged is deleted
  - An unprotected branch on origin merged with no open pull request is deleted
  - An idle dirty or unpushed worktree, an unpushed local branch, and a stale unmerged branch on origin with no pull request are listed for the operator
- `stop-handoff-hygiene` hook — a `Stop` hook (Claude Code + Codex) that blocks the handoff once (loop-safe via `stop_hook_active`) when `prune-worktrees.sh --dry-run` would remove leftover worktrees or local branches, or on diagnostics findings in the changed set; a dirty working tree is reported, not blocked
- `check-acr-latest` hook — the ACR counterpart of…

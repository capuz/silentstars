---
repo: "chippingway/chipping-orchestrator"
name: "chipping-orchestrator"
description: "Autonomous AI coding agent orchestrator. Watches GitHub issues, spawns Claude Code, Codex CLI, or Antigravity CLI in isolated git worktrees, opens PRs, and runs an independent reviewer pass. Self-hosted, Python, multi-repo."
readmeQualityOk: true
url: "https://github.com/chippingway/chipping-orchestrator"
homepage: "https://chippingway.github.io/chipping-orchestrator/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "claude", "claude-code", "codex", "codex-cli", "github", "python", "agy-cli", "antigravity", "agentic-ai"]
stars: 17
forks: 2
openIssues: 13
closedIssues: 1222
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-04-25T08:01:15Z"
lastCommitAt: "2026-11-02T13:38:22Z"
lastReleaseAt: "2026-08-19T15:58:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["pichaautobot", "geserdugarov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/chippingway/chipping-orchestrator"
---

# chipping-orchestrator

**Autonomous GitHub issue → reviewed PR pipeline for Claude Code, Codex CLI, and Antigravity CLI.**

`chipping-orchestrator` turns GitHub issues into reviewed pull requests with local coding-agent CLIs (`codex`,
`claude`, or `agy`). It plans the work, implements it in an isolated git worktree, reviews the result, and asks a
human to make the final merge decision.

Workflow state lives on the issue itself, so progress stays visible on GitHub and survives process restarts without a
separate queue or workflow database.

## When to use it

- **Use it when:** you work solo or on a small team, have an authenticated `codex`, `claude`, or `agy` CLI, and want
  issue-to-PR autonomy without running a separate planner, queue, or workflow database. You decide what to merge.
- **Don't use it when:** you need a hosted service or automatic merges, cannot let agents run with the host account as
  their security boundary, or need issue trackers other than GitHub.

## How it works

An issue normally follows this path:

```text
workflow:decomposing → workflow:ready → workflow:implementing
  → workflow:validating → workflow:documenting → in_review
  → done or rejected
```…

---
repo: "amirbena/code-review-skill"
name: "code-review-skill"
description: "Policy-driven code review skills for coding agents — local changes and GitHub pull requests."
readmeQualityOk: true
url: "https://github.com/amirbena/code-review-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "code-review", "codex", "coding-agents", "cursor", "developer-tools", "developer-tools-ai-agent", "developer-tools-ai-agents", "github"]
stars: 8
forks: 2
openIssues: 32
closedIssues: 205
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-07T15:10:33Z"
lastCommitAt: "2026-09-19T08:13:16Z"
lastReleaseAt: "2026-09-07T06:21:50Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 62
maintainers: ["amirbena", "skill-release-automation[bot]", "Mr-Neutr0n"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8cf8fc7d08561ce05acfd675d4e62afbcad175a857e5e5dc492127867c3305/amirbena/code-review-skill"
discussionCount: 0
---

# code-review-skill

> Two portable **Code Review Agent Skills** that share one review standard —
> one for local changes before they become a PR, one for existing GitHub
> Pull Requests.

Each Skill is packaged around a canonical
[Agent Skills](https://agentskills.io/specification) `SKILL.md` and runs on
any Agent Skills-compatible runtime (Claude Code, Codex, Cursor, OpenCode,
…). Optional runtime adapters may improve discovery but never change review
behavior.

Licensed under the [Apache License 2.0](https://github.com/amirbena/code-review-skill/blob/HEAD/LICENSE).

Explanatory, navigational documentation — onboarding, a Skill-selection
guide, and a dated AI code-review landscape comparison — lives in the
[GitHub Wiki](https://github.com/amirbena/code-review-skill/wiki). It
never overrides the canonical files in this repository.

## What this repository provides

| Skill | Reviews | Delivers |
|---|---|---|
| [`local-code-review`](https://github.com/amirbena/code-review-skill/blob/HEAD/skills/local-code-review/SKILL.md) | your local implementation delta — committed, staged, unstaged, and untracked changes, each detected separately | one structured P0/P1/P2 report to the caller…

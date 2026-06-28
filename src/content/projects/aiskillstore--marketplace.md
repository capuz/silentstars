---
repo: "aiskillstore/marketplace"
name: "marketplace"
description: "Security-audited skills for Claude, Codex & Claude Code. One-click install, quality verified."
url: "https://github.com/aiskillstore/marketplace"
homepage: "https://skillstore.io"
language: "Python"
languages: ["Python", "Ruby"]
languagePcts: [47, 30]
topics: ["ai-skills", "claude", "claude-code", "claude-skills", "codex", "codex-skills", "skills"]
stars: 376
forks: 31
openIssues: 0
closedIssues: 272
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-20T12:00:04Z"
lastCommitAt: "2026-06-28T03:11:28Z"
lastReleaseAt: "2026-01-11T02:51:10Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 28
maintainers: ["ai-skill-store[bot]", "mylukin"]
openGraphImageUrl: "https://opengraph.githubassets.com/712c133e6d9f2eac2efb7edc82910de0fe4dc0adebb7231116b4d80626bdadd8/aiskillstore/marketplace"
---

# Skill Store — Marketplace Repository

This is the open-source content repository behind **[Skill Store](https://skillstore.io)**. It stores every approved [Agent Skill](https://agentskills.io/specification), the records that go with it, and the automated security audits each skill must pass before it ships.

> **This repo is a companion to the Skill Store platform, not the place to submit skills.**
> Skills are added through [skillstore.io](https://skillstore.io) — its review pipeline writes to this repo automatically. Please **do not open a pull request here to add a skill**; PRs adding skills will be closed. See [Contributing a skill](#contributing-a-skill) below.

## Installing a skill

The recommended way to install any skill is the **`skillstore` CLI** — one command works for both **Claude Code** and **Codex**:

```sh
npx skillstore add author/skill-name
```

For example:

```sh
npx skillstore add aiskillstore/code-review
```

It downloads the skill and drops it into the right `skills/` directory for your tool. Claude Code auto-discovers it; for Codex, restart the session.

Prefer to do it by hand, or installing via Claude Web? See the full **[Installation…

---
repo: "kopp0510/claude-dd"
name: "claude-dd"
description: "Portable Claude Code profile — 8-step dev loop, CLAUDE.md pre-commit gate, zero-hallucination policy. Install once, carry it to any machine."
readmeQualityOk: true
url: "https://github.com/kopp0510/claude-dd"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [64, 36]
topics: ["agent-skills", "ai-config", "claude", "claude-code", "code-review", "developer-tools", "dotfiles", "git-hooks", "prompt-engineering", "workflow"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2025-12-15T05:18:52Z"
lastCommitAt: "2026-10-30T11:03:09Z"
lastReleaseAt: "2026-10-12T17:11:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 64
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/deecc1b4faedbc516e38a5b1d26fe7bc1ea4db850d7e0bee0eda8ad4d1949bea/kopp0510/claude-dd"
---

[English](https://github.com/kopp0510/claude-dd/blob/HEAD/README.md) | [繁體中文](https://github.com/kopp0510/claude-dd/blob/HEAD/README.zh-TW.md)

# DD Pipeline (claude-dd)

> A portable Claude Code profile — turning "did the AI actually follow the rules?" into output you can see and gates that can block you

**What it is**: a Claude Code profile you can carry between machines — skills, agents, commands, scripts, output styles, and a global `CLAUDE.md`. Clone the repo, run one bash script, and your whole working style is installed into `~/.claude/`. This repo is the source of truth; `~/.claude/` is always a deployment of it.

**What it actually does**: three things, with honestly different strengths.

1. **A pre-commit hook that blocks commits** when a directory containing code has no `CLAUDE.md`, or has one that wasn't staged in the same commit. This one is real enforcement — it's a shell script with `exit 1`, it doesn't care what the AI decided.
2. **A global `CLAUDE.md`** that tells Claude to cite a source for API signatures, version numbers, and project facts, and bans hedges like "should be" / "probably".
3. **An 8-step loop** stamped into each project's `CLAUDE.md` so every…

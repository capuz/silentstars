---
repo: "GenesisAgentInfra/genesis"
name: "genesis"
description: "Turn your codebase into a business flow map and see which of your coding agent's changes are untested or risky. Genesis Map is a local CLI and skill for change impact analysis with Claude Code, Codex and other agents. Supports Python, TypeScript and most common languages."
readmeQualityOk: true
url: "https://github.com/GenesisAgentInfra/genesis"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [42, 37]
topics: ["agent-skills", "ai-agents", "claude-code", "claude-skills", "cli", "code-analysis", "code-review", "code-visualization", "codex", "coding-agents"]
stars: 77
forks: 10
openIssues: 3
closedIssues: 0
watchers: 5
contributors: 3
recentReleases: 1
createdAt: "2026-11-06T06:24:07Z"
lastCommitAt: "2026-11-26T12:56:27Z"
lastReleaseAt: "2026-11-21T02:54:58Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 26
maintainers: ["DeanOuY", "willlzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ca855eabd677e6cf29cc99375f863f3659d3d2cab6da0b4b69b4b7678507838/GenesisAgentInfra/genesis"
---

https://github.com/user-attachments/assets/673a3f9d-603c-4bcb-b20b-f152d53aa128

Genesis turns your codebase into a business flow map and shows which of your agent's
changes are untested or risky. It runs as a skill inside Claude Code and Codex, and
works on projects in Python, TypeScript, JavaScript, Go, Java, Rust and most other
common languages. Python gets the most accurate results.

## Benchmark

We gave Claude Code and Codex 10 recent commits from 5 open-source Python projects and
asked what a user would ask: what does this commit change, could it break anything, and
do the tests cover it? Each agent answered every commit three times on its own and three
times with Genesis. Every answer was scored against a reference answer built from the
code and its tests before the runs.

With Genesis:

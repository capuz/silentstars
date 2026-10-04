---
repo: "Ancienttwo/repo-harness"
name: "repo-harness"
description: "File-backed workflow harness for reliable Claude Code and Codex sessions."
readmeQualityOk: true
url: "https://github.com/Ancienttwo/repo-harness"
homepage: "https://www.repoharness.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agentic-workflows", "ai-agents", "claude-code", "codegraph", "codex", "developer-tools", "typescript"]
stars: 434
forks: 35
openIssues: 3
closedIssues: 84
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-03-19T15:35:43Z"
lastCommitAt: "2026-10-04T10:02:02Z"
lastReleaseAt: "2026-06-10T17:28:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 28
maintainers: ["Ancienttwo", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/56b94c05c1479bb2241668ca758d126b69ac3f885f6446551571367d37672cf7/Ancienttwo/repo-harness"
---

# repo-harness

### A file-backed workflow for Claude and Codex, and an authorized runtime for the programs built on top of it

[English](https://github.com/Ancienttwo/repo-harness/blob/HEAD/README.md) | [简体中文](https://github.com/Ancienttwo/repo-harness/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/Ancienttwo/repo-harness/blob/HEAD/README.ja.md) | [Français](https://github.com/Ancienttwo/repo-harness/blob/HEAD/README.fr.md) | [Español](https://github.com/Ancienttwo/repo-harness/blob/HEAD/README.es.md)

**Give the agent a complete PRD or Sprint; after that, your loop is just review and `next`, or start `/goal` and go AFK.**

`repo-harness` ships a CLI plus skill/runtime hooks that write context, plans,
handoffs, checks, and review evidence back into the project, so the next agent
session continues from files instead of chat memory. It adopts an existing repo
with a tasks-first agent contract that keeps Claude and Codex aligned.

On top of that contract it runs **authorized programs**: long-running work that
holds its own authorization, budget, task offers, and leases, so a Sprint can
advance across sessions without a human driving each step.

## Contents

- [Get…

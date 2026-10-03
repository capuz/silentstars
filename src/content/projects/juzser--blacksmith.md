---
repo: "juzser/blacksmith"
name: "blacksmith"
description: "Autonomous agent factory — loop runner, worktree engine, and a local dashboard over the event log. "
readmeQualityOk: true
url: "https://github.com/juzser/blacksmith"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai-agents", "autonomous-agents", "claude-code", "factory", "multi-agent", "subagents", "worktree", "claude-plugin", "claude", "cli"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-26T04:18:09Z"
lastCommitAt: "2026-10-03T09:22:17Z"
lastReleaseAt: "2026-09-28T03:21:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["juzser"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b7d37caa0f296e8955a90bde8956caa3b881a63fb4c35ed5da0c693930f97b2/juzser/blacksmith"
---

# Blacksmith

**An autonomous agent factory.**

You co-plan the spec. It decomposes, codes, tests, reviews, refutes itself —<br />
and hands you exactly one pull request.

**[Features](#features) · [Install](#install) · [Using it](#using-it) ·
[How it works](#how-it-works) · [Safety](#safety) ·
[Dashboard](#the-dashboard) · [Status](#status) · [Docs](#docs)**

<pre>
goal → contracts you sign → one worktree per contract, run in parallel
     → schema · tests · reviewer · verifier → one pull request you merge
</pre>

<sub>Two touchpoints. Everything between them runs unattended.</sub>

</div>

## Why Blacksmith

Handing a whole feature to an agent tends to fail in the same place, and it is
rarely the code. Two workers edit the same file. One quietly renegotiates the
goal it was given. A third reports itself done, and you find out in review. The
usual remedy is to watch it work — which costs exactly what the automation was
supposed to buy.

Blacksmith removes the watching instead. A goal becomes a set of immutable spec
contracts. Each contract runs in its own git worktree, under a token budget,
over paths no other worker is allowed to touch. What merges is decided by gates
— a schema…

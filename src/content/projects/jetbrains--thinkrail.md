---
repo: "JetBrains/thinkrail"
name: "thinkrail"
description: "Vibe code with pi in a lightweight, real IDE - The Vibe You Need"
readmeQualityOk: true
url: "https://github.com/JetBrains/thinkrail"
homepage: "https://thinkrail.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent", "agent-skills", "agentic-ai", "agentic-workflow", "ai-coding", "ai-tools", "spec-driven", "spec-driven-coding", "spec-driven-development", "vibe-coding"]
stars: 496
forks: 39
openIssues: 111
closedIssues: 73
watchers: 2
contributors: 19
recentReleases: 10
createdAt: "2026-07-08T07:40:43Z"
lastCommitAt: "2026-09-29T09:44:06Z"
lastReleaseAt: "2026-07-15T12:27:33Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 86
undervaluedScore: 26
maintainers: ["rsolmano", "danyaberezun", "OLavrik"]
openGraphImageUrl: "https://opengraph.githubassets.com/e12f6d44caff7c357cdfe1570efa327f4316fe2e4e76f4b44ebfd12072058730/JetBrains/thinkrail"
---

# ThinkRail

A ThinkRail-branded desktop-and-mobile client for the [`pi`](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
coding agent. ThinkRail is a thin host that runs `pi` in-process and bridges it to a rich, mobile-first
UI — `pi` owns models, skills, compaction, cost, and session state; the app owns the workspace, the
editor, and the wire.

**Website:** [thinkrail.ai](https://thinkrail.ai/) — a landing page that *is* the IDE, its blog,
and the [vibecoder-focused experience](https://thinkrail.ai/vibecoding/) (see
[`apps/website`](https://github.com/JetBrains/thinkrail/blob/HEAD/apps/website)).

**V1 is a Worktree IDE:** open a git repo as a project, spin up workspaces as `git worktree`s (each its
own branch and cwd), and work across a tabbed Monaco editor, git Changes view, terminals, a read-only
spec-graph viewer, and multiple concurrent `pi` chat sessions — all scoped to the active worktree.

## Install

ThinkRail ships in two additive forms: a native desktop installer and the self-contained `thinkrail`
CLI, which opens the same app in your browser. Both embed the same in-process agent host and are
published with `SHA256SUMS` on the [releases…

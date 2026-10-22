---
repo: "avirtual/clodex"
name: "clodex"
description: "A visual manager for fleets of Claude Code, Codex and Muse agents — real terminals, agents that message each other, teams that run tickets on worktrees, across your Mac and any Linux box."
readmeQualityOk: true
url: "https://github.com/avirtual/clodex"
homepage: "https://github.com/avirtual/clodex/releases/latest"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "codex", "developer-tools", "electron", "llm", "multi-agent", "terminal"]
stars: 129
forks: 12
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-15T22:35:07Z"
lastCommitAt: "2026-10-22T08:51:34Z"
lastReleaseAt: "2026-04-17T23:48:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 34
maintainers: ["avirtual"]
openGraphImageUrl: "https://opengraph.githubassets.com/929b032292ec70392c807adc6c3002a58c71b515312c23bbc74a0868ee21222d/avirtual/clodex"
---

# Clodex

**A session manager for fleets of coding agents.**

[Install](#install) · [What it does](#what-it-does) · [How it works](#how-it-works) · [Docs](#docs)

Clodex runs Claude Code and Codex sessions as terminals and adds three layers around them: a sidebar that shows the state of every session, a message bus that lets agents coordinate with each other, and a wire that makes sessions on other machines part of the same fleet. The same engine runs as a macOS desktop app and as a headless node on Linux; `clodexctl` drives either from a terminal, and a headless node can serve the GUI in a browser.

*Left: sessions grouped by project with context fill and cache warmth, a peered box (`TEST`) contributing its sessions. Centre: the session's terminal, with wire telemetry (model, context, turn, spend, cache state) underneath. Bottom: the IPC bus, where a lead dispatches a review to a reviewer it spawned and reads the verdict back.*

Watch it run: [Clodex adding a feature to itself](https://github.com/avirtual/clodex/releases/download/v5.75.0/clodex-builds-itself-2x-cut3.mp4), six minutes at 2x: a hand reports done, a reviewer accepts, the branch merges, and the next ticket starts.…

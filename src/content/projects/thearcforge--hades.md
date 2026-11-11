---
repo: "TheArcForge/Hades"
name: "Hades"
description: "Unity-aware AI infrastructure for Claude Code — a macOS app that serves a knowledge graph of your Unity project over MCP: 32 tools that let your agent know your project, not just grep its files."
readmeQualityOk: true
url: "https://github.com/TheArcForge/Hades"
language: "C#"
languages: ["C#"]
languagePcts: [83]
topics: ["ai-agent", "ai-tools", "anthropic", "claude", "claude-ai", "claude-code", "code-intelligence", "csharp", "developer-tools", "game-development"]
stars: 28
forks: 6
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2026-05-09T11:08:42Z"
lastCommitAt: "2026-11-11T11:23:47Z"
lastReleaseAt: "2026-09-07T07:44:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 34
maintainers: ["mikeKuharuk", "paolooranges-voodoo", "PaoloOranges"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ff7d7fc27387b3da22005427fa7691b3590ab9128891f44648278f51688a491/TheArcForge/Hades"
discussionCount: 0
---

# Hades

> **In the underworld of your Unity project, nothing is hidden from Hades. And now, nothing is hidden from your AI agent.**

Hades is Unity-aware AI infrastructure for Claude Code. It's a **standalone desktop app** — a menu-bar app on macOS, a tray app on Windows (**beta**) — that builds a queryable knowledge graph of your entire Unity project — every scene, prefab, script, asset, and dependency — so your AI agent *knows* your project's structure instead of guessing at it. Out of the box you get 33 MCP tools, 23 skills, and 6 commands. Everything runs locally, and everything is version-controllable.

> **One prompt — *"which prefabs and scenes break if I change `EnemyAI`?"***
> Stock Claude Code reads ~200k tokens of YAML, finds **1 prefab, misses 3
> variants, and tells you to add code that breaks them.** Hades answers
> correctly — 4 prefabs, 3 scenes — in **7 tool calls for 27% less cost.**
> That gap is the whole project.
> → [see the full side-by-side breakdown](https://github.com/TheArcForge/Hades/blob/HEAD/Documentation/comparison.md)

## Know, don't guess

Most AI tools **search and predict**: they grep for text that looks relevant and let the model infer the…

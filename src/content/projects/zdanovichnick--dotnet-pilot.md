---
repo: "zdanovichnick/dotnet-pilot"
name: "dotnet-pilot"
description: ".NET development assistant for - Roslyn-backed DI verification, EF Core migration safety, clean-architecture enforcement, convention-aware scaffolders, and project lifecycle commands."
readmeQualityOk: true
url: "https://github.com/zdanovichnick/dotnet-pilot"
language: "JavaScript"
languages: ["JavaScript", "C#", "TypeScript"]
languagePcts: [41, 35, 24]
topics: ["agents", "ai-coding", "aspnet-core", "claude-code", "claude-code-plugin", "clean-architecture", "code-quality", "csharp", "dependency-injection", "dotnet"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-20T15:21:52Z"
lastCommitAt: "2026-11-20T12:18:51Z"
lastReleaseAt: "2026-11-13T16:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 50
maintainers: ["zdanovichnick"]
openGraphImageUrl: "https://opengraph.githubassets.com/c86cdbb503eb60abf2ea156252f39b1305dacdadec143f10bc82aa94b0f55c3f/zdanovichnick/dotnet-pilot"
---

# DotnetPilot

**.NET workflows for Claude Code, Codex, and Cursor.**

Build features that follow your solution's conventions. Check dependency injection,
review architecture boundaries, and generate EF Core migrations with Roslyn-backed analysis.

[Install](#install) · [First steps](#first-steps) · [Compatibility](#compatibility) · [Workflows](#workflows) · [Troubleshooting](#troubleshooting)

> **New in 4.1.0**
> - **Agent memory:** every `dnp-*` agent keeps project notes in `.claude/agent-memory/<agent>/`
>   (Claude Code's `memory: project`). The Codex and Cursor packages read and write the same folder.
> - **Agents page across sessions:** `/dnp-agents` now keeps finished runs and per-agent totals
>   between sessions, and shows each agent's memory notes and the project's Claude memory entries.
> - **Live agents page:** the page now updates in place about once a second instead of reloading,
>   and elapsed time counts up in the browser. [See it](#agents-page).
>
> **New in 4.0.0**
> - **Agents page:** `/dnp-agents` writes a local HTML page and opens it in your browser.

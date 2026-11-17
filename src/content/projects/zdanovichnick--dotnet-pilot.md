---
repo: "zdanovichnick/dotnet-pilot"
name: "dotnet-pilot"
description: ".NET development assistant for - Roslyn-backed DI verification, EF Core migration safety, clean-architecture enforcement, convention-aware scaffolders, and project lifecycle commands."
readmeQualityOk: true
url: "https://github.com/zdanovichnick/dotnet-pilot"
language: "JavaScript"
languages: ["JavaScript", "C#"]
languagePcts: [44, 37]
topics: ["agents", "ai-coding", "aspnet-core", "claude-code", "claude-code-plugin", "clean-architecture", "code-quality", "csharp", "dependency-injection", "dotnet"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-20T15:21:52Z"
lastCommitAt: "2026-11-17T14:48:59Z"
lastReleaseAt: "2026-11-13T16:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 49
maintainers: ["zdanovichnick"]
openGraphImageUrl: "https://opengraph.githubassets.com/c86cdbb503eb60abf2ea156252f39b1305dacdadec143f10bc82aa94b0f55c3f/zdanovichnick/dotnet-pilot"
---

# DotnetPilot

**.NET workflows for Claude Code, Codex, and Cursor.**

Build features that follow your solution's conventions. Check dependency injection,
review architecture boundaries, and generate EF Core migrations with Roslyn-backed analysis.

[Install](#install) · [First steps](#first-steps) · [Compatibility](#compatibility) · [Workflows](#workflows) · [Troubleshooting](#troubleshooting)

> **New in 3.11.1**
> - **Code Mode safe:** every `PreToolUse` hook carries `onFailure: continue`, so a slow or failed
>   hook no longer refuses a tool call made from Code Mode (experimental). See `CLAUDE.md`.
>
> **New in 3.11.0**
> - **ADR nudge:** in a repo with a `docs/adr/` (or `docs/decisions/`, `adr/`, ...) folder, Claude
>   is asked to record an ADR before it stops when the change adds or removes a package or project
>   reference, creates or deletes a project, or adds a `DbContext`. Create the folder to opt in;
>   toggle `hooks.adr_nudge`.
> - **ADR rule:** the global rule block says when to write an ADR, how to supersede one, and to get
>   the options from `dnp-architect`.
> - **Less delegation pressure:** the routing guidance picks a `dnp-*` agent once Claude spawns
>   one,…

---
repo: "aprius/Haze"
name: "Haze"
description: "Lightweight, AI-first desktop workspace for coding alongside agents like Claude Code and Codex. Rider-style project view and Git tools, a Monaco editor, C# navigation via Roslyn, and terminals that survive restarts. Built with Tauri 2"
readmeQualityOk: true
url: "https://github.com/aprius/Haze"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [61, 31]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T13:45:51Z"
lastCommitAt: "2026-11-17T14:41:52Z"
lastReleaseAt: "2026-10-25T13:52:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["aprius", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3741a3c6bc3701fc953e98e711136655c0a90c53284836175c14607e7e62e0dc/aprius/Haze"
---

Rider-style project view and Git tooling, a capable C# editor, and terminals that survive restarts.

## Why Haze?

When an AI agent writes most of the code, a full IDE is heavy and noisy, and a plain terminal is too bare. Haze sits in between. It is aimed at .NET and Unity developers used to JetBrains Rider, and keeps the parts of Rider that matter when you are reviewing and steering agents.

## Features

### Agents that never die

Shells and agents run in a separate PTY host, so closing, crashing or updating Haze does not kill them. Status badges and desktop notifications for Claude Code, Codex, Gemini, Antigravity, OpenCode and Deep Code.

[Docs →](https://github.com/aprius/Haze/blob/HEAD/docs/FEATURES.md#ai-agents)

### Review what the agent did

Rider-style commit window, diffs, log graph, AI checkpoints and per-file "reviewed" marks. Roll back what you don't want, commit the rest.

[Docs →](https://github.com/aprius/Haze/blob/HEAD/docs/FEATURES.md#git)

### C# with Roslyn, typed like Rider

Go to Definition, Find Usages, Rename, quick fixes, Code Vision and inline completions through the Roslyn Language Server. Errors, warnings, suggestions and hints as you type, like…

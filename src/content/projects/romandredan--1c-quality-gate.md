---
repo: "Romandredan/1c-quality-gate"
name: "1c-quality-gate"
description: "1C development quality control for Claude Code: standards, OOP principles and patterns, metadata XML, blocking gates and verifiable run trail · Claude Code plugin for 1C:Enterprise (BSL) code quality: development standards, SOLID and design patterns, metadata XML, blocking session gates and a machine-readable evidence trail."
originalDescription: "Контроль качества 1С-разработки для Claude Code: стандарты, принципы ООП и паттерны, XML метаданных, блокирующие гейты и проверяемый след прогона · Claude Code plugin for 1C:Enterprise (BSL) code quality: development standards, SOLID and design patterns, metadata XML, blocking session gates and a machine-readable evidence trail."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Romandredan/1c-quality-gate"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [77]
topics: ["1c", "1c-enterprise", "agent-skills", "ai-code-review", "bsl", "claude-code", "claude-code-plugin", "claude-skills", "code-quality", "code-review"]
stars: 25
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-09T05:49:27Z"
lastCommitAt: "2026-09-20T08:47:26Z"
lastReleaseAt: "2026-08-12T11:05:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 45
maintainers: ["Romandredan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf7a6e403aeb448c5c0b9bb60748708bf49dbc6b429e3ffecd3d2d0b24bf60b7/Romandredan/1c-quality-gate"
---

# 1c-quality-gate

**Code quality control for 1C development paired with a language model.** Editing a `.bsl` file or metadata XML arms a gate: in Claude Code you cannot end the session until the check has been run; in OpenCode the plugin persistently returns the agent to unchecked edits. Depth is automatically calculated: a cosmetic fix closes in seconds, while a transaction or new common module requires a full review. The result is a report with findings and a machine-readable trace showing what was checked, what was skipped, and why.

> **English.** A Claude Code and OpenCode plugin that enforces code-quality checks for 1C:Enterprise (BSL) development. Editing a BSL module or a metadata XML arms a session gate: in Claude Code a `Stop` hook refuses to end the session until the quality run has happened; OpenCode has no such mechanism, so the plugin keeps returning the agent to the unchecked edits instead. Depth is computed per change across three axes — volume, code archetypes, complexity — so a comment fix costs seconds while a transaction or a new common module triggers the full review. Four review loops cover static analysis and 1C development standards, architecture (SOLID…

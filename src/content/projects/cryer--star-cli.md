---
repo: "cryer/star-cli"
name: "star-cli"
description: "An AI agent command-line interface — multi-model LLM access, streaming terminal UI, tool calling, permission control, and session persistence."
readmeQualityOk: true
url: "https://github.com/cryer/star-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 66
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T03:18:36Z"
lastCommitAt: "2026-10-09T10:49:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["cryer"]
openGraphImageUrl: "https://opengraph.githubassets.com/39e39fd32e46601be67e3225f8bc04bdf36270ccff025f073e58dba737969f90/cryer/star-cli"
---

**An AI agent command-line interface written in TypeScript**

Multi-model LLM access · streaming terminal UI · tool calling · permission control · session persistence

**English** | [简体中文](https://github.com/cryer/star-cli/blob/HEAD/README.zh-CN.md)

Features: streaming REPL with slash commands (+ autocomplete) · OpenAI / Anthropic / OpenAI-compatible providers with an interactive `/connect` onboarding wizard · built-in fs / bash / web tools with a permission gate · git integration (`/commit` drafts Conventional Commits messages, `/diff` shows a colored working-tree diff, repo status sent as a per-turn request-scoped reminder so it never breaks the prompt cache) · prompt caching on Anthropic providers (cache breakpoints on the stable prefix and the history tail; OpenAI-style protocols cache server-side automatically) with a status-bar hit rate · token thrift: re-reading an unchanged file answers with a one-line note, and auxiliary calls (summaries, titles) can run on a cheaper `smallModel` · plan mode with read-only research and plan approval · thinking spinner with dim reasoning preview · diff preview on write/edit approval · `@file` mentions · `!cmd` shell passthrough · custom…

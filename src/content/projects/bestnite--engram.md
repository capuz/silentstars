---
repo: "bestnite/engram"
name: "engram"
description: "Self-hosted, multi-user spaced-repetition (SRS) service: FSRS v6 scheduling, 10 card types, Markdown/TeX, REST API and built-in MCP server. Written in Go."
readmeQualityOk: true
url: "https://github.com/bestnite/engram"
homepage: "https://engram.nite07.com/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [67, 20]
topics: ["anki-alternative", "flashcards", "fsrs", "go", "golang", "learning", "mcp", "memory", "oidc", "postgresql"]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-03T03:07:23Z"
lastCommitAt: "2026-11-01T10:22:30Z"
lastReleaseAt: "2026-10-09T19:56:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["bestnite"]
openGraphImageUrl: "https://opengraph.githubassets.com/102bb44ed79f04f74da82cdf0851dabf7e926e4df2485b92f3aa4640582894ea/bestnite/engram"
---

# Engram

**English** | [中文](https://github.com/bestnite/engram/blob/HEAD/README.zh.md)

Engram is an open-source, self-hosted spaced repetition flashcard service. Built with a modern Svelte 5 SPA frontend and a Go backend, it pairs the state-of-the-art **FSRS v6** scheduling algorithm with a native **Model Context Protocol (MCP)** server for AI-assisted card creation and workflow automation.

Live demo: <https://engram.nite07.com/> (registration is open; you can also sign in with the test account `test` / `testdemo`)

---

## Screenshots

| Deck Management | Card Review (Question) |
| :---: | :---: |
|  |  |
| **Answer Revealed** | **Instant Feedback** |
|  |  |
| **Study Statistics & Insights** | **Card Creation & Editor** |
|  |  |

---

## Features

- **FSRS v6 Scheduling**: Adaptive scheduling based on the open-source FSRS v6 algorithm, optimizing review intervals and reducing workload compared to legacy SM-2 algorithms. Supports custom parameter optimization.
- **Anki-Compatible Note Types**: Note types are data — fields, templates, CSS and Anki's note type options — with eight registered answer controls (text, numeric, single choice, multiple choice, true/false, list, cloze…

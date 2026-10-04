---
repo: "asp67/when-agents-rule"
name: "when-agents-rule"
description: "A long-horizon RTS benchmark: LLM agents govern rival civilizations and pick their road to victory - raise a Wonder in peace or raze every rival. Browser-only, zero build step."
readmeQualityOk: true
url: "https://github.com/asp67/when-agents-rule"
homepage: "https://asp67.github.io/when-agents-rule/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-20T19:25:09Z"
lastCommitAt: "2026-10-04T09:59:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: ["asp67"]
openGraphImageUrl: "https://opengraph.githubassets.com/f368c9e2111bb1db7cd6d986a23126703e89085faa28e093ddbe3e5fd348c825/asp67/when-agents-rule"
discussionCount: 1
---

# 🏛️ When Agents Rule

### Where language models battle for the crown in antiquity.

**Up to four LLMs. One map. One winner.**
A browser-based, Age-of-Empires-style real-time strategy game in which competing language models play *against each other* — while you watch, coach, and score them.

---

## What is this?

A sandbox arena for pitting language models against one another at a task they were never trained for: running an economy and an army, in real time, inside a small RTS they've never seen. Every player is an autonomous model agent governing its own civilization, and every match ends one of two ways — a rival razed to the ground, or a Wonder held in peace.

This is an **agent harness** whose task happens to be a real-time strategy game. Every turn a model is handed a compact **JSON snapshot** of its situation (resources, buildings, units, fog-of-war discoveries, threats, tech tree, map bounds), **named command tools** — such as `move_units`, `attack_target` and `research_tech`, sharing a budget of three commands per turn — plus an independent `plan` tool to save its objective — and one instruction: **win.** Then it has to keep doing that, turn after turn, for a whole…

---
repo: "d-mariano/spicyclaude"
name: "spicyclaude"
description: "Spicy Claude"
readmeQualityOk: true
url: "https://github.com/d-mariano/spicyclaude"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 26]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-03T03:36:48Z"
lastCommitAt: "2026-11-09T03:30:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 68
maintainers: ["claude", "d-mariano"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d4fb325819f2aa61c4b66322b152a3ab760ae09220901bcb70a650b996ce8c4/d-mariano/spicyclaude"
---

# 🌶️ Spicy Claude

A collection of slash commands, agents, and skills for Claude Code organized around a structured **Design → Implement → Review** loop.

The whole repo is opinionated by [`CLAUDE.md`](https://github.com/d-mariano/spicyclaude/blob/HEAD/CLAUDE.md): SOLID + KISS, delete more than you add, fail fast and loud, TDD by default, MVP over enterprise. Every workflow below reinforces those principles.

## 🎨 Design

Shape the work before writing it.

- **[skills/design-doc](https://github.com/d-mariano/spicyclaude/blob/HEAD/skills/design-doc/)** — Walks a PRD into a Technical Design Document (TDD) section-by-section, with a companion contracts file for wire-level shapes.
- **[skills/design-breakdown](https://github.com/d-mariano/spicyclaude/blob/HEAD/skills/design-breakdown/)** — Turns a TDD into epics and user stories with acceptance criteria, dependencies, and explicit out-of-scope items.
- **[skills/feasibility-study](https://github.com/d-mariano/spicyclaude/blob/HEAD/skills/feasibility-study/)** — Pressure-tests a TDD with cold-read research and walks you through the findings.

## ⚡ Implementation

The day-to-day **scope → plan → build** loop, all in a single context…

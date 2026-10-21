---
repo: "rapidreview-io/Merv"
name: "Merv"
description: "Merv — agent-run ML research as gated, reviewable experiment workflows. Plugin for Claude Code, Codex, Cursor, Gemini CLI, and other MCP clients."
readmeQualityOk: true
url: "https://github.com/rapidreview-io/Merv"
homepage: "https://rapidreview.io/merv"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 26]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-01T16:52:01Z"
lastCommitAt: "2026-10-21T21:15:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["GuralTOO"]
openGraphImageUrl: "https://opengraph.githubassets.com/a11fb65d2d4de51b6908243d5f69d0b2870692d57202948a955d3e14123ddef3/rapidreview-io/Merv"
---

# Merv

Merv is a plugin for agentic coding platforms that helps agents run machine learning research as gated, reviewable experiment workflows.

Documentation: [rapidreview.io/docs/merv](https://rapidreview.io/docs/merv)

It is designed to work with Claude Code, Codex, GitHub Copilot CLI, Cursor,
Gemini CLI, Qwen Code, Kilo Code, Hermes Agent, OpenCode, OpenHands, Replit
Agent, and other MCP-capable agent platforms. It includes a
frontend for humans to observe agent behavior ranging from macro research
strategy to experiment execution specifics.

The goal is to give research agents enough structure to plan experiments, execute them, review results, and reflect on the project direction to handle open-ended research problems.

## Experiment-level workflow

Each experiment begins with a generated plan that is adversarially reviewed by another agent. The plan/review loop persists until the reviewer approves the plan. After approval, the agent proceeds to execution. When it is done, it submits a report that is adversarially reviewed by a different agent. The reviewer can send the agent back to execution to fix something in the execution or the report, or it can send it back to the…

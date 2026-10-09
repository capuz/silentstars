---
repo: "MoonLadderStudios/MoonMind"
name: "MoonMind"
description: "Run Claude Code, Codex, and any Omnigent agent with superior security, resiliency, and observability."
readmeQualityOk: true
url: "https://github.com/MoonLadderStudios/MoonMind"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 13
forks: 6
openIssues: 51
closedIssues: 531
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2025-01-14T18:54:41Z"
lastCommitAt: "2026-10-09T09:11:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 73
maintainers: ["nsticco"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/916785816/183489af-83d3-4d80-b5af-5a5a1c39656b"
postedAt: "2026-07-22T06:20:57.914Z"
---

# 🌙 MoonMind

MoonMind is a self-hosted app for running AI coding workflows. Give it a task, choose an agent, and follow the work from your browser. Each instance is built for one operator, with concurrent workflows and multiple provider accounts.

**Omnigent is MoonMind's primary agent backend.** It runs harnesses such as Codex, Claude Code, and OpenCode. MoonMind manages the workflows, credentials, workspaces, and results around them.

## What it does

- **Runs durable workflows.** Temporal tracks steps, retries, and schedules. Work can resume after a worker restart, with checkpoint recovery where supported.
- **Controls access.** Provider Profiles select credentials and model settings. Agents run inside container boundaries and submit build and test jobs without receiving the host Docker socket.
- **Keeps results inspectable.** The dashboard shows progress, logs, diagnostics, and artifacts. You can review a run, intervene when needed, or return to its saved results later.

MoonMind currently focuses on software engineering. Start with a repository task or a reusable Skill.

## Dashboard

These are captures of the current dashboard with synthetic example data. They show the…

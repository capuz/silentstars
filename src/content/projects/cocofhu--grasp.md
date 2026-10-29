---
repo: "cocofhu/grasp"
name: "grasp"
description: "Grasp helps you manage multiple projects and parallel coding agents in one visual workflow, so humans can understand faster and ship more."
readmeQualityOk: true
url: "https://github.com/cocofhu/grasp"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [37, 33]
topics: ["agent", "ai", "browser-automation", "harness", "harness-ai", "harness-ci", "harness-design", "harness-engineering", "harness-execution-layer", "harness-framework"]
stars: 364
forks: 36
openIssues: 6
closedIssues: 10
watchers: 3
contributors: 9
recentReleases: 5
createdAt: "2026-07-24T15:27:02Z"
lastCommitAt: "2026-10-29T05:49:09Z"
lastReleaseAt: "2026-08-23T21:41:22Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 92
undervaluedScore: 27
maintainers: ["cocofhu", "cocofhu00"]
openGraphImageUrl: "https://opengraph.githubassets.com/2787b7eb535ca645139e6e91aa0491f3f57de210036db5ae3a02d36699ad71a0/cocofhu/grasp"
discussionCount: 1
---

**English** | [简体中文](https://github.com/cocofhu/grasp/blob/HEAD/README.zh-CN.md)

[Website](https://www.approving-ai.com/) · [Quick start](#quick-start) · [Features](#features) · [Architecture](#architecture) · [Docs](#docs) · [Contributing](#contributing)

This release requires a fresh install: an empty database and an empty data directory.

## Why Grasp

Over the past two years I built 150+ personal projects with coding agents, and two problems kept slowing me down:

1. **Switching across projects is expensive**: bouncing between IDEs makes it hard to track which project is running and where it stopped.
2. **Parallel agent output is hard to read**: models dump long walls of text, burying the actual changes and open questions in chat logs.

I built Grasp to manage coding work in one workspace. It wires coding agents into workflows on a finite-state-machine (FSM) canvas, clarifies requirements before code is written, and turns verbose agent output into structured artifacts and visual previews that are quick to review at approval gates.

Supported agent backends: **Cursor, Claude Code, CodeBuddy, Trae, OpenCode, and Codex**. Each agent step runs inside an isolated Docker sandbox.…

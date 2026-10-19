---
repo: "NestDevLab/agentwheel"
name: "agentwheel"
description: "Skills, rules, and instructions across every AI agent. One source, every agent."
readmeQualityOk: true
url: "https://github.com/NestDevLab/agentwheel"
homepage: "http://www.nestdev.it/agentwheel/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-08T12:41:36Z"
lastCommitAt: "2026-10-19T09:14:01Z"
lastReleaseAt: "2026-06-12T06:36:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["Yehonal"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1262907718/2c82c930-bf9f-4612-9545-98c3a0376416"
---

Weave skills, rules, instructions, commands, subagents, MCP, hooks, settings, and plugins across every AI agent you use,
  from any source, reconciled into each runtime with your private tweaks intact.

---

## Why agentwheel?

Your AI agents are multiplying. OpenClaw, Claude Code, Codex CLI, Copilot, Hermes — and the next
harness your team adopts. Each one wants its own skills, rules, instructions, commands, subagents,
MCP servers, hooks, and settings, in its own layout.

**agentwheel makes that one declared state.** Add packages to `.agentwheel/config.json`, preview the
runtime changes, then install the declared state into each target. Updates move tracking sources
forward explicitly; installs make the current declaration true.

```bash
npm i -g agentwheel
agentwheel init
agentwheel add github:your-org/agent-pack --adapter codex --local --mode tracking
agentwheel plan
agentwheel install
```

No lock-in. No central gatekeeper. Packages live in plain git repos or local folders, customizations
live in your workspace, and runtimes stay generated output.

## Install Methods

**CLI install**

```bash
npm i -g agentwheel
agentwheel init
```

Prefer pnpm? `pnpm add -g agentwheel` works…

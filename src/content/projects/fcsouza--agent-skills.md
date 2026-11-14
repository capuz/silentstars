---
repo: "fcsouza/agent-skills"
name: "agent-skills"
description: "Production-grade skills for AI coding agents. Install via skills.sh."
readmeQualityOk: true
url: "https://github.com/fcsouza/agent-skills"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-25T20:56:29Z"
lastCommitAt: "2026-11-14T22:04:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 23
maintainers: ["fcsouza"]
openGraphImageUrl: "https://opengraph.githubassets.com/37dca3ee98f583efd91360efe2603625a983f7ec66d2a91a58a7ae775190d78e/fcsouza/agent-skills"
---

# Agent Skills

Production-grade skills for AI coding agents (OpenClaw, Claude Code, and others).

Built by [Fabricio Cavalcante](https://github.com/fcsouza) — Software Engineer & AI Specialist.

## Available Plugins

A plugin bundles skills you install in one step.

| Plugin | Description | Platform |
|--------|-------------|----------|
| [game-dev](https://github.com/fcsouza/agent-skills/blob/HEAD/skills/game-dev/) | Game development skills for design, engineering, narrative and infrastructure, seven workflow commands, and an index skill that routes a task to the right one | Game Dev |

## Claude Code Mods

Mods are plugins built on function hooks: they run inside Claude Code, guard tool calls and draw above the prompt. See [mods/](https://github.com/fcsouza/agent-skills/blob/HEAD/mods/) for install steps.

| Mod | Description |
|-----|-------------|
| [commit-guard](https://github.com/fcsouza/agent-skills/blob/HEAD/mods/commit-guard/) | Blocks commits with machine paths or `.env` files, `git add -A`, and pushes to `main` |
| [prod-guard](https://github.com/fcsouza/agent-skills/blob/HEAD/mods/prod-guard/) | Holds Dokploy MCP writes until you press Proceed |
|…

---
repo: "bashebr/ai-native-sdlc"
name: "ai-native-sdlc"
description: "Reusable Codex + Claude Code skill and plugin implementing Anthropic's AI-Native SDLC: Plan → Design → Build → Test → Deploy → Maintain, with human approval gates at every handoff."
readmeQualityOk: true
url: "https://github.com/bashebr/ai-native-sdlc"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [80, 20]
topics: ["agentic-ai", "ai-native-development", "ai-native-sdlc", "artificial-intelligence", "claude-code", "codex", "coding-agent", "sdlc", "workflow-automation"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T07:24:40Z"
lastCommitAt: "2026-08-27T14:29:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 27
maintainers: ["bgashebr"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a0166d96ba15c046d3bab5d6ebaa71294694b1e1719b41f034a96eb305374fd/bashebr/ai-native-sdlc"
---

# AI-Native SDLC — reusable workflow repo

A ready-to-inherit implementation of Anthropic's [AI-Native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook): give your coding agent a goal or idea, and it scaffolds and drives the project through the full lifecycle — planning, design, build, test, deploy, and maintain — with human approval gates at every handoff.

This repo is three things at once:

- A **Codex skill** at `skills/ai-native-sdlc/`, installable into `~/.codex/skills`.
- A **Claude Code skill** — the same folder, installable into `~/.claude/skills`.
- A **Codex plugin** (`.codex-plugin/plugin.json` at the repo root) that bundles the skill, so teams can publish or fork it as their workflow baseline.

**Learn more:** [Phase-by-phase playbook](https://github.com/bashebr/ai-native-sdlc/blob/HEAD/skills/ai-native-sdlc/references/playbook.md) · [Staged adoption guide](https://github.com/bashebr/ai-native-sdlc/blob/HEAD/skills/ai-native-sdlc/references/adoption.md) · [Workflow as a directed graph](https://github.com/bashebr/ai-native-sdlc/blob/HEAD/skills/ai-native-sdlc/references/graph.md) · [Worked…

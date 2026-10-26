---
repo: "richfrem/agent-plugins-skills"
name: "agent-plugins-skills"
description: "Agentic OS Control Plane: deterministic state-machine governance for AI coding agents with cryptographically enforced SSH/CIBA human-in-the-loop gates and zero-trust verification."
readmeQualityOk: true
url: "https://github.com/richfrem/agent-plugins-skills"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agentic-os", "agent-evaluation", "agent-orchestration", "agentic-control-plane", "agentic-workflows", "ai-agent-governance", "ai-coding-agents", "claude-code", "continuous-improvement", "deterministic-workflows"]
stars: 7
forks: 2
openIssues: 45
closedIssues: 27
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-21T17:09:13Z"
lastCommitAt: "2026-10-26T18:06:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 54
maintainers: ["richfrem", "rockyltwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/625090adecce6126f23a4bac0032c0c6e14baa99188308c1a18aec0a183f8360/richfrem/agent-plugins-skills"
---

# Agentic OS Control Plane

**Current Scale:** 6 Plugins · 30 Skills · 19 Sub-Agents

**A governed execution harness for AI coding agents.** This repository lets Claude Code, Codex,
GitHub Copilot, Agy, and compatible tools use their native planning, coding, orchestration, and
worktree capabilities while the **Agentic OS Control Plane** provides the boundaries around that
work: recorded decisions, human authority, deterministic checks, isolated execution, verification,
and continuous improvement.

It is not just a skills catalog. It is a portable system for making agent-driven engineering work
more reliable without attempting to replace the model's reasoning.

The control plane is native to this repository and depends on no external workflow package. Several of its practices were shaped by [`obra/superpowers`](https://github.com/obra/superpowers); see the [acknowledgments](https://github.com/richfrem/agent-plugins-skills/blob/HEAD/plugins/agent-agentic-os/references/acknowledgments.md).

## What the control plane does

For governed work, the control plane persists task state in local SQLite and permits only valid,
evidenced transitions. It makes the important decisions visible and…

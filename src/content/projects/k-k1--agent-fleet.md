---
repo: "k-k1/agent-fleet"
name: "agent-fleet"
description: "Self-hosted web console for running AI coding agents (Claude Code, Codex, Copilot, Antigravity, Cursor, Kiro, OpenCode) as a managed fleet: isolated per-user workspaces, git/SVN working copies, scheduling and usage accounting."
readmeQualityOk: true
url: "https://github.com/k-k1/agent-fleet"
homepage: "https://agent-fleet.org"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [63, 29]
topics: ["ai-agents", "claude-code", "coding-agent", "developer-tools", "docker", "go", "react", "self-hosted", "agent-orchestration", "ai-coding"]
stars: 9
forks: 1
openIssues: 167
closedIssues: 1054
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-26T03:13:01Z"
lastCommitAt: "2026-11-08T10:42:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["k-k1"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1280888976/f24e72e5-87f2-418a-b077-b8f79062c055"
discussionCount: 1
---

# Agent Fleet — a self-hosted operations layer for AI coding agents

English | [日本語](https://github.com/k-k1/agent-fleet/blob/HEAD/README.ja.md) · [agent-fleet.org](https://agent-fleet.org)

**Don't replace your coding agents. Operate them.**

Agent Fleet is not another agent framework. Claude Code stays Claude Code and Codex stays
Codex: the CLIs you already use run as they are, with their own sign-in, models and
behaviour. What Agent Fleet takes on is everything around them: a persistent, isolated
environment per member, real git working copies and worktrees, sessions you follow and
steer from a browser, questions and permission prompts, usage, schedules, and remote
control. **Close your laptop. The agents keep working.**

Supported today: Claude Code, Codex CLI, GitHub Copilot CLI, Antigravity CLI, Cursor CLI,
Kiro, OpenCode, Muse Code, and the fleet's own llama.cpp harness.

It is **self-hosted**. One company runs one deployment on its own infrastructure, so the
credentials, the source and the conversations stay inside it. Each member's environment is
a Docker container with cgroup CPU/memory quotas (or a bubblewrap sandbox in the
Docker-less native edition). The same core…

---
repo: "Tencent/LoopForge"
name: "LoopForge"
description: "Self-hosted workflows for coding-agent delivery. Orchestrate CodeBuddy, Codex and Claude Code with scripts and human approval gates. Includes Local workflows for coding assistants."
readmeQualityOk: true
url: "https://github.com/Tencent/LoopForge"
homepage: "https://loopforge.cn"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [54, 24]
topics: ["agent-orchestration", "agentic-workflow", "ai-agents", "ai-coding", "claude-code", "code-review", "codebuddy", "codex", "coding-agents", "cursor"]
stars: 127
forks: 27
openIssues: 5
closedIssues: 3
watchers: 2
contributors: 14
recentReleases: 3
createdAt: "2026-07-28T03:51:01Z"
lastCommitAt: "2026-11-06T13:20:14Z"
lastReleaseAt: "2026-09-16T09:54:43Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 33
maintainers: ["Robert0622", "cocofhu", "Yanami-2K"]
openGraphImageUrl: "https://opengraph.githubassets.com/1222bc25b49674102f2d88d3365d302cd3d6e5afd9c31ea5a06233b5d51e77f3/Tencent/LoopForge"
---

https://github.com/user-attachments/assets/8af401d9-1aae-427c-b4bc-455c12d17beb

**LoopForge** is a self-hosted workspace where your team ships software with coding agents. Describe what you need to **Main Bot** in chat: it opens a Docker sandbox, checks out your repositories, delegates to project roles, and opens the PR. When a way of working proves itself, save it as an **SOP** (a standard workflow of agents, scripts and human gates) so the next requirement is delivered the same way, with review and approval built in.

CodeBuddy, Codex and Claude Code do the work. LoopForge adds the roles, sandboxes, checkpoints and history around them, all on your own infrastructure under the MIT license.

## Two ways to work

| | **Chat with Main Bot** | **Run an SOP** |
| --- | --- | --- |
| Best for | Exploring, quick fixes, iterating with the agent | Repeatable delivery with fixed stages and sign-off |
| How it runs | Main Bot opens a [conversation workspace](https://github.com/Tencent/LoopForge/blob/HEAD/docs/conversation-workspaces.md) (a Docker sandbox with your repos) on demand and calls project roles as subagents | The engine runs Agent, Script, Human-gate and sub-SOP nodes in order,…

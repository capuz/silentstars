---
repo: "Tencent/LoopForge"
name: "LoopForge"
description: "Self-hosted workflows for coding-agent delivery. Orchestrate CodeBuddy, Codex and Claude Code with scripts and human approval gates. Includes Local workflows for coding assistants."
readmeQualityOk: true
url: "https://github.com/Tencent/LoopForge"
homepage: "https://loopforge.cn"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [55, 24]
topics: ["agent-orchestration", "agentic-workflow", "ai-agents", "ai-coding", "claude-code", "code-review", "codebuddy", "codex", "coding-agents", "cursor"]
stars: 437
forks: 76
openIssues: 25
closedIssues: 29
watchers: 4
contributors: 22
recentReleases: 9
createdAt: "2026-07-28T03:51:01Z"
lastCommitAt: "2026-11-12T11:43:53Z"
lastReleaseAt: "2026-11-11T14:01:54Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 82
undervaluedScore: 28
maintainers: ["Robert0622", "cocofhu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ce0eee86d28599f3644ba514c71481379429ef2836aa464a6db9e54c8723e25/Tencent/LoopForge"
discussionCount: 1
---

https://github.com/user-attachments/assets/8af401d9-1aae-427c-b4bc-455c12d17beb

**LoopForge** is a self-hosted workspace where your team ships software with coding agents. Describe what you need to **Main Bot** in chat: it opens a Docker sandbox, checks out your repositories, delegates to project roles, and opens the PR. When a way of working proves itself, save it as an **SOP** (a standard workflow of agents, scripts and human gates) so the next requirement is delivered the same way, with review and approval built in.

CodeBuddy, Codex and Claude Code do the work. LoopForge adds the roles, sandboxes, checkpoints and history around them, all on your own infrastructure under the MIT license.

## Two ways to work

| | **Chat with Main Bot** | **Run an SOP** |
| --- | --- | --- |
| Best for | Exploring, quick fixes, iterating with the agent | Repeatable delivery with fixed stages and sign-off |
| How it runs | Main Bot opens a [conversation workspace](https://github.com/Tencent/LoopForge/blob/HEAD/docs/conversation-workspaces.md) (a Docker sandbox with your repos) on demand and calls project roles as subagents | The engine runs Agent, Script, Human-gate and sub-SOP nodes in order,…

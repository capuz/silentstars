---
repo: "protoLabsAI/protoAgent"
name: "protoAgent"
description: "Local-first agent that drives Claude Code and Codex over ACP. Desktop app, git-URL plugins, A2A 1.0. MIT."
readmeQualityOk: true
url: "https://github.com/protoLabsAI/protoAgent"
homepage: "https://agent.protolabs.studio"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [69, 27]
topics: ["a2a", "agent-framework", "agent2agent", "ai-agent", "ai-agents", "autonomous-agents", "langgraph", "llm-agent", "mcp", "multi-agent-systems"]
stars: 17
forks: 11
openIssues: 20
closedIssues: 1208
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-17T16:45:59Z"
lastCommitAt: "2026-11-07T09:54:49Z"
lastReleaseAt: "2026-05-27T09:09:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 60
maintainers: ["mabry1985", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1213686959/26f00f2d-a32d-4e23-94a1-c235b8b2ac37"
discussionCount: 0
postedAt: "2026-07-25T06:06:56.645Z"
---

A private, plugin-extensible desktop agent. It plans and remembers, and it gives the coding
  to the CLI agents you already use, over the Agent Client Protocol. Your chats, memory and
  tasks stay in SQLite on your disk. No analytics, tracking or telemetry — <a href="./docs/explanation/network-egress.md">what it does call out to</a>.

## Why protoAgent?

Claude Code and Codex are good at writing code in a session. protoAgent is what sits around them:

- **It uses the agents you already pay for.** It drives Claude Code, Codex, or any ACP-speaking CLI agent, so your Claude Pro/Max or ChatGPT Plus/Pro plan does the coding. [CLI coding agents →](https://github.com/protoLabsAI/protoAgent/blob/HEAD/docs/guides/coding-agents.md)
- **It remembers across sessions.** Memory, knowledge and tasks stay in SQLite on your disk, and you can inspect and correct what it remembers.
- **It runs the work, not just the chat.** Schedules, watches and goals keep work moving. The Project Manager archetype takes a brief from board card to worktree, pull request, CI and merge. [Build with a coding agent →](https://github.com/protoLabsAI/protoAgent/blob/HEAD/docs/guides/build-with-a-coding-agent.md)
- **It…

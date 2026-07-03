---
repo: "mobius-os/mobius"
name: "mobius"
description: "Self-hosted AI agent that builds apps. Chat with a coding agent (Claude Code or Codex) that builds mini-apps, modifies its own UI, and gets sharper the more you use it. Your personal AI operating system, on your own server."
url: "https://github.com/mobius-os/mobius"
homepage: "https://mobius-os.github.io/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 31]
topics: ["agentic", "ai-agent", "ai-app-builder", "anthropic", "claude-code", "codex", "coding-agent", "docker", "llm", "mini-apps"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-06T13:19:34Z"
lastCommitAt: "2026-07-03T12:22:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["hamzamerzic", "miljanm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1202850974/701ca92f-10d2-40e1-9c4b-770b3e472136"
---

</p>

<h1 align="center">Möbius</h1>

  A self-hosted AI agent that builds the apps you need, edits its own interface, and improves itself overnight. Your data stays on your server.
</p>

</p>

</p>

---

## What is Möbius?

A Möbius strip is a surface with no inside or outside and no beginning or end. That is the idea behind Möbius, a self-improving personal AI agent you self-host where the agent, the server it runs on, and the apps it builds loop back into one system that works to be as useful to you as it can.

Chat sits on one side, a full-screen canvas on the other. Describe what you want and the coding agent builds it — a small app that runs in your browser and persists next to the chat. The agent is not limited to apps: it can also edit the interface it runs inside, the theme, the layout, the features in the shell, by editing the source and rebuilding live.

The unusual design decisions worth knowing upfront:

- **The agent can modify its own platform.** It has write access to the entire backend and frontend under `/data/platform`, with full git history. Every change is reversible. If the shell breaks, `/recover` resets it without touching your chats, apps, or data.
-…

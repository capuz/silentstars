---
repo: "wsp-labs/wsp"
name: "wsp"
description: "Your setup, on cloud machines, for coding agents. Fork your own dev machine in seconds and let Claude Code and Codex work on it."
readmeQualityOk: true
url: "https://github.com/wsp-labs/wsp"
homepage: "https://usewsp.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["claude-code", "cloud-development", "codex", "coding-agents", "developer-tools", "electron", "local-first", "mcp", "remote-development", "sandbox"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-01T17:25:00Z"
lastCommitAt: "2026-10-16T08:19:37Z"
lastReleaseAt: "2026-10-13T12:25:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["Zingzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ddd29900eb9519c4e8a3d801f16f76a6871877bb38c2f108d8c3d88762e04cf/wsp-labs/wsp"
---

# wsp

Your setup, on your computers, for coding agents.

The site is [usewsp.com](https://usewsp.com). The docs are at [usewsp.com/docs](https://usewsp.com/docs).

wsp runs coding agents (Claude Code, Codex, OpenCode, Cursor) as threads on your own computers: the Mac you sit at, and any Linux box you add over ssh. A thread works in your project's folder, the way the agent would in a terminal there. You start threads, read them and answer them from the app, the command line, or from another agent over MCP, and every one of them shows in the same sidebar.

## What it does

- **Threads in your project.** A thread runs in the project's folder on its computer. Several threads share the folder; a thread on another branch gets a git worktree wsp makes, with your `.env` files and installed dependencies carried in.
- **Any agent, any model.** Pick the agent, the model, how hard it thinks and how far it may go without asking, per thread. Answer its questions and permission prompts from the app.
- **Agents starting agents.** A thread can start threads of its own, with the same agent or another one, beside it in the same folder. They show as its children in the sidebar, and each one's last…

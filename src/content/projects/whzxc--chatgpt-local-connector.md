---
repo: "whzxc/chatgpt-local-connector"
name: "chatgpt-local-connector"
description: "Connect ChatGPT to local coding agents—including Codex, Claude, Gemini, Cursor, and more—to explore projects, run coding tasks, and track progress via Secure MCP Tunnel or HTTPS MCP."
readmeQualityOk: true
url: "https://github.com/whzxc/chatgpt-local-connector"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["chatgpt", "codex", "mcp", "plugin"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-09-19T08:44:13Z"
lastCommitAt: "2026-09-21T09:14:24Z"
lastReleaseAt: "2026-09-21T04:09:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["whzxc", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9b89a72d4d4d84b48a0d176bc4b0d53319deb6146d350631e49520efeb36732/whzxc/chatgpt-local-connector"
---

# ChatGPT Local Connector

**English** | [简体中文](https://github.com/whzxc/chatgpt-local-connector/blob/HEAD/README.zh-CN.md)

**Discuss an idea in ChatGPT. Let a coding agent on your computer do the work.**

CLC did not start as an attempt to give ChatGPT a bigger tool list. It grew out of a workflow problem I kept running into, and each stage solved the next problem that became obvious.

## Why I built Local Connector

### Stage 1 — Let Chat see what is true now

I use ChatGPT's Chat mode to think through a lot of work. The recurring problem was continuity: Chat could remember the conversation, but it could not see what had just changed on my computer. A project might already have moved on, an architecture decision might have changed, or Codex might have finished another round of work, while Chat was still reasoning from stale context. Manually pasting files, diffs, and status updates every time became its own burden.

The first version of CLC was therefore simple: expose local project facts to ChatGPT through MCP. Chat can read the current files, code, documentation, project structure, and Git state when it needs them. The goal was not to make Chat “remember more”; it was to let…

---
repo: "SinanTufekci/agent-intern"
name: "agent-intern"
description: "MCP server that lets Claude Code or Antigravity hand work to Gemini (Antigravity), Codex, Copilot, Cursor and opencode as sub-agents: second opinions, images, parallel swarms and scored review panels, on the CLI logins you already have. opencode's free models need no account."
readmeQualityOk: true
url: "https://github.com/SinanTufekci/agent-intern"
homepage: "https://pypi.org/project/agent-intern/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["antigravity", "claude-code", "gemini", "mcp", "model-context-protocol", "python", "ai-agents", "developer-tools", "mcp-server", "swarm-agents"]
stars: 34
forks: 9
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-22T13:44:39Z"
lastCommitAt: "2026-11-18T12:08:40Z"
lastReleaseAt: "2026-06-17T10:26:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 46
maintainers: ["SinanTufekci"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1246727521/d42fac25-ef9b-4676-88f9-c4c7e6bfdcb0"
fundingLinks: ["GITHUB:https://github.com/SinanTufekci"]
discussionCount: 1
---

# agent-intern

### Give Claude Code (or Antigravity) an intern.

Claude Code runs out of quota while your Gemini, ChatGPT, Copilot and Cursor plans sit idle.
**agent-intern** lets it hand them errands: a second opinion, an image, a parallel swarm of tasks.

[Quick start](#quick-start) · [Antigravity CLI](#quick-start-antigravity-cli) · [Works in](#works-in) · [What it's for](#what-its-for) · [Backends](#backends) · [Security](#security) · [Docs](https://github.com/SinanTufekci/agent-intern/blob/main/docs/README.md)

agent-intern is an MCP server that runs the coding CLIs you are already signed in to (Gemini through
Antigravity, Codex, Copilot, Cursor, opencode) as headless sub-agents of Claude Code or Antigravity.
Claude stays in charge and the intern runs the errand under your own login, so it spends that CLI's
plan instead of your Claude quota, and you get a second model family's opinion.

**Try it** (needs [uv](https://docs.astral.sh/uv/getting-started/installation/), which is
`winget install --id=astral-sh.uv -e` on Windows or `brew install uv` on macOS, and, for the second
line, Node.js):

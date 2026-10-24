---
repo: "FootprintAI/Containarium"
name: "Containarium"
description: "Open-source agent runtime — SSH-native isolation, eBPF egress policy, Kubernetes + LXC backends, GPU passthrough, MCP-native CLI"
readmeQualityOk: true
url: "https://github.com/FootprintAI/Containarium"
homepage: "https://containarium.dev"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["lxc", "multi-tenant", "ssh", "agent-native", "agentic-ai", "agent-sandbox", "ai-agents", "claude", "code-sandbox", "cursor"]
stars: 310
forks: 54
openIssues: 186
closedIssues: 773
watchers: 1
contributors: 29
recentReleases: 0
createdAt: "2025-12-28T23:58:47Z"
lastCommitAt: "2026-10-24T08:07:33Z"
lastReleaseAt: "2026-02-28T04:21:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 96
undervaluedScore: 34
maintainers: ["hsinatfootprintai", "gksks1029", "saiAnderson"]
openGraphImageUrl: "https://opengraph.githubassets.com/3632118676150874fda8780defad74ded1b1449572975f3c0c8c068b9e31461c/FootprintAI/Containarium"
---

# Containarium — Agent Runtime

> **Open-source agent runtime** · SSH-native isolation · eBPF egress policy · Kubernetes + LXC · MCP-native CLI · GPU passthrough

**The open-source, self-hostable agent runtime for AI agents.**
Each agent gets a persistent, SSH-reachable box in an unprivileged container, with an opt-in per-tenant eBPF egress policy, audit-logged denials, and a model gateway that keeps provider API keys out of the box. What is on by default, and what each claim rests on, is in [`docs/security/CLAIMS.md`](https://github.com/FootprintAI/Containarium/blob/HEAD/docs/security/CLAIMS.md).

Bring your own agent — Cursor, Claude Code, OpenCode, your own MCP client.
We run the box.

```
agent: "create me a sandbox called 'blog'"           → containarium create
agent: "wire up SSH so I can reach it"               → containarium ssh-config sync
agent: "install Caddy on :8080 inside the box"       → shell_exec (via agent-box MCP)
agent: "expose that on blog.example.com"             → containarium expose-port

curl https://blog.example.com → hello world
```

🌐 **Project site:** [containarium.dev](https://containarium.dev) · 🎬 **55s demo:**…

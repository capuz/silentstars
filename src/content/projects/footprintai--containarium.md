---
repo: "FootprintAI/Containarium"
name: "Containarium"
description: "Open-source agent runtime — SSH-native isolation, eBPF egress policy, Kubernetes + LXC backends, GPU passthrough, MCP-native CLI"
readmeQualityOk: true
url: "https://github.com/FootprintAI/Containarium"
homepage: "https://containarium.dev"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["lxc", "multi-tenant", "ssh", "agent-native", "agentic-ai", "agent-sandbox", "ai-agents", "claude", "code-sandbox", "cursor"]
stars: 277
forks: 21
openIssues: 93
closedIssues: 372
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-12-28T23:58:47Z"
lastCommitAt: "2026-09-08T08:16:34Z"
lastReleaseAt: "2026-02-28T04:21:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 32
maintainers: ["hsinatfootprintai", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37af3d048d95a3344fc861ad31b5e8cfe38f9bc1bf02ecf9573c93a42ba7297b/FootprintAI/Containarium"
---

# Containarium — Agent Runtime

> **Open-source agent runtime** · SSH-native isolation · eBPF egress policy · Kubernetes + LXC · MCP-native CLI · GPU passthrough

**The open-source, self-hostable agent runtime for AI agents.**
Each agent gets a persistent, SSH-reachable box with per-tenant network isolation — no kube-apiserver token, no host access, no cross-tenant leakage.

Bring your own agent — Cursor, Claude Code, OpenCode, your own MCP client.
We run the box.

```
agent: "create me a sandbox called 'blog'"           → containarium create
agent: "wire up SSH so I can reach it"               → containarium ssh-config sync
agent: "install Caddy on :8080 inside the box"       → shell_exec (via agent-box MCP)
agent: "expose that on blog.example.com"             → containarium expose-port

curl https://blog.example.com → hello world
```

🌐 **Project site:** [containarium.dev](https://containarium.dev) · 🎬 **55s demo:** [youtu.be/IBDDD_tb8FY](https://youtu.be/IBDDD_tb8FY) · 🚀 **Live app:** [helloworld.demo.containarium.dev](https://helloworld.demo.containarium.dev)

---

## Why an agent runtime?

AI agents are increasingly the primary user of dev infrastructure. They
want to…

---
repo: "FootprintAI/Containarium"
name: "Containarium"
description: "Open-source agent runtime — SSH-native isolation, eBPF egress policy, Kubernetes + LXC backends, GPU passthrough, MCP-native CLI"
readmeQualityOk: true
url: "https://github.com/FootprintAI/Containarium"
homepage: "https://containarium.dev"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["lxc", "multi-tenant", "ssh", "agent-native", "agentic-ai", "agent-sandbox", "ai-agents", "claude", "code-sandbox", "cursor"]
stars: 262
forks: 17
openIssues: 26
closedIssues: 155
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-28T23:58:47Z"
lastCommitAt: "2026-07-20T06:33:23Z"
lastReleaseAt: "2026-02-28T04:21:49Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 29
maintainers: ["hsinatfootprintai", "hsinhoyeh", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b979f937b45ae55f5760ee4a730d0581905c63bf364178a01e63b70c6a4e87f4/FootprintAI/Containarium"
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

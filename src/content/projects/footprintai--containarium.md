---
repo: "FootprintAI/Containarium"
name: "Containarium"
description: "The open-source, self-hostable, agent-native sandbox. Bring your own agent (Cursor, Claude Code, OpenCode); we run the box."
url: "https://github.com/FootprintAI/Containarium"
homepage: "https://containarium.dev"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["cloud-cost-efficiency", "dev-environment", "lxc", "lxc-container", "multi-tenant", "ssh", "agent-native", "agentic-ai", "agent-sandbox", "ai-agents"]
stars: 215
forks: 13
openIssues: 22
closedIssues: 104
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-28T23:58:47Z"
lastCommitAt: "2026-06-26T06:47:53Z"
lastReleaseAt: "2026-02-28T04:21:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 29
maintainers: ["hsinatfootprintai", "dependabot[bot]", "hsinhoyeh"]
openGraphImageUrl: "https://opengraph.githubassets.com/004a7a48d8492b24654470eb2d17bf29b0ca992ea7d7ebd70aeb1db473e09390/FootprintAI/Containarium"
---

# Containarium

**The open-source, self-hostable, agent-native sandbox.**
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

## Why "agent-native"?

AI agents are increasingly the primary user of dev infrastructure. They
want to build, install, deploy, and verify — not on the human's laptop
(too noisy, too risky, too local) but on a sandbox that's:

- **Persistent**: state survives between agent runs.
- **Isolated**: a misbehaving install doesn't touch your machine.
- **Real**: a full Linux environment with `systemd`, real…

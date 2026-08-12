---
repo: "KeeperHub/keeperhub"
name: "keeperhub"
description: "Automate on-chain events and actions reliably and securely. Build Workflows in minutes without the need for infrastructure, code or wallet management. Get instant alerts and never miss what matters."
readmeQualityOk: true
url: "https://github.com/KeeperHub/keeperhub"
homepage: "https://keeperhub.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "automation", "blockchain", "defi", "ethereum", "keeper", "mcp", "monitoring", "web3", "workflow"]
stars: 17
forks: 32
openIssues: 20
closedIssues: 25
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2025-12-02T09:46:49Z"
lastCommitAt: "2026-08-12T05:15:04Z"
lastReleaseAt: "2026-02-20T03:36:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 64
maintainers: ["suisuss", "joelorzet", "eskp"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8e4267c98561268f301c563b48ef5b0f146f2a4b38c3da16f107d02364761c4/KeeperHub/keeperhub"
---

# KeeperHub

A Web3 workflow automation platform that enables users **and Agents** to create, manage, and execute blockchain automation workflows and tasks. Supports smart contract monitoring, token transfers, DeFi operations, and integrations with Discord, SendGrid, webhooks and more.

## Core Value

Users and Agents can build and deploy Web3 automation workflows through a visual builder or via the [MCP server](https://docs.keeperhub.com/ai-tools/mcp-server) without writing code.

## Add KeeperHub to your Agent

**Quick setup (no install needed):**

```bash
claude mcp add --transport http keeperhub https://app.keeperhub.com/mcp
```

Then run `/mcp` inside Claude Code to authorize via browser. That's it.

Try asking Claude to "create a workflow that monitors a wallet".

**Alternative: install the Claude Code plugin** for skills and slash commands:

```bash
/plugin marketplace add KeeperHub/claude-plugins
/plugin install keeperhub@keeperhub-plugins
/keeperhub:login
```

Restart Claude Code after setup. [Plugin source code](https://github.com/KeeperHub/claude-plugins/tree/main/plugins/keeperhub).

## What KeeperHub Does

- **Visual Workflow Builder**: Drag-and-drop interface for…

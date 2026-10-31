---
repo: "softov/ahpd"
name: "ahpd"
description: "An open-source, plugin-driven AHP server with native Claude and pi agents, ACP agents (Codex, Copilot, Gemini), model proxying, tools and MCP servers, sandboxed computers and terminals, automations, conversational bots, and a web UI (ahpw). Users, permissions and usage tracking are built in. Build your own host and plugins with @ahpd/sdk."
readmeQualityOk: true
url: "https://github.com/softov/ahpd"
homepage: "https://softov.github.io/ahpd/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-host-protocol", "claude", "claude-code", "codex", "copilot", "deepseek-harness", "gemini", "mcp", "mcp-client", "mcp-server"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-06T09:58:37Z"
lastCommitAt: "2026-10-31T15:59:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 48
maintainers: ["softov", "MayCXC"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb94e76fd84b218a2eb83940e32a86b72f4a40d428d577ee983f4a470f35716/softov/ahpd"
fundingLinks: ["GITHUB:https://github.com/softov"]
discussionCount: 1
---

# <img src="docs/public/logo.svg" alt="" height="32"> ahpd - agent host platform

**Run your AI agents anywhere. Control them from anywhere.**

ahpd is an open-source server that brings your AI agents, tools, and projects together.

Run agents on your computer, a remote server, or in containers. Connect from your browser, desktop, terminal, or phone.

Your work stays on the server. You can close an app, switch devices, or disconnect without losing your session.

Built on the [Agent Host Protocol (AHP)](https://microsoft.github.io/agent-host-protocol/). See [AHP compatibility](https://softov.github.io/ahpd/sdk/AHP) for what it implements.

[Read the documentation](https://softov.github.io/ahpd/) · [GitHub](https://github.com/softov/ahpd) · [ahpio.com](https://ahpio.com)

---

## Start in minutes

Install with one line on Linux or macOS:

```bash
curl -fsSL https://ahpio.com/ahpd/install.sh | bash
```

On Windows, in PowerShell:

```powershell
irm https://ahpio.com/ahpd/install.ps1 | iex
```

The script checks for Node 22.18 or newer, installs `@ahpd/server` without sudo, adds `ahpd` to your PATH, and runs `ahpd configure`. [Install…

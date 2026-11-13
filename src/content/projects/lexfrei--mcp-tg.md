---
repo: "lexfrei/mcp-tg"
name: "mcp-tg"
description: "MCP server for Telegram Client API (MTProto)"
readmeQualityOk: true
url: "https://github.com/lexfrei/mcp-tg"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 12
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-02T18:39:50Z"
lastCommitAt: "2026-11-13T11:18:59Z"
lastReleaseAt: "2026-04-07T10:05:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["renovate[bot]", "lexfrei", "kvaps"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d55dbfe9c543e186e41fa48135ae9ed8a9ad566ec873e5c7fd88d305e7e182e/lexfrei/mcp-tg"
---

# mcp-tg

MCP server for Telegram Client API (MTProto). Provides 80 tools, 4 resources, 3 prompts, and argument completions for comprehensive Telegram account management.

Uses [gotd/td](https://github.com/gotd/td) for MTProto protocol — this is a **user account** client, not a bot.

📖 **Full documentation: [mcp-tg.lexfrei.dev](https://mcp-tg.lexfrei.dev)**

## Install

Homebrew (macOS, Linux) — also installs a `brew services` unit for the shared HTTP daemon:

```bash
brew install lexfrei/tap/mcp-tg
```

APT (Debian, Ubuntu) — also ships a systemd user unit for the shared HTTP daemon:

```bash
curl --fail --silent --show-error --location https://apt.lexfrei.dev/lexfrei.asc \
  | sudo gpg --dearmor --output /usr/share/keyrings/lexfrei.gpg

sudo tee /etc/apt/sources.list.d/lexfrei.sources >/dev/null <<'EOF'
Types: deb
URIs: https://apt.lexfrei.dev
Suites: stable
Components: main
Signed-By: /usr/share/keyrings/lexfrei.gpg
EOF

sudo apt update && sudo apt install mcp-tg
```

Container:

```bash
docker pull ghcr.io/lexfrei/mcp-tg:latest
```

Binary: `darwin`, `linux` and `windows` archives for `amd64` and `arm64` are on the [releases page](https://github.com/lexfrei/mcp-tg/releases),…

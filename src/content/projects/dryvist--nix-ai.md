---
repo: "dryvist/nix-ai"
name: "nix-ai"
description: "Your AI coding toolkit, declared in Nix — Claude, Gemini, Copilot, 15+ MCP servers, one flake"
readmeQualityOk: true
url: "https://github.com/dryvist/nix-ai"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [70, 21]
topics: ["ai", "ai-tools", "claude", "claude-code", "copilot", "gemini", "home-manager", "mcp-server", "nix", "nix-flakes"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 245
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-27T09:22:53Z"
lastCommitAt: "2026-11-07T16:12:25Z"
lastReleaseAt: "2026-03-15T23:28:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["jacobpevans-claude[bot]", "jacobpevans-release-please[bot]", "JacobPEvans-personal"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5ec9fc0660a8e094bed68331667e3fefb65f7e46e0e5a1555beca642b2c9ae5/dryvist/nix-ai"
---

# nix-ai

## Your AI coding toolkit, declared once. Reproduced everywhere

Ever spent hours configuring Claude Code plugins, Gemini settings, and MCP servers
— only to lose it all when you switch machines? **nix-ai** captures your entire AI
setup as code using [Nix](https://nixos.org/). One command rebuilds everything,
identically, every time.

---

## What it manages

| Tool | What you get |
| ---- | ------------ |
| **Claude Code** | [Plugin ecosystem](https://github.com/dryvist/nix-ai/blob/HEAD/modules/claude/plugins/README.md), hooks, agents, commands, rules |
| **Gemini / Antigravity** | CLI + IDE settings, custom commands, permission rules |
| **GitHub Copilot** | Configuration, permissions |
| **OpenAI Codex** | Settings, rules, approval policy |
| **Qwen Code & Cecli** | Settings for the Alibaba and Aider-fork CLIs |
| **MCP Servers** | One [catalog](https://github.com/dryvist/nix-ai/blob/HEAD/modules/mcp/README.md) (GitHub, Terraform, Context7, filesystem, memory, …) fanned out to every agent |
| **AI Dev Tools** | cclint, rulesync, and more |
| **MLX** *(macOS)* | Local Apple Silicon inference via always-loaded mlx_lm.server residents, with launchd integration |

Claude…

---
repo: "CharTyr/STS2-Agent"
name: "STS2-Agent"
description: "杀戮尖塔2的MOD，将杀戮尖塔2的游戏状态与操作暴露为本地 HTTP API 包装成 MCP Server，供支持 MCP 的AI客户端直接调用"
readmeQualityOk: true
url: "https://github.com/CharTyr/STS2-Agent"
language: "C#"
languages: ["C#", "Python"]
languagePcts: [58, 20]
topics: ["game", "mod", "slay-the-spire", "slay-the-spire-2", "agent", "mcp"]
stars: 296
forks: 38
openIssues: 0
closedIssues: 20
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-03-11T09:26:19Z"
lastCommitAt: "2026-08-27T14:28:31Z"
lastReleaseAt: "2026-04-24T16:50:52Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 21
maintainers: ["CharTyr", "dbyrne", "XenoAmess"]
openGraphImageUrl: "https://opengraph.githubassets.com/9906d699e8b06edb573195b71a621b2e58abe98533e71bb8433ed4754423376e/CharTyr/STS2-Agent"
---

# STS2 AI Agent

https://github.com/user-attachments/assets/89353468-a299-4315-9516-e520bcbfbd4b

中文版说明请见 [README.zh-CN.md](https://github.com/CharTyr/STS2-Agent/blob/HEAD/README.zh-CN.md).

`STS2 AI Agent` is a Slay the Spire 2 mod with an in-game AI overlay. After you install the mod, you can configure model endpoints, chat, set per-model thinking intensity, let the model play, optionally attach vision, and launch a local second instance for co-op with the model.

The local HTTP API and MCP server remain available for developers and external clients.

- `STS2AIAgent`: in-game overlay + local HTTP API (`http://127.0.0.1:8080` by default)
- `mcp_server`: optional MCP wrapper around that API

Detailed MCP tool documentation lives in [mcp_server/README.md](https://github.com/CharTyr/STS2-Agent/blob/HEAD/mcp_server/README.md). The in-game play loop follows the same state-first rules as [skills/sts2-mcp-player/SKILL.md](https://github.com/CharTyr/STS2-Agent/blob/HEAD/skills/sts2-mcp-player/SKILL.md).

## Quick Start (Players)

### 1. Install The Mod

After downloading and extracting the release package, copy these files into your game's `mods/` directory:

```text
STS2AIAgent.dll…

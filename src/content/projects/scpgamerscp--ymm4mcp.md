---
repo: "SCPgamerscp/ymm4MCP"
name: "ymm4MCP"
description: "This is an MCP for Yukkuri MovieMaker 4. In the future, I want to be able to create Yukkuri videos fully automatically."
originalDescription: "ゆっくりムービーメーカー4のMCPです。将来的にはゆっくり動画を全自動で作れるようにしたいです。"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/SCPgamerscp/ymm4MCP"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [64, 34]
topics: ["mcp", "mcp-server", "model-context-protocol", "ymm4-plugin", "ymm4-mcp", "ymm4"]
stars: 30
forks: 7
openIssues: 8
closedIssues: 15
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-26T05:58:21Z"
lastCommitAt: "2026-10-29T05:51:38Z"
lastReleaseAt: "2026-06-30T15:01:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 45
maintainers: ["SCPgamerscp"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cf11b2b4e49ff4eccd712c0166e5f779810dc8d5ab0a5c4bb983a20bf0c9124/SCPgamerscp/ymm4MCP"
---

# YMM4 MCP Plugin

A plugin that lets Claude operate Yukkuri MovieMaker 4 (YMM4) via MCP.
While watching the video and listening to the audio, the AI automatically generates Yukkuri commentary, explanation, skit, and story videos.

```
[Claude] ←MCP(stdio)→ [Python MCP server] ←HTTP(8765)→ [YMM4 C# plugin] ←internal API→ [YMM4 itself]
```

---

## 🚀 Getting Started (Windows)

1. Download the latest `YMM4McpPlugin-*.ymme` from [Releases](https://github.com/SCPgamerscp/ymm4MCP/releases). Close YMM4, double-click the `.ymme` file, and install it following YMM4's instructions. Users do not need to set `YMM4_PATH` or the .NET SDK.
2. Start YMM4. On a new installation, the plugin's HTTP server starts automatically. You can check the status under "Tools" → "MCP Integration Server". If automatic startup is already disabled, press "▶ Start" on this screen.
3. Fully extract `YMM4McpServer-*.zip` from the same Release, then double-click `mcp-server/install.cmd` (**Python 3.10 or later** is required. If `py -3` points to an older Python, also check for an available `python.exe`). The MCP server is permanently installed to `%LOCALAPPDATA%\YMM4MCP\mcp-server`, so Claude Desktop can launch it…

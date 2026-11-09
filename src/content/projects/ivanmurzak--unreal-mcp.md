---
repo: "IvanMurzak/Unreal-MCP"
name: "Unreal-MCP"
description: "AI Game Developer for Unreal Engine — MCP plugin (C++ editor plugin + .NET bridge), unreal-cli, connects Unreal Editor to AI agents via ai-game.dev or a local MCP server"
readmeQualityOk: true
url: "https://github.com/IvanMurzak/Unreal-MCP"
homepage: "https://ai-game.dev"
language: "C++"
languages: ["C++"]
languagePcts: [61]
topics: ["ai", "ai-tools", "gamedev", "mcp", "mcp-server", "unreal", "unreal-engine", "ai-integration", "anthropic", "claude"]
stars: 58
forks: 9
openIssues: 0
closedIssues: 105
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-10T09:05:14Z"
lastCommitAt: "2026-11-09T03:31:01Z"
lastReleaseAt: "2026-07-01T05:35:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["IvanMurzak"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1264881333/3a2b4f66-e74a-4bd5-9a12-82fdfc05cd06"
discussionCount: 0
---

`Unreal MCP` is an AI-powered game development assistant **for the Unreal Editor**. Connect **Claude**, **Cursor**, **Copilot**, or any MCP-aware agent to Unreal Engine and let it inspect and drive your project — spawn actors, edit levels, author Blueprints, manage assets, edit and compile C++, capture screenshots, and more.

Unreal-MCP is the Unreal Engine counterpart of [Unity-MCP](https://github.com/IvanMurzak/Unity-MCP) and [Godot-MCP](https://github.com/IvanMurzak/Godot-MCP): a **C++ editor plugin** that exposes Unreal Editor operations as **AI Tools** and connects them to an MCP server through the same hosted cloud backend ([ai-game.dev](https://ai-game.dev)) that powers Unity-MCP and Godot-MCP — or your own self-hosted server. The local server is the shared, engine-agnostic [GameDev-MCP-Server](https://github.com/IvanMurzak/GameDev-MCP-Server) (binary `gamedev-mcp-server`) — one server consumed by Unity-MCP, Godot-MCP, and Unreal-MCP; no server source lives in this repo.

Unlike Unity and Godot (C# engines that host the .NET `McpPlugin` in-process), Unreal's editor is **C++** — so the .NET MCP host runs as an auto-managed **sidecar process** (`unreal-mcp-bridge`) that the…

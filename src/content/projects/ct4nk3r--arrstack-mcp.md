---
repo: "CT4nk3r/arrstack-mcp"
name: "arrstack-mcp"
description: "MCP server for Sonarr, Radarr, qBittorrent & Jellyfin — give your AI assistant control over your media stack"
readmeQualityOk: true
url: "https://github.com/CT4nk3r/arrstack-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 8
forks: 8
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-05-09T00:23:47Z"
lastCommitAt: "2026-11-20T12:00:20Z"
lastReleaseAt: "2026-10-13T11:52:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 73
undervaluedScore: 58
maintainers: ["CT4nk3r", "Esequiel378", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8da5944578d6b2e074b35c5974aee0066c67b393f0b70ee8fd95bd4a13d8762e/CT4nk3r/arrstack-mcp"
---

# 🎬 arrstack-mcp

An [MCP](https://modelcontextprotocol.io/) server that gives AI assistants configurable access to homelab media and game services.

Works with **Claude Desktop**, **Cursor**, **VS Code Copilot**, **OpenClaw**, and any other MCP-compatible client.

## Demo

### OpenClaw + a local model, from Discord

You can connect arrstack-mcp to [OpenClaw](https://github.com/openclaw/openclaw) ([docs](https://docs.openclaw.ai)) and
chat with your media stack from Discord. In this demo, OpenClaw uses a model running locally on a homelab server
(**Gemma 4 E4B**, served by [Ollama](https://ollama.com)). In the chat below, the bot finds the three Hobbit movies in Radarr and asks which ones to
download; after a short follow-up ("grab all three") they are added and the downloads start.

The result, a few moments later: Radarr is grabbing all three movies, and qBittorrent is downloading them.

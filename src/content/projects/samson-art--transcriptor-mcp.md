---
repo: "samson-art/transcriptor-mcp"
name: "transcriptor-mcp"
description: "One MCP server that gives Claude, ChatGPT, Cursor and any other AI app transcripts, chapters, metadata and frames from YouTube and 10 more video platforms."
readmeQualityOk: true
url: "https://github.com/samson-art/transcriptor-mcp"
homepage: "https://transcriptor-mcp.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["claude-code", "cursor", "docker", "mcp", "mcp-server", "youtube", "youtube-captions", "yt-dlp"]
stars: 26
forks: 5
openIssues: 14
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-24T19:25:41Z"
lastCommitAt: "2026-11-20T11:57:44Z"
lastReleaseAt: "2026-02-12T19:19:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["samsonov-artem", "samson-art"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1122460859/f57e3d53-d4bf-4f0a-bba6-e52c9956a5d1"
---

# 🎬 Now your AI assistant can watch videos!

**Connect one server. Then ask Claude, ChatGPT or etc about a video:** the transcript, the chapters, the metadata, or a single frame. It works with 11 platforms, not only YouTube.

**[Connect](#-connect-in-30-seconds) · [What to ask](#-what-you-can-ask) · [Widgets](#-widgets) · [Platforms](#-platforms) · [Self-host](#-self-host)**

---

## ⚡ Connect in 30 seconds

The hosted endpoint is:

```text
https://transcriptor.gateway.mcpal.io/mcp
```

### 🖱️ One click

### ⌨️ One command, for Claude Code

```bash
claude mcp add --transport http transcriptor https://transcriptor.gateway.mcpal.io/mcp
```

Then run `/mcp` and approve the sign-in in the browser. After this, `claude mcp list` shows `✔ Connected`.

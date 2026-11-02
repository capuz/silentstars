---
repo: "clipy-recorder/clipy-mcp"
name: "clipy-mcp"
description: "Clipy is the first agent-readable screen recorder — free, no watermark, for Mac, Chrome, and the web. One share link: humans watch the video, AI agents read the summary, key moments, and transcript."
readmeQualityOk: true
url: "https://github.com/clipy-recorder/clipy-mcp"
homepage: "https://clipy.online/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-04T08:11:06Z"
lastCommitAt: "2026-11-02T17:57:17Z"
lastReleaseAt: "2026-07-20T09:34:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 40
maintainers: ["manovagyanik1", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fac5b33df093307f75bd7e5fb3bc99f7162764a050829e757dff59494817cb4/clipy-recorder/clipy-mcp"
---

# @clipy/mcp

Give your AI agent access to your [Clipy](https://clipy.online) screen recordings.

> Developed in the Clipy monorepo. A public mirror for browsing the source and filing
> issues lives at **[github.com/clipy-recorder/clipy-mcp](https://github.com/clipy-recorder/clipy-mcp)**
> (MIT), kept in sync with each npm release.

This is a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server. It lets
Claude, Cursor, Windsurf, and other MCP-capable agents **search your recordings and your team
library, and read their transcripts and AI summaries**, so you can do things like _"turn this bug-report
recording into a Linear ticket"_ without leaving your agent — and, with the `record`
tool, **record a web app headlessly** and get it back as a Clipy recording (_"build the
feature, then record the outcome"_).

The canonical cross-surface operating contract is
**[clipy.online/agents.md](https://clipy.online/agents.md)**. For the exact
connected MCP version and schemas, use the standard `tools/list` request.

The read tools need the `recordings:read` scope, which every key gets by default. The
write tools — `record`, the session tools (`start_recording`, `add_marker`,…

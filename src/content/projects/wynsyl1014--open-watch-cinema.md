---
repo: "wynsyl1014/open-watch-cinema"
name: "open-watch-cinema"
description: "A local-first cinema for watching your own films with AI companions through MCP."
readmeQualityOk: true
url: "https://github.com/wynsyl1014/open-watch-cinema"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [78]
stars: 15
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-06T10:06:17Z"
lastCommitAt: "2026-08-07T05:15:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 7
maintainers: ["wynsyl1014"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd602c6eea9bbd35f5cf13c95a85285d5492b244fb86c9d48c91f8ff93de0d35/wynsyl1014/open-watch-cinema"
---

# Open Watch Cinema

A local-first watch room for films stored on the viewer's own disk. Open Watch Cinema combines recursive media scanning, embedded SQLite, safe browser-compatibility preparation, HTTP Range streaming, timed room conversation, danmaku replay, precomputed AI dialogue/visual packages, spoiler-gated incremental MCP delivery, selected storyboard image retrieval, and read-only session archives.

The primary launch targets are Windows and macOS. The application binds only to `127.0.0.1`; it is not a LAN or public streaming server.

Human users should begin with [`FOR_USERS.md`](https://github.com/wynsyl1014/open-watch-cinema/blob/HEAD/FOR_USERS.md). MCP hosts and connected models should also read [`mcp/README.md`](https://github.com/wynsyl1014/open-watch-cinema/blob/HEAD/mcp/README.md) and [`mcp/SKILL.md`](https://github.com/wynsyl1014/open-watch-cinema/blob/HEAD/mcp/SKILL.md).

## Requirements

- Node.js 24 or newer.
- FFmpeg and FFprobe available on PATH.
- Chrome or another Chromium browser.
- Python 3 for **Prepare for AI viewing** and the visual observation worker.
- Optional but strongly recommended: headless OpenCV through the project-local observer…

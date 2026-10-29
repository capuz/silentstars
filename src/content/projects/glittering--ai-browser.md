---
repo: "Glittering/ai-browser"
name: "ai-browser"
description: "AI-native browser — renders pixels for humans, structured semantic tree API for agents. No screenshots, no OCR, no coordinate guessing."
readmeQualityOk: true
url: "https://github.com/Glittering/ai-browser"
homepage: "https://github.com/Glittering/ai-browser"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["agent", "ai", "ai-browser", "automation", "browser", "electron", "mcp", "model-context-protocol", "semantic-ui", "web-scraping"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-15T13:54:57Z"
lastCommitAt: "2026-10-29T05:48:46Z"
lastReleaseAt: "2026-10-24T17:12:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 61
maintainers: ["Glittering"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1301673814/4aac67c2-992f-4a8b-b35c-94b3288afe3f"
discussionCount: 4
---

It reads pages as a semantic tree instead of screenshots, acts through trusted browser input —
  and because it is a normal, visible Electron window, a human can reach for the mouse at any time.

  Reproduce: <code>npm start</code> then <code>node examples/feed-tree.mjs</code>

  Try it yourself: <code>npm start</code> then <code>node examples/human-takeover.mjs</code> — click anything when it says <em>YOUR TURN</em>.

**What it is.** An Electron app that exposes its tabs over two equivalent interfaces — an MCP server
(20 `browse_*` tools) and a raw WebSocket JSON-RPC API (`ws://localhost:9223`, methods `ui.*`). Your
agent navigates, reads a structured semantic tree (`role` / `label` / `value` / `states` / `actions`),
and clicks or types by `data-ai-id`. There is no screenshot step and no OCR: `src/` contains no
capture call at all.

**What it is not.** It is not headless. The window really opens, really renders, and stays interactive —
see [Letting a human step in](#letting-a-human-step-in). Nor does it "co-drive" with you: the hand-off
is a conversation between the agent and the user, not a browser API.

> **Security note.** The WebSocket server has no authentication — it…

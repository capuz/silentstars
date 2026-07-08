---
repo: "brendanlong/lion-reader"
name: "lion-reader"
description: "An AI-native, all-in-one reader that unifies RSS/Atom/JSON feeds, email newsletters, and read-later into one fast, self-hostable app."
readmeQualityOk: true
url: "https://github.com/brendanlong/lion-reader"
homepage: "https://lionreader.com/demo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 10
forks: 1
openIssues: 40
closedIssues: 255
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2025-12-26T22:48:46Z"
lastCommitAt: "2026-07-08T05:42:50Z"
lastReleaseAt: "2026-07-06T17:34:45Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 62
maintainers: ["claude", "brendanlong"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1123452324/41b29aea-9940-4742-80b3-59cdde9ad7e1"
---

# Lion Reader

An AI-native, all-in-one reader that unifies RSS/Atom/JSON feeds, email newsletters, and read-later into one fast, self-hostable app. Try the [interactive demo](https://lionreader.com/demo) — no signup required.

## What makes it different

- **AI-native, not AI-bolted-on** — Connect Claude and other assistants directly to your reader over the [Model Context Protocol (MCP)](https://github.com/brendanlong/lion-reader/blob/HEAD/docs/DESIGN.md#mcp-server) to list, search, save, star, and mark entries read on your behalf. On-demand article summaries via Claude (never auto-summarized), plus text-to-speech narration with synchronized paragraph highlighting.
- **Everything in one place** — Feeds, email newsletters, and read-later side by side. Save any page via browser extensions, a bookmarklet, a Discord bot, your phone's share menu (PWA), the MCP/REST APIs, or Markdown/Word/HTML uploads — with enhanced extraction for arXiv, GitHub, Google Docs, and LessWrong.
- **Obsessively fast** — Real-time updates are patched directly into the list you're reading (no refetch, no re-render jank), in-app navigation is served from cache with zero server round-trips, and the backend is…

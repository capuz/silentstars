---
repo: "OxyHQ/Mention"
name: "Mention"
description: "The Mention application for Web, Android and iOS. Mention by Oxy."
readmeQualityOk: true
url: "https://github.com/OxyHQ/Mention"
homepage: "https://mention.earth"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["social-network", "expo", "oxy", "react-native", "typescript", "app"]
stars: 5
forks: 1
openIssues: 18
closedIssues: 109
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-12-07T01:41:02Z"
lastCommitAt: "2026-10-22T08:44:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 84
maintainers: ["NateIsern", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/899773466/016bf854-8b7a-4064-ae29-9c8a5e7253dc"
fundingLinks: ["GITHUB:https://github.com/OxyHQ", "CUSTOM:https://oxy.so"]
discussionCount: 1
---

Posts are signed records on a chain the author owns, not rows we can quietly rewrite.

---

### What is in this repository

One Bun workspace holding the whole product: an Expo client that ships to iOS, Android and the web from a single codebase, an Express API that also serves the web shell and the federation endpoints, the shared type contracts both sides compile against, and a remote MCP server so an AI assistant can read and post with your permission.

Mention owns posts, feeds, engagement, notifications, its own mutes and its federation state. It does not own you.

### How it fits the Oxy platform

Identity, sessions and the social graph come from [**oxy**](https://github.com/OxyHQ/oxy), the platform every Oxy app stands on. The client mounts one `OxyProvider` from `@oxy.so/services`, the backend verifies requests with `@oxy.so/core/server`, and neither side hand rolls a token parser.

The interface is built with [**Bloom**](https://github.com/OxyHQ/Bloom). Live audio rooms come from `@syra.fm/sdk`, the engine behind [**Syra**](https://github.com/OxyHQ/Syra), and load only when a room is opened.

## Workspaces

| Package | Path | What it holds |
|---|---|---|
|…

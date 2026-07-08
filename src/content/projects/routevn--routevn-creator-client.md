---
repo: "RouteVN/routevn-creator-client"
name: "routevn-creator-client"
description: "RouteVN Creator is a desktop application to create Visual Novels without any coding"
readmeQualityOk: true
url: "https://github.com/RouteVN/routevn-creator-client"
homepage: "https://routevn.com/creator/about/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["game-engine", "interactive-fiction-engine", "visual-novel", "visual-novel-creator", "visual-novel-editor", "visual-novel-engine", "visual-novel-framework", "visual-novel-games", "visual-novel-maker", "visual-novel-tools"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2025-05-23T04:56:46Z"
lastCommitAt: "2026-07-08T05:43:16Z"
lastReleaseAt: "2026-04-17T01:32:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["han4wluc", "maxchwa"]
openGraphImageUrl: "https://opengraph.githubassets.com/70e54e0b36565c3e4fc76786cffaab680696370a753b9f38a758964acb911a3e/RouteVN/routevn-creator-client"
---

# RouteVN Creator Client

[Official Website](https://routevn.com/creator/about/)

RouteVN Creator Client is a frontend application for building Visual Novels with a drag & drop visual UI, without needing to write any code.

This is a complete **Single Page Application (SPA)** that operates **offline-first**.

Browser builds persist project data through IndexedDB-backed stores.

Desktop builds persist project data through Tauri/SQLite-backed stores.

Android builds run the web app inside a native WebView shell and persist project
data through the web/IndexedDB-backed stores. Tauri is not used for mobile.

## Frameworks used

- [@rettangoli/fe](https://github.com/yuusoft-org/rettangoli/tree/main/packages/rettangoli-fe) - Is used as the frontend framework
- [@rettangoli/ui](https://github.com/yuusoft-org/rettangoli/tree/main/packages/rettangoli-ui) - Is used as the UI library
- [Product](https://github.com/RouteVN/routevn-creator-client/blob/HEAD/docs/product.md) - Product principles and UX contract
- [Engineering](https://github.com/RouteVN/routevn-creator-client/blob/HEAD/docs/engineering.md) - Code structure, stack, and engineering boundaries
- [Platform…

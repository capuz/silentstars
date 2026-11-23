---
repo: "HSoo-Kim/folder-splitter"
name: "folder-splitter"
description: "A native Windows file manager with up to four independently tabbed panes"
readmeQualityOk: true
url: "https://github.com/HSoo-Kim/folder-splitter"
language: "C#"
languages: ["C#", "Swift"]
languagePcts: [71, 28]
stars: 14
forks: 0
openIssues: 2
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-21T03:07:28Z"
lastCommitAt: "2026-11-23T12:00:19Z"
lastReleaseAt: "2026-10-22T07:12:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 52
maintainers: ["HSoo-Kim"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8ddbfaf8a979bffce862217c6bf1f2d7f61b900607f74e301ce0044a6db5c59/HSoo-Kim/folder-splitter"
---

# Folder Splitter

**Up to four folders in one window, each pane with its own tabs. Find anything by typing a fragment.**

A Windows file manager built on the native Shell file list (`IExplorerBrowser`). It doesn't modify or replace `explorer.exe` and runs as a separate app.

## Key Capabilities

| Feature | What it does |
|---|---|
| **Fast search** | Type name or path fragments into the address bar. An index the app keeps itself typically answers in about 10 ms across 2.3 million paths, with no Everything install and no file contents read. [Details](#the-address-bar-is-a-search-box) |
| **Four panes with independent tabs** | Keep source, destination and reference folders side by side. Middle-click or `Ctrl+Enter` opens a folder in a new tab; drag tabs between panes, or to an edge to split. |
| **Chrome-style tab groups** | Collect up to 12 tabs in a named, colored group, collapse it or save it to the sidebar. While dragging, pause 0.3 s at a group's end to add to it. Pin the tabs you always keep. |

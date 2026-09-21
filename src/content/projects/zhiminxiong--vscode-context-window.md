---
repo: "zhiminxiong/vscode-context-window"
name: "vscode-context-window"
description: "To display the code context of the cursor's position in the VS Code panel, similar to the context window in Source Insight."
readmeQualityOk: true
url: "https://github.com/zhiminxiong/vscode-context-window"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 43]
stars: 15
forks: 7
openIssues: 2
closedIssues: 11
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-03-14T11:57:22Z"
lastCommitAt: "2026-09-21T09:14:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 71
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/340a4c8bf59f852048121125716bddd1218658b42c642569806bccf88c5dc031/zhiminxiong/vscode-context-window"
---

# Context View

Source Insight–style Context Window and Relation (calls/callers) in VS Code. The Context Window shows the full code context of the current symbol in the sidebar or panel; Relation shows who calls a symbol and what it calls.

## Special Thanks To

This extension is adapted/modified from `Definition View`: https://github.com/stevepryde/vscode-def-view.git

Special thanks go to all contributors of Definition View. It made creating this extension much easier!

Please check out that extension if you just want documentation in the panel or sidebar.

## Features

This extension implements Source Insight’s Context Window, plus Relation’s Calls and Callers.

- General Context Window

  

  - Click a symbol in the VS Code editor and the Context Window jumps to its definition. You can keep jumping from inside the Context Window to inspect source.

  - Every jump inside the Context Window is shown as a breadcrumb **jump trail** at the top. Click a trail item to return the Context Window to that definition.
  - The Context Window is built on Monaco. Monaco’s built-in colors are limited and look quite different from VS Code, so this extension uses VS Code’s **TextMate** and…

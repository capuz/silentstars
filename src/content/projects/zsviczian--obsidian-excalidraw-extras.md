---
repo: "zsviczian/obsidian-excalidraw-extras"
name: "obsidian-excalidraw-extras"
description: "Companion Obsidian.md plugin hosting extra add-on optional features for the main Excalidraw-Obsidian plugin"
readmeQualityOk: true
url: "https://github.com/zsviczian/obsidian-excalidraw-extras"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-08T12:41:24Z"
lastCommitAt: "2026-09-06T08:04:40Z"
lastReleaseAt: "2026-06-30T16:15:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["zsviczian", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/787b07c14091d21b9c935ccb63a7bbb3d4c4b6b94837c004e945f76e9efdd72e/zsviczian/obsidian-excalidraw-extras"
---

# Excalidraw Extras for Obsidian

**Excalidraw Extras** is a companion plugin for the [Obsidian Excalidraw Plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin). 

It is designed to house heavy dependencies and high-privilege operations, cleanly separating them from the core drawing experience. This architectural split ensures the main Excalidraw plugin remains lightweight, loads incredibly fast, works seamlessly with strict constraints like Obsidian Sync Basic, and complies with Obsidian's community security policies.

⚠️ **Note:** This plugin does nothing on its own. It is an extension package that the main Excalidraw plugin hooks into. 

## Full Disclosure: What is in this plugin?

To comply with Obsidian's security guidelines and provide total transparency to users, here is a complete breakdown of what code has been carved out of the main plugin and moved into Excalidraw Extras:

### 📦 Large Packages
These packages significantly increase bundle size and are separated here so users who don't need them don't have to load them:
- **MathjaxToSVG**: The engine that parses LaTeX formulas into SVG elements.
- **MermaidToExcalidraw**: The engine that converts Mermaid code…

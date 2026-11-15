---
repo: "RobertttBS/obsidian-enhanced-canvas"
name: "obsidian-enhanced-canvas"
description: "When editing on Canvas, properties and Markdown links to notes are automatically updated, enabling backlinks in Canvas."
readmeQualityOk: true
url: "https://github.com/RobertttBS/obsidian-enhanced-canvas"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 49
forks: 4
openIssues: 3
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-11T10:00:33Z"
lastCommitAt: "2026-11-15T11:17:08Z"
lastReleaseAt: "2025-03-19T15:14:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 45
maintainers: ["RobertttBS", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3456bce75ee2c07f88afcec43da8d5c713de803fcded4c75ac5082d4e02c788d/RobertttBS/obsidian-enhanced-canvas"
---

# Enhanced Canvas

> This Obsidian plugin enhances Obsidian Canvas with features I find essential.

## ✨New Feature✨

### Find in Canvas

Press **Cmd+F** (Ctrl+F on Windows), the core *Search current file* hotkey, in a Canvas, or run **"Find in canvas"** from the command palette, and type a word or a `[[link]]`. Every card that contains the word, or links to that note, is outlined and the rest are dimmed; matched text is highlighted and the view zooms to fit the results. Select text in a card and right-click → **Find in canvas** to search for it directly. Click an empty spot on the Canvas to clear.

-   While editing a card, Cmd/Ctrl+F still searches that card. Change the key via *Search current file* in Settings → Hotkeys, or bind *Find in canvas* separately.
-   Type several words to find cards with all of them, `OR` (uppercase) for either one, and `"quotes"` for an exact phrase: `canvas plugin OR "find text"`. Selected text is searched as one phrase.
-   Searches text cards, note cards (including their content), group labels, and web links.
-   Node colors and the `.canvas` file are never changed.
-   Change the highlight color with a CSS snippet: `body { --ec-find-color:…

---
repo: "Ker0el/gaea2-zh"
name: "gaea2-zh"
description: "Gaea 2 Simplified Chinese localization patch · Replace display layer at runtime without modifying any files of the original program | Chinese localization for QuadSpinner Gaea 2 (WPF / startup-hook)"
originalDescription: "Gaea 2 简体中文汉化补丁 · 运行时替换显示层，不改原程序任何文件 | Chinese localization for QuadSpinner Gaea 2 (WPF / startup-hook)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ker0el/gaea2-zh"
language: "C#"
languages: ["C#", "Inno Setup"]
languagePcts: [34, 28]
topics: ["chinese", "dotnet", "gaea", "localization", "quadspinner", "translation-patch", "windows", "wpf"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-27T15:01:32Z"
lastCommitAt: "2026-10-01T10:23:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["Ker0el"]
openGraphImageUrl: "https://opengraph.githubassets.com/3aca6f40eaa42ea5cf7dca5c39f0ae5de301f2c33bb303f494797ecb5e3bc25f/Ker0el/gaea2-zh"
---

# Gaea 2 Localization Patch

A Chinese localization for the interface of **QuadSpinner Gaea 2**. **Replace the display layer at runtime without modifying any files of Gaea.**

> You need your own **authorized** copy of Gaea 2. This repository **does not contain any binary files of Gaea** — no `Gaea.exe`, no `Gaea.dll`, and no icons or assets.

- Dictionary with **2808 entries**, covering menu bar, toolbox, property panel, all dialogs, 1541 tooltips, and all pages of the options window
- The host program **is not modified at all**: restoration = normal startup without environment variables
- Save file safety: Archive keys in `.terrain` projects are CLR type names (e.g., `QuadSpinner.Gaea.Nodes.Canyon`), not display strings. The localization only affects text on WPF controls; node logic and project files remain unaffected

## Effects

| Area | Status |
|---|---|
| Top menu bar + all dropdown items | ✅ |
| Toolbox (182 node names + 7 categories) | ✅ |
| Property panel (777 property names) | ✅ |
| Options window (all contents of 13 tabs) | ✅ |
| Node/property tooltips (1541 entries) | ✅ |
| Canvas node titles, port labels, status bar | ✅ |
| **Native dialogs** (save on exit prompt,…

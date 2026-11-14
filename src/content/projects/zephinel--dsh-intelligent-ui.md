---
repo: "Zephinel/dsh-intelligent-ui"
name: "dsh-intelligent-ui"
description: "Intelligent UI extension for DeepSeek Harness: render OpenUI Lang answers as interactive pages."
originalDescription: "Intelligent UI extension for DeepSeek Harness: render OpenUI Lang answers as interactive pages."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Zephinel/dsh-intelligent-ui"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 37]
topics: ["agent-skills", "deepseek-harness", "dsh-bundle", "dsh-plugin", "intelligent-ui"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-10-20T14:35:28Z"
lastCommitAt: "2026-11-14T10:42:32Z"
lastReleaseAt: "2026-10-25T11:45:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 42
maintainers: ["Zephinel"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed9b35803f42d5d5317cfaeef61f5ed93acb7534bd207fabf673a19508920b48/Zephinel/dsh-intelligent-ui"
---

# dsh-intelligent-ui

Chinese | [English](https://github.com/Zephinel/dsh-intelligent-ui/blob/HEAD/README.en.md)

**Turn DeepSeek Harness (DSH) model answers into a page you can actually use.** After installing and enabling it, just ask directly:

```text
Plan a two-day trip to Shanghai for me, with checkboxes and adjustable items
```

The model calls the `render_ui` tool and writes the answer as a program in [OpenUI Lang 1.0](https://openui.com). At the end of the turn, the DSH chat page renders it as an interactive page. Maps, photos, charts, checklists, forms, SVG drawings, and mini-games are all real components.

Ported from [Open Intelligent UI](https://github.com/thesysdev/open-intelligent-ui) (MIT), and includes an Agent Skill (`intelligent-ui`) that is registered automatically with the plugin.

> [!NOTE]
> **Current status**: Published to GitHub and npm. The npm version is **`@zephinel/dsh-intelligent-ui@0.5.0`** (`latest`). Custom styling, on-demand generation, free layout, template file import/export, and fixes to the rendering contract, Host validation, and export semantics are all included in 0.5.0. The local main branch (not yet pushed) also contains unreleased…

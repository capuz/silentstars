---
repo: "AkarisRotile/opening-preset-forge"
name: "opening-preset-forge"
description: "Destiny·Initial Preset Workshop — SillyTavern floating window extension: one-click pipeline Skills → Equipment → Items → Assets → Background → new output and export .preset.json (direct connection to tavern main API)"
originalDescription: "命定·开局预设工坊 —— SillyTavern 悬浮窗扩展：一键跑 技能→装备→道具→资产→背景→新输出 并导出 .preset.json（直连酒馆主 API）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AkarisRotile/opening-preset-forge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-04T07:25:51Z"
lastCommitAt: "2026-10-02T09:59:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 45
maintainers: ["AkarisRotile"]
openGraphImageUrl: "https://opengraph.githubassets.com/416cad66f710d1b7e9a4c71ca30dd5c450b23e89089b5eeaf443e48d73389c6f/AkarisRotile/opening-preset-forge"
---

# Shixian's Magical Compendium · destiny Initial Preset Workshop

SillyTavern / Tavern Helper browser extension 'floating window' · current version **v1.18.2**

Provides **initial preset one-click pipeline** for character cards like "Shixian's Magical Compendium + Destiny Poems and Twilight Songs":

> Skills → Equipment → Items → Assets → Background → Summary initial preset JSON → One-click export `destiny_*.preset.json`

The entire process calls **the tavern's current main API** (`SillyTavern.getContext().generateRaw`): the plugin does not save or use any API Keys, model and sampling parameters follow the tavern's existing main API configuration.

---

## I. Feature Overview

- **Step-by-step initial draft generation**: serially calls the main API in the order of Skills → Equipment → Items → Assets → Background → Summary output, with step cards lighting up one by one;
- **Built-in column generation specifications**: basic prompts for Skills/Equipment/Items/Assets are incorporated into "Skills Equipment Items Generation Rules" (format constraints for fields/tags/costs/effects/emblems/total space/settlement/internal assets, etc.);
- **Automatic compliance self-check and repair…

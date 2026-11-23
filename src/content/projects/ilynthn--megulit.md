---
repo: "ilynthn/MeguLit"
name: "MeguLit"
description: "Click any word in a Japanese visual novel to look it up — translation and furigana right beside the original, read straight from the game, with Anki and lessons (Windows) · Click any word in a Galgame to look it up: the translation and furigana appear right beside the original text, read directly from the game. You can also make Anki cards and study Japanese in lessons (Windows)."
originalDescription: "Click any word in a Japanese visual novel to look it up — translation and furigana right beside the original, read straight from the game, with Anki and lessons (Windows) · 在 Galgame 里点哪个词查哪个词，翻译和注音就在原文旁边，直接从游戏里读原文，还能做 Anki 卡片、上课学日语（Windows）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ilynthn/MeguLit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [71]
topics: ["anki", "galgame-tool", "japanese-learning", "tauri", "texthook", "visual-novel", "windows-11", "chinese", "chinese-simplified", "chinese-translation"]
stars: 72
forks: 4
openIssues: 114
closedIssues: 582
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-11-06T10:00:42Z"
lastCommitAt: "2026-11-23T10:24:47Z"
lastReleaseAt: "2026-11-09T13:22:16Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 38
maintainers: ["ilynthn", "Plastic-time"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ec99ab81e010efc36900c951d2b582a43c3f014b757c692af9344860c361ebe/ilynthn/MeguLit"
fundingLinks: ["GITHUB:https://github.com/ilynthn"]
---

> **Note**
>
> **The Seed**
>
> I used to want one generic core to adapt every game, but fixing one game would break another. I went back and forth many times and never got it working, which was very painful.
>
> So I changed the approach: MeguLit's core and each engine's text-rendering functions handle the overall framework, and each game and each version gets its own separate diff. This is The Seed.
>
> - A few KB of pure data with no code, and it won't contain paths or personal information from your computer.
> - Each game only touches its own file and doesn't interfere with others. Once a game's seed is finished, it stays finished, and future updates won't affect it.
> - It identifies the exe, archives, script fingerprints, and Steam / VNDB IDs, so patched versions, fan translations, and different distributions can each find their own seed.
> - During play it keeps self-checking. If lines are dropped, options are missing, or the original text isn't hidden, it falls back to read mode first and reports the problem. We then fix that game's diff and push a hot update to everyone.

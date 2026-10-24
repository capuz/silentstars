---
repo: "ekicyou/pasta"
name: "pasta"
description: "Memories of pasta twine together—now and then a knot, yet always a delight."
originalDescription: "Memories of pasta twine together—now and then a knot, yet always a delight."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/ekicyou/pasta"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [49, 23]
topics: ["ukagaka", "ukagaka-shiori", "pasta"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-16T00:30:22Z"
lastCommitAt: "2026-10-24T08:20:56Z"
lastReleaseAt: "2026-03-18T15:23:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 64
maintainers: ["ekicyou"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1117183410/bde37c90-b3c5-4517-a218-f10b1b1af2ab"
---

# pasta
Memories of pasta twine together—now and then a knot, yet always a delight.

**pasta** is a dialogue script engine for realizing desktop mascots such as "Ukagaka" and scenario-style games.
It transpiles dictionaries written in the Japanese-language Pasta DSL into Lua, and serves as the ghost's brain as SHIORI (`pasta.dll`).
Its features include full-width markers, random selection by prefix matching, declarative Call／Jump, and extension through Lua.

```pasta
＊OnBoot
　＠挨拶：ごきげんよう、お待ちしておりましたわ、まあまあ
　％ぱすた、ラザニア
　ラザニア：＠挨拶　！
　　　　　：べ、別にあなたを待っていたわけではありませんのよ？
　　ぱすた：素直じゃないなあ……
　　　　　：ようこそ！一緒に楽しもうね。
```

---

## 📖 For those who want to make a ghost

### 👉 **[pasta manual](https://ekicyou.github.io/pasta/)**

The guides Claudia and the butler Anthony will walk you through ghost making from start to finish. It is searchable in Japanese.

| Part | Content |
| ------ | ---- |
| [Getting started guide](https://ekicyou.github.io/pasta/getting-started/index.html) | From adding dictionaries one at a time to raising a ghost over 13 stages and distributing it |
| [Pasta DSL grammar](https://ekicyou.github.io/pasta/grammar/index.html) | Markers, scenes, action lines, variables, words, actor…

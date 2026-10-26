---
repo: "lizi605/rushi-wowen-translator"
name: "rushi-wowen-translator"
description: "Converts plain vernacular into Buddhist-scripture style, and also turns Buddhist-scripture style back into plain modern speech; users must supply their own DeepSeek API Key."
originalDescription: "将寻常白话转为佛经体，也把佛经体解回直接人话；使用者自备 DeepSeek API Key。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lizi605/rushi-wowen-translator"
homepage: "https://fojing-translator.1798859537.workers.dev"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [65, 24]
topics: ["byok", "chinese", "deepseek", "nextjs", "translator"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T21:21:01Z"
lastCommitAt: "2026-10-26T03:02:17Z"
lastReleaseAt: "2026-07-19T22:12:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/006086d1a0207bb2884ade4e82cab5f41d385f555e869f46ac4d1deedb63d39f/lizi605/rushi-wowen-translator"
---

# “Thus Have I Heard” Translator

**Sutra-style translation (译经) and interpretation (解经): turns plain vernacular into Buddhist-scripture style, and turns scripture style back into plain speech.**

Online: <https://fojing-translator.1798859537.workers.dev>

AI secondary-development handoff: [Building a Bible-style translator](https://github.com/lizi605/rushi-wowen-translator/blob/HEAD/AI_HANDOFF_BIBLE_TRANSLATOR.md)

“Thus Have I Heard” Translator is a Next.js web application. It supports two directions:

- Sutra-style translation (译经): rewrites ordinary Chinese into the “Buddhist scripture / Buddha-says” vernacular translation style that has been popular on the recent Chinese internet.
- Interpretation (解经): turns Buddhist-scripture style back into direct, clear, normal plain speech.

The project uses a BYOK (Bring Your Own Key) model: this site provides no shared model quota. Users configure their own DeepSeek API Key in the web page and can then translate or interpret.

## Features

| Capability | Detail |
| --- | --- |
| 双向翻译 | 译经生成佛经体，解经把佛经体翻回直接人话 |
| 译经模式 | 慈悲开示、机锋辩难、方便圆说、无常悲叹 |
| 解经模式 | 直白释义、耐心讲明、潜台词版、锐评拆穿 |
| 三档长度 | 一偈 / 一经 / 一论 与 略释 / 明释 / 详释 |
| BYOK | API Key…

---
repo: "wangjue520/sd-webui-zh-tag-autocomplete"
name: "sd-webui-zh-tag-autocomplete"
description: "SD WebUI Chinese tag autocomplete: type Chinese to autocomplete Danbooru tags, translate Chinese to English in one click, and preview in Chinese"
originalDescription: "SD WebUI 中文标签补全：输入中文补全 Danbooru 标签、一键中译英、中文预览"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wangjue520/sd-webui-zh-tag-autocomplete"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["autocomplete", "chinese", "danbooru", "sd-webui", "stable-diffusion"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T13:50:33Z"
lastCommitAt: "2026-11-14T10:45:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 17
maintainers: ["wangjue520"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b2525328e2a0f1e1717bb22366e4eeaf6df15176af28242dbf55ef943631fcb/wangjue520/sd-webui-zh-tag-autocomplete"
---

# sd-webui-zh-tag-autocomplete

SD WebUI Chinese tag autocomplete extension: **type Chinese directly** in the prompt box and matching Danbooru English tags pop up for you to choose; you can also **translate an entire Chinese prompt into tags** in one click.

- Includes **125,778** tags with at least 50 Danbooru images (data as of 2026-10)
- Each tag comes with a Chinese name and several Chinese synonyms, e.g. `black_pantyhose` ← black pantyhose / black silk / black stockings / black tights…
- Characters and works support translated titles, abbreviations, and community nicknames, e.g. `saber_(fate)` ← 'the King' / 'Ahoge King' / 'Knight King'
- General tags also include colloquial phrasings, e.g. `head_out_of_frame` ← 'head out of frame' / 'head outside the picture' / 'head not captured'…; fuzzy matching also applies when the phrasing is not exactly the same
- Chinese words not in the dictionary (including whole-sentence descriptions) can be translated into English with Google Translate or DeepSeek, which suits models like Anima that understand natural language
- Works with A1111-based WebUIs: Stable Diffusion WebUI, Forge, Forge Neo

The dictionary data and build scripts are at…

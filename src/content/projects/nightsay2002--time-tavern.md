---
repo: "NightSay2002/time_tavern"
name: "time_tavern"
description: "Beginner-friendly jailbreak AI tavern with a high API hit rate, supporting chat via QQ bot and Discord bot"
originalDescription: "小白可用的破甲ai酒館，api特攻命中率，支援使用QQ機器人和Discord bot聊天"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NightSay2002/time_tavern"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["ai", "chat", "llm"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-12T13:24:32Z"
lastCommitAt: "2026-11-17T14:35:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["NightSay2002"]
openGraphImageUrl: "https://opengraph.githubassets.com/71a31fba285a94a86e6bc9697f8964ccd051103b27df77bc78a27091ed44be1f/NightSay2002/time_tavern"
---

# Shifen Izakaya (時分居酒屋)

A local long-form character roleplay tool with a built-in jailbreak (DeepSeek + Gemini; I haven't tested others, so I don't know whether they work). It provides character cards, prompts, and chat archives, and supports Discord, QQ private chat, and NovelAI image generation.

## Features

- Character cards and assistants: multiple opening messages, world books, import and export. A character card's world book can be added to the global settings with one click; entries with the same name are skipped. World book entries are not triggered in a chain by injected content.
- Chat: streaming generation, image input, message editing, context compression, archives, and error messages. Replies that are errors or under 200 characters are not automatically regenerated.
- Word replacement: applied globally to the main text, the large model, and image understanding. Traditional and simplified character forms are detected automatically. Only the rules that matched in this request are attached and the reply is restored. When editing, duplicate words are marked, and rules can be included in the global settings and author presets.
- Story: local, Discord channel, and QQ…

---
repo: "Trusler258/huanmeng-qqbot"
name: "huanmeng-qqbot"
description: "LLM-powered QQ bot (unofficial, not affiliated with Tencent) | NapCat · DeepSeek · custom characters · three-layer memory · v1.0"
originalDescription: "LLM 驱动的 QQ 机器人（非腾讯官方） | NapCat · DeepSeek · 角色自定义 · 三层记忆 · v1.0"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Trusler258/huanmeng-qqbot"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [69, 29]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-07T13:42:22Z"
lastCommitAt: "2026-10-31T15:59:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Trusler258"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf0af30c7e67383b4bcefa474e248572d9d11701fda2e8e85fe22a923be5ed8/Trusler258/huanmeng-qqbot"
---

---

> [!IMPORTANT]
> There is a third-party public bot with the same name "Huanmeng" on the QQ platform. It is unrelated to this project; "Huanmeng" is just the default character name.
> This project is based on the [NapCat](https://github.com/NapNeko/NapCatQQ) protocol adapter and is unrelated to official interfaces or bot platforms.
>
> This is a community open-source edition; some private modules are not included.

---

## Overview

Context is not just the most recent N messages.

Conversation history is split into blocks of 200 messages. Once sealed, a block is no longer modified. After 20 blocks accumulate, they are handed to a cheaper model and compressed into a summary, and summaries are only appended. History is append-only throughout, so the prefix is never broken up.

The other focus is extensibility: plugins are hot-pluggable, and commands and tools are mounted through a capability registry. KOOK plugins can run directly.

**Memory**

- 200 messages per block; frozen once sealed
- Automatically compressed when 20 blocks are full
- Long-term memory, notebook, and user profile each handle their own area
- Sessions can authorize sharing with each other

**Extensions**

-…

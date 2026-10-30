---
repo: "accomplish07zrh-eng/dsh-aurabot-qq"
name: "dsh-aurabot-qq"
description: "DeepSeek Harness plugin: lets the AI live in QQ as 大肥鱼 (SnowLuma / OneBot v11). Emoji, voice, memory, Qzone, Bilibili, cover songs, and image generation are all modular. Each can be turned off, swapped out, or replaced with a local custom module. Even group chat strategy, prompts, reply handling, and models can be changed, and changes take effect on save."
originalDescription: "DeepSeek Harness 插件：让 AI 以「大肥鱼」住进 QQ（SnowLuma / OneBot v11）。表情、语音、记忆、空间、B 站、翻唱、生图全部模块化——可关、可换、可本地自写扩展，连群聊策略、提示词、回复和模型都能改，保存即生效。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/accomplish07zrh-eng/dsh-aurabot-qq"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["dsh-plugin", "chatbot", "deepseek", "onebot", "plugin-system", "qq"]
stars: 170
forks: 21
openIssues: 1
closedIssues: 30
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-10-24T06:43:38Z"
lastCommitAt: "2026-10-30T10:22:33Z"
lastReleaseAt: "2026-10-26T19:02:23Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 34
maintainers: ["accomplish07zrh-eng", "baihengaead", "RookieApe-tao"]
openGraphImageUrl: "https://opengraph.githubassets.com/76a677e19fe4776088157e10dac0813d70de66a8efc37a928475a69b3005fe83/accomplish07zrh-eng/dsh-aurabot-qq"
---

# Aurabot · 大肥鱼, living in QQ

DeepSeek Harness (DSH) plugin. The AI in DSH lives in QQ under its own QQ account, 大肥鱼. It has a personality, moods, and memory. It can look at images, send and receive voice messages, listen to voice messages, send and receive sticker packs, sing covers in its own voice, write Qzone diary entries, browse Qzone and leave comments, browse Bilibili and post comments, browse 小黑盒 posts and make posts, and it will also start chatting with you on its own.

```
QQ ⇄ SnowLuma (OneBot v11, install it yourself) ⇄ Aurabot plugin ⇄ DSH session (Aurabot's bundled preset + personality)
```

- **Entry point**: the 'Aurabot' item under 'Automated Tasks' in the DSH left sidebar. The full-page panel uses tabs for each feature: Overview, Connection, Personality, Permissions, Chat, Model, Voice, Stickers, Image Generation, Qzone Diary, Proactive Chat, Mood & Memory, Cover Songs, Bilibili, Douyin, 小黑盒, Local API, Extensions, and Logs.
- **Open design**: every ability is a module. Each one can be turned off, replaced, or copied and then edited. Custom modules go in the data directory `modules/`. They are not overwritten on upgrade and take effect on save. Modules can…

---
repo: "ChisaAlter/ChisaBot"
name: "ChisaBot"
description: "ChisaBot: a self-hosted Chinese BOT platform supporting configurable models and Magpie integration"
originalDescription: "ChisaBot：中文自托管 BOT 平台，支持可配置模型与 Magpie 集成"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ChisaAlter/ChisaBot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 18
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-10-10T06:50:27Z"
lastCommitAt: "2026-11-04T02:57:56Z"
lastReleaseAt: "2026-10-15T15:29:14Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["ChisaAlter"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfc7d379848724a105ac6b6a4ec0132973a4aafc6f0e6a7bda05fe0479662d82/ChisaAlter/ChisaBot"
---

ChisaBot is developed based on the open-source code of [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot). It retains AG-UI, multi-BOT, tool permissions, and audit capabilities, and adds a Chinese interface, standalone web login, local session persistence, and a Magpie model catalog with BOT model selection. This branch can store sessions in your own PostgreSQL by setting `CHISABOT_RUNTIME_MODE=local`, without needing a CopilotKit Intelligence project. Models are connected by the administrator and can be self-hosted models, compatible APIs, or a self-deployed [Magpie](https://github.com/yetone/magpie) gateway. When using third-party models, inference is still handled by the selected model service.

## Screenshots

> The following screenshots come from a brand-new demo instance (demo account, demo bot, no real conversations).

### Web (Server)

Light theme: the bot list is on the left, the conversation is in the center, and the panel the bot builds is in the right column.

### PC Client (Windows)

The ChisaBot PC client is a borderless window. After opening it, it goes directly to the ChisaBot on your server, and the window buttons are in the top right. On first run, enter…

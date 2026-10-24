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
languagePcts: [87]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-10T06:50:27Z"
lastCommitAt: "2026-10-24T08:07:59Z"
lastReleaseAt: "2026-10-15T15:29:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["ChisaAlter"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc45158f915ba0ce14666a3db08204a991d935403a2825b63747442cc12e079a/ChisaAlter/ChisaBot"
---

ChisaBot is developed from the open-source code of [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot). It keeps AG-UI, multi-BOT, tool permissions, and audit capabilities, and adds a Chinese interface, standalone web login, local session persistence, the Magpie model catalog, and per-BOT model selection. This branch can store sessions in your own PostgreSQL by setting `OPENBOT_RUNTIME_MODE=local`, without a CopilotKit Intelligence project. Models are connected by administrators and can be self-hosted models, compatible APIs, or a self-deployed [Magpie](https://github.com/yetone/magpie) gateway. When you use third-party models, inference is still handled by the selected model service.

## Screenshots

> The following screenshots come from a fresh demo instance (demo account, demo bot, no real conversations).

### Web (server)

Light theme: the bot list is on the left, the conversation is in the middle, and the panel the bot created is in the right column.

### PC client (Windows)

ChisaBot PC is a borderless window. After opening, it goes directly to the ChisaBot on your server, and the window buttons are in the top right. On first run, enter the server address on the…

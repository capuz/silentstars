---
repo: "ChisaAlter/ChisaBot"
name: "ChisaBot"
description: "ChisaBot: Chinese self-hosted BOT platform, supports configurable models and Magpie integration"
originalDescription: "ChisaBot：中文自托管 BOT 平台，支持可配置模型与 Magpie 集成"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ChisaAlter/ChisaBot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T06:50:27Z"
lastCommitAt: "2026-10-18T08:17:12Z"
lastReleaseAt: "2026-10-15T15:29:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["ChisaAlter"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f3d7fc52f5e94684a37a23a7c71bf1a388c4edd358eaeefc509923acbb33263/ChisaAlter/ChisaBot"
---

ChisaBot is developed based on the open-source code of [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot). It retains AG-UI, multi-BOT, tool permissions, and audit capabilities, and adds a Chinese interface, standalone web login, local session persistence, and the Magpie model catalog and BOT model selection. This branch can save sessions in your own PostgreSQL via `OPENBOT_RUNTIME_MODE=local`, without a CopilotKit Intelligence project. Models are connected by administrators and can be self-hosted models, compatible APIs, or a self-deployed [Magpie](https://github.com/yetone/magpie) gateway. When using third-party models, inference is still handled by the selected model service.

## Screenshots

> The following screenshots come from a brand-new demo instance (demo account, demo bot, no real conversations).

### Web (server)

Light theme: the bot list is on the left, the conversation is in the middle, and the right column is the panel the bot created.

### PC client (Windows)

The ChisaBot PC is a borderless window. After opening, it goes directly to the ChisaBot on your server, with window buttons in the top right. On first run, fill in the server address on the local…

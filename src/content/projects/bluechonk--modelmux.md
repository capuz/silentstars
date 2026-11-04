---
repo: "bluechonk/modelmux"
name: "modelmux"
description: "One endpoint takes over the quotas of 10 AI clients: WorkBuddy, Qoder, Loomy, LobsterAI, Raccoon, TRAE, CatPaw, AStudio… are consolidated into an OpenAI-compatible gateway. A dynamic model pool (<channel>/<model>) routes automatically by billing usage, and failing channels enter cooldown. Multi-account pools, auto check-in, and quota refresh every 3 minutes are all built in. TypeScript with zero runtime dependencies; `npx modelmux` works out of the box."
originalDescription: "一个端点，接管 10 家 AI 客户端的额度：WorkBuddy、Qoder、Loomy、LobsterAI、Raccoon、TRAE、CatPaw、AStudio……汇成 OpenAI 兼容网关，动态模型池（<渠道>/<模型>）按账单用量自动分流、失败进冷却。多账号池、自动签到、每 3 分钟额度刷新全内置。TypeScript 零运行依赖，npx modelmux 即用。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bluechonk/modelmux"
homepage: "https://bluechonk.github.io/modelmux/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["api-proxy", "cli", "deepseek", "glm", "llm-gateway", "multi-channel", "openai-compatible", "typescript", "ai-gateway", "llm-proxy"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T10:51:25Z"
lastCommitAt: "2026-11-04T11:27:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["bluechonk"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cdd471d7303d9acdfde1cde38b49398f84e84e1b19b9d67a212ae23d675b402/bluechonk/modelmux"
---

# modelmux

**One endpoint that takes over the quotas of multiple AI clients.** It consolidates channels such as AStudio, WorkBuddy, Qoder, Loomy, LobsterAI, Raccoon, TRAE, and CatPaw into **one OpenAI-compatible endpoint**, exposing the real models from each channel's catalog as `<channel>/<model>` pool IDs (the requester chooses the channel). It focuses on one thing: `npx modelmux` starts the gateway, and any OpenAI-compatible client pointed at it can use it. Login, multi-account pools, auto check-in, and quota refresh all run automatically inside the gateway.

## What it is

- **One gateway**: listens on `127.0.0.1:4412` and serves `/v1/chat/completions`, `/v1/models`, and `/health`.
- **Dynamic model pool**: externally, model IDs take the form `<cid>/<model>` (e.g. `loomy/kimi-k2.6`), and `/v1/models` aggregates the normalized results of every channel's `catalog` in real time. Clients select a channel explicitly with the channel prefix; same-named models in different channels are separate IDs.
- **Multi-channel routing**: each channel is a pool (model catalog + credentials + upstream protocol), registered under `packages/core/channels/`. The number of channels is determined by…

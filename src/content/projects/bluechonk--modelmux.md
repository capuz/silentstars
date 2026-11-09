---
repo: "bluechonk/modelmux"
name: "modelmux"
description: "一个 OpenAI 兼容端点，只做 DeepSeek：把多家渠道的 DeepSeek 额度汇成 deepseek-v4.1-flash / deepseek-v4-flash / deepseek-v4-pro 三个模型名；按账号池剩余额度自动挑渠道、失败顺延，账号额度耗尽自动换号。多账号池、自动签到、额度刷新全内置。TypeScript 零运行依赖，npx modelmux 即用。"
readmeQualityOk: true
url: "https://github.com/bluechonk/modelmux"
homepage: "https://bluechonk.github.io/modelmux/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["api-proxy", "cli", "deepseek", "llm-gateway", "multi-channel", "openai-compatible", "typescript", "ai-gateway", "llm-proxy", "local-first"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T10:51:25Z"
lastCommitAt: "2026-11-09T04:34:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["bluechonk"]
openGraphImageUrl: "https://opengraph.githubassets.com/6002dbf440a7d794d295e71fd27c3f6acf2f5ec6459f2b21f0a36da178a0b1d0/bluechonk/modelmux"
---

# modelmux

**一个端点，只做几个对外模型。** 把 WorkBuddy、Loomy、Raccoon、
TRAE、CatPaw、Qoder 国内版、AutoClaw、ZCode 等渠道的额度汇成**一个 OpenAI 兼容端点**，
对外只有家族表里的几个模型名（当前清单看 `GET /v1/models`）。
专注做一件事：`npx modelmux` 起网关，任何 OpenAI 兼容客户端指过来就能用 ——
登录、多账号池、自动签到、额度刷新全在网关里自动跑完。

## 这是什么

- **一个网关**：监听 `127.0.0.1:4412`，OpenAI 兼容 `/v1/chat/completions`，
  另有 Anthropic Messages（`/v1/messages`，Claude Code 直连）、OpenAI Responses
  （`/v1/responses`，Codex 直连）、`/v1/models` 与 `/health`。
- **统一模型池**：对外只有家族表里的**裸模型名**，`/v1/models` 只列
  「至少一个渠道能供给」的那几个；`deepseek-flash` 是 `deepseek-v4.1-flash` 的别名。
- **多渠道路由**：每个渠道是一个池子（模型目录 + 凭据 + 上游协议），注册在 `packages/core/channels/` 下；
  渠道数由**注册表**决定（`mx model list` 看全量），文档不写死数字。
- **渠道对客户端透明，网关按额度自动挑**：同一模型的候选渠道按**账号池剩余额度之和降序**，
  先出额度最多的那家；渠道内账号额度耗尽自动换号，整家烧光则**顺延下一家**，直到全部试完。
  额度耗尽的账号进「冷却」（到期自动恢复），连败账号熔断后自动半开试探（失败指数退避）。
- **运维全自动**：签名式登录（扫码 / 设备码 / 短信，按渠道）、**多账号池**（切换 / 移除 / 逐账号额度）、
  **自动签到**（每个渠道各自的每日奖励）、**每 3 分钟并行刷新全渠道额度**、目录每日保鲜。
- **零第三方运行依赖**：TypeScript 实现，共享层 `dependencies` 为空；Web 看板由 `mx web` 托管。

## 目录

```
packages/
├── cli/                      CLI 入口（bin modelmux / mx，注册全部渠道后交给共享 CLI）
├── ui/                       Web 管理看板（React 19 SPA，`mx web` 托管）
└── core/…

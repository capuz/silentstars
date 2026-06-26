---
repo: "beibei030/grid-fleet"
name: "grid-fleet"
description: "Multi-venue neutral perpetual grid fleet (Extended, RISEx, Decibel) + overview dashboard. Production-aligned strategy & fleet maintenance."
url: "https://github.com/beibei030/grid-fleet"
homepage: "https://github.com/beibei030/grid-fleet#readme"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [47, 43]
topics: ["aptos", "cryptocurrency", "decibel", "extended-exchange", "grid-trading", "market-making", "nodejs", "perpetual-futures", "trading-bot", "typescript"]
stars: 34
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-22T09:10:15Z"
lastCommitAt: "2026-06-26T06:48:42Z"
lastReleaseAt: "2026-06-26T06:34:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["beibei030"]
openGraphImageUrl: "https://opengraph.githubassets.com/f488c36ebabd9189a90fcfba0932ac7e8272c60ca262383ce0ff3341cf34a828/beibei030/grid-fleet"
---

# Multi-Venue Neutral Grid Fleet

三所永续中性网格 + 总看板的**开箱即用**参考实现。策略参数、舰队维护、库存控制、看板聚合均与作者生产环境对齐；填好 API 凭证即可运行。

| 应用 | 交易所 | 栈 |
|------|--------|-----|
| `apps/extended-grid` | [Extended](https://app.extended.exchange/join/AIQIANG888) | Node ESM，零依赖 HTTP + SSE 看板 |
| `apps/risex-grid` | [RISEx](https://developer.rise.trade/) | Node ESM + 链上适配 |
| `apps/decibel-grid` | [Decibel](https://app.decibel.trade/r/K7B2QM) | TypeScript + Aptos / Decibel SDK |
| `apps/overview` | 聚合上列三所 | TypeScript 只读总看板 |

**环境要求**： [Node.js](https://nodejs.org/) **≥ 20**（Decibel / Overview 使用 `tsx`）

> **免责声明**：本仓库为策略与控制面参考代码，不构成投资建议。实盘需自行承担风险，妥善保管 API 密钥与私钥。详见 [SECURITY.md](SECURITY.md)。

## 文档

| 文档 | 内容 |
|------|------|
| **[docs/OPEN_SOURCE.md](docs/OPEN_SOURCE.md)** | **开源总览（表格）**：是什么/不是什么、参数对照、能力清单 |
| **[docs/SETUP.md](docs/SETUP.md)** | **API 密钥怎么填**（含 Decibel 逐步说明）、启动顺序 |
| [docs/STRATEGY.md](docs/STRATEGY.md) | 中性网格策略参数与维护逻辑 |
| [docs/PITFALLS.md](docs/PITFALLS.md) | 实盘踩坑与运维禁忌 |
| [docs/API.md](docs/API.md) | HTTP API（snapshot / fleet 控制） |
| [CHANGELOG.md](CHANGELOG.md) | 版本记录 |
| [CONTRIBUTING.md](CONTRIBUTING.md) | 贡献指南 |
| [SECURITY.md](SECURITY.md) | 安全与密钥规范 |

## 策略概要

-…

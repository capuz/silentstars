---
repo: "DeliciousBuding/metapi-go"
name: "metapi-go"
description: "MetAPI Go rewrite — meta-layer management and unified proxy for AI API aggregation platforms"
readmeQualityOk: true
url: "https://github.com/DeliciousBuding/metapi-go"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [74, 24]
topics: ["ai-aggregation", "api-gateway", "go", "llm", "metapi", "new-api", "one-api", "openai", "react", "self-hosted"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 305
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-04T04:19:56Z"
lastCommitAt: "2026-08-18T04:09:20Z"
lastReleaseAt: "2026-08-17T14:45:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["DeliciousBuding"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4fd2e970a039388b42d80d02c876fc4b734668cb537ca1a98cf6bc7a5e33d21/DeliciousBuding/metapi-go"
---

</p>

<h1 align="center">Metapi Go</h1>

  <strong>中转站的中转站 — 将分散的 AI API 站点聚合为一个统一网关</strong>
</p>

  Metapi 的 Go 语言重写 · 单二进制部署 · 与原 TypeScript 版功能对等
</p>

</p>

</p>

</p>

---

## 介绍

把你在各处注册的 New API / One API / OneHub / DoneHub / Veloera / AnyRouter / Sub2API 等站点，汇聚成**一个 API Key、一个入口**，自动发现模型、智能路由、成本最优。

Metapi 作为中转站之上的**元聚合层**，把多个站点统一到一个入口，下游所有工具（Cursor、Claude Code、Codex、Open WebUI 等）即可无感接入全部模型。当前支持的上游范围不止传统聚合面板，还包括：

- 聚合面板：New API、One API、OneHub、DoneHub、Veloera、AnyRouter、Sub2API
- 通用兼容接口：OpenAI、Claude、Gemini 兼容端点，以及 `cliproxyapi`
- OAuth 连接：Codex、Claude、Gemini CLI、Antigravity

| 痛点                               | Metapi 怎么解决                                          |
| ---------------------------------- | -------------------------------------------------------- |
| 每个站点一个 Key，下游工具配置一堆 | **统一代理入口**，模型自动聚合到 `/v1/*`                 |
| 不知道哪个站点用某个模型最便宜     | **智能路由**自动按成本、余额、使用率选最优通道           |
| 某个站点挂了，手动切换好麻烦       | **自动故障转移**，一个通道失败自动冷却并切到下一个       |
| 余额分散在各处，不知道还剩多少     | **集中看板**一目了然，余额不足自动告警                   |
| 每天得去各站签到领额度             | **自动签到**定时执行，奖励自动追踪                       |
| 不知道哪个站有什么模型             | **自动模型发现**，上游新增模型零配置出现在你的模型列表里 |

### Go 版有什么不同

和原…

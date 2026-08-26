---
repo: "eric8810/rutis"
name: "rutis"
description: "Cordis core paradigm in idiomatic Rust: five-pillar kernel + minimal agent framework on the aimux LanguageModel seam"
readmeQualityOk: true
url: "https://github.com/eric8810/rutis"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-18T13:11:32Z"
lastCommitAt: "2026-08-26T04:18:31Z"
lastReleaseAt: "2026-08-19T07:28:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["eric8810"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc7012f700d215187843f6b059ea478ddb360ccfab3d33441c62f3027f3dbaf7/eric8810/rutis"
---

# rutis

Cordis 核心范式的 Rust 惯用实现(自 [min-cordis](https://github.com/eric8810/min-cordis) 的 Rust 工作区独立成库)。

## 五支柱

1. **插件 = 装配单元**:一次 `apply`,提供服务 / 监听 / 清理
2. **fiber = 生命周期容器**:六态状态机 + 依赖门控 + 级联卸载 + 恰好一次清理
3. **服务 = 类型键注册表 + isolate 作用域**
4. **事件总线 = 四分发语义**(emit / parallel / serial / waterfall)
5. **依赖驱动重载**:provider 卸载 → 消费者驱逐并自动重载

## Crates

| crate | 内容 |
|---|---|
| [`rutis`](https://github.com/eric8810/rutis/blob/HEAD/crates/rutis) | 内核:Ctx / fiber / registry / event bus / effect(115 项契约与对拍测试) |
| [`rutis-cordis`](https://github.com/eric8810/rutis/blob/HEAD/crates/rutis-cordis) | 业务无关兼容层:协议机制(`Wire` 传输接缝 / 在飞表 / 取消 / 超时 / 孤儿计数)+ cordis 词汇(hello 能力集 / evt mode / wf kind / 装载仲裁)+ 注册表驱动的通用服务分发(`svc/call` + 流式 `svc/part`),零 dsh 知识(决策 [docs/decision-aimux-llm-plugin-2026-08-23.md](https://github.com/eric8810/rutis/blob/HEAD/docs/decision-aimux-llm-plugin-2026-08-23.md) v2) |
| [`aimux-llm`](https://github.com/eric8810/rutis/blob/HEAD/crates/aimux-llm) | 独立 llm 服务插件:rutis 插件形态(apply → 注册 `llm` 服务),aimux 原生 DTO/StreamPart 即中性协议 schema;工厂/keyed 缓存/listModels 缓存/回落全在此,零桥零 dsh 知识 |
| [`rutis-dsh`](https://github.com/eric8810/rutis/blob/HEAD/crates/rutis-dsh) | 入口与组合根:起 rutis 运行时、装载…

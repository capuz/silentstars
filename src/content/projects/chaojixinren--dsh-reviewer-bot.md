---
repo: "chaojixinren/dsh-reviewer-bot"
name: "dsh-reviewer-bot"
description: "原生 DeepSeek Harness 插件形态的代码评审机器人：跨代码平台、规则可插拔、可本地重放。"
readmeQualityOk: true
url: "https://github.com/chaojixinren/dsh-reviewer-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["dsh", "dsh-plugin"]
stars: 6
forks: 1
openIssues: 4
closedIssues: 22
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T09:52:35Z"
lastCommitAt: "2026-08-16T04:08:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 52
maintainers: ["chaojixinren"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8ba6422081ffe2097c5be6d1edc6b1314c3bc25bdea2f5f8dd6c27b4e23cdb6/chaojixinren/dsh-reviewer-bot"
---

# DSH Reviewer Bot

原生 [DeepSeek Harness](https://dshfind.com/zh/plugins/deepseek-ai/deepseek-harness) 插件形态的代码评审机器人。跨代码平台，规则可插拔，可本地重放。

</p>

> **当前状态：M3（写模式）已完成。** M1 只读评审闭环、M2 规则与本地化已全部落地（领域类型 `review-core`、forge 接口 + 注册表 + 锚定器、`trust-policy` 四级判定、`forge-github` provider、`tool-review` 只读工具、`review-runtime` 八阶段管线、`progress` sticky 上报、`driver-action`、`rule-registry`、`rules-baseline`、`forge-local`、`driver-cli`），配 439 例单测（14 个测试文件）全绿；`signature-probe` 在真实容器里验证扩展点签名。M3 已全部交付：`mutate` 阶段 + sandbox 写隔离、`ctx.tools.guard()` 写路径单调硬红线、`propose_patch`、校验命令闸门与 commit 决策、`diagnose` 意图。M4 生态（GitLab provider、webhook、bundle 发布、分片并行、跨 PR 记忆等）尚未开始。

## 为什么不是又一个 CI Action

现有方案把 DSH 当成一个黑盒 Docker worker 来调用——拿不到插件生态、每次事件冷启动、规则写死在 prompt 里、调 prompt 只能推 PR 等 CI。

我们直接长在 Cordis 扩展点上：

| | 现有方案 | DSH Reviewer Bot |
|---|---|---|
| 与 DSH 的关系 | 外部进程调用 | 原生插件，共享 `ctx` |
| 平台支持 | 仅 GitHub | GitHub / GitLab / Gitea / 本地 |
| 评审规则 | prompt 内写死 | 规则包可独立发布安装 |
| 本地迭代 | 推 PR 等 CI | `dshrb review --local` / `dshrb replay` |
| 运行形态 | 一次性 Action | Action / Daemon / DSH profile / CLI |
| Docker | 写模式硬依赖 | 可选隔离后端 |

信任模型完整继承现有方案的四层设计（这部分它做得扎实），并显式化为可测试的能力矩阵，无任何放松。

## 设计文档

完整设计在…

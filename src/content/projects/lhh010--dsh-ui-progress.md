---
repo: "lhh010/dsh-ui-progress"
name: "dsh-ui-progress"
description: "DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动"
readmeQualityOk: true
url: "https://github.com/lhh010/dsh-ui-progress"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [58, 36]
topics: ["dsh", "dsh-plugin"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T13:10:11Z"
lastCommitAt: "2026-08-28T12:22:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 36
maintainers: ["lhh010"]
openGraphImageUrl: "https://opengraph.githubassets.com/d72a3ef381d285c67968c52d7816ab55d009c30b2bd47706d18a6bc386e8aa6c/lhh010/dsh-ui-progress"
---

# @dsh-external/dsh-ui-progress

DSH Web UI 会话进度插件：为 DeepSeek Harness 的 Web GUI 的输入框停靠区提供常驻会话进度条，**零核心改动**（纯 client 插件，不触碰 agent-loop）。

## 版本对应 / Version compatibility

构建产物随 DSH 快照版本更新，安装时按快照选择对应版本：

| 插件版本 | DSH 快照 | 说明 |
| --- | --- | --- |
| `v0.1.0` | `snapshots/20260805T134133Z`（snapshot0805） | 旧构建，按旧安装方式（`~/.dsh/config.yaml` + `pnpm add -w link:`） |
| `v0.2.0` | `snapshots/20260806T160212Z`（snapshot0806） | 同快照早期构建（无耗时/ETA/失败态/阶段时间线） |
| `v0.3.0` | `snapshots/20260806T160212Z`（snapshot0806） | 同快照上一构建（卡片耗时/ETA 文案插值缺失） |
| `v0.3.1` | `snapshots/20260806T160212Z`（snapshot0806） | 同快照上一构建（ETA 为线性外推） |
| `v0.4.0` | `snapshots/20260806T160212Z`（snapshot0806） | 同快照上一构建（ETA 仅来自模型上报） |
| `v0.5.0` | `snapshots/20260807T130646Z`（snapshot0807） | 同快照上一构建：自带工具 + 上报引导 |
| `v0.5.1` | `snapshots/20260807T130646Z`（snapshot0807） | 同快照上一构建：会话完成进度条浅绿色 |
| `v0.6.0` | `snapshots/20260807T130646Z`（snapshot0807） | 新构建：已耗时 0.1s 步进（满分钟折叠）+ subagent 待办琥珀提示 |
| `v0.7.0` | `snapshots/20260808T121140Z`（snapshot0808） | 新构建：适配 0808 的 slot 迁移（`conversation.chat.toolview` → `tool.call.toolview`，注册经 `slots.inject` 等待声明） |
| `v0.8.0` | `snapshots/20260808T121140Z`（snapshot0808） | 新构建：移除自带 `report_progress`…

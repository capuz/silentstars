---
repo: "aullik5/krow-sdk-docs"
name: "krow-sdk-docs"
description: "Public documentation for krow-agent-sdk PyPI package — quickstart, plugin protocols, EULA, runtime install guide. Source-of-truth: aullik5/krow (private) syncs here via CI."
readmeQualityOk: true
url: "https://github.com/aullik5/krow-sdk-docs"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [60, 27]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-15T19:22:22Z"
lastCommitAt: "2026-10-28T09:57:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["github-actions[bot]", "aullik5"]
openGraphImageUrl: "https://opengraph.githubassets.com/5432c2c03a579d0ef7358e7f824352333153e353a01ccb171acfb32bb6d6f3db/aullik5/krow-sdk-docs"
---

# Krow Agent SDK — 公开文档

> [`krow-agent-sdk`](https://pypi.org/project/krow-agent-sdk/) 是 [Krow Cloud](https://krow.cn) 提供的 Python SDK，
> 面向外部团队（科研 / 工业 / 业务）让你**用 Krow API key 写 plugin** 接入 Krow Agent 的执行引擎、ACT 工具体系、SDK Plugin Protocol、Visual QA 等能力。

---

## 现状摘要（2026-10-23）

| 能力 | 状态 |
|---|---|
| `pip install krow-agent-sdk` | ✅ [PyPI 0.9.5.27 已发布](https://pypi.org/project/krow-agent-sdk/) |
| 写 plugin + 用 `LLMReplayStore` record/replay 跑单元测试 | ✅ 完整可用 |
| `agent.run()` 端到端真实跑 agent | 🚧 需先装私有 runtime：`pip install krow-sdk-install && krow-sdk-install --api-key $KROW_API_KEY`（详 [`runtime-install.md`](https://github.com/aullik5/krow-sdk-docs/blob/HEAD/docs/runtime-install.md)）。**与 SDK 0.9.5.27 同版的 runtime 尚未发布到 TOS**，见表下「runtime 版本对齐提示」 |
| **运行模式** | ✅ 0.9.5 起默认 **klik**（一条对话、一个决策者；模型用 shell + `krow <子命令>` 组合能力）。turbo 仅作回退模式、平台计划退役（治理决定，非代码现状），本仓文档不再提供 turbo 用法（详 [`quickstart.md`](https://github.com/aullik5/krow-sdk-docs/blob/HEAD/docs/quickstart.md) §0.1） |
| Krowwork 市场插件包（`plugin.json`）开发规范 | ✅ 已公开（详 [`plugin-marketplace-guide.md`](https://github.com/aullik5/krow-sdk-docs/blob/HEAD/docs/plugin-marketplace-guide.md)）；**生产提交 / 审核 / 分发安装三段：规划 / 实验·以平台公告为准** |
| EULA 法律生效 | 🚧…

---
repo: "qianzhu18/workisland"
name: "workisland"
description: "WorkIsland — macOS 本地优先的 AI Agent 状态中枢：查看任务、处理审批并一键跳回上下文。"
readmeQualityOk: true
url: "https://github.com/qianzhu18/workisland"
homepage: "https://workisland.yanglaishe.cn/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
topics: ["ai-agents", "claude-code", "developer-tools", "dynamic-island", "electron", "macos", "openai-codex"]
stars: 8
forks: 3
openIssues: 3
closedIssues: 28
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-08-11T14:10:33Z"
lastCommitAt: "2026-09-05T07:48:17Z"
lastReleaseAt: "2026-09-02T15:53:37Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 65
maintainers: ["qianzhu18", "swording-k", "liyangbing"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b52e99c220cedceca7e6ee98ec22c27b324b3d6414ae57ff0af078cf38dda54/qianzhu18/workisland"
---

</p>

</p>

<h1 align="center">WorkIsland</h1>

  一款本地优先的 macOS 任务监控器，面向 Claude Code、Codex、Cursor 等编程 Agent。一眼看清哪些任务需要你处理，就地审批或回复，再一步回到对应的源会话。
</p>

</p>

</p>

## 为什么需要 WorkIsland

当多个 AI 编程任务在后台运行时，真正耗成本的不是启动它们，而是及时发现那个需要你拍板的任务，再找回对应的终端或 IDE 会话。

WorkIsland 把这一闭环收拢到同一个本地 macOS 界面里：它盯着任务状态，只在需要你介入时才提醒，并在你准备继续时一键带回最初的对话。

## 安装

**普通用户：** 从 [GitHub Releases](https://github.com/qianzhu18/workisland/releases) 下载 Apple Silicon DMG，无需任何云端账号。

> **版本叙事**：0.2.x 为内测期，1.x 为公开稳定线。WorkIsland 于 2026-08 基于两代原型经验重写。
>
> **关于 Windows**：Windows 支持暂停维护（代码、CI 与构建脚本完整保留）。当前没有达到我们质量标准的 Windows 版本，因此不提供公开下载。如果你日常使用 Windows 并愿意主导适配，欢迎[开 issue](https://github.com/qianzhu18/workisland/issues/new/choose) 联系我们。

**贡献者：** WorkIsland 需要一台 Apple Silicon Mac（参与 Windows 适配的贡献者可用 Windows 11 x64 设备），以及 Node.js 22 及以上版本。

```bash
git clone https://github.com/qianzhu18/workisland.git
cd workisland
npm run setup
npm run dev:isolated
```

只有当你确实想让应用连接你本地的真实 Agent Hook 配置时，才使用 `npm run dev`。隔离模式会把开发数据保留在仓库内部。

Windows 适配贡献者可使用 `npm run package:win` 构建安装版与便携版 EXE（当前不作为公开产物发布）。

## 你能做什么

- **看清关键状态**——运行中、待审批、待回答、已完成、已失败的任务，始终显示在 macOS 刘海附近。
- **就地处理审批与提问**——Agent 需要决策时直接回复，不必挨个终端轮询。
- **回到正确的源会话**——一键跳回对应的…

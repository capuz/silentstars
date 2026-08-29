---
repo: "ling-kong-ran/pisper"
name: "pisper"
description: "Multi-agent app for parallel sessions, tools, memory, workflows, desktop, terminal, and mobile."
readmeQualityOk: true
url: "https://github.com/ling-kong-ran/pisper"
homepage: "https://ling-kong-ran.github.io/pisper/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [45, 34]
topics: ["ai-agents", "developer-tools", "rust", "tauri", "terminal", "typescript", "mobile-app"]
stars: 191
forks: 8
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-19T16:07:07Z"
lastCommitAt: "2026-08-29T10:20:28Z"
lastReleaseAt: "2026-07-24T16:18:22Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 35
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3299daafaa2219e1f4072f9eb9264ec1106f50765cb580a867ba73722e54a9fa/ling-kong-ran/pisper"
---

</p>

  跨桌面、终端与手机的多 Agent 应用：像管理代码分支一样管理 Agent 的思路，从任意已完成 Turn 长出分支，并行推进。
</p>

</p>

  </a>
</p>

</p>

</p>

## ✨ 为什么是 Pisper

- **对话也能开分支。** 在任意已完成 Turn 衍生新会话，继承上下文，源会话一字不改；稳定 Turn 标签把关键节点钉成可检索的锚点 —— 像 Git，但给 Agent 用。
- **多 Agent 真并行。** 每个会话独享模型、上下文、工作目录与权限；拖动标签四面分屏，进度同屏可见。
- **工具冷热分明。** 核心工具常驻上下文；插件、MCP 与技能经 discover/call 网关按需激活、用完即退 —— 能力再丰富，也不把上下文塞成杂物间。
- **前缀稳，缓存才热。** 工具定义稳定化排序、提示词形态哈希诊断，尽量吃满 Provider 的 prompt cache —— 长会话更快、更省。
- **缺什么能力，直接说。** Pisper 会自己编写、校验并安装本地插件，下一轮对话就能调用。
- **手机能独立，也能接桌面。** Android / iOS App 内置与桌面同源的 Node/Pisper Runtime、标准会话和 React 界面，并按设备实际能力关闭不可用入口；也可扫码连接桌面，优先 LAN、离开局域网后自动回退 Iroh P2P。远程链路继续使用 TLS 指纹与设备 Bearer 令牌。
- **数据默认不出机。** Runtime 默认只听 127.0.0.1，敏感格式自动脱敏，记忆先审后用 —— 你的上下文，你说了算。

## 🗺️ 能力地图

| 🌿 并行与分叉 | 🧩 能力扩展 |
| --- | --- |
| 并行会话分屏 · 追忆分支树 · 稳定 Turn 标签 · Ctrl+K 跨会话直达 · 会话级模型/目录/权限 | 本地插件自动生成 · MCP 服务 · 技能中心 · 多 Provider 模型配置 |
| **⚡ 自动化与通知** | **🖥️ 终端与桌面一体** |
| 可视化工作流 · 定时任务 · 飞书 / 个人微信双向渠道 · 星忆项目记忆 · Git 与 SVN 工作区 | Ratatui TUI 与桌面共用 Runtime · Android / iOS 同源本机 Runtime 或桌面连接 · 桌面宠物（Petdex）· Desktop / TUI / Runtime / App 独立更新 |

## 🧠 基于 Pi Coding Agent 深度构建

Pisper 以 [Pi Coding…

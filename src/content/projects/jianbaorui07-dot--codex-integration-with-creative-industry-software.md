---
repo: "jianbaorui07-dot/Codex-Integration-with-Creative-Industry-Software"
name: "Codex-Integration-with-Creative-Industry-Software"
description: "Windows-first local MCP stdio server and safety bridge for AI agents connecting to ComfyUI, Blender, AutoCAD/DXF, Photoshop, Illustrator, and CapCut/Jianying."
readmeQualityOk: true
url: "https://github.com/jianbaorui07-dot/Codex-Integration-with-Creative-Industry-Software"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ai-agent", "autocad", "automation", "blender", "capcut", "codex", "comfyui", "creative-software", "creative-tools", "dxf"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-05-21T04:59:17Z"
lastCommitAt: "2026-07-05T06:31:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["gibqojyax4izh-byte", "juelpinkfluffy1959-star", "jianbaorui07-dot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0772a4947f72388464c2b7544e61c87fbb17ef70dc5e8f92a6fe136df9296dbc/jianbaorui07-dot/Codex-Integration-with-Creative-Industry-Software"
discussionCount: 0
---

# 星桥三联：StarBridge Skill + MCP + UXP

## 仓库总定位

这个仓库只服务三件事：**Codex skill 入口、StarBridge MCP 工具协议、Adobe UXP / 本地代理桥**。所有公开内容都围绕这三层收敛；历史 demo、私有素材、真实工程、本机路径、账号状态和临时输出不进入 GitHub。

| 层级 | 服务对象 | 当前职责 | 边界 |
| --- | --- | --- | --- |
| Skill | Codex 工作流 | 把 Photoshop、Illustrator、CAD、Blender 等软件接入流程拆成可复用 skill | 只写方法、路由和安全规则，不保存私有素材 |
| MCP | AI 客户端工具协议 | 暴露 `tools/list`、`tools/call`、safe-only registry、status/probe、dry-run 和 evidence | 默认只读或 dry-run，写入必须确认并限制到 sandbox |
| UXP | Adobe 桌面插件 / 本地代理 | 承接 Photoshop UXP v2、Node Proxy、typed BatchPlay、DOM 读写实验 | 仍是 experimental，不开放任意脚本或私有 PSD 自动处理 |

一句话原则：**Skill 管路线，MCP 管工具，UXP / Node Proxy 管 Adobe 本地插件通道，Safety layer 管脱敏和发布边界，专业软件继续负责真实生产。**

## 项目状态：v0.1-alpha

| 状态 | 当前范围 |
| --- | --- |
| stable | MCP stdio server、tool registry、统一 status/probe、路径脱敏、安全检查、preflight、ComfyUI workflow validate、AutoCAD/DXF plan validate / dry-run / guarded write。 |
| experimental | Photoshop sandbox 写入/导出 demo、Illustrator sandbox trace/export demo、ComfyUI txt2img job lifecycle、桌面软件 COM/UXP 探针。 |
| planned | Blender confirmed render、CapCut / 剪映 draft skeleton、跨软件 asset handoff、可审计 E2E release evidence。 |
| not implemented |…

---
repo: "Tisitan/dsh-live2d-companion"
name: "dsh-live2d-companion"
description: "Live2D 监控面板・看板娘桌宠 for DeepSeek Harness"
readmeQualityOk: true
url: "https://github.com/Tisitan/dsh-live2d-companion"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["deepseek-harness", "desktop-pet", "dsh-plugin", "live2d"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-15T19:08:04Z"
lastCommitAt: "2026-08-24T04:21:04Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["Tisitan", "CiasaSavage", "LiebaFox"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bd00a168c0c502fbaa91076dc087761ee6a7c65d9eaacfa5b90cafc5208bdea/Tisitan/dsh-live2d-companion"
---

# Live2D 监控面板・看板娘桌宠（dsh-live2d-companion）

[DeepSeek Harness](https://github.com/deepseek-ai/dsh)（下称 DSH）的 Live2D 状态监控面板：把你喜欢的 Live2D 角色接进 DSH Web GUI，实时反映 AI 的工作状态——思考时歪头、工作时兴奋、等你确认时招手、闲着没事会打瞌睡，还能陪你下五子棋和国际象棋。**不绑定任何特定角色**：任何 Cubism 4/5 模型丢进 `model/` 目录即可上岗（详见[模型接入与绑定层](#模型接入与绑定层)）。

**双形态**：网页右下角挂件 / Windows 桌面桌宠（Electron 透明置顶窗口），同一份前端内核驱动。

另提供 [`standalone/`](https://github.com/Tisitan/dsh-live2d-companion/blob/HEAD/standalone/) 独立运行入口：不启动 DSH 也能使用同一套桌宠渲染、模型面板、游戏中心和 Codex/OpenCode 状态联动（含 OpenCode 对局解说）。独立版仍不包含模型、Cubism Core、Electron 二进制或第三方角色 Prompt，详细许可边界与安装步骤见 [`standalone/README.md`](https://github.com/Tisitan/dsh-live2d-companion/blob/HEAD/standalone/README.md)。

## 特性

- 🎭 **AI 状态同步**：订阅 DSH 会话事件流，8 态状态机（空闲/思考/工作/等待确认/报错/完成/睡眠/离线）+ 左上角**状态灯**（小灯+文字常显）；**多任务并行时每会话一枚独立任务灯**（任务1·工作 / 任务2·待确认…），聚合主灯 + 分工小灯一目了然；任务完成后 6 秒转闲置、闲置 5 分钟自动收灯回收编号，会话复活自动重新上牌
- 🖱️ **丰富交互**：点击反应、双击卖萌、点击摸头害羞（划过不误触）、拖拽搬家、睡着点一下叫醒、缩放（挂件滚轮 / 桌宠 Ctrl+滚轮，拖拽期间自动锁定）、**全局视线跟随**（OS 层轮询光标，整屏追踪不限窗口）
- 💬 **气泡台词**：15 个台词池 70+ 条，状态轮播、时段问候、加班焦虑、深夜关怀
- ⚙️ **全配置化**：台词/节奏/行为阈值都在 `quips.json`（官方默认）；台词支持**多预设可视化编辑**（「词」按钮：另存为多份人设台词集、一键切换、池级恢复默认，保存即生效）
- 🐾 **桌面桌宠**：透明无边框置顶、鼠标穿透（不挡操作）、位置记忆、随 DSH 启停（心跳看门狗）、面板内一键重启 / 双击确认退出
-…

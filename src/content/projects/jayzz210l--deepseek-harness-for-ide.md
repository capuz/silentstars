---
repo: "JayZz210l/deepseek-harness-for-ide"
name: "deepseek-harness-for-ide"
description: "把 DeepSeek Harness 完整搬进 JetBrains IDE：智能体对话、工具审批、目标与计划、子智能体与 Workflow。装插件、配一次 API Key，即可对话。DeepSeek Harness — agent chat, tool approvals, goals, subagents & workflows — embedded in your JetBrains IDE. Install, set your API key once, and chat."
readmeQualityOk: true
url: "https://github.com/JayZz210l/deepseek-harness-for-ide"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["dsh-plugin", "dsh-plugin-market", "dsh-plugin-verify", "dsh-plugins", "jetbrains-ides", "jetbrains-plugin", "jetbrains-plugins"]
stars: 7
forks: 2
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-14T15:57:41Z"
lastCommitAt: "2026-09-07T08:34:23Z"
lastReleaseAt: "2026-08-31T15:00:40Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 51
maintainers: ["JayZz210l", "JayZz210", "lovcoxin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0da0cd0a52abc9d703d30b75b9a0ac9b19d63a5952a3a4a57757b8199bad1f1b/JayZz210l/deepseek-harness-for-ide"
---

# Deepseek Harness For IDE

> 把完整的 DeepSeek Harness 搬进你的 JetBrains IDE

[**English**](https://github.com/JayZz210l/deepseek-harness-for-ide/blob/HEAD/README.en.md) · **简体中文**

   

</div>

> DeepSeek Harness 是 DeepSeek 的智能体编程工作台——智能体对话、工具审批、目标与计划、
> 子智能体、Workflow 与 Cordis 工具链。本插件把**完整**的 Harness 内嵌到 IDE 工具窗口：
> 装上插件、配置一次 API Key，即可直接在 IDE 里对话。

---

## 安装

### 从本地 zip 安装（硬盘安装）

1. 从 [Releases](https://github.com/JayZz210l/deepseek-harness-for-ide/releases) 页面下载
   `deepseek-harness-jetbrains-<version>.zip`（或自行构建，见[本地构建](#本地构建)）；
2. 打开 IDE：**Settings → Plugins**（Ctrl+Alt+S，或 File → Settings）；
3. 点击 **Marketplace** 旁的 **⚙ 齿轮**，选择 **Install Plugin from Disk…**；
4. 选中下载的 zip，点 **OK**；
5. 按提示**重启 IDE**；
6. 打开任意项目——右侧出现 **Deepseek Harness For IDE** 工具窗口并自动启动本地服务。

**升级**：用同样方式安装新版 zip 即可覆盖升级，各项目的会话与设置保持不变。

### 从 JetBrains Marketplace 安装

在 **Settings → Plugins → Marketplace** 搜索 **Deepseek Harness For IDE** 安装即可，
版本号与 GitHub Releases 一致。

---

## 核心特性

### 完整 Harness，原生内嵌
- **内嵌完整 DSH Web 界面**——智能体对话、会话管理、工具审批、文件 Diff、目标与计划、
  子智能体、Workflow、Cordis 工具面板，全部跑在工具窗口的 JCEF 浏览器里；DSH 升级自动
  获得新界面能力；
- **免装 dsh**——运行时（整个 `node_modules` 依赖闭包）内置在插件里。仅要求 Node.js 18+，
  缺失时插件会检测并弹窗一键跳转 nodejs.org…

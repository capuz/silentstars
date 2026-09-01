---
repo: "JiaYang-BUAA/Codex-Desktop-Usage-Monitor-Windows"
name: "Codex-Desktop-Usage-Monitor-Windows"
description: "OpenAI Codex Desktop in-app usage monitor for Windows — tracks subscription quota/reset time, token usage, API accounts and API keys via local CDP injection. No app.asar patching."
readmeQualityOk: true
url: "https://github.com/JiaYang-BUAA/Codex-Desktop-Usage-Monitor-Windows"
homepage: "https://github.com/JiaYang-BUAA/Codex-Desktop-Usage-Monitor-Windows/releases/latest"
language: "JavaScript"
languages: ["JavaScript", "PowerShell"]
languagePcts: [75, 25]
topics: ["api-usage", "cdp", "codex", "codex-app", "codex-desktop", "electron", "openai", "openai-codex", "powershell", "quota-monitor"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-23T10:43:04Z"
lastCommitAt: "2026-09-01T08:49:01Z"
lastReleaseAt: "2026-07-25T09:10:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 56
maintainers: ["JiaYang-BUAA"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1309828763/b07f384a-c7f0-4263-82f5-dad2e847f530"
---

# Codex Usage Monitor for Windows

> In-app usage monitor and status bar for OpenAI Codex Desktop on Windows

Codex Usage Monitor 把官方订阅周期、当前会话 Token、社区重置概率、Tibo 最新 X 动态，以及可选的 API 账户和 API Key 用量，直接放到 Windows 版 Codex Desktop 的输入区域旁。

监视器通过仅绑定本机的 Chrome DevTools Protocol（CDP）运行时注入，不是独立悬浮窗，也不修改 WindowsApps、`app.asar`、Codex 登录文件或模型配置。

> 本项目是非官方项目，与 OpenAI 没有隶属、赞助或背书关系。社区重置概率和 Tibo 动态也不是 OpenAI 官方数据。Codex 更新可能改变页面结构；项目会持续通过兼容性测试适配新版界面。

主要功能：

- 在一个面板中查看“本会话”“官方订阅”“重置概率预测（仅供参考）”，并按需开启 API 账户和 API Key 两栏。
- 查看当前会话累计 Token、上次回答消耗 Token、缓存命中率、自动压缩上下文次数和当前状态。
- 查看 5 小时与 7 天官方周期、重置时间、今日 Token、近7天 Token和累计 Token。
- 每 5 分钟显示社区重置概率和 Tibo（[`@thsottiaux`](https://x.com/thsottiaux)）最新 X 动态摘要。
- 支持普通模式、极简模式、倒计时可视化、中文与 English UI、自动更新和按任务独立的额度恢复续跑。
- 使用当前 Windows 用户的 DPAPI 加密保存 API 凭据，不把凭据写入源码、页面设置或日志。

## 1. 三步开始使用

### 1.1 准备环境

- Windows 10 或 Windows 11。
- 已安装并能正常登录的 Codex Desktop。
- Node.js 22 或更高版本。
- 推荐使用 PowerShell 7，并确认命令 `pwsh` 可用。
- 安全软件：项目使用隐藏 PowerShell、Node.js 后台进程和 CDP 参数，可能触发启发式误报。确认安装包来自本仓库后，为项目目录、启动脚本或相关进程添加精确信任规则，或者直接关闭杀毒软件。

### 1.2 下载、安装、启动

1. 从 [最新 Release](https://github.com/JiaYang-BUAA/Codex-Desktop-Usage-Monitor-Windows/releases/latest) 下载…

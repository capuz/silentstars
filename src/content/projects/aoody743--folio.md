---
repo: "Aoody743/Folio"
name: "Folio"
description: "Folio (折纸面板): A visual Linux server tool for the AI era"
originalDescription: "Folio（折纸面板）：AI 时代的 Linux 服务器可视化工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Aoody743/Folio"
homepage: "https://github.com/Aoody743/Folio"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [34, 22]
topics: ["ai-native", "folio", "golang", "linux", "mcp", "nextjs", "server-management"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-04-15T03:28:13Z"
lastCommitAt: "2026-10-22T08:52:16Z"
lastReleaseAt: "2026-10-19T16:39:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 50
maintainers: ["Aoody743"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d9865691b6fad6011bf3f87233d0af7d6c032f06c89d365d9af817fa3e2e9fe/Aoody743/Folio"
fundingLinks: ["CUSTOM:https://afdian.net/a/mdserver-web"]
discussionCount: 0
---

# Folio · 折纸面板

Folio 是一款用于管理 Linux 服务器的 Web 面板。它把主机状态、网站与软件、文件与终端、计划任务、账户安全和操作审计放在同一个界面中；支持 MCP 的客户端也可以在授权后调用面板提供的能力。

服务端使用 Go，管理界面以静态资源嵌入发行包。运行 Folio 不需要在服务器上常驻 Node.js、Python 或 AI 模型进程。可选的主机执行器默认关闭，只有配置 root 私有策略后才会启用。

## 功能

- 查看主机概览、资源指标、服务状态和共享便签。
- 管理网站、证书和软件目录中的服务。
- 浏览文件，使用受控终端和计划任务。
- 查看数据库与缓存连接、任务进度和操作记录。
- 管理账户安全、会话、MCP 客户端授权和界面主题。

网站与数据库备份不再设置固定总大小上限，仍使用流式处理和完整性校验。计划任务支持数据库备份、最终任务结果、失败通知、重叠执行和错过执行策略。

## 界面预览

下面展示 5 个重点页面的完整滚动截图。截图使用隔离的示例数据，不是某台服务器的实时信息。

### 概览

### 网站

### 文件

### 监控

### MCP 接入

其余页面见[截图索引（全部 18 个页面）](https://github.com/Aoody743/Folio/blob/HEAD/docs/screenshots/panel-1.0-beta1/README.md)，也可下载[完整截图 ZIP](https://github.com/Aoody743/Folio/blob/HEAD/docs/screenshots/panel-1.0-beta1-screenshots.zip)。

## 安装与首次登录

当前发行版是 [Folio 1.0-beta3](https://github.com/Aoody743/Folio/releases/tag/1.0-beta3)，提供 Linux amd64 安装包和一键安装脚本。在 Ubuntu 24.04 amd64、运行 systemd 的服务器上执行：

```sh
curl -fsSL https://github.com/Aoody743/Folio/releases/download/1.0-beta3/install-1.0-beta3.sh | sudo bash
```

安装脚本会下载发行包和…

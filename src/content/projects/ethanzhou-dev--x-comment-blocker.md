---
repo: "ethanzhou-dev/x-comment-blocker"
name: "x-comment-blocker"
description: "屏蔽X上的特定评论与用户名的浏览器插件。A browser extension for blocking specific comments and usernames on X."
readmeQualityOk: true
url: "https://github.com/ethanzhou-dev/x-comment-blocker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [70]
topics: ["adblock", "browser-extension", "chrome-extension", "content-filter", "manifest-v3", "spam-blocker", "twitter", "x", "anti-spam"]
stars: 123
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-03T03:14:37Z"
lastCommitAt: "2026-07-29T06:15:11Z"
lastReleaseAt: "2026-07-18T16:59:17Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 36
maintainers: ["ethanzhou-dev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/253011b3f201e9259442856c3fdca0d3be0eb69f8d06b9526ff9ac7ee2c4c381/ethanzhou-dev/x-comment-blocker"
---

# X(Twitter) Comment Blocker

用于自动屏蔽 X (Twitter) 评论区垃圾信息与引流机器人的浏览器插件。

## 功能

- **云端词库**：自动同步并定期更新公共垃圾屏蔽词库。
- **自定义词库**：支持手动添加、编辑屏蔽词，并提供本地文件的导入/导出功能。
- **高级过滤**：
  - 按用户名包含屏蔽词过滤。
  - 按特殊字符或 emoji 过滤。
  - 支持仅作用于推文评论区。
- **白名单机制**：支持将特定用户添加至白名单，白名单用户的评论将永远不会被屏蔽。
- **快捷操作**：选中网页文本后，右键可将其快速加入自定义屏蔽词库。
- **拉黑功能**：
  - **手动拉黑**：在拦截历史记录中，可以将账号一键拉黑。
  - **自动拉黑**：可针对特定的屏蔽词（自定义或云端）开启自动拉黑，命中该词的评论作者将被自动拉黑。
- **数据与历史**：记录屏蔽数量，并可查看最近拦截的 2000 条评论。

## 安装

### 1. 从 Chrome 应用商店安装（适用于 Chrome，Edge 等基于 Chromium 的浏览器）

您可以在 Chrome 应用商店获取最新版本：
[X(Twitter) Comment Blocker - Chrome 应用商店](https://chromewebstore.google.com/detail/xtwitter-comment-blocker/gagacedifiphcndckimeihhcbcclkach)

### 2. 手动安装

适用于基于 Chromium 的浏览器（如 Chrome, Edge）

1. 下载或克隆本项目代码。
2. 打开扩展程序页面：`chrome://extensions/` 或 `edge://extensions/`。
3. 开启页面右上角的 **开发者模式**。
4. 点击 **加载已解压的扩展程序**，选择下载的 `x-comment-blocker` 文件夹。

## 使用

- **全局控制**：点击扩展图标，通过右上角开关启用或关闭插件。
- **词库管理**：在弹窗界面中管理自定义词库，可添加、删除，或通过顶部图标进行备份和恢复。
- **云端同步**：勾选“云端词库”开启自动更新，点击“同步”按钮可立即拉取最新列表。
- **白名单管理**：在“屏蔽历史”界面右上角点击白名单图标，可添加或移除免受屏蔽的用户。
- **自动拉黑配置**：在自定义词库或云端词库区域点击“编辑自动拉黑词”图标，可指定哪些词触发时直接拉黑该用户。
- **快速添加**：浏览网页时遇到需要屏蔽的词，直接选中并右键点击添加。
-…

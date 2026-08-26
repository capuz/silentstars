---
repo: "Ultronen/dsh-archived-chats"
name: "dsh-archived-chats"
description: "DeepSeek Harness 本地归档聊天中心：正文搜索、只读预览、ZIP 备份与带保护快照的可恢复删除。Local archived-chat search, preview, backup, and snapshot-protected recovery."
readmeQualityOk: true
url: "https://github.com/Ultronen/dsh-archived-chats"
homepage: "https://awesome-dsh-plugin.com/p/Ultronen/dsh-archived-chats/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "archive", "backup", "chat-history", "conversation-search", "data-recovery", "deepseek-harness", "local-first", "recycle-bin", "session-management"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-16T00:16:21Z"
lastCommitAt: "2026-08-26T04:16:02Z"
lastReleaseAt: "2026-08-24T10:22:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 44
maintainers: ["Ultronen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1189aa53ea7bbab0603eacbdee8418e72980b34fa24fd441b0c6b4c692c9dcc6/Ultronen/dsh-archived-chats"
discussionCount: 1
---

# dsh-archived-chats

[English](https://github.com/Ultronen/dsh-archived-chats/blob/HEAD/README.en.md) | 中文

> 🔎 **归档不再等于消失。** 直接搜索聊天正文、阅读完整对话和工具调用，然后安全备份、恢复或删除。

> ♻️ **在本插件中移除归档聊天可以撤销。** 插件会先创建包含会话与附件的本地恢复快照，再移入回收站；只有在回收站中明确选择「永久删除」才会物理清除。

为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 新增一个本地归档聊天中心：搜索和预览完整对话，备份与恢复会话，并通过可撤销回收站、恢复快照、保留策略及来源与分支安全管理历史聊天。

在 DeepSeek Harness 里，聊天一旦归档就会从侧边栏消失，界面中没有任何入口可以再看到它，只有工作区存档（`~/.dsh/storages/workspace.json`）还记得它。这个插件在「设置」中补上一个「会话档案」页面，让所有归档会话都可见、可搜索、可管理。

[插件市场](https://awesome-dsh-plugin.com/p/Ultronen/dsh-archived-chats/) · [npm](https://www.npmjs.com/package/dsh-archived-chats) · [版本发布](https://github.com/Ultronen/dsh-archived-chats/releases) · [问题交流](https://github.com/Ultronen/dsh-archived-chats/discussions) · [私密报告漏洞](https://github.com/Ultronen/dsh-archived-chats/security/advisories/new)

</p>

如果它帮你找回或保护过一次重要对话，欢迎给仓库一个 Star——这能帮助真正需要归档恢复功能的用户更容易发现它。

## 🚀 安装

```sh
dsh plugin --profile web add dsh-archived-chats@latest
```

安装后重启一次 DSH，然后打开 **设置 → 会话档案**。

更新已有安装：

```sh
dsh plugin --profile web update dsh-archived-chats
```

## 兼容性

0.12.0 的完整功能目标是 DeepSeek Harness…

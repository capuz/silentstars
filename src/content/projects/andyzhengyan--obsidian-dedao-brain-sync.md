---
repo: "AndyZhengyan/obsidian-dedao-brain-sync"
name: "obsidian-dedao-brain-sync"
description: "双向同步Obsidian&得到大脑（aka. 得到脑机 😂）"
url: "https://github.com/AndyZhengyan/obsidian-dedao-brain-sync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 17
forks: 0
openIssues: 4
closedIssues: 45
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-29T15:30:40Z"
lastCommitAt: "2026-06-28T02:03:53Z"
lastReleaseAt: "2026-05-19T02:23:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 51
maintainers: ["AndyZhengyan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a66e839ca6a9cf83ee8f019b568dcfecbcaf3a8e8ed9c94665802e357d39e76f/AndyZhengyan/obsidian-dedao-brain-sync"
discussionCount: 1
---

# 最好用的 【得到大脑 🔄 Obsidian】 插件

[中文](./README.md) | [English](./README_EN.md)

把得到大脑（原Get笔记）里的灵感、摘录、链接、录音和 AI 总结与 Obsidian 双向同步，变成可长期整理、搜索和链接的本地 Markdown 知识库。

* * *

## 🎉 1.3.1 最新更新

- **🔍 OpenAPI 搜索侧边栏**：基于 OpenAPI 的全文检索面板，在 Obsidian 侧边栏直接搜索得到大脑笔记，命中后一键「打开本地笔记」或「同步到本地」。
- **🗂️ 定时同步配置聚合**：把同步范围（起始日期 / 最大天数）、笔记类型、标签过滤、目标知识库统一收拢到「启用定时同步」折叠面板，配置更紧凑。
- **🛠️ 设置页折叠更紧凑**：「启用定时同步」「下载附件」主开关后面内联「更多 / 收起」超链接，不再额外占一行。
- **🏷️ 标签管理增强**：首次打开设置页时自动从首屏 20 条笔记提取标签；过滤类弹窗的标签下拉统一只读，仅「自动同步」允许新增标签。
- **📜 标签下拉去重与对齐**：去除嵌套双层滚动条；长标签换行时 checkbox 固定尺寸，不再被挤压；下拉菜单内容统一不加粗。
- **🖱️ 附件主开关修复**：改为声明式 Toggle，单次点击生效；主开关关闭时子项同步禁用，状态不再分裂。
- **🎛️ 知识库同步弹窗重构**：标题改为「选择要同步的知识库」；「全部内容 / 选择内容」、标签过滤、搜索、博主筛选统一收进顶部一行工具栏。

README 仅保留当前版本的核心亮点；完整版本历史请查看 [GitHub Releases](https://github.com/AndyZhengyan/obsidian-dedao-brain-sync/releases)。

* * *

## 为什么好用

- **真正双向同步**：从得到大脑拉取笔记到 Obsidian，也可以手动选择本地 Markdown 上传到得到大脑。
- **不是一次性导出**：官方导出是离线 HTML；本插件把笔记同步成独立 Markdown 文件，并在后续同步中持续更新。
- **同步稳定可续传**：支持增量同步、按时间同步、按笔记同步、按知识库同步、定时同步、启动时同步和同步断点。
- **过滤器更丰富**：可按更新时间、同步起始日期、最大天数、笔记类型、标签、手动选择的笔记或知识库范围控制本次同步。
- **两种鉴权模式**：PRO 用户可用 OpenAPI 鉴权长期稳定同步；也支持临时鉴权复用网页版会话快速试用。
- **详尽同步日志**：保留最近同步记录，展示方式、参数、过滤条件、耗时、状态和逐篇新增/更新/跳过/失败明细。
-…

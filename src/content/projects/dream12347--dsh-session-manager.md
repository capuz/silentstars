---
repo: "dream12347/dsh-session-manager"
name: "dsh-session-manager"
description: "DSH 会话管理插件：删除（回收站恢复/彻底清除）、统计、继续/暂停、打开日志目录、对话顶部抽屉、工作区分组与排序、上下文压缩阈值设置。DSH session manager: delete with trash/restore/purge, stats, continue/pause, log folder, header drawer, workspace grouping, context compaction threshold."
readmeQualityOk: true
url: "https://github.com/dream12347/dsh-session-manager"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 44]
topics: ["ai-worker", "dsh-plugin", "deepseek-harness", "dsh", "deepseek-harness-plugin", "deeepseek-harness-plugins"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-08-14T14:29:25Z"
lastCommitAt: "2026-08-18T04:08:28Z"
lastReleaseAt: "2026-08-18T04:08:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["dream12347"]
openGraphImageUrl: "https://opengraph.githubassets.com/e611847cf3cb107ec08a76dea5c7051b9727bd9d1fa987106c1fdcbadfa342b5/dream12347/dsh-session-manager"
---

# dsh-session-manager

[English](https://github.com/dream12347/dsh-session-manager/blob/HEAD/README.en.md) | 中文

这可能是目前功能最全的 DSH 会话管理插件：在 DeepSeek Harness Web 界面中全面**管理会话**，设置页与对话顶部均提供入口——删除（回收站可恢复或彻底清除）、恢复已归档会话、近期活动统计、继续/暂停会话、打开日志目录、未读/已读标记、新聊天中继续（fork）、工作区分组与排序管理、上下文压缩阈值设置，不修改 DSH 核心代码。

<sub><span style="opacity:.6">本项目由 dsh + Deepseek-V4-Flash0731 独立完成</span></sub>

<sub><span style="opacity:.6">如果觉得有用，欢迎点个 ⭐ Star，谢谢支持！</span></sub>

## 功能

- 设置页新增独立的「会话管理」分栏（与 Notifications 同级的设置分区）
- 面板列出全部会话（标题 / 工作目录），底部折叠区单独展示**已归档会话**，支持**一键恢复**回到会话列表
- **回收站**：删除的会话移入回收站（保留最近 10 条，超出自动清除最早一条），可**恢复**或**彻底删除**
- **统计**：每个会话可展开查看近期活动统计（轮次 / 用户消息 / 助手消息 / 工具调用 / 活动窗口）
- **继续会话**：一键打开会话并关闭面板；**暂停**：停止正在运行会话的当前回合
- **未读 / 已读**：会话行标题旁显示状态点——手动未读为蓝色、官方等待输入为琥珀、官方完成提醒为绿色、运行中为转圈；点击官方状态点**就地已读**（不跳转），点击蓝色点清除未读，打开会话自动已读；官方侧边栏的对应会话行旁同步显示蓝色未读点
- **新聊天中继续**：每个会话一键 fork 子会话（官方 `sessions.fork`）并打开
- **文件夹**：在系统文件管理器中打开会话日志目录
- **删除本对话**：对话顶部右侧红色按钮，一键删除当前对话（Session log 左侧）
- **对话管理 / 回收站**：对话顶部入口，打开自绘右侧抽屉（图钉固定常驻、点击外部自动收起），行内「更多」悬浮菜单收纳统计 / 文件夹 / 新聊天中继续
- **工作区管理**：会话按工作区分组展示，组内按最后使用时间排序（可切换最新/最旧）；拖拽工作区标题即可调整顺序（插入 / 交换 / 拖到末尾）；悬停标题出现**置于顶部 / 重命名 / 删除**按钮（删除按官方定义：仅移出列表，文件夹与会话记录保留，会话归入「未分组」）
-…

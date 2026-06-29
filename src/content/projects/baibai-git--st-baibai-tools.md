---
repo: "baibai-git/ST-BaiBai-Tools"
name: "ST-BaiBai-Tools"
description: "对酒馆的部分功能优化"
url: "https://github.com/baibai-git/ST-BaiBai-Tools"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-28T13:34:14Z"
lastCommitAt: "2026-06-29T07:22:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 40
maintainers: ["baibai-git"]
openGraphImageUrl: "https://opengraph.githubassets.com/d682f816adcc086f6a8791b820fe5101a40884b99226fb4b13959801451b2314/baibai-git/ST-BaiBai-Tools"
---

# 柏宝箱

柏宝箱是一个 SillyTavern 第三方扩展，主要用来缓解移动端、长聊天、海量角色/正则/预设场景下的卡顿。它会在不改变 SillyTavern 原有使用方式的前提下，接管部分高开销的列表渲染、接口请求、编辑器和滚动行为。

当前版本：`0.27.18`

## 功能总览

- 移动端输入框、自动补全和聊天编辑时的响应优化
- 长聊天 DOM 渲染优化，减少屏幕外楼层的布局和绘制开销
- 管理聊天文件弹窗请求加速、滚动优化和关闭清理
- 主页最近聊天直达目标聊天，避免先渲染角色上一次聊天
- 角色列表、Persona 列表和欢迎页最近聊天头像缩略图懒加载
- 角色搜索输入框拼音输入优化，减少中文输入法导致的频繁搜索和重绘
- OpenAI 预设切换、拖拽、开关、保存和 Token 统计刷新优化
- 预设内容、自定义 CSS、角色描述的 CodeMirror 编辑器优化
- 正则列表 Vue 分组管理器，支持分组、拖拽、批量移动和延迟保存
- 原版世界书优化与世界书新布局，减少原版交互、抽屉动画和 Select2 初始化带来的卡顿
- 自定义 CSS Shadow Property，缓解切换美化/主题时的大段 CSS 写入卡顿
- 翻译更新事件保存优化，避免自动翻译关闭时的无效长聊天保存
- 聊天保存请求 Gzip 压缩，公网访问时减少保存请求体积
- 消息生成完成提示音，支持内置音频、音频 URL 和本地文件
- 柏宝库分页/加速：Settings、扩展 Manifest 合并请求、角色列表、最近聊天、美化主题懒加载、消息后台生成、Tokenizer 批量计数

## 聊天优化

### 长聊天渲染优化

启用 `长聊天渲染优化` 后，扩展会在当前聊天楼层文本量较大时为消息楼层应用 `content-visibility` 和高度占位缓存，减少屏幕外楼层参与布局和绘制。进入聊天后会自动滚到底部，并用临时底部锚点处理初始加载期间的高度变化。

生成新消息或更新楼层时，扩展会尽量保持底部或最新楼层位置稳定，避免长聊天中常见的跳动、滚不到底和反复重排。

### 管理聊天文件优化

`管理聊天文件请求加速` 只在普通角色聊天、空搜索、请求 `/api/chats/search` 时生效。扩展会先用轻量文件名列表渲染弹窗，再异步补齐文件大小、消息数、日期和预览文本。

`管理聊天文件滚动优化` 会对聊天文件行启用绘制隔离，缓解大量聊天文件时的滚动卡顿。

`管理聊天文件关闭清理` 会在管理聊天文件窗口关闭后清空已生成的聊天文件 DOM，减少关闭后的页面负担。

关键词搜索和群聊会自动回退到 SillyTavern 原始逻辑。

### 主页进入聊天优化

启用 `主页进入聊天优化`…

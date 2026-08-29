---
repo: "xinghelee/v2ex"
name: "v2ex"
description: "Native V2EX client for iOS. SwiftUI with Liquid Glass design: topic feeds, notifications, nodes, search, offline cache."
readmeQualityOk: true
url: "https://github.com/xinghelee/v2ex"
homepage: "https://xinghelee.github.io/v2ex/"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["ios", "swift", "swiftui", "v2ex"]
stars: 25
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-03T10:16:47Z"
lastCommitAt: "2026-08-29T10:20:05Z"
lastReleaseAt: "2026-08-29T09:48:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 41
maintainers: ["xinghelee"]
openGraphImageUrl: "https://opengraph.githubassets.com/31dbb043d1ba3a761796a96c5965925faa4a67c64a296647e7342ae4ae67c44b/xinghelee/v2ex"
---

# V2EX

面向个人使用的 V2EX iOS 客户端。使用 SwiftUI 构建，采用 iOS 26 原生 Liquid Glass 组件，数据来自 V2EX API、网页会话和 sov2ex 搜索。

## 下载

- **TestFlight 公测**：[testflight.apple.com/join/jUBsFk9u](https://testflight.apple.com/join/jUBsFk9u)

## 截图

</p>

## 功能

- **首页**：全部、最热、关注和快捷节点，多分类横向切换并分别记忆滚动位置
- **话题**：正文、代码、引用、列表与图片渲染，楼层回复、只看楼主、阅读数、收藏、离线与长帖分页
- **节点**：完整节点搜索与分类目录，可编辑、排序和增删首页快捷节点，支持节点话题排序与分页
- **账户**：账号密码、验证码、两步验证或网页登录；会话仅保存在本机 Keychain
- **通知**：Personal Access Token 驱动，回复、@、感谢分类筛选，支持未读状态和删除
- **搜索**：sov2ex 全文索引（话题/回复/用户/节点），命中高亮
- **个人**：个人资料、话题统计、网页收藏同步、稍后读、我的话题与回复、关键词和用户屏蔽
- **写作**：多份 Markdown 草稿、节点选择和格式工具栏，新话题与逐帖回复草稿均自动保存
- **阅读与外观**：五套主题配色、明暗模式、正文字号、行距和等宽字体可调，可记忆阅读进度并自动离线关注节点
- **交互**：原生悬浮标签栏随滚动收起，列表下拉刷新，点击页面空白处收起键盘

## 技术要点

| 模块 | 说明 |
| --- | --- |
| API 1.0 | 公开接口：话题、回复、节点、成员、全部节点 |
| API 2.0 | Personal Access Token：通知、个人资料、长帖分页、删除通知 |
| 网页会话 | App 内回复、收藏同步、关注节点同步；Cookie 只存储在 Keychain |
| sov2ex | 社区全文索引，V2EX 无官方搜索接口 |
| iOS 26 | 原生 Tab、`safeAreaBar`、`glassEffect`、边缘滚动效果与标签栏自动收起 |
| 渲染 | 自研轻量 HTML 解析（段落/行内/图片提取），替代 NSAttributedString 方案 |
| 存储 | Keychain（Token）、UserDefaults（设置）、磁盘缓存（离线包） |
| 内容治理 | 首启条款闸门、举报与屏蔽，命中内容即时且持久地从全部列表移除 |

一些工程决策：

- **下拉刷新**：统一封装系统…

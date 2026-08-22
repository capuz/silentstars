---
repo: "hadc188/reader"
name: "reader"
description: "「阅读3.0」（Legado）的桌面版，支持 Windows、macOS 和 Linux，使用 Rust、Tauri v2 与 Vue 3 构建。"
readmeQualityOk: true
url: "https://github.com/hadc188/reader"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [46, 33]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-07T13:29:51Z"
lastCommitAt: "2026-08-22T04:05:21Z"
lastReleaseAt: "2026-08-20T04:23:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 38
maintainers: ["hadc188"]
openGraphImageUrl: "https://opengraph.githubassets.com/614658ce40328dcf4466c76b835445da6a0b688ef788369f6114cdc82d5ea42a/hadc188/reader"
---

# Reader

> 一个面向桌面端的本地阅读器：管理自己的书源与书架，也能阅读本地书籍、订阅 RSS，并按喜欢的方式定制阅读界面。

Reader 是「阅读3.0」（[Legado](https://github.com/Rimchars/legado)）的跨平台桌面移植版，支持 Windows、macOS 和 Linux，使用 Rust、Tauri v2 与 Vue 3 构建。

项目采用纯单机设计，不需要部署服务端、数据库容器或注册账号。界面与本地核心运行在同一个桌面进程中，书架、阅读进度、缓存和配置由用户自己保存和管理。

项目源自 [reader](https://github.com/hectorqin/reader)，并参考 [reader-rust](https://github.com/givenge/reader-rust) 进行重构。

> [!IMPORTANT]
> 本项目不内置书源，也不提供任何书籍内容。首次启动后可导入自己拥有合法使用权的书源、本地 TXT 或 EPUB 文件。

## 界面预览

### 书架与阅读

### 书源与发现

</p>

### 统计与 RSS

</p>

## 项目亮点

- **本地优先**：不依赖常驻服务端，数据保存在自己的设备中。
- **兼容阅读生态**：支持 Legado 书源、RSS 源及备份数据的导入与恢复。
- **完整书源工具**：从导入、编辑、测试到登录调试都可以在桌面应用内完成。
- **可定制阅读体验**：阅读主题、字体、排版、翻页方式、背景图片与透明度均可调整。
- **多种听书方式**：支持系统语音及多种第三方语音接口格式。
- **跨平台发布**：自动构建 Windows、macOS 和 Linux 桌面安装包或便携包。

## 功能一览

### 书源、搜索与缓存

- 导入、导出、新增、编辑和批量测试 JSON 书源
- 远程书源订阅与一键同步更新
- 支持 CSS 选择器、JSONPath、XPath、正则表达式及 JavaScript 解析规则
- 多书源并行搜索，按书名和作者合并结果并显示来源数量
- 书籍详情、目录获取、换源、章节缓存与离线阅读
- 书源可视化编辑器、原始响应查看和分步骤规则调试
- 书源登录预览及 Cookie 登录状态支持

### 阅读体验

- 书架分组、最近阅读、书签和阅读进度记录
- 本地 TXT、EPUB 与网络书籍阅读
- 日间、夜间及多种阅读主题，可跟随应用外观切换
- 字体、字号、字重、行高、段距、缩进和页面宽度调节，支持导入自定义字体
- 滚动、左右翻页、点击翻页与自动阅读
- 简繁转换、文字选择、内容净化与自定义替换规则
- 阅读页右键菜单，可搜索、添加书签、换源、自动翻页和刷新
-…

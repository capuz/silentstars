---
repo: "dotnet9/Vex"
name: "Vex"
description: "Markdown编辑器，仿Typora，使用.NET 10 + Avalonia 12实现，支持跨平台(Windows\\Linux\\macOS）"
url: "https://github.com/dotnet9/Vex"
language: "C#"
languages: ["C#"]
languagePcts: [94]
stars: 41
forks: 6
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-22T01:07:42Z"
lastCommitAt: "2026-06-28T01:33:13Z"
lastReleaseAt: "2026-05-27T05:48:46Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 40
maintainers: ["dotnet9"]
openGraphImageUrl: "https://opengraph.githubassets.com/09096875364f72fd28c710eff24c53a144159abc746ca3a98917899982a3d5b6/dotnet9/Vex"
---

# Vex

Vex（维刻）是一个基于 .NET 11 与 Avalonia 12 构建的跨平台 Markdown 编辑器，面向日常写作、技术文档整理、自媒体排版和多格式文档导出。

Slogan：极简之力，妙笔成章。

作者：沙漠尽头的狼  
出品：码坊 CodeWF  
网站：https://codewf.com

## 仓库规范

- 当前版本：`1.1.2.3`，版本号统一维护在根目录 `Directory.Build.props` 的 `<Version>` 节点。
- NuGet 包项目统一支持 `net8.0;net10.0`；Demo、App、测试与内部应用项目统一使用 `net11.0` / `net11.0-windows`。
- 根目录 `logo.svg`、`logo.png`、`logo.ico` 是唯一图标源，子工程只通过 MSBuild `Link` 引用，不维护图标副本。
- 运行时帮助、Markdown 示例、内置备忘录、设计说明等业务文档按功能保留；仓库级入口文档使用根目录 `README.md` 和 `UpdateLog.md`。

## 项目定位

Vex 希望提供一个轻量、清爽、可离线使用的 Markdown 写作环境。它不是单纯的代码编辑器，也不是只做预览的阅读器，而是围绕 Markdown 文档的完整工作流来设计：

- 写作时有源码编辑、实时预览、大纲导航和文档统计。
- 整理文档时可以打开单个文件或整个文件夹，快速在同目录文档之间切换。
- 发布时可以导出 HTML、PDF、PNG、Word，也可以复制为微信公众号、知乎、稀土掘金可直接粘贴的富 HTML。
- 分享时会尽量嵌入图片资源，让 PDF 和 Word 文件离线发送后仍能正常查看。

当前版本：`1.1.2.3`

## 主要功能

### Markdown 编辑

- 基于 AvaloniaEdit 的 Markdown 源码编辑器。
- 右侧实时预览，支持当前排版主题和紧凑布局。
- 支持常见 Markdown 编辑动作：标题、引用、列表、任务列表、表格、代码块、链接、图片等插入辅助。
- 支持从网页粘贴内容：优先读取剪贴板 HTML，并转换为 Markdown；无 HTML 或转换失败时回落到普通粘贴。

### 文件工作流

- 新建、打开、保存、另存为 Markdown 文档。
- 支持打开文件夹，左侧自动列出目录中的 Markdown/TXT 文档。
- 直接打开单个文件时，会自动加载同目录下的可编辑文档列表。
- 支持最近文件、拖拽打开、启动参数打开、文件重命名/删除，以及外部文件变更检测。

### 大纲、查找与统计

- 根据 Markdown 标题生成大纲，支持快速跳转。
-…

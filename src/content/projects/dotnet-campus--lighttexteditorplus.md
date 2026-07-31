---
repo: "dotnet-campus/LightTextEditorPlus"
name: "LightTextEditorPlus"
description: "这是一个比 Word 弱得多的文本库"
readmeQualityOk: true
url: "https://github.com/dotnet-campus/LightTextEditorPlus"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["avalonia", "dotnet", "maui", "skiasharp", "texteditor", "wpf"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-06T12:32:35Z"
lastCommitAt: "2026-07-31T06:29:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["lindexi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee0344a6839b9dd7bf28627400da465fa78a7175cf4d3d3c4fc96287fbc3f2a4/dotnet-campus/LightTextEditorPlus"
---

# 文本库

富文本布局库

支持替换平台渲染和平台测量层，可采用 WPF 或 MAUI 或其他基础框架作为基础平台层。可直接对接 WPF 或 MAUI 等 UI 框架。通过对接不同的基础平台可实现跨平台功能

总进度：可当成简单的 TextBlock 或 TextBox 使用。附带比较弱的富文本功能

平台进度：

- [x] WPF
- [x] Avalonia
- [x] Skia 渲染（仅渲染，不提供编辑功能）
- [ ] MAUI
- [ ] UNO

## 功能

- 平文本
- 加粗、斜体
- 上下标
- 下划线、删除线、波浪线、着重号、装饰层
- 拼音、上加、下加
- 字体、字号、颜色
- 左对齐、右对齐、分散对齐、两端对齐
- 分词换行
- 项目符号
- 左右缩进
- 段前段后间距（段前段后距离）
- 倍数行距、固定倍数行距
- 遵循中文符号换行规则
- 命中测试，属性和光标系统
- 文本公式混排，图文混排
- 四线格法行内排版

- 蒙文、藏文、合写字（需要平台层给力才行）

开发侧功能：

- 可注入单元测试和模拟测试
- 可脱离渲染引擎，通过 Mock 进行驱动
- 核心库无依赖，无第三方依赖。具体平台对接层的依赖取决于具体的平台对接层需求
- 高可控。可以控制各个模块和逻辑，可以注入干扰排版过程
- 长文本性能友好，支持渲染缓存，支持不可见优化
- 分层 API 设计，既有简单易用的初级 API 层，也有功能强大复杂的高级 API 层
- 支持注入日志和配置进入调试模式

## 架构

从整体的角度：

分层的角度：

调用关系：

依赖关系：

数据走向：

## 各个项目的作用

### LightTextEditorPlus.Core

文本库的平台无关实现，实现了文本的基础排版布局功能。提供给具体平台框架对接的接口，可以在不同的平台框架上，使用具体平台框架的文本渲染引擎提供具体的文本排版布局信息，以及在排版布局完成之后，对接具体平台的渲染

入口类型：TextEditorCore

### LightTextEditorPlus.Wpf

使用 WPF 框架承载的文本库，平台相关具体实现。底层使用 `LightTextEditorPlus.Core` 进行驱动，渲染层和 IME 输入法等使用 WPF 提供

### LightTextEditorPlus.Skia

使用 Skia 提供平台渲染能力，底层使用 `LightTextEditorPlus.Core` 进行驱动。这一层只提供渲染支持，不提供输入交互编辑功能

### LightTextEditorPlus.Avalonia

基于 `LightTextEditorPlus.Skia` 进行的 Avalonia 平台对接。提供 Avalonia…

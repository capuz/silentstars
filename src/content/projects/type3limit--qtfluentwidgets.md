---
repo: "Type3limit/QtFluentWidgets"
name: "QtFluentWidgets"
description: "Qt/C++ widget libs "
readmeQualityOk: true
url: "https://github.com/Type3limit/QtFluentWidgets"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 90
forks: 22
openIssues: 2
closedIssues: 24
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-02-02T07:48:15Z"
lastCommitAt: "2026-10-19T09:11:56Z"
lastReleaseAt: "2026-10-19T09:15:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 30
maintainers: ["Type3limit", "banana110"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1409281c47848b6dbf2c2744dd9a8ac1cefa3a421211c8fea4f77f9eca5e929/Type3limit/QtFluentWidgets"
---

# QtFluentWidgets

一套基于 **Qt Widgets** 的 Fluent Design 风格控件库（含 Demo 与 Qt Designer 插件），提供统一的主题/色板管理与一组常用控件。

- 语言 / Languages:
	- 中文：README.md（默认） / [README.zh-CN.md](https://github.com/Type3limit/QtFluentWidgets/blob/HEAD/README.zh-CN.md)
	- English: [README.en-US.md](https://github.com/Type3limit/QtFluentWidgets/blob/HEAD/README.en-US.md)
- Ask zread for easy use:
  
  - [](https://zread.ai/Type3limit/QtFluentWidgets)

## 预览

### 浅色模式

| 总览 | 按钮 / 开关 | 容器 / 布局 |
| --- | --- | --- |
|  |  |  |

### 深色模式

| 总览 | 按钮 / 开关 | 容器 / 布局 |
| --- | --- | --- |
|  |  |  |

## 特性

- Qt5 / Qt6 兼容（CMake 自动探测 Qt6，否则使用 Qt5）。
- 统一主题与色板：`ThemeManager` + `ThemeColors`。
- Fluent 风格输入控件面板：通过 `Style::paintControlSurface()` 统一圆角/边框/focus ring。
- 内置 `FluentLottieWidget` / `FluentAnimatedIcon` / `FluentAnimatedButton`，通过 `third_party/rlottie` 子模块提供 Lottie JSON 渲染与 marker 状态动画。
- 新增 `FluentProgressRing`、`FluentInfoBar`、`FluentAutoSuggestBox` / `FluentSearchBox`、`FluentFlyout` / `FluentTeachingTip`、`FluentCommandBar` / `FluentDropDownButton` / `FluentSplitButton` 等 WinUI Gallery 常见控件。
- 内置日期范围选择器 `FluentDateRangePicker`，支持双面板范围选择与可配置 prefix / suffix / separator。
- 窗口层支持 `FluentMainWindow` 自定义标题栏插槽、Windows…

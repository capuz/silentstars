---
repo: "oiahoon/scroll-to-github-top"
name: "scroll-to-github-top"
description: "Page TOC and Scroll to Top"
readmeQualityOk: true
url: "https://github.com/oiahoon/scroll-to-github-top"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [58, 34]
topics: ["chrome-extension", "chrome-plugin", "javascript", "github"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 7
watchers: 4
contributors: 5
recentReleases: 2
createdAt: "2017-08-02T09:00:12Z"
lastCommitAt: "2026-08-27T13:58:37Z"
lastReleaseAt: "2026-08-27T14:28:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 65
maintainers: ["oiahoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0a300f23b80156e61f95055e411f41c67474bd6e535295aa78c403e56caa2f7/oiahoon/scroll-to-github-top"
---

# Smart TOC & Scroll

一个面向长文与文档站点的 Chrome 扩展，为网页提供轻量阅读导航。当前提供两种导航类型：`标准目录面板` 与 `Barcode`；Barcode 可进一步选择`滚轮`、`聚光灯`、`GPT`或`少数派`标题预览。扩展支持主题自适应、hover 标题预览、已有控件避让与 SPA 页面更新，并提供平滑回顶能力。

当前版本：`2.15`（Manifest V3）。

官方网站：[https://oiahoon.github.io/scroll-to-github-top/](https://oiahoon.github.io/scroll-to-github-top/)

## 功能特点

- 智能主题适配
  - 基于页面背景亮度自动选择浅色或深色浮层
  - `标准目录面板` 也会采样所在区域，深色文章中不再出现突兀的纯白面板
  - `Barcode` 会额外采样 rail 附近的局部背景，克制调整短横线、回顶按钮与预览标题的对比度
  - 边缘 rail 本体保持透明背景，避免像独立面板一样遮挡正文
  - 使用磨砂玻璃风格主题变量
  - DOM 变化后自动重新应用主题
  - TOC 浮标与展开面板使用统一主题

- 回到顶部操作
  - 面板顶部提供 `Top` 按钮
  - 平滑滚动回到页面顶部
  - 与目录导航处于同一交互上下文
  - 在 `Barcode` 下，回顶按钮以低透明度独立显示，鼠标靠近时会轻柔显形并用水面回弹动效提示，hover 或键盘聚焦后进入稳定选中态

- 目录树功能
  - 自动生成页面目录
  - 智能识别标题层级
  - 平滑的展开/收起动画
  - 标题层级缩进与当前章节高亮
  - 长目录中自动将当前高亮章节滚动到可视区域
  - 点击章节后短暂保持目标高亮，避免平滑滚动期间反馈跳到相邻标题
  - 智能过滤导航栏和侧边栏内容
  - 支持自定义标题样式识别
  - 支持键盘导航、ARIA 属性与焦点态

- 阅读导航样式
  - `标准目录面板`：适合文档站、博客和技术内容页面
  - `Barcode`：适合沉浸式长文阅读，用透明 rail 与短横线表达章节位置，悬停时向外产生 wave 延展
    - `滚轮`：标题在固定观察窗内滚动，以柔和焦点带表达当前项，减少强描边干扰
    - `聚光灯`：hover 时显示当前项上下各 2 项；当前项以紧凑强调面和侧边标记聚焦，邻项逐级淡出
    - `GPT`：idle 保留纯条形码；hover 时展开带 OUTLINE 标题、条目数量和当前位置标记的完整可滚动面板
    - `少数派`：idle 保留固定在正文外侧或屏幕边缘的 2px 竖刻度；hover…

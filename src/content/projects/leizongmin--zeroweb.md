---
repo: "leizongmin/ZeroWeb"
name: "ZeroWeb"
description: "一个用 Rust 写的实验性跨平台浏览器项目。"
readmeQualityOk: true
url: "https://github.com/leizongmin/ZeroWeb"
homepage: "https://zeroweb.leizm.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["browser-engine", "cross-platform", "css", "dom", "experimental", "layout-engine", "rendering", "rust", "wasm", "webview"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-05-30T06:33:02Z"
lastCommitAt: "2026-08-28T12:23:07Z"
lastReleaseAt: "2026-08-09T15:30:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["leizongmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da0f4e5efa095f82996e1fc1137e4b1abec5d8a33bb9632d9fa551acc07a592/leizongmin/ZeroWeb"
---

# ZeroWeb

ZeroWeb 是一个用 Rust 写的实验性跨平台浏览器项目。这个仓库同时在做两件事：

官网：[zeroweb.leizm.com](https://zeroweb.leizm.com)

- 一个可嵌入、可复用的 `ZeroWebView` 库
- 一个完整的 `ZeroBrowser` 浏览器应用

项目主线会尽量把核心代码和依赖边界握在自己手里，所以页面内核主要基于宽松许可证的 Rust 组件慢慢搭起来。DOM、CSS、布局、渲染、导航和安全边界，都在这个仓库里一层层补。

这也是个 AI-first 的工程实验：人只负责方案设计、关键决策和结果验证，代码开发几乎全部由 AI 自主完成。我们想看看，在架构边界、测试和验收都写清楚的前提下，AI 到底能把这种复杂系统推进到什么程度。

> [!IMPORTANT]
> 这个仓库还在实验阶段，主要用来学习、研究和做工程探索。核心 crate 和测试已经有不少东西，但浏览器 shell、完整的页面 JavaScript 运行时、真实站点兼容性都还在路上。它现在不是一个日常可用的浏览器。商用或其他生产用途，请自己评估功能、安全、兼容性、性能和许可证边界风险。

**快速导航**

- [路线图](https://github.com/leizongmin/ZeroWeb/blob/HEAD/ROADMAP.md)
- [官网](https://zeroweb.leizm.com)
- [当前状态](#当前状态)
- [快速开始](#快速开始)
- [仓库结构](#仓库结构)
- [文档导航](#文档导航)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

## 项目定位

- **以嵌入为先**: 除浏览器应用外，项目还要交付稳定的 Rust `ZeroWebView` API，方便其他应用直接集成。
- **许可证边界优先**: 主线依赖优先选择 MIT、Apache-2.0、BSD 等宽松许可证，避免核心能力受不合适的 copyleft 依赖约束。
- **Rust 全栈路线**: 页面内核、宿主层和渲染基础设施都尽量在 Rust 生态内完成。
- **AI 可以写，但要能审**: 欢迎 AI 辅助贡献，但提交上来的改动必须能讲清楚、测清楚、看清楚。

## 当前状态

| 方向 | 现状 |
|------|------|
| `ZeroWebView` | 已有稳定嵌入 API、可运行 demo，以及跨 crate 和产品层 smoke 测试；Service Worker、WASM 桥接与 `SecurityContext` 安全检查等页面级能力已接入其中 |
| 浏览器应用 | `zero-browser` 固定经…

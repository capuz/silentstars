---
repo: "xhls008/zcode-tui"
name: "zcode-tui"
description: "Rust fallback TUI for ZCode Linux CLI"
readmeQualityOk: true
url: "https://github.com/xhls008/zcode-tui"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-02T14:44:00Z"
lastCommitAt: "2026-08-28T14:31:03Z"
lastReleaseAt: "2026-08-26T10:43:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 49
maintainers: ["xhls008", "auenger", "tastypear"]
openGraphImageUrl: "https://opengraph.githubassets.com/39e8d02f8ed7e86b4648114ee43de69eb482806f0574f6fece84298f93c55582/xhls008/zcode-tui"
---

# zcode-tui

[中文](https://github.com/xhls008/zcode-tui/blob/HEAD/README.md) | [English](https://github.com/xhls008/zcode-tui/blob/HEAD/README.en.md) | [Releases](https://github.com/xhls008/zcode-tui/releases) | [Design](https://github.com/xhls008/zcode-tui/blob/HEAD/docs/2026-07-04-design.md)

> v0.6.0 界面实机截图：ZCode CLI kernel 0.16.3，macOS。展示自适应 ASCII
> 品牌面板、终端原生 scrollback、app-server 阶段追加，以及只读的父 Agent /
> Subagent / Background Inspector；当前源码另已实测适配 ZCode Linux 3.8.1。

> **非官方声明**：`zcode-tui` 不是 ZCode / 智谱官方项目，也未获得官方背书。
> 它是社区/个人维护的 Linux 终端 fallback，用来补齐官方包当前缺失的 TUI 体验。

> **用量优惠**：zcode-tui 仍使用用户自己的官方 ZCode 账户和内核，不另建计费
> 通道，因此继承 ZCode 的 **1.5 倍（150%）用量优惠**；具体资格与规则仍以
> ZCode 官方账户政策为准。

`zcode-tui` 是一个 **Rust 写的 ZCode 终端 TUI fallback**，专门兜住官方 Linux
包缺少 `@zcode/tui` 的尴尬空洞。它面向 SSH、tmux、无桌面服务器和纯键盘
工作流：普通输入优先走官方 `zcode app-server`，不可用时自动回退到
`zcode --prompt`；常用 slash 命令、MCP 配置、shell escape、命令面板、会话
选择、阶段流式输出和编辑器工作流在本地补齐。

它不伪装成官方实现，只是一个实用的终端壳。

## 当前验证基线

| 组件 | 当前版本 / 状态 |
|---|---|
| ZCode Linux x64 桌面包 | **3.8.1**（官方 feed） |
| 官方 CLI kernel | **0.16.3**（随 ZCode 3.8.1，版本未变） |
| zcode-tui | **0.6.2** |
| 协议兼容 | 3.8.1/3.7.7/3.7.6：runtime preferences 握手 + legacy 正文流 + V4 控制；3.5.3：legacy +…

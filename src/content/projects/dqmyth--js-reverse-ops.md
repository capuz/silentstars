---
repo: "DQmyth/js-reverse-ops"
name: "js-reverse-ops"
description: "A high-leverage JavaScript reverse engineering skill for deobfuscation, runtime tracing, browser-side workflow reconstruction, anti-bot/signer/cookie analysis, and   evidence-driven replay. Designed to turn difficult web targets into structured, automatable reverse workflows."
readmeQualityOk: true
url: "https://github.com/DQmyth/js-reverse-ops"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-20T06:04:48Z"
lastCommitAt: "2026-09-04T08:11:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 22
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8cd05d2fd4205e45a85b5d15bd91bceb24b54b8b4ed3d35674764540bc320bab/DQmyth/js-reverse-ops"
---

# js-reverse-ops

`js-reverse-ops` 是一个面向 Codex 的高强度 JavaScript 逆向技能包，目标不是“读懂一点混淆代码”，而是把一个真实站点或前端目标，从页面探测、运行时取证、混淆剥离、签名恢复，一路推进到可复现的 Node / Python 回放交付。

> 面向真实浏览器目标的逆向工作流，强调运行时真相、证据落盘、可复跑交付。

## 项目摘要

- 定位真实请求，而不是停留在静态猜测
- 优先恢复字段来源，而不是只抄最终参数
- 产出可复核 artifact，而不是一次性聊天结论
- 支持从页面分析一路落到 Node / Python replay

## 和普通逆向笔记的区别

很多逆向资料停在“这段代码大概做了什么”或“这里能打出一个 sign”。`js-reverse-ops` 的目标更工程化：

- 不满足于描述逻辑，而是要求找到真实请求和真实字段来源
- 不满足于一次跑通，而是要求把结果沉淀成可复跑、可复核的产物
- 不把运行时和静态分析割裂开，而是明确分成 `Locate`、`Runtime`、`Recover`、`Replay`
- 不鼓励只保留零散笔记，而是尽量落成脚本、模板、证据目录和交付脚手架

## 使用场景

- 前端签名、动态 cookie、token、nonce、加密参数分析
- 依赖浏览器状态、首屏 bootstrap、事件链路的目标
- 压缩包、字符串表、VM 壳、模块图、wasm 混合体
- 需要把逆向结果整理成可维护工具链的团队场景

它适合这类任务：

- 接口 `sign`、`token`、`nonce`、加密参数、动态 cookie 无法直接静态看出来
- 页面依赖浏览器运行时、首屏 bootstrap、延迟加载、闭包状态、事件链路
- 代码是压缩包、VM 壳、字符串表、eval 包裹、模块图、wasm 混合体
- 你不只想“分析一下”，而是要拿到一套可验证、可复跑、可交付的结果

## 强项

- 运行时优先：先找真实请求、真实调用链、真实字段来源，而不是靠猜
- Hook 优先：优先用 hook、预注入、请求关联，少走低效断点翻帧
- 证据驱动：所有结论尽量落盘成 artifact，而不是停留在聊天结论
- 逆向全链路：覆盖 `Locate`、`Runtime`、`Recover`、`Replay` 四个阶段
- 交付导向：目标是产出可重放的脚本、证据包、风险摘要、回放脚手架
- 表现层还原：不只处理 transport 和 signer，也能处理响应进浏览器后的 DOM 筛选、样式干扰、可见层重排
- 动态字体解码：能处理 accepted 响应里临时下发的 `woff/ttf` 字体，把页面局部字形重新映射成数字或符号
- bootstrap token…

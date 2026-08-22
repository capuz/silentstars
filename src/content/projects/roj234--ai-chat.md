---
repo: "roj234/ai-chat"
name: "ai-chat"
description: "LLM Chat/Agent/RP/Game, all in one static frontend (Optional backend™) / 暂时不支持i18n只有中文版"
readmeQualityOk: true
url: "https://github.com/roj234/ai-chat"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-18T13:49:42Z"
lastCommitAt: "2026-08-22T04:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 37
maintainers: ["roj234"]
openGraphImageUrl: "https://opengraph.githubassets.com/05609c918234287294412736bc702019ec894dc187c1c4db2421bce7c20d411c/roj234/ai-chat"
---

# AiChat - 爱聊天

现代化的高性能纯 Web 多用途 AI 前端，基于 [Unconscious](https://github.com/Roj234/unconscious) 响应式框架。

## 为什么选它

大部分 LLM 前端都是臃肿的 SaaS 复制品，剩下那些基本又是脆弱的周末项目。  
不仅如此，它们还
- “专注一个功能”：只能聊天、只能做项目，或者只能角色扮演。  
- 硬盘杀手：喜欢两万个 py/js 还有比中子星更重的 node_modules 吗
- 内存杀手：bun 对 Windows 的支持还是实验性，issues 里挂着好几个没修的内存泄漏，甚至没法在 cmd.exe 里运行 —— 直接卡死

这是我，一个重度依赖洁癖，内存洁癖，代码体积洁癖，写给自己的项目。

- **功能没有边界**：你可以在RP会话中调用MCP，在Coding Task中进行对话分支，以及各种工具
  - 产品用途不应决定能力上限，它们生来可以组合，应该组合，将会组合。
  - 尽管有的组合可能不尽如人意，*但它可以。*
- **前端 2MB**，后端加依赖约 600 KB
- **只需要浏览器**：Chrome (or WebView) 118+，提供有限的 Firefox 支持。
- **不需要 Docker，不需要编译，不需要 node_modules 和数据库服务**
  - 哪怕连后端都不想要，你的敌人也只有 CORS

## 为什么不选它

- 功能很多，文档很少，上手可能困难。
- 测试较少，可能存在 bug
- 单人项目，可能随时破坏性更改
- 纯前端，无法在无头环境运行，但支持手机远程控制（需后端）
- 不支持主动缓存写入 —— 你不应该将它接入缓存需要主动写入的模型

## 特性

### 高性能，低内存

> 性能是一种尊重。  
> 我自己就是 AiChat 的深度用户，页面一开就是几天，从未 Out Of Memory，内存几乎不超过 100MB。  
> 你可能会说这有什么特殊的，但我使用 32 位的 Chrome。  
> 相当一部分"现代化"网站会在一下午甚至几分钟内内存溢出，例如 DeepSeek 网页版和模搭社区。

- **流式 Markdown 渲染**：自研解析器，性能优于 `marked`  
正确渲染**“中文引号加粗”**（不符合 CommonMark 规范，但 LLM 输出中很常见）
- **语法高亮**：比 `shiki-stream` 更快，数百 TPS 下流畅不丢帧（大概）
- **虚拟列表**：对话和代码块均使用虚拟滚动
- **按需加载**：Chart.js、KaTeX、Mermaid、语法高亮等按需加载

### Agent & 工具

-…

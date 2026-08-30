---
repo: "Ariestar/sivtr"
name: "sivtr"
description: "A unified agent memory workspace for human and agent"
readmeQualityOk: true
url: "https://github.com/Ariestar/sivtr"
homepage: "https://sivtr.pages.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["agent", "cli", "rust", "sivtr", "output", "workspace", "search", "dsh-plugin", "dsh-plugins"]
stars: 256
forks: 19
openIssues: 29
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 7
createdAt: "2026-04-20T12:31:22Z"
lastCommitAt: "2026-08-30T09:23:51Z"
lastReleaseAt: "2026-08-18T05:09:12Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 83
undervaluedScore: 27
maintainers: ["Ariestar", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58bedd2ccbb0818209e7610b3f4bfd62007d7e37fc0ab019fe609bc509eb7669/Ariestar/sivtr"
fundingLinks: ["CUSTOM:https://paypal.me/wolllf987", "CUSTOM:https://sivtr.pages.dev/zh-cn/project/sponsor/"]
discussionCount: 0
---

</p>

<h1 align="center">sivtr</h1>

  一个面向智能体和人的统一的记忆空间
  <br>
  让智能体和终端共享同一个上下文
  <br>
  <strong>你的 Agent 记忆，不必是一套笨重的知识系统。</strong>
</p>

</p>

  <strong>简体中文</strong>
  ·
  ·
  ·
</p>

</p>

---

## 为什么需要 sivtr？

开发者和 Agent 经常浪费时间重建已经存在的上下文：终端报错、测试输出、工具日志、之前的 AI 会话。`sivtr` 把这些本地工作变成可搜索的记忆，但不要求你引入一套很重的知识系统。

有了 `sivtr`，你可以：

- 让 Agent 修复最近一次失败，而不用自己粘贴日志；
- 几秒钟找回昨天的测试输出、构建报错或关键决策；
- 从摘要跳回当时那条命令输出或 Agent 回复；
- 把一组有用结果保存成 `@failures` 这样的变量，在下一条命令里继续用。

> [!IMPORTANT]
> Agent 工作流建议安装 `sivtr` CLI，用 `sivtr mcp install` 注册 MCP，并可选用内置 `sivtr-memory` skill。MCP 是 Agent 读取本地证据的主路径；skill 负责教它何时、如何调用。

## 特性

- **MCP 优先的 Agent 记忆**：一次 `sivtr mcp install`，Agent 直接调用 `sivtr_search` / `sivtr_show` / `sivtr_zoom` / `sivtr_filter` / `sivtr_status`，不用你粘贴日志。
- **带输出的 shell history**：记录 Bash、Zsh、PowerShell、Nushell 里的命令、stdout/stderr、退出码、目录和耗时。
- **一个搜索面覆盖本地工作**：终端输出 + 所有已注册 Agent provider（Codex / Claude Code / Cursor / Dsh / Gemini / Goose / Hermes / OpenCode / OpenClaw / Grok / Pi / Qoder / Qoder-CN / Qwen …）——MCP 或 CLI 都能用。
- **精确证据，而不是摘要**：每个命中都落到稳定 ref，可 show / zoom / filter，或交给下一个 Agent。
- **命名记忆变量**：把结果保存成 `@failures`，复用 `@last`，管道用 `@`，也可 `@failures[1,3..5]` 取子集。
- **跨设备访问**：只读分享 workspace，用…

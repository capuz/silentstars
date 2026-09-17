---
repo: "xnqycs/Eylu"
name: "Eylu"
description: "Eylu 是一个面向本地代码库的 Go 终端编程 Agent。核心协议、模型驱动、工具、权限、上下文和会话持久化保持解耦，兼容 OpenAI Responses 风格的 HTTP 网关。"
readmeQualityOk: true
url: "https://github.com/xnqycs/Eylu"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-07-19T06:31:12Z"
lastCommitAt: "2026-09-17T08:50:53Z"
lastReleaseAt: "2026-07-23T18:56:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["xnqycs"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a5234cf97428e2c858bd7fc96500d3e20faaa7411d245009b4602ab394e5911/xnqycs/Eylu"
---

# Eylu

简体中文 | [English](https://github.com/xnqycs/Eylu/blob/HEAD/README_EN.md)

面向本地代码库的终端编程 Agent。Eylu 在你的工作区中理解代码、调用工具、执行计划并保存会话，同时兼容 OpenAI Responses 与 Chat Completions 风格的 HTTP 网关。

[下载](https://github.com/xnqycs/Eylu/releases) · [更新日志](https://github.com/xnqycs/Eylu/blob/HEAD/CHANGELOG.md) · [发版指南](https://github.com/xnqycs/Eylu/blob/HEAD/RELEASING.md) · [License](https://github.com/xnqycs/Eylu/blob/HEAD/LICENSE)

</p>

## 为什么选择 Eylu

| 能力 | 使用体验 |
|---|---|
| 本地代码库上下文 | 自动采集项目结构、Git 状态与相关文件，引用内容受工作区边界保护 |
| 完整 Agent 循环 | 支持模型流式输出、多轮工具调用、任务清单、提问与执行审计 |
| 可控的工具权限 | `manual`、`plan`、`auto`、`full` 四种模式覆盖审阅、规划和自动执行 |
| 长会话管理 | 持久化会话、Prompt 历史、任务状态和上下文账本，支持压缩与恢复 |
| 多 Provider 路由 | 按任务、能力、上下文窗口、优先级和成本选择模型 |
| 可扩展能力 | 支持 Agent Skills、签名 Skill 仓库以及 MCP stdio、Streamable HTTP、SSE server |

Eylu 提供全屏 TUI，也能以纯文本、JSON 或 JSONL 方式接入脚本和自动化流程。

## 安装

### 下载预编译版本

从 [GitHub Releases](https://github.com/xnqycs/Eylu/releases) 下载与系统匹配的归档：

| 系统 | x64 | ARM64 |
|---|---|---|
| Windows | `Eylu_<version>_Windows_amd64.zip` | `Eylu_<version>_Windows_arm64.zip` |
| Linux | `Eylu_<version>_Linux_amd64.tar.gz` | `Eylu_<version>_Linux_arm64.tar.gz` |
| macOS | `Eylu_<version>_Darwin_amd64.tar.gz` |…

---
repo: "whshang/herdr-mcp"
name: "herdr-mcp"
description: "Provides a stable Webchat → Mac/Linux/Windows Connector MCP via herdr, so web chat can read and write local files directly. Supports any custom Connector web chat AI service, including ChatGPT, Grok, and Claude."
originalDescription: "借助 herdr 提供稳定的 Webchat → Mac/Linux/Windows Connector MCP，网页对话直接读写本地文件，支持 ChatGPT、Grok、Claude 等任意自定义 Connector 的网页对话AI服务。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/whshang/herdr-mcp"
homepage: "https://whshang.github.io/herdr-mcp/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [58, 30]
topics: ["chatgpt", "chrome-extension", "herdr", "llm", "mcp", "cloudflare-workers", "coding-agent"]
stars: 10
forks: 2
openIssues: 9
closedIssues: 96
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-20T01:48:30Z"
lastCommitAt: "2026-11-02T13:38:48Z"
lastReleaseAt: "2026-11-02T08:21:36Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["whshang"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6c9306ba80649a5a1ae6690933778c78c52476c5e435837ea544b4feefec98f/whshang/herdr-mcp"
---

# herdr-mcp

**Simplified Chinese** · [English](https://github.com/whshang/herdr-mcp/blob/HEAD/README.en.md) · [日本語](https://github.com/whshang/herdr-mcp/blob/HEAD/README.ja.md)

Let Web AI such as ChatGPT keep developing on your own computer: read and write files, use Git, run commands and tests, call Coding Agents, and schedule tasks across multiple computers.

**[Documentation site](https://whshang.github.io/herdr-mcp/zh-CN/)**

## One-sentence installation

Send the following sentence to the Coding Agent on your computer:

```text
Please install and configure Herdr and herdr-mcp according to https://raw.githubusercontent.com/whshang/herdr-mcp/main/docs/i18n/zh-CN/agent-install.md. Use the latest Stable GitHub Release, automatically complete all steps that can be safely automated, and pause only when I need to act for Cloudflare login/authorization, macOS Full Disk Access, and ChatGPT OAuth/Connector approval.
```

The Agent will check the environment, install Herdr and herdr-mcp, deploy the Worker, connect the workstation, and complete verification.

Regular users do not need git clone, npm, Cargo, or Wrangler, and do not need to install the Runtime manually.

## Cloudflare…

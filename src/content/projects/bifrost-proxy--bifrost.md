---
repo: "bifrost-proxy/bifrost"
name: "bifrost"
description: "Bifrost is a high-performance, AI-friendly proxy server written in Rust. It offers powerful request interception, modification, and rule configuration capabilities, supports TLS decryption, script extensions, and other advanced features, supports powerful fuzzy search, import/export sharing, one-click request replay, and self-management of Coding Agent. It provides request management and validation capabilities similar to Postman, seamlessly integrating with proxy capabilities."
originalDescription: "Bifrost 是一个用 Rust 编写的高性能、AI 友好的代理服务器，它提供强大的请求拦截、修改和规则配置能力，支持 TLS 解密、脚本扩展等高级功能，支持强大的模糊搜索，支持导入导出分享，支持一键重放请求，支持Coding Agent 自主管理。提供类似 postman 的请求管理和验证能力，无缝和代理能力集成。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bifrost-proxy/bifrost"
homepage: "https://bifrost-proxy.github.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["agent", "ai-tools", "proxy", "proxy-server", "rust", "whistle", "bifrost-proxy", "postman", "ai"]
stars: 100
forks: 16
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2026-02-28T02:23:06Z"
lastCommitAt: "2026-07-11T05:56:59Z"
lastReleaseAt: "2026-03-03T16:50:27Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 33
maintainers: ["bifrost-proxy", "github-actions[bot]", "haozhenfei"]
openGraphImageUrl: "https://opengraph.githubassets.com/a391b5fab404659a1f17d5d56752c1eadd42bd4597b1de85a52c44bd86fda4f7/bifrost-proxy/bifrost"
discussionCount: 1
---

# Bifrost

  <strong>High-performance HTTP/HTTPS/SOCKS5 proxy server</strong>
</p>

</p>

> Language: **Chinese** | [English](https://github.com/bifrost-proxy/bifrost/blob/HEAD/README.en.md)
>
> · [Documentation site](https://bifrost-proxy.github.io/)

Bifrost is a high-performance, AI-friendly proxy server written in Rust, inspired by Whistle. It provides request interception, rule modification, TLS interception, script extensions, traffic viewing, request replay, and Web UI management capabilities.

## Quick Start

Install CLI; automatically install desktop App on macOS and Windows:

Method 1: Install using script

macOS / Linux / Git Bash:

```bash
curl -fsSL https://raw.githubusercontent.com/bifrost-proxy/bifrost/main/install-binary.sh | bash
```

Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/bifrost-proxy/bifrost/main/install-binary.ps1 | iex
```

This script always installs CLI and automatically installs the same version desktop App on macOS/Windows; platforms like Linux that do not currently provide desktop installation packages remain CLI-only. If only CLI is needed, you can skip the desktop version using `--no-desktop` (Bash / Git Bash) or…

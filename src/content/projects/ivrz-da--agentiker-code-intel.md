---
repo: "IVRZ-da/agentiker-code-intel"
name: "agentiker-code-intel"
description: "70 AST-aware code intelligence tools for Hermes Agent — tree-sitter + ast-grep + LSP bridge for Python, TypeScript, Go, Rust, and 5 more languages"
readmeQualityOk: true
url: "https://github.com/IVRZ-da/agentiker-code-intel"
homepage: "https://github.com/IVRZ-da/agentiker-code-intel"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ast-grep", "code-intelligence", "hermes-agent", "hermes-plugin", "lsp", "python", "tree-sitter", "typescript", "developer-tools", "static-analysis"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-06-24T19:38:25Z"
lastCommitAt: "2026-11-18T12:06:16Z"
lastReleaseAt: "2026-11-18T11:58:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 29
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/86ee1fc918f658350cf02d3cacbd08d72ac12caf56b041f2fced7ee9ae9c591c/IVRZ-da/agentiker-code-intel"
---

# 🧠 agentiker-code-intel — Hermes Plugin

> **AST-aware code intelligence for Hermes Agent** — tree-sitter + ast-grep + LSP
> 70 tools that understand your code's *structure*, not just its text. 10–50× fewer tokens for code navigation.

> **Forked** from [`rewasa/hermes-code-intel-plugin`](https://github.com/rewasa/hermes-code-intel-plugin) — extended for [agentiker.de](https://agentiker.de) (70 Tools, 3125 Tests)

## 📋 Table of Contents

- [✨ Why?](#-why)
- [🚀 Quick Start](#-quick-start)
- [🛠 Tools](#-tools)
- [📦 Installation](#-installation)
- [🌐 Supported Languages](#-supported-languages)
- [🏗 Architecture](#-architecture)
- [🔧 How It Works](#-how-it-works)
- [🧪 Development](#-development)
- [🤝 Contributing](#-contributing)
- [🙏 Credits](#-credits)

---

## ✨ Why?

Hermes ships with `search_files` (regex grep) and `read_file` (raw text). Those work, but they're **blind to syntax** — they match comments, strings, and formatting equally. This plugin adds:

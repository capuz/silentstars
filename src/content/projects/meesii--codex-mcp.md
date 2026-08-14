---
repo: "meesii/codex-mcp"
name: "codex-mcp"
description: "Codex-MCP for ChatGPT Web"
readmeQualityOk: true
url: "https://github.com/meesii/codex-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-31T22:16:36Z"
lastCommitAt: "2026-08-14T05:12:28Z"
lastReleaseAt: "2026-08-11T03:25:34Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["Luokavin", "meesii", "ybubuzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9573a314cbf98c93b94b14b67b9dc3a53ff36ae8985c39136bb7039f6ffd10f/meesii/codex-mcp"
---

# codex-mcp

让 ChatGPT 直接操作你电脑上的代码项目。

安装并连接后，你可以在 ChatGPT 里直接说：

- “先看看这个项目是做什么的”
- “检查一下现在有哪些改动”
- “修掉这个报错”
- “跑一下测试”
- “把这个功能实现完”
- “切到另一个项目继续”

codex-mcp 会在你的电脑上读取文件、修改代码、执行命令、查看 Git，并把结果返回给 ChatGPT。

> codex-mcp 面向个人开发环境使用。它拥有很强的本机操作能力，请只连接你自己的 ChatGPT 和你信任的项目。

---

## 它是怎么工作的？

codex-mcp 在你的电脑上运行一个后台服务，并通过 MCP 把本地开发能力提供给 ChatGPT。

```text
ChatGPT
   │
   │ HTTPS / MCP
   ▼
Cloudflare Tunnel 或你自己的 HTTPS 入口
   │
   ▼
codex-mcp 后台服务
   │
   ├── 项目 A
   ├── 项目 B
   └── 项目 C
```

你只需要运行 **一个 codex-mcp 后台服务**。

不同项目不需要分别启动服务器，也不需要分别创建 Cloudflare Tunnel。进入每个项目目录运行一次 `codex-mcp`，它就会把这个项目注册到同一个后台服务里。

每个 ChatGPT 对话只会绑定一个项目。这样你可以在不同对话里分别处理不同项目，也可以明确切换当前对话使用的项目。

---

## 你需要准备什么？

### 必需

- **Node.js 22 或更高版本**

### 推荐

- **Git**：用于查看状态、提交历史和差异

### 如果要从 ChatGPT 连接

你需要一个可以通过 HTTPS 访问到本机 codex-mcp 的公网地址。

最简单的方式是：

- 一个 **Cloudflare 账号**
- 一个已经接入 Cloudflare 的 **域名**

codex-mcp 可以自动创建和管理 Cloudflare Tunnel。

如果你已经有自己的反向代理、服务器或其他 HTTPS 入口，也可以不让 codex-mcp 管理 Cloudflare。

### 可选

如果电脑上已经安装了这些工具，codex-mcp 还可以读取它们已有的能力：

- Codex
- Claude Code
- Agent Skills

没有这些也不影响 codex-mcp 的核心功能。

---

# 快速开始

## 1. 安装

推荐用 npm：

```bash
npm install -g @meesii/codex-mcp
```

也可以用安装脚本：

### macOS / Linux…

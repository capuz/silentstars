---
repo: "KonghaYao/peri"
name: "peri"
description: "Lightweight Rust Agent only use 50MB RAM, but Claude Code Plugin compatible, Dynamic Workflow, Goal, Artifacts, Free Web Search,  full feature and better support!"
readmeQualityOk: true
url: "https://github.com/KonghaYao/peri"
homepage: "https://docs.peri-code.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["acp", "claude-code", "coding-agent", "deepseek", "glm", "mcp", "rust", "streaming-markdown", "tui"]
stars: 255
forks: 41
openIssues: 9
closedIssues: 104
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2026-03-20T01:57:08Z"
lastCommitAt: "2026-11-17T13:23:24Z"
lastReleaseAt: "2026-05-04T10:26:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 33
maintainers: ["KonghaYao", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3301d11eb7dd1af65ed8d89847f69c06727a438e198f45e9f88832212c7c8b8/KonghaYao/peri"
---

# Peri Code

### All Coding for you.

A native Rust coding agent for macOS, Linux, and Windows.<br>
Bring an Anthropic or OpenAI-compatible endpoint.

[**Get started ↓**](#get-started) · [Documentation](https://konghayao.github.io/peri-cool/) · [Releases](https://github.com/konghayao/peri/releases)

---

**AGENTS, WORKING TOGETHER**

Plan delivery. Coordinate agents. Delegate tasks.

**The essentials, included.**

Streaming Markdown · Compaction · Langfuse<br>
Skills & hooks · Plugins · Model profiles<br>
Rewind · Fork · Resume<br>
**Terminal · Headless · ACP**

## Get started

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/konghayao/peri/main/scripts/install.sh | bash
```

中国大陆用户可使用代理安装：

```bash
curl -fsSL https://github-proxy-5ad00a.netlify.app/konghayao/peri/raw/main/scripts/install.sh \
  | GITHUB_PROXY=https://github-proxy-5ad00a.netlify.app \
    GITHUB_API_PROXY=https://github-proxy-5ad00a.netlify.app/api \
    bash
```

安装完成后，运行 `peri update --use-proxy` 通过同一代理更新。

**Windows PowerShell**

```powershell
irm https://raw.githubusercontent.com/konghayao/peri/main/scripts/install.ps1 | iex
```

Also installable with [mise](https://mise.jdx.dev/)…

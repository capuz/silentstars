---
repo: "alib8b8/aflare"
name: "aflare"
description: "个人优先的本地自动化 Agent · AI 与你的数据之间确定且安全的控制层 · 数据不出本地 · 连接你自己的 LLM / 文件 / 笔记 / 数据库（Connector API） · ReAct 推理 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · 离线可用"
readmeQualityOk: true
url: "https://github.com/alib8b8/aflare"
homepage: "https://github.com/alib8b8/aflare"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["automation", "llm", "mcp", "agent", "dag", "go", "local-first", "saga", "data-protection", "offline"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2022-10-16T07:06:31Z"
lastCommitAt: "2026-08-25T04:10:23Z"
lastReleaseAt: "2026-08-16T10:35:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 84
maintainers: ["alib8b8"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7f4e598c78fab869ebc1f0a3615025ab9cba50e0d387fec9f26330be994f5f4/alib8b8/aflare"
discussionCount: 2
---

<h1>aflare</h1>
  <p>
    <strong>中文</strong> ·
  </p>
  <p><strong>让 AI 告别聊天，开始执行</strong></p>
  <p><em>个人优先 · 本地运行 · 数据不出本地 · 连接你自己的 LLM / 文件 / 笔记 / 数据库 · ReAct 推理 · 确定性工作流执行</em></p>
  <p>AI 与你的数据之间「确定且安全」的控制层</p>

  <p>
    </a>
    </a>
    </a>
    </a>
  </p>
</div>

---

## 快速开始

### 安装

**macOS / Linux** —— 一键安装(自动检测平台与架构,含校验和验证):

```bash
curl -fsSL https://raw.githubusercontent.com/alib8b8/aflare/main/install.sh | bash
```

**Windows** —— PowerShell 一键安装(自动检测架构并加入用户 PATH):

```powershell
irm https://raw.githubusercontent.com/alib8b8/aflare/main/install.ps1 | iex
```

<details>
<summary><b>其他安装方式</b>(Homebrew / 手动下载 / deb · rpm)</summary>

```bash
# Homebrew(macOS / Linuxbrew)
brew install alib8b8/tap/aflare

# 手动下载二进制
#   GitHub:  https://github.com/alib8b8/aflare/releases
#   国内加速: https://ghproxy.com/https://github.com/alib8b8/aflare/releases
```

- `deb` / `rpm` 包见每个 Release 的附件。
- 国内网络下安装脚本会自动切换到镜像加速下载。

</details>

> **可选**:安装 bubblewrap 以获得完整沙箱隔离(`code_interpreter` 节点需要)
> - Ubuntu/Debian: `sudo apt install bubblewrap`
> - macOS:        `brew install bubblewrap`
> - Fedora:       `sudo dnf install bubblewrap`

```bash
# 1. 环境自检（零配置，立即可跑）
aflare doctor

# 2.…

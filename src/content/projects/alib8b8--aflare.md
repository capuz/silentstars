---
repo: "alib8b8/aflare"
name: "aflare"
description: "本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · 离线/内网可用"
readmeQualityOk: true
url: "https://github.com/alib8b8/aflare"
homepage: "https://github.com/alib8b8/aflare"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["automation", "workflow", "llm", "mcp", "agent", "dag", "go", "local-first", "react", "saga"]
stars: 11
forks: 3
openIssues: 6
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2022-10-16T07:06:31Z"
lastCommitAt: "2026-08-21T04:10:28Z"
lastReleaseAt: "2026-08-16T10:35:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 77
maintainers: ["alib8b8"]
openGraphImageUrl: "https://opengraph.githubassets.com/391463efae1c2bcbb5ce7f92b244344a7a07a125a45b8af59fb308a0cb213716/alib8b8/aflare"
discussionCount: 2
---

<h1>aflare</h1>
  <p>
    <strong>中文</strong> ·
  </p>
  <p><strong>让 AI 告别聊天，开始执行</strong></p>
  <p><em>本地优先 · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行</em></p>

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

# 2. 零配置示例：读取 post.md → 转 HTML → 写…

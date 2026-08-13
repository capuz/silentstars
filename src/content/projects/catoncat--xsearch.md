---
repo: "catoncat/xsearch"
name: "xsearch"
description: "One-shot structured search CLI and Agent Skill for OpenAI-compatible Grok model endpoints"
readmeQualityOk: true
url: "https://github.com/catoncat/xsearch"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-14T14:50:06Z"
lastCommitAt: "2026-07-23T15:48:09Z"
lastReleaseAt: "2026-07-23T15:53:13Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 35
maintainers: ["catoncat", "jiangge"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1300617355/d9ff1e57-195b-427b-8fbc-f90eaaadb36e"
---

</p>

# xsearch

**把你已经在用的 Grok 反代，变成 Agent 的搜索工具。**

`xsearch` 通过兼容的第三方 Grok 模型接口，为 Agent 提供结构化网页搜索。不需要 MCP，不需要复杂的安装过程，任何支持 Skill 和命令执行的 Agent 都可以使用。

## 安装

安装 skill 定义并选择你的 Agent 和安装范围：

```bash
npx skills add catoncat/xsearch
```

正常使用不需要第二步：skill 第一次运行时会自动下载当前平台对应的发行版并校验 SHA-256。

如果希望在第一次使用前完成安装和配置，可以手动运行平台安装器。它会把 skill 和 CLI 刷新到默认的全局安装目录，并在配置文件不存在时创建一份模板。

macOS / Linux：

```bash
curl -fsSL https://raw.githubusercontent.com/catoncat/xsearch/main/install.sh | bash
```

Windows PowerShell：

```powershell
irm https://raw.githubusercontent.com/catoncat/xsearch/main/install.ps1 | iex
```

## 配置

CLI 安装器会自动创建本地配置文件；如果已存在则跳过：

```text
macOS / Linux   ~/.config/xsearch/config.toml
Windows         %APPDATA%\xsearch\config.toml
```

安装完成后，编辑该配置文件，填入反代地址和模型名：

```toml
api_url = "https://your-grok-proxy.example/v1"
model = "your-grok-model"
```

API key 尽量放在环境变量里：

```bash
export XSEARCH_API_KEY="your-provider-key"
```

然后让 Agent 使用 xsearch 搜索。支持 slash skill 的宿主可用 `/skill:xsearch 你的问题` 明确调用；其他宿主直接点名 xsearch 即可。问题拆分、并发检索、来源整理和结果综合都由 skill 完成。

## 为什么不浪费上下文

完整搜索结果保存在本地 artifact 中。Agent 先收到一个很小的回执，再读取 manifest，只加载真正需要的结果文件。证据不会被截断，也不会一次性塞满对话上下文。

```text
问题 -> 回执 -> manifest -> 按需读取结果…

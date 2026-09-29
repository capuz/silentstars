---
repo: "Rimagination/instsci"
name: "instsci"
description: "InstSci: academic paper retrieval with Open Access fallback and browser-backed institutional access for AI agents and CLI workflows."
readmeQualityOk: true
url: "https://github.com/Rimagination/instsci"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 362
forks: 23
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-02T14:10:44Z"
lastCommitAt: "2026-09-29T08:09:57Z"
lastReleaseAt: "2026-09-29T08:10:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 10
maintainers: ["Rimagination"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c94aba8ce64974f9ead7c75070be416d8f436f4868dcb002472ba06c85e498/Rimagination/instsci"
---

</p>

</p>

[中文](#中文) | [English](#english)

## 中文

InstSci 是一个面向科研用户和 AI Agent 的论文获取工具。它优先查找开放获取全文；遇到需要订阅权限的论文时，会通过可见浏览器复用你自己的学校、图书馆或机构访问权限。

### 主要能力

- 开放获取优先：Unpaywall、arXiv、OpenAIRE 候选来源；支持 Semantic Scholar 检索与出版社元数据。
- 机构访问辅助：支持 Shibboleth、OpenAthens、CARSI、WebVPN、EZproxy 等常见路径。
- 出版社工作流：覆盖 ACM、ACS、AIP、IEEE、IOP、Nature、Oxford、RSC、ScienceDirect、Springer、Wiley 等。
- 批量下载：可保持可见 CloakBrowser 会话，减少重复登录。
- Agent 友好：提供 `instsci-mcp`，可接入支持 MCP 的 AI 工具。

### 安装

推荐用户安装（发布到 PyPI 前请从 GitHub 安装）：

```bash
pipx install git+https://github.com/Rimagination/instsci.git
# or
uv tool install git+https://github.com/Rimagination/instsci.git
```

开发者安装：

```bash
git clone https://github.com/Rimagination/instsci.git
cd instsci
pip install -e .
```

当前命令和包名都是 `instsci`。

一句话安装 MCP 和 skill：

```text
帮我安装这个 mcp 和 skill：https://github.com/Rimagination/instsci
```

CloakBrowser 浏览器由 InstSci 缓存在项目内的 `instsci/_browsers/cloakbrowser`，该目录不会提交到 Git。

### 快速开始

Elsevier API key 是项目级全局配置，配置一次后会用于后续所有 ScienceDirect DOI；`--validate` 只用样例 DOI 做下载验证。Inst Token 不是必需的，只有图书馆明确提供 Elsevier institutional token 时才需要配置。Elsevier 下载优先走 `view=FULL XML -> object/eid -> PDF`，并先用 direct route 让 `api.elsevier.com` 走校园网、学校 VPN、规则…

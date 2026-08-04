---
repo: "2233admin/code-intel-pipeline"
name: "code-intel-pipeline"
description: "Local code-intelligence pipeline for AI coding agents: architecture maps, hotspots, change impact, and structural regression gates before the agent edits. Rust core, powered by rg + Repowise + Understand + Sentrux."
readmeQualityOk: true
url: "https://github.com/2233admin/code-intel-pipeline"
homepage: "https://2233admin.github.io/code-intel-pipeline/demo/"
language: "Rust"
languages: ["Rust", "PowerShell"]
languagePcts: [56, 41]
topics: ["ai-agents", "claude-code", "cli", "code-analysis", "code-intelligence", "code-understanding", "codex", "coding-agents", "developer-tools", "ripgrep"]
stars: 6
forks: 3
openIssues: 47
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-26T08:12:21Z"
lastCommitAt: "2026-08-04T06:12:14Z"
lastReleaseAt: "2026-07-24T16:17:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 63
maintainers: ["2233admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c64f865d0a09e64723035eba80fc1736dd19a9a2f252df26211894d23fb8c132/2233admin/code-intel-pipeline"
---

<h1 align="center">Code Intel Pipeline</h1>

</p>

  <b>Hand your coding agent a map of the repo before it edits.</b>
</p>

  Local code-intelligence pipeline for AI coding agents — architecture maps, hotspots,
  change impact, and structural regression gates, produced entirely on your machine.
</p>

</p>

</p>

</p>

  <b>把刚 clone 下来的项目摊成一张地图，再让 Agent 动手。</b>
</p>

  <code>rg</code> + <code>Repowise</code> + <code>Understand Anything</code> + <code>Sentrux</code> + <code>CodeNexus context</code>
  <br>
  一条给 AI Agent 用的本地代码理解管线。
</p>

---

## 30 秒开始

> **macOS / Linux 用户**：当前只支持源码构建安装——没有非 Windows 的 Release ZIP，`bootstrap.py` 也不支持非 Windows。请直接看 [macOS / Linux 快速开始](#macos--linux-快速开始)；本节以下命令默认 Windows。

在要分析的仓库目录中运行稳定入口；不传参数时默认分析当前目录：

```powershell
code-intel .
```

或显式指定仓库：

```powershell
code-intel C:\path\to\your\repo
```

首次安装、Skill 安装和依赖说明见[完整上手](#安装与完整上手)。

## macOS / Linux 快速开始

**支持等级**：对已发布的版本（v0.6.0 及更早），macOS / Linux 只支持源码构建安装——这些版本的 Release ZIP 和 `bootstrap.py` 引导只覆盖 Windows。从下一个 release 起，每个版本会同时发布 windows / macos / linux 三个 Release ZIP，`bootstrap.py` 引导在 macOS / Linux 上同样可用（详见 [Public beta…

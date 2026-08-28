---
repo: "hjxcloud-tech/dsh-harness"
name: "dsh-harness"
description: "Open DeepSeek Harness Web GUI in Obsidian (embedded iframe with auto service startup)"
readmeQualityOk: true
url: "https://github.com/hjxcloud-tech/dsh-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 15
forks: 1
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T16:35:13Z"
lastCommitAt: "2026-08-28T15:24:29Z"
lastReleaseAt: "2026-08-15T19:55:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["hjxcloud-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/50e9705de3e6326a4db05b353573d38762184105411762a880ef0ab1beb047cc/hjxcloud-tech/dsh-harness"
---

# DeepSeek Harness for Obsidian

  </a>
</p>

> **Status: released** · **Desktop only**（Windows / macOS）· [English](#en) · [中文](#zh)

把 DSH 原生 Web UI 无痕嵌入 Obsidian：一键配置、静默运行、笔记与 DSH 双向桥接，随 DSH 版本演进持续可用。

*Embed the native DSH Web UI into your vault — one-click setup, silent operation, a two-way bridge between your notes and DSH, and it keeps working as DSH evolves.*

---

## English

An Obsidian desktop plugin that embeds the native [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH) Web UI directly into your vault — a seamless graft of two open-source tools: no DSH source is touched (connected through DSH's official extension seam), so it keeps working as DSH evolves. The plugin talks to DSH only over localhost; DSH itself makes outbound requests (e.g. AI model APIs) when you use it.

**Features & Usage**

- **One-click setup** — installs or detects DSH, auto-installs missing tools (git / Node.js / pnpm) with a live progress bar; no command line needed.
- **Silent operation** — the DSH service starts quietly in the background: no console windows, no terminal to keep open; crashes are detected and reconnected in one click.
- **Native Web UI** — the real DSH…

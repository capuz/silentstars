---
repo: "poco-ai/Agentero"
name: "Agentero"
description: "Agent-first paper management"
readmeQualityOk: true
url: "https://github.com/poco-ai/Agentero"
homepage: "https://agentero.poco-ai.com"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [59, 39]
topics: ["agent", "research"]
stars: 13
forks: 2
openIssues: 10
closedIssues: 59
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-07-07T06:55:12Z"
lastCommitAt: "2026-07-25T06:00:30Z"
lastReleaseAt: "2026-07-23T07:28:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["Phil-Fan", "qychen2001", "JiaheChen2002"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a530a390bed830b7ac24e4fd472fe83e9070a5cf6ae907d6bb126622050018b/poco-ai/Agentero"
---

</p>

<h1 align="center">Agentero</h1>

</p>

传统文献管理器对 Agent 并不友好：

- 阅读高亮和笔记被锁在单篇文件里，Agent 很难跨论文复用。
- 每次对话都要重新提供上下文，缺少稳定的本地知识地图。
- PDF 对人友好，但对 Agent 来讲不是最舒服的阅读材料。

**Agentero** 旨在构建 Agent 友好、Agent 原生的文献管理方式，探索人与 Agent 在文献管理中的协作方式。

## 功能

- **BYOA**（Bring Your Own Agent）：通过 ACP 连接本机 Agent，Agentero 不锁定具体 Agent 或模型，工作上下文留在本地 Vault。
- **Agent 原生体验**：支持划词对话、论文导入和 Zen 模式，让 Agent 参与检索、阅读与整理工作流。
- **魔棒入库与 Zotero Connector**：兼容 Zotero 生态的导入方式，支持从标识符、链接或浏览器插件保存论文。
- **论文翻译**：划词后并排查看原文与译文，结合论文上下文统一术语。
- **双链与知识图谱**：使用 Obsidian 风格的 `[[wikilinks]]` 连接论文、概念和笔记，浏览本地知识图谱。
- **文本优先**：论文目录由本地 Catalog 管理，人的笔记和原始资料仍以普通文件保存。每篇论文可包含 `NOTES.md`、`marks/`、`PAPER.md`、`source/` 和 `assets/`，无需锁定在单一编辑器或数据库中。
- **远程文献访问**：通过 SSH 隧道浏览远程 Vault，数据保留在用户自己的服务器上。
- **从 Zotero 迁移**：一键导入 Zotero 书库，保留标签、笔记和附件。
- **PDF 深度阅读**：支持页码导航、适应宽/整页、大纲、⌘F 查找、平滑划词、高亮、批注、提问与翻译。
- **BibTeX 导出**：随时导出 BibTeX / BibLaTeX，衔接 LaTeX 写作流程。
- 快捷键与常用软件保持对齐，不改变使用习惯

## Quick Start

### 桌面应用

前往 [Agentero](https://agentero.poco-ai.com) 进行下载。

HomeBrew

```bash
brew tap poco-ai/agentero
brew install --cask agentero
```

### CLI

HomeBrew

```bash
brew tap poco-ai/agentero
brew install agentero
```

## 开发

### 项目结构

```text
agentero/
├──…

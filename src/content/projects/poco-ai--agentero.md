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
stars: 19
forks: 5
openIssues: 7
closedIssues: 106
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-07T06:55:12Z"
lastCommitAt: "2026-07-29T06:14:10Z"
lastReleaseAt: "2026-07-28T05:06:17Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["ffy6511", "Phil-Fan", "qychen2001"]
openGraphImageUrl: "https://opengraph.githubassets.com/44c69acaf7523095f6d9f10520bc12d9f56bb4fabe4a4bdff8fd84493bb5a2e1/poco-ai/Agentero"
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
- **Agent 原生体验**：支持划词对话、论文导入和 Zen 模式，让 Agent 参与检索、阅读与整理工作流。支持 Skill 导入。
- **衔接 Zotero 生态**：兼容 Zotero 生态的导入方式，支持从标识符、链接或浏览器插件保存论文。一键导入 Zotero 书库，保留标签、笔记和附件。随时导出 BibTeX / BibLaTeX，衔接 LaTeX 写作流程。
- **论文翻译**：划词后并排查看原文与译文，结合论文上下文统一术语。
- **双链与知识图谱**：使用 Obsidian 风格的 `[[wikilinks]]` 连接论文、概念和笔记，浏览本地知识图谱。
- **PDF 深度阅读**：支持页码导航、适应宽/整页、大纲、⌘F 查找、平滑划词、高亮、批注、提问与翻译。
- **所见即所得的 Markdown**：支持实时预览和编辑。
- **远程文献访问**：通过 SSH 隧道浏览远程知识库，数据保留在用户自己的服务器上。
- **多系统兼容**：Mac、Windows、Linux，快捷键与常用软件保持对齐，不改变使用习惯。

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
├── AGENTS.md             # 面向 Agent / 开发者的仓库指南
├── mkdocs.yml            # MkDocs 文档站配置
├── src/…

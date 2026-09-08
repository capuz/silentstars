---
repo: "Vncntvx/modern-ucas-thesis"
name: "modern-ucas-thesis"
description: "A Thesis/Dissertation Template for University of Chinese Academy of Sciences in Typst"
readmeQualityOk: true
url: "https://github.com/Vncntvx/modern-ucas-thesis"
language: "Typst"
languages: ["Typst"]
languagePcts: [94]
stars: 14
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-11-10T05:58:08Z"
lastCommitAt: "2026-09-08T08:15:55Z"
lastReleaseAt: "2026-03-13T13:26:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 56
maintainers: ["Vncntvx", "karuboniru"]
openGraphImageUrl: "https://opengraph.githubassets.com/aeb190ba57fb312735c379b89593dd2f4bd6724b05ee63279626915060d0b186/Vncntvx/modern-ucas-thesis"
discussionCount: 1
---

<h1 align="center">modern-ucas-thesis</h1>

</p>

</p>

基于 [Typst](https://typst.app/) 的中国科学院大学学位论文模板，遵循《中国科学院大学研究生学位论文撰写规范指导意见（2022年）》格式要求。

> ⚠️ **免责声明**：本项目非官方出品，使用前请自行核对学校最新格式要求。
---

## 快速开始

### 1. 安装 Typst

```bash
# macOS
brew install typst

# Windows
winget install --id Typst.Typst

# 或使用官方安装脚本
curl -fsSL https://typst.community/install | sh
```

### 2. 使用项目

```bash
# 克隆仓库
git clone https://github.com/Vncntvx/modern-ucas-thesis.git
cd modern-ucas-thesis

# 编译论文
typst compile template/thesis.typ --root . --font-path fonts

# 或开启实时预览
typst watch template/thesis.typ --root . --font-path fonts
```

### 3. 配置论文信息

编辑 `template/thesis.typ`：

```typst
#import "../lib.typ": documentclass

#let (
  doc, preface, mainmatter, appendix,
  cover, decl-page, abstract, abstract-en,
  outline-page, list-of-figures-and-tables, notation,
  bilingual-bibliography, acknowledgement, backmatter,
  bifigure, bitable, continued-table, auto-table, aligned-equation,
) = documentclass(
  doctype: "doctor",       // "bachelor" | "master" | "doctor" | "postdoc"
  degree: "academic",      // "academic" | "professional"
  anonymous: false,        // 盲审模式
  twoside: true,           // 双面打印模式
  fontset:…

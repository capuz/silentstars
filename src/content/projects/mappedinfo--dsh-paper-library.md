---
repo: "Mappedinfo/dsh-paper-library"
name: "dsh-paper-library"
description: "A local-first research workspace for DeepSeek Harness: PDF annotations, AI reading, citations, knowledge graphs, LaTeX and slides."
readmeQualityOk: true
url: "https://github.com/Mappedinfo/dsh-paper-library"
homepage: "https://github.com/deepseek-ai/deepseek-harness/discussions/6623"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [75, 21]
topics: ["ai-reading", "citation-management", "deepseek-harness", "deepseek-harness-plugin", "dsh", "knowledge-graph", "latex", "literature-management", "local-first", "pdf-annotation"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-09-14T11:45:51Z"
lastCommitAt: "2026-11-09T00:54:10Z"
lastReleaseAt: "2026-10-29T03:12:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 49
maintainers: ["wsqstar"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b10076fba8a5a0e69861da83e77992a9561c4f7bd6551b68ed6e911bf7bc5df/Mappedinfo/dsh-paper-library"
---

# Paper Library

**在 DeepSeek Harness 中收集文献、阅读批注、整理证据与写作。**

**简体中文** · [English](https://github.com/Mappedinfo/dsh-paper-library/blob/HEAD/README.en.md)

[安装与开发](#安装与开发) · [使用说明](#使用) · [PDF / Slides 演示](https://github.com/Mappedinfo/dsh-paper-library/blob/HEAD/docs/demo/README.md) · [DSH 社区讨论](https://github.com/deepseek-ai/deepseek-harness/discussions/6623) · [英文介绍](https://github.com/deepseek-ai/deepseek-harness/discussions/6623#discussioncomment-19481436) · [问题反馈](https://github.com/Mappedinfo/dsh-paper-library/issues)

> 非官方 DSH 社区插件，由 Mappedinfo 独立开发和维护。原创代码为 MIT；PDF 引擎等依赖另有许可，见[第三方许可](https://github.com/Mappedinfo/dsh-paper-library/blob/HEAD/THIRD_PARTY.md)。

Paper Library 将文献收集、PDF 阅读与批注、知识整理和 LaTeX 写作放在同一个工作环境中，可以作为 DeepSeek Harness 插件使用，也可以独立运行。文献与数据集留在自己的资料库；DSH 对话沿用宿主模型配置，后台文献分析另支持显式配置的 GLM／Kimi／DeepSeek API，无需打开界面。

| 你的工作 | 在 Paper Library 中完成 |
| --- | --- |
| 收集与组织 | PDF / DOI 导入、元数据补全、APA 7 引用、收藏与 `#tag/subtag` 筛选 |
| 阅读与追问 | PDF 原生划线、矩形框、自由笔画；同一批注下持续备注和提问 |
| 浏览结构 | 公式、图片、表格、算法目录；裁剪与定位、旋转表格转正、伪代码流程图 |
| 积累语言与知识 | 中英翻译、五种表述优化方向、双语词条与原句来源、全文分析与引用图谱 |
| 写作与展示 | 多文献画板、LaTeX 工作台、PlainDeck Slides 与可编辑 PPTX 导出 |

**版本说明**：npm 当前发布版为 `0.2.5`（2026-11-09 核实）；下文介绍当前 `main`…

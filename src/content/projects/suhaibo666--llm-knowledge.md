---
repo: "suhaibo666/llm-knowledge"
name: "llm-knowledge"
description: "LLM 训练与推理技术知识库，由 Claude Code Agent 维护。"
readmeQualityOk: true
url: "https://github.com/suhaibo666/llm-knowledge"
language: "HTML"
languages: ["HTML", "Python", "JavaScript"]
languagePcts: [37, 31, 31]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-25T08:23:59Z"
lastCommitAt: "2026-09-06T08:00:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bd8d3949be645152340774da0913b41a61bbaf1b96c900325c1f8ec3cd775c1c/suhaibo666/llm-knowledge"
---

# LLM Knowledge Base

LLM 训练与推理技术知识库，由 Claude Code Agent 维护。全库共 **446 篇** Markdown 分析页，覆盖从模型结构、并行理论到框架源码级机制的完整链路。

三种浏览方式：

- **直接在 GitHub 上读** —— 下方[二级目录概览](#wiki-二级目录概览)与[核心文章索引](#核心文章索引)可以点进任意原始文档。
- **本地 HTML 站点** —— `npm run docs` 起一个离线 Quartz 站点，支持 wikilink、Mermaid、公式（见[本地文档站点](#本地文档站点)）。
- **Obsidian** —— 直接把 `wiki/` 作为 vault 打开。

## 目录结构

```
raw/            # 源材料索引（论文的 arXiv/官方链接说明页、文章与图表源），与 wiki/ 不要求镜像对齐
wiki/           # 分析页（Obsidian vault），功能分类树是唯一内容权威
├── 01_theory/        # 理论：模型家族 / 预训练 / SFT / 后训练对齐 / 推理技术 / 分布式并行
├── 02_engineering/   # 工程：PyTorch / 训练框架 / 推理框架 / 后训练框架 / GPU Kernel / 自动并行 / 训练可靠性
├── courses/          # 纯导读层：三条跨域学习路线，只含阅读顺序 + 链接，不承载正文
├── index.md          # 总索引（域级表格）
└── changelog.md      # 当季变更日志；历史条目按季度归档于 wiki/changelog/
docs/           # 流程与运营文档：coverage（覆盖台账）/ radar（上游雷达报告）/ research / superpowers（specs、plans）
tools/          # 维护工具：check_links/check_math/check_markdown/check_assets（四条日常门禁）、
                # check_locators（代码引用）、mkdocs_site/（出版站点）、docs-site/（旧本地站点）
```

## wiki 二级目录概览

### 01 理论

| 二级目录 | 讲什么 |
|---|---|
| [01_models](https://github.com/suhaibo666/llm-knowledge/blob/HEAD/wiki/01_theory/01_models/index.md) |…

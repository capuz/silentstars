---
repo: "Breeze136/dsh-kb-rag"
name: "dsh-kb-rag"
description: "Local-first literature RAG (DeepSeek Harness plugin): hybrid retrieval over body text and figure captions, locating fuzzy memories to exact passages and figures, with one-click DOI access to the original source. Local-first literature RAG for DSH — turn a fuzzy memory into an exact passage/figure, one-click DOI to source."
originalDescription: "本地优先的文献知识库 RAG(DeepSeek Harness 插件):混合检索正文与图注,把模糊记忆定位到具体段落与图表,DOI 一键直达原文。Local-first literature RAG for DSH — turn a fuzzy memory into an exact passage/figure, one-click DOI to source."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Breeze136/dsh-kb-rag"
homepage: "https://www.npmjs.com/package/dsh-kb-rag"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [70, 26]
topics: ["deepseek-harness", "dsh-plugin", "knowledge-base", "literature", "rag", "zotero", "dsh"]
stars: 15
forks: 5
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-16T10:23:24Z"
lastCommitAt: "2026-10-21T08:49:45Z"
lastReleaseAt: "2026-08-19T17:35:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 48
maintainers: ["Breeze136"]
openGraphImageUrl: "https://opengraph.githubassets.com/d10b987abc8a05585fc5afc05de4654f46579289584e618f0873921fcabdcb2a/Breeze136/dsh-kb-rag"
discussionCount: 1
---

# kb-rag: local literature RAG with passage-level provenance

**English** | [Chinese](https://github.com/Breeze136/dsh-kb-rag/blob/HEAD/README_CN.md)

kb-rag is a local literature knowledge base for DSH (DeepSeek Harness) and other MCP clients. It indexes PDFs and Zotero libraries into one SQLite file, then returns the passages that answer a question. Each result carries its section, physical page and DOI, and the citations attached to that passage, including whether the cited work is already in your library.

Indexing, embedding and reranking run on your machine. There is no API cost and nothing is uploaded.

The npm package [`dsh-kb-rag`](https://www.npmjs.com/package/dsh-kb-rag) is published from [`npm-package/`](https://github.com/Breeze136/dsh-kb-rag/blob/HEAD/npm-package). Other repositories with the same name are not affiliated with it.

## What a result looks like

A `kb_rag` call returns evidence in this shape. The interface is in Chinese today, so the block below is a translation. `[in-library]` marks a cited work that is already indexed.

```text
**Knowledge base sources Top-2**
deep · reranked with BAAI/bge-reranker-base · cache hit

1. [Chemical vapour deposition of…

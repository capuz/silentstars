---
repo: "1476989162/vue-bill-print"
name: "vue-bill-print"
description: "Vue 3 universal printing component"
originalDescription: "vue3通用打印组件"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/1476989162/vue-bill-print"
homepage: "https://github.com/1476989162/vue-bill-print"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [51, 48]
topics: ["bill", "designer", "print", "vue", "vue3"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-14T03:03:04Z"
lastCommitAt: "2026-07-15T05:53:54Z"
lastReleaseAt: "2026-07-14T07:10:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["1476989162"]
openGraphImageUrl: "https://opengraph.githubassets.com/964b446c85410fe3bfa344ef4962e8f2d6dfb3e654359bc9e1d3263def094409/1476989162/vue-bill-print"
---

# vue-bill-print

[English](https://github.com/1476989162/vue-bill-print/blob/HEAD/README.en.md) · 简体中文

[🌐 Live Demo](https://1476989162.github.io/vue-bill-print/) · 在线试玩设计器与多套单据模板

Vue 3 **document printing designer** skeleton: drag-and-drop design templates, custom paper sizes (including dot matrix short paper), pagination by page type, pure HTML printing (not relying on hiprint).

> Current version `0.1.0`. The core rendering engine has been extracted from production projects; the designer CSS is self-contained and does not rely on UnoCSS/Tailwind. Welcome to try and submit issues.

## Demo

Online experience (GitHub Pages):<https://1476989162.github.io/vue-bill-print/>

| Designer Interface | Preview Print |
| :---: | :---: |
|  |  |

## Features

- Visual designer: header fields / detail columns / horizontal lines / text / barcodes / QR codes
- Custom paper sizes and margins (A3/A4/A5/B5/custom)
- Dot matrix short paper friendly: `@page { margin: 0 }` + design margins using padding to avoid Chrome "margin: none" scaling issues
- Pagination by page type: different capacities for the first page / continuation pages / last page, header only on the first page, footer attached…

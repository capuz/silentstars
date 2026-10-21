---
repo: "Smith-106/bilibili-comment-deleter"
name: "bilibili-comment-deleter"
description: "Bilibili (B站) batch comment deletion tool: a Tampermonkey userscript that deletes all comments on Bilibili (videos / dynamics / columns) in one click"
originalDescription: "B站评论批量删除工具 - 一键删除哔哩哔哩所有评论（视频/动态/专栏）的油猴脚本"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Smith-106/bilibili-comment-deleter"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bilibili", "comment-deleter", "tampermonkey", "userscript"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-15T14:14:00Z"
lastCommitAt: "2026-10-21T23:37:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 63
maintainers: ["Smith-106"]
openGraphImageUrl: "https://opengraph.githubassets.com/74afdf7da1fde764c665609c4b027d3e0fefa4d9e6f759390d5e8cf802e3a772/Smith-106/bilibili-comment-deleter"
---

# Bilibili Batch Comment Deleter v2.2 (Fully Optimized Edition)

> **Current version 2.2.153** (when the same live stream or column appears more than once in history, it is counted only once). A comprehensive optimization of **performance / network / data / UX** built on v2.1 (a merge of three lineages). Upstream: Smith-106 v2.0 + WorkBuddy v1.2 + SXM v1.1 + experience from naaammme/bilibili-tools.

## Installation / Usage

Same as v2.1: create a new script in Tampermonkey → paste the full text → open any `*.bilibili.com` page and click 🗑️ at the bottom right. Three enumeration sources: AICU fetch / official history scan / offline JSON import. Four-dimensional filtering by keyword + source + type + time sorting. Before deletion, you can export a 💾JSON/CSV backup.

## v2.1 → v2.2 Change List

### Performance
1. **List event delegation**: inline checkboxes and jump buttons now use a single listener at the container level (previously 2 closures per row; 10k rows meant 20k listeners).
2. **Incremental rendering**: 150-item chunks are loaded via IntersectionObserver as you scroll. Large lists no longer freeze from full rendering (previously, 5000+ items rendered at once would hang…

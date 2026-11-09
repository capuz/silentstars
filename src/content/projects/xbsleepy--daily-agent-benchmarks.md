---
repo: "XBsleepy/daily-agent-benchmarks"
name: "daily-agent-benchmarks"
description: "a website to show daily agent benchmarks appearing on arXiv"
readmeQualityOk: true
url: "https://github.com/XBsleepy/daily-agent-benchmarks"
homepage: "https://xbsleepy.github.io/daily-agent-benchmarks/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-25T14:08:14Z"
lastCommitAt: "2026-11-09T11:58:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 66
maintainers: ["github-actions[bot]", "XBsleepy"]
openGraphImageUrl: "https://opengraph.githubassets.com/03494b3b3347e83186fb347d306a8c22eb3b07c048d2a4fd7bcdd8c44bc2da1b/XBsleepy/daily-agent-benchmarks"
---

# Daily Agent Benchmarks

**Live site: https://xbsleepy.github.io/daily-agent-benchmarks/** · [Archive](https://xbsleepy.github.io/daily-agent-benchmarks/archive.html) · [Atom feed](https://xbsleepy.github.io/daily-agent-benchmarks/feed.xml)

A daily, searchable list of new **AI / LLM agent benchmarks** on arXiv — web agents, GUI & computer-use agents, coding / SWE agents, tool use, multi-agent, embodied, and agent safety evaluations. Each paper gets a page with authors, abstract, field, citation count, and arXiv PDF / HTML links. Updated automatically every day via GitHub Actions.

> 姊妹项目 / Sister project: **[Daily Agent News](https://xbsleepy.github.io/daily-agent-news/)** ([GitHub](https://github.com/XBsleepy/daily-agent-news))：每日 Agent 研究与产业动态精选。Benchmarks 看「怎么评」，News 看「发生了什么」。

每日从 [arXiv](https://arxiv.org) 收集 **Agent Benchmark** 论文，整理成可部署到 GitHub Pages 的静态站点。

站点按投稿日期倒序展示：名称、作者、摘要、分类、PDF / HTML 链接；每一天有一份中英双语简报；浏览器内用 **BM25** 做排序搜索。

## 这个仓库做什么

1. **每天跑一次**（GitHub Actions，也可本地手动跑）调用 arXiv API。
2. **只保留 Agent Benchmark**：先用 agent + benchmark 相关查询召回，再用关键词打分过滤（LLM agent、web/GUI/coding agent、tool-use、computer-use 等）。不收录普通 RL agent、试剂 / 病原体等无关用法。
3. **合并进索引**…

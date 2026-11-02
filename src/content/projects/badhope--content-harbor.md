---
repo: "badhope/content-harbor"
name: "content-harbor"
description: "Self-hosted AI publishing hub - write once, ship to 15 platforms, keep every copy in sync."
readmeQualityOk: true
url: "https://github.com/badhope/content-harbor"
homepage: "https://badhope.github.io/content-harbor/"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["mcp", "ai-writing", "automation", "chinese-content", "content-publishing", "fastapi", "multi-platform", "playwright", "self-hosted", "sqlite"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-05-15T07:27:18Z"
lastCommitAt: "2026-11-02T17:55:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["x1882", "dependabot[bot]", "bad-hope"]
openGraphImageUrl: "https://opengraph.githubassets.com/40bbd16d7c3304fc1a016d681dd48f4488d464d36f6b8d399a9737f21cab0995/badhope/content-harbor"
discussionCount: 0
---

# Harbour

**English** · [简体中文](https://github.com/badhope/content-harbor/blob/HEAD/README.zh-CN.md)

Self-hosted publishing hub for people who write in Chinese and publish everywhere.
Write once, ship to fifteen platforms, and keep every published copy in sync — with AI
drafting, a compliance gate, and a human in the loop when a platform fights back.

---

## What it does

| | |
|---|---|
| **Fifteen platforms, one publish action** | Zhihu, Juejin, CSDN, Bilibili, Cnblogs, Toutiao, OSChina, SegmentFault, 51CTO, MetaWeblog blogs, WeChat Official Accounts, GitHub Pages, Dev.to, Telegraph, Xiaohongshu. Each adapter declares what it can actually do — publish, draft, update, tags, cover, Q&A — and the UI greys out the rest. |
| **Update in place** | Edit once; every already-published copy is updated rather than duplicated. |
| **AI drafting with a compliance gate** | Seven provider routes with failover, plus a four-stage gate before anything ships: safety scan → AIGC disclosure → dual-model review → human confirmation. |
| **Pauses instead of guessing** | CAPTCHA, risk control, expired session: the task stops, tells you, and resumes where it left off. |
| **Session persistence** | Log…

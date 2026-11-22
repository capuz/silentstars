---
repo: "kirkchinese/dsh-capability-catalog"
name: "dsh-capability-catalog"
description: "Lazy capability catalog for DeepSeek Harness: hundreds of MCP tools and skills behind one compact index, with per-session switches. −96.6% first-request tokens with REA."
originalDescription: "Lazy capability catalog for DeepSeek Harness: hundreds of MCP tools and skills behind one compact index, with per-session switches. −96.6% first-request tokens with REA."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kirkchinese/dsh-capability-catalog"
homepage: "https://www.npmjs.com/package/@kirkchinese/dsh-re-kit"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 31]
topics: ["deepseek-harness", "dsh-plugin", "mcp", "context-engineering", "deepseek", "mcp-gateway", "tool-search"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-23T16:59:12Z"
lastCommitAt: "2026-11-22T00:35:21Z"
lastReleaseAt: "2026-10-24T08:40:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 33
maintainers: ["kirkchinese"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdd6c6ce4a82027b6729dc1040bc9caf7b2d9a354f835b34555166cd03f54863/kirkchinese/dsh-capability-catalog"
---

# Capability Catalog · 能力目录

**Let DeepSeek Harness know which tools and skills exist,<br>without stuffing the full definitions of all of them into every request.**

Chinese · [English](https://github.com/kirkchinese/dsh-capability-catalog/blob/HEAD/README.en.md)

[Why](#为什么需要) · [How it works](#工作原理) · [Interface](#界面) · [Installation](#安装) · [Configuration](#配置) · [Benchmarks](#实测) · [Comparison](#和其他方案对比) · [Roadmap](#路线图) · [FAQ](#常见问题)

---

## Why It's Needed

DeepSeek Harness (DSH) puts **the complete JSON Schema of every visible tool** into **every** model request. With many tools, the cost is obvious:

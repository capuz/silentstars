---
repo: "liujiaao/es-plus"
name: "es-plus"
description: "Enterprise-grade CRUD component library for mid- and back-office systems, built on Vue 3 + Element Plus, with configuration-driven forms, tables, and dialogs that stay linked across the full workflow."
originalDescription: "基于 Vue 3 + Element Plus 的企业级中后台 CRUD 组件库 — 配置化驱动表单、表格、弹窗全链路联动"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liujiaao/es-plus"
homepage: "https://liujiaao.github.io/es-plus/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Vue"]
languagePcts: [37, 32, 30]
topics: ["admin", "component-library", "config-driven", "crud", "dialog", "element-plus", "enterprise", "form", "low-code", "table"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-15T14:03:27Z"
lastCommitAt: "2026-11-03T11:15:36Z"
lastReleaseAt: "2026-05-18T05:43:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e7a4d55a52d55e6a6d5950ff31224b8bb737ee902f925a81d83ccaad836175c/liujiaao/es-plus"
discussionCount: 1
---

# ES-Plus

Make AI-generated CRUD pages **directly mergeable into codebases**: the LLM writes a single JSON config, and ES-Plus handles Schema validation and deterministic compilation to produce **Vue 3 + Element Plus / Vue 2 + Element UI / Vue 3 + Ant Design Vue** runnable code, three sets from one pass. Same config, consistent across all three targets, reproducible.

Chinese | [English](https://github.com/liujiaao/es-plus/blob/HEAD/README.en.md)

The first is the **gate criterion**: in-schema intent hit rate = “zero edits **∨** converged within 3 rounds.” A model that produces a config mergeable with zero edits on the first round, **or** converges to the same config within at most 3 rounds of natural-language correction, counts as a hit ([definition](https://github.com/liujiaao/es-plus/blob/HEAD/docs/internal/wave-2-production-trust-design.md)).<br>
The second is the stricter half: it **counts only first-round zero-edit** results, with no convergence allowance. It is used to distinguish “right the first time” from “right only after several rounds of fixes.”<br>
The corpus currently has 216 examples (194 held out). It is a regression sentinel, not a statistically significant…

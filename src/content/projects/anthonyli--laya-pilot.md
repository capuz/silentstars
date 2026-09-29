---
repo: "anthonyli/laya-pilot"
name: "laya-pilot"
description: "Generate replayable Excel test cases from live browser pages, or run existing Excel cases, using Playwright and local Laya or a compatible decision API."
originalDescription: "Generate replayable Excel test cases from live browser pages, or run existing Excel cases, using Playwright and local Laya or a compatible decision API."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/anthonyli/laya-pilot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["ai-testing", "browser-automation", "e2e-testing", "excel", "laya", "playwright", "test-automation"]
stars: 53
forks: 15
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-23T07:43:44Z"
lastCommitAt: "2026-09-29T08:09:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 14
maintainers: ["anthonyli"]
openGraphImageUrl: "https://opengraph.githubassets.com/f56b259266bb0f12bd291d4a503f7b22d8c581e34cfef1de6892f2b4dde5caf2/anthonyli/laya-pilot"
---

# LayaPilot · Enterprise-level Admin Backend Automated Testing

[English](https://github.com/anthonyli/laya-pilot/blob/HEAD/README.en.md) · [Local Headless Execution](https://github.com/anthonyli/laya-pilot/blob/HEAD/docs/local-runtime.md) · [Architecture and Extension](https://github.com/anthonyli/laya-pilot/blob/HEAD/docs/architecture.md) · [Roadmap](https://github.com/anthonyli/laya-pilot/blob/HEAD/ROADMAP.md)

Targeting **enterprise-level admin backends**, **generate replayable Excel test cases** from browser pages, or read and execute existing Excel tests. Primarily covers user management, customer management, and other pages centered on tables, filtering, forms, and CRUD operations, with automated accuracy, speed, and stability as the goal, prioritizing local or intranet inference.

The current version uses Playwright to drive the browser and uses local Laya or a compatible decision API to understand fields, select options, and match execution targets. Post-execution assertions are determined by page state, without directly treating model judgment as pass results.

The generation phase retains CRUD templates, with models identifying field purposes, selecting data-filling…

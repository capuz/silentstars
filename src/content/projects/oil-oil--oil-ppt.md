---
repo: "oil-oil/oil-ppt"
name: "oil-ppt"
description: "Create, edit, and inspect 16:9 HTML presentations, with page-by-page editing, offline presentation, and hybrid editable PPTX export."
originalDescription: "创建、修改和检查 16:9 HTML 演示文稿，支持逐页编辑、离线演示和混合可编辑 PPTX 导出。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oil-oil/oil-ppt"
homepage: "https://www.oiloil.org"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["agent-skills", "claude-code", "html-presentation", "pptx", "presentation", "slides"]
stars: 121
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-05T08:35:46Z"
lastCommitAt: "2026-11-25T03:19:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 10
maintainers: ["oil-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba0e2d888a1d26619d739b21c9b638422af33dd2195467bfc882e371286cb10f/oil-oil/oil-ppt"
---

The fifteen slides above come from four real presentations, using yellow, cobalt blue, moss green, and terracotta. They share the same design system, but the materials, density, and page structure change with the content.

Each slide is an independent HTML source file that can be opened on its own. The agent creates or modifies only one page at a time. oil-ppt provides mature components, global design tokens, real browser checks, and the final single-file build. In the end, only one `演示文稿.html` is delivered.

| Agent responsibilities | oil-ppt responsibilities | Our responsibilities |
| --- | --- | --- |
| Understand the audience, organize the narrative, write HTML page by page, select materials and composition | Stage, scaling, design tokens, components, asset inlining, and browser checks | Confirm the creative direction and the formal preview |

The north star of oil-ppt is: low floor, high ceiling. Cost-effective models can start from mature HTML starters and components. Stronger models can directly modify the single-page DOM and local CSS, without being constrained by page fields.

oil-ppt breaks a large task into a local loop:

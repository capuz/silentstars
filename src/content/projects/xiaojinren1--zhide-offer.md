---
repo: "xiaojinren1/zhide-offer"
name: "zhide-offer"
description: "职得offer is an AI job-search assistant for job seekers, providing one-stop support across \"experience organization → resume customization → mock interviews.\" Users can import text, documents, or image materials. AI extracts their experiences, which the user verifies and confirms. The tool then generates a customized resume based on the target job requirements, followed by quality-check optimization and export in multiple formats. The project also offers a personal experience library, mock interviews, and feedback features to help users build up job-search material, identify weak expression, and practice repeatedly. We stay grounded in confirmed facts and do not fabricate experiences or achievements, aiming to make job preparation more efficient, expression clearer, and job matching more targeted."
originalDescription: "职得offer是一款面向求职者的AI求职助手，围绕“经历整理—简历定制—模拟面试”提供一站式支持。用户可导入文字、文档或图片材料，由AI提取经历，经本人核对确认后，结合目标岗位要求生成定制简历，并进行质检优化和多格式导出。项目还提供个人经历库、模拟面试与反馈功能，帮助用户积累求职素材、发现表达不足并反复练习。我们坚持以已确认事实为基础，不编造经历和成果，让求职准备更高效、表达更清晰、岗位匹配更有针对性。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaojinren1/zhide-offer"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [55, 42]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-30T11:59:11Z"
lastCommitAt: "2026-11-11T11:21:20Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 47
maintainers: ["xiaojinren1", "Rebecca1177", "lexian256-beep"]
openGraphImageUrl: "https://opengraph.githubassets.com/b18bdb2f33dd4c4816ad68a5522b1f11a50ce6a5f947c7547dc918f4bd776282/xiaojinren1/zhide-offer"
---

# 职得 offer

职得 offer is an AI agent for job seekers. The project uses React, TypeScript, FastAPI, and SQLite.

- **No-signup trial**: Use an independent temporary session to try the full workbench, resume export, and mock interviews.
- **Resume workbench**: Enter materials, confirm facts, generate a base draft, check and optimize it against the job, then export as Markdown, Word, or PDF.
- **Experience library**: Maintain experience cards, with duplicate checking, merging, and version restore.
- **Job inbox**: Paste a JD or import one from a screenshot. Fields are recognized locally and saved after confirmation. Administrators can enable announcement sources by province and trigger manual one-click collection.
- **Mock interviews**: Generate a question bank or start a text interview directly. After it ends, review feedback and history.
- **Accounts and personal models**: Register and log in with a username and password. Personal model keys are encrypted and stored on the server.

## Running and development

For starting and stopping locally, use the root `start.py` (the frontend must be built first):

```powershell
npm.cmd --prefix frontend run build
.\.venv\Scripts\python.exe…

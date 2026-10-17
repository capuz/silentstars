---
repo: "Neuro-OJ/neuro-oj"
name: "neuro-oj"
description: "An online judge and competition platform for AI Olympiads and certifications (IOAI / NOAI / LMCC), supporting objective questions, code problems, LLM engineering problems, and artifact submission evaluation (Kaggle-style)."
originalDescription: "面向 AI 奥林匹克与认证（IOAI / NOAI / LMCC）的在线评测与竞赛平台：支持客观题、代码题、LLM 工程题与产物提交（类 Kaggle）评测。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Neuro-OJ/neuro-oj"
homepage: "https://neuro-oj.icu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["acm", "llm", "oi", "oj", "online-judge", "lmcc", "ai", "competition", "evaluation", "ioai"]
stars: 25
forks: 5
openIssues: 4
closedIssues: 215
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-06-19T15:25:22Z"
lastCommitAt: "2026-10-17T08:00:53Z"
lastReleaseAt: "2026-09-25T16:24:51Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["chenmou2012", "sakura-madoromi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0083937e843859399d3b018a9397a81d90805a33673a8a8d98f6ae2a34c95ea0/Neuro-OJ/neuro-oj"
discussionCount: 1
---

---

Neuro OJ (NOJ) is an independent community project with no official relationship to CCF, LMCC, IOAI, or NOAI.

> [!CAUTION]
> Neuro OJ
> is still in development and has not undergone formal production validation. Do not use it to judge any official competition.

## Introduction

NOJ provides a complete workflow from "register → solve → submit → evaluate". It can be used for LMCC exam preparation and mock training, AI certification and selection, course practical training, and model evaluation competitions.

The main difference from traditional OJs is that problems are scored by an evaluator that calls functions implemented by the user, rather than only comparing standard input and output (stdin/stdout). This approach is better suited to evaluating LLM applications and AI engineering ability.

## Core Features

- **Function-call-based evaluation**: The evaluator drives tests and customizes scoring logic, covering objective questions, code problems, LLM engineering problems, and artifact submission problems.
- **Dual-container security sandbox**: User code and evaluation code run isolated in separate Docker containers. The Solution has networking disabled, while the Evaluator…

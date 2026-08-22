---
repo: "SemiAnalysisAI/InferenceX-app"
name: "InferenceX-app"
description: "Dashboard for InferenceX™, Open Source Continuous Inference |  InferenceX 仪表板"
readmeQualityOk: true
url: "https://github.com/SemiAnalysisAI/InferenceX-app"
homepage: "https://inferencex.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agi", "amd", "benchmarking", "cuda", "deepseek", "llm", "nvidia", "reactjs", "rocm"]
stars: 38
forks: 16
openIssues: 8
closedIssues: 23
watchers: 0
contributors: 18
recentReleases: 2
createdAt: "2026-03-11T00:31:42Z"
lastCommitAt: "2026-08-22T04:08:30Z"
lastReleaseAt: "2026-06-08T01:53:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 48
maintainers: ["cquil11", "functionstackx", "edwingao28"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab85240a92d571ef857ccaa28c2d749c7e10cd023208535a44b93ff07a7afb77/SemiAnalysisAI/InferenceX-app"
---

# InferenceX Dashboard / InferenceX 仪表板

**English** | [中文](https://github.com/SemiAnalysisAI/InferenceX-app/blob/HEAD/README_zh.md)

</div>

A [Next.js](https://nextjs.org) dashboard for visualizing ML inference benchmark data. DB-backed with Neon PostgreSQL, React Query for data fetching, D3.js for interactive charts.

**Stack**: Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · D3.js · Neon PostgreSQL · Vercel · Cypress

## Overview

LLM inference performance is a major concern of providing AI services, but accurate performance analysis remains elusive. Fast cadence of software development and model releases makes comparing performance between setups difficult. Existing performance benchmarks quickly become obsolete due to being static, and participants game the benchmarks with unrealistic, highly specific configurations. InferenceX tackles these issues by benchmarking popular models on major hardware platforms nightly with the latest software. For each model and hardware combination, InferenceX sweeps through different tensor parallel sizes and max concurrent requests, showing the throughput vs. latency graph for the full picture. In terms of software…

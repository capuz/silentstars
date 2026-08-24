---
repo: "Reality-JH/frontend-promotion-guard"
name: "frontend-promotion-guard"
description: "Release gate for CSS integrity, computed styles, visual regression, and safe Docker promotion."
readmeQualityOk: true
url: "https://github.com/Reality-JH/frontend-promotion-guard"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [61, 39]
stars: 40
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-23T18:04:11Z"
lastCommitAt: "2026-08-24T04:20:49Z"
lastReleaseAt: "2026-08-23T18:38:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 13
maintainers: ["Reality-JH"]
openGraphImageUrl: "https://opengraph.githubassets.com/19886693428f730c11edc2a2c8c66954c3a0def651f7b6cc67d6c7917f8f1989/Reality-JH/frontend-promotion-guard"
---

# Frontend Promotion Guard

English is the default project language. [简体中文](https://github.com/Reality-JH/frontend-promotion-guard/blob/HEAD/README.zh-CN.md) · [Launch article](https://github.com/Reality-JH/frontend-promotion-guard/blob/HEAD/docs/launch-post.md) · [中文文章](https://github.com/Reality-JH/frontend-promotion-guard/blob/HEAD/docs/launch-post.zh-CN.md)

Frontend Promotion Guard (FPG) is a reusable release gate for failures that ordinary health checks miss: the build succeeds, HTTP returns 200, and the container is healthy, while production CSS or layout is broken.

FPG audits emitted CSS, evaluates real browser-computed styles, compares screenshots across routes and viewports, accepts an isolated candidate container, promotes only after acceptance, and restores the previous image when production re-verification fails. Every run produces a static HTML evidence report.

FPG does not replace functional testing, security testing, or human acceptance. A human must confirm a correct page before explicitly updating visual baselines.

## The failure this is meant to catch

These two screenshots show the kind of release that can pass a build, return HTTP 200, and still be visibly…

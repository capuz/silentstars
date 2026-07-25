---
repo: "kurokobo/dify-status"
name: "dify-status"
description: "An unofficial, independently operated status page for Dify Cloud."
readmeQualityOk: true
url: "https://github.com/kurokobo/dify-status"
homepage: "https://kurokobo.github.io/dify-status/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [34, 22]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T02:57:04Z"
lastCommitAt: "2026-07-25T06:01:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 53
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1170bf7ffe69f6b877c870314338799c0a90c7284efe282c3666bf1c6a0a6243/kurokobo/dify-status"
fundingLinks: ["GITHUB:https://github.com/kurokobo", "BUY_ME_A_COFFEE:https://buymeacoffee.com/kurokobo"]
---

# Dify Cloud Status (Unofficial)

An unofficial, independently operated status page for [Dify Cloud](https://cloud.dify.ai). Monitors service health via periodic checks, stores results as JSONL, builds a static site with a 90-day status grid, and deploys to GitHub Pages.

**Live site:** <https://kurokobo.github.io/dify-status/>

> **Disclaimer:** This project is not affiliated with, endorsed by, or supported by Dify or LangGenius in any way. This is a personal project in an early/alpha stage. Behavior, check configurations, and results may change at any time without prior notice. No guarantees are made regarding the accuracy or reliability of results. The project may be discontinued at any time.

## Monitored Checks

| ID | Name | What it does |
| --- | --- | --- |
| `web_ui` | Web UI | GET `cloud.dify.ai`, expect HTTP 200 |
| `api` | API | POST chat-messages (Start + Answer flow), expect body contains `pong` |
| `sandbox` | Sandbox | POST chat-messages (Start + Template + Answer flow), expect body contains `pong from sandbox`. Depends on API. |
| `plugin` | Plugin | POST chat-messages (Start + LLM with Fake Models + Answer flow), expect body contains `pong from plugin`. Depends…

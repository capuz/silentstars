---
repo: "liu2-3zhi/Campus-Running-Assistant-For-ZSC"
name: "Campus-Running-Assistant-For-ZSC"
description: "ZSC Campus Running Assistant"
originalDescription: "ZSC 校园跑助手"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liu2-3zhi/Campus-Running-Assistant-For-ZSC"
homepage: "http://campus.zelly.cn/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [41, 33]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-21T09:47:25Z"
lastCommitAt: "2026-11-23T22:02:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 75
maintainers: ["liu2-3zhi", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3af53e026f7953f64731f75ae65fd8b79b992b07bdff386091087309e6bc5a28/liu2-3zhi/Campus-Running-Assistant-For-ZSC"
discussionCount: 0
---

# Running Assistant

## Project Introduction

Running Assistant is a campus running Web application based on Python Flask. It provides a unified Web-based entry point and supporting capabilities around campus running task scenarios. The capabilities clearly visible in the current code include: account and session management, automatic check-in configuration, payment order processing, health checks, Nginx log forwarding, theme and random background handling, and payment product name generation.

- Tech stack: Python, Flask, Flask-SocketIO, Playwright, Nginx
- Live site: http://run.zelly.cn

## Features

- Provides a Web-based management entry point for campus running scenarios
- On first startup with a new database, initializes configuration, permissions, and the default administrator account
- Supports automatic check-in configuration and session persistence
- Supports payment order status transitions, QR code caching, and payment method configuration
- Provides `/health` health checks and Nginx access log forwarding
- Supports theme styles and random background caching
- Built-in payment product name generator, currently registered with `lomei` and `travel_service` modes

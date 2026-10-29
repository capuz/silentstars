---
repo: "Ray-hola/work-calendar"
name: "work-calendar"
description: "Self-hosted task and project collaboration workbench — one Python file, SQLite storage, zero runtime dependencies."
originalDescription: "Self-hosted task and project collaboration workbench — one Python file, SQLite storage, zero runtime dependencies."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ray-hola/work-calendar"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [58, 25]
topics: ["calendar", "collaboration", "productivity", "project-management", "python", "self-hosted", "sqlite", "task-management", "team"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-14T07:46:38Z"
lastCommitAt: "2026-10-29T10:37:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 45
maintainers: ["Ray-hola"]
openGraphImageUrl: "https://opengraph.githubassets.com/a653e2874384ea7198a1f79db761a0a3658e07986bd49f11c34033ba988b8941/Ray-hola/work-calendar"
---

# Work Calendar

**Strategy Team Ledger**: A self-hosted team task and project collaboration workbench. One Python file, one SQLite database, zero runtime dependencies, and your data stays only on your own machine.

[Quick Start](#快速开始) · [Docker](#docker) · [Features](#功能) · [Where to Change Code](#改代码去哪里) · [English](https://github.com/Ray-hola/work-calendar/blob/HEAD/README.en.md)

## Why This Project

Most collaboration tools require storing task, daily report, and member data on third-party clouds. Work Calendar puts the complete task lifecycle (schedule → execute → complete → archive) and collaboration rules into one auditable local service: `server.py` plus a SQLite file. The page is accessed through a local port, and when external access is needed, it is published via Cloudflare Tunnel or a reverse proxy.

## Features

**Tasks**
- Three task types: project tasks, ad-hoc tasks (not attached to a project; members can create them for themselves, and admins can assign them to others), and fixed schedules (daily / weekdays / specific weekdays / monthly / specific dates; can be attached to a project, and individual days can be excluded).
- Completion ends the task with no…

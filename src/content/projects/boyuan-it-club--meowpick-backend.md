---
repo: "Boyuan-IT-Club/Meowpick-Backend"
name: "Meowpick-Backend"
description: "Meowpick Backend"
originalDescription: "花狮选课猫 后端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Boyuan-IT-Club/Meowpick-Backend"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2025-06-30T12:08:42Z"
lastCommitAt: "2026-09-22T08:43:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 80
maintainers: ["Eagle233Fake", "github-actions[bot]", "junru-1"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c0e927ccc29a10f9c610f4856377b37675d66aec78660e81869ca7d02ddc435/Boyuan-IT-Club/Meowpick-Backend"
---

# Meowpick Backend

Meowpick is a course evaluation platform for WeChat mini programs. This repository provides backend APIs covering WeChat login, user profiles, course and teacher search, comments, likes, course addition proposals, admin approval, and operation logs.

## Tech Stack

- Go 1.25.5
- Gin
- MongoDB (Approval and withdrawal rely on transactions; must use replica sets or sharded clusters)
- Redis (Caching; MongoDB is the source of truth for business data and basic mapping)
- Google Wire
- Swagger / OpenAPI 3.1
- Docker

## Main Features

- WeChat mini program login and JWT Bearer authentication;
- User nickname, avatar, contribution points, and admin permission management;
- Course search by course name, teacher, department, category, and campus;
- Course comments, tags, likes, and personal comment history;
- Search history and suggestions for courses, teachers, departments, and categories;
- Users submit course addition proposals; admins approve, reject, or withdraw approval after modifying the final course;
- Proposal contribution points, contributor display, and admin operation logs;
- Department, course category, and campus mapping persisted to MongoDB, with Redis…

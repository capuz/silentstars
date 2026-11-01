---
repo: "AAATenderGuy/Lightweight-AI-Tutoring-Personal-Coach"
name: "Lightweight-AI-Tutoring-Personal-Coach"
description: "A lightweight AI personal tutor that combines the personalized tutoring of HKU's \"DeepTutor\" and the classroom generation of Tsinghua's \"OpenMaic\""
originalDescription: "整合港大“DeepTutor”和清华“OpenMaic”两个项目打造的轻量化AI个人私教"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AAATenderGuy/Lightweight-AI-Tutoring-Personal-Coach"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [59, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-26T10:03:05Z"
lastCommitAt: "2026-10-30T09:46:51Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["AAATenderGuy", "youcheng10d", "5zhaotongstemcell2"]
openGraphImageUrl: "https://opengraph.githubassets.com/b74b96e96afdbf0acb0d1c0f2e5bb8d1e2d56950d98823b30b30b8542b342bb0/AAATenderGuy/Lightweight-AI-Tutoring-Personal-Coach"
---

# Edu · Lightweight AI Teaching Service

Merges **DeepTutor**'s personalized tutoring and mastery tracking with **OpenMAIC**'s classroom generation and interaction into a single-process **Python + Vue3** application.

Student side: upload lecture notes → ask the AI tutor questions (with sources) → generate an interactive classroom with one click → in-class quizzes → see the mastery level of each knowledge point.
Teacher side: log in → create a class → issue invitation codes → assign in-class quizzes and homework → view submission progress and the distribution of wrong answers → export student reports.

No separate database service, no vector store, and no standalone frontend server are needed. Double-click `start.bat` to use it
(data is stored in a single `data/edu.sqlite3` file).

## Contents

- [How the strengths of the two projects are combined](#两个项目的优势如何合并)
- [Feature overview](#功能一览)
- [Quick start](#快速开始)
- [Teacher workspace guide](#教师工作台使用指南)
  - [Login and accounts](#登录与账号)
  - [Creating classes and invitation codes](#建班与邀请码)
  - [Assigning in-class quizzes and homework](#布置随堂测验与课后作业)
  - [Viewing progress and wrong answers](#查看进度与错题)
  - [Targeted practice on weak…

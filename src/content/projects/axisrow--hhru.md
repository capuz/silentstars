---
repo: "axisrow/hhru"
name: "hhru"
description: "CLI tool for job search, applications, and resume promotion on hh.ru via LLM agents: Claude Code, Cursor, OpenCode, etc."
originalDescription: "CLI-инструмент для поиска вакансий, откликов и поднятия резюме на hh.ru через LLM агентов: Claude Code, Cursor, OpenCode и др."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/axisrow/hhru"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 27
forks: 2
openIssues: 11
closedIssues: 553
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-26T16:03:08Z"
lastCommitAt: "2026-09-19T08:15:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 42
maintainers: ["axisrow"]
openGraphImageUrl: "https://opengraph.githubassets.com/1452b119664148aa366604abe8a0557a381f86513d431fac95c271e8c2a442bb/axisrow/hhru"
---

# hhru-bot

CLI bot for job search on hh.ru: finds vacancies, responds with a letter, promotes resume, monitors responses, and can edit the resume itself. Works through Playwright (browser), not through API — hh.ru closed it for job seekers in December 2025.

## How we differ from analogues

The comparison idea and reference analysis — issue [#84](https://github.com/axisrow/hhru/issues/84).
Legend: ✅ exists, ❌ no, ⚠️ partially or we didn't check (doesn't mean «no»).

| Feature | s3rgeym | fikstt2 | Steev193 | tgeruzov | konard | hhru-bot |
|---|---|---|---|---|---|---|
| Search + response | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Resume promotion | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ |
| Throttling and daily limits | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ |
| Resume editing and creation | ⚠️ clone entirely | ❌ | ❌ | ❌ | ❌ | ✅ |
| Competitor resume analysis | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Learnable responses to questionnaires | ❌ | ❌ | ❌ | ❌ | ⚠️ Q&A-file, without learning | ✅ |
| Honest status «don't know if it reached» | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Funnel and history statistics | ⚠️ | ❌ | ❌ | ❌ | ❌ | ✅ |

- **Resume editing and creation** — `create-resume`, `edit-experience`, `edit-education`, `edit-skills`,…

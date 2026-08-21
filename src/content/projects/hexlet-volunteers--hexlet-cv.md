---
repo: "hexlet-volunteers/hexlet-cv"
name: "hexlet-cv"
description: "Stackoverflow for Resume"
readmeQualityOk: true
url: "https://github.com/hexlet-volunteers/hexlet-cv"
homepage: "https://cv.hexlet.io"
language: "Java"
languages: ["Java"]
languagePcts: [87]
topics: ["hacktoberfest"]
stars: 107
forks: 165
openIssues: 144
closedIssues: 336
watchers: 5
contributors: 101
recentReleases: 0
createdAt: "2019-07-21T20:03:39Z"
lastCommitAt: "2026-08-21T04:11:58Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 55
maintainers: ["arthur810629", "dependabot[bot]", "Textile86"]
openGraphImageUrl: "https://opengraph.githubassets.com/a37516ca7cb7f99e7ef4eb23a01c97c0fa84a81d317ba15113d4e45ce93fb63b/hexlet-volunteers/hexlet-cv"
discussionCount: 1
---

# Хекслет Карьера (hexlet-cv)

**Хекслет Карьера** — сервис, который ведёт IT-специалиста от отклика до оффера: агрегация вакансий с матчингом под профиль, резюме с AI-ревью и ATS-проверкой, пакет писем, kanban-трекер откликов, AI-собеседования и живые моки с наставниками, разбор отказов, зарплатный радар и рефералы выпускников.

> Проект развивается волонтёрами сообщества Хекслета. Сейчас идёт переход со старого продукта (онлайн-резюме) на новый дизайн «Хекслет Карьера» — см. [дорожную карту](#дорожная-карта).

## Стек

| Слой | Технологии |
|---|---|
| Backend | Java 24, Spring Boot, Spring Security (JWT-куки), JPA, Gradle |
| Frontend | React 18, TypeScript, Vite, Mantine, MSW (dev-моки) |
| Интеграция | Inertia.js (текущая) → миграция на REST + TanStack Query ([#1111](https://github.com/hexlet-volunteers/hexlet-cv/issues/1111)) |
| Контракт API | **Design First**: TypeSpec → OpenAPI → генерация BE (OpenAPI Generator) и FE-клиента ([эпик #1106](https://github.com/hexlet-volunteers/hexlet-cv/issues/1106)) |

## Структура репозитория

```
├── src/                  # Java/Spring backend
├── frontend/             # React frontend (Vite)
├── docs/
│   ├── design/           # дизайн…

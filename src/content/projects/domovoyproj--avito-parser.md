---
repo: "domovoyproj/avito-parser"
name: "avito-parser"
description: "⚡ Professional autonomous monitoring, parsing, and AI-powered assessment tool for Avito lot profitability with web panel and Telegram bot"
originalDescription: "⚡ Профессиональный автономный комбайн мониторинга, парсинга и нейросетевой оценки выгодности лотов Авито с веб-панелью и Telegram-ботом"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/domovoyproj/avito-parser"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [66, 27]
topics: ["ai-scoring", "docker", "fastapi", "parser", "playwright", "python", "telegram-bot"]
stars: 5
forks: 1
openIssues: 17
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-20T10:08:54Z"
lastCommitAt: "2026-10-03T22:03:56Z"
lastReleaseAt: "2026-09-27T11:10:52Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 74
undervaluedScore: 20
maintainers: ["domovoyproj"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1e776934f881b7041d06897ae97b169a9799f5f452dcc5290ae95dc0c7d5959/domovoyproj/avito-parser"
---

# ⚡ Avito Max Parser

Professional autonomous background monitoring, parsing, and scoring system for listings on **Avito.ru**. The system collects new listings according to specified search queries, filters out duplicates, calculates mathematical profitability scoring (0–100), requests AI (LLM) verdict, and instantly sends the best offers to Telegram with management capabilities through a modern web panel.

---

## ⚡ Architecture and Technologies

```text
 ┌──────────────────────┐        ┌───────────────────────┐
 │ curl_cffi (JA3/TLS)  │        │ Playwright (Chromium) │
 └──────────┬───────────┘        └───────────┬───────────┘
            │  (Fast HTTP collection)           │  (Bypassing complex anti-bot)
            └───────────┬────────────────────┘
                        v
            ┌───────────────────────┐
            │  Core Scraper Engine  │
            └───────────┬───────────┘
                        v
       ┌────────────────────┴────────────────────┐
       │                                         │
       v                                         v
┌──────────────┐                         ┌──────────────┐
│  Deduplication│                         │…
```

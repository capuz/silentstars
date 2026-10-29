---
repo: "hajdu-patrik/ARSM"
name: "ARSM"
description: "ARSM is a mechanic-facing workshop management tool built for auto service businesses. It helps mechanics organize their daily repair schedules, claim appointments, and track job progress through a clean, responsive dashboard."
readmeQualityOk: true
url: "https://github.com/hajdu-patrik/ARSM"
homepage: "https://arsm.hu/"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [55, 31]
topics: ["api", "asp-net", "asp-net-core", "csharp", "ef-core", "mcp", "orchestration", "orm-framework", "react", "sql-server"]
stars: 39
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T16:43:39Z"
lastCommitAt: "2026-10-29T10:16:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 35
maintainers: ["hajdu-patrik"]
openGraphImageUrl: "https://opengraph.githubassets.com/004546531936dcf3582eead1cc71d8b90ca9476a387771c8d570c479b8203c8e/hajdu-patrik/ARSM"
---

# ARSM - Appointment and Resource Scheduling Management

ARSM is a workshop scheduling and operations app for auto service teams. It helps mechanics and admins organize appointments, claim work, and track repair progress in one responsive dashboard.

## Language

- English: this file
- Hungarian: [README(HU).md](https://github.com/hajdu-patrik/ARSM/blob/HEAD/README(HU).md)

## Key Features

- Appointment intake and workshop scheduling
- Claim and unclaim flows for mechanics
- Real-time status updates across active jobs
- Monthly calendar view plus selected-day summary
- Role-aware behavior for mechanic and admin users
- Parts and labor pricing catalog with VAT-aware net/gross rates
- Price quotes per vehicle, with part/labor lines, a status lifecycle, and PDF export
- Company results reporting by year and month

## Technology Stack

| Layer | Technologies |
| ----- | ------------ |
| Backend | .NET 10, ASP.NET Core Web API, EF Core, ASP.NET Core Identity, JWT |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, TanStack Query |
| Database | PostgreSQL |
| Orchestration | .NET Aspire (`AutoService.AppHost`) |

## Repository Layout

- `app/AutoService.ApiService`: API endpoints,…

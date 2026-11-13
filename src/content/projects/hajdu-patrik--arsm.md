---
repo: "hajdu-patrik/ARSM"
name: "ARSM"
description: "ARSM is a mechanic-facing workshop management tool built for auto service businesses. It helps mechanics organize their daily repair schedules, claim appointments, and track job progress through a clean, responsive dashboard."
readmeQualityOk: true
url: "https://github.com/hajdu-patrik/ARSM"
homepage: "https://arsm.hu/"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [51, 32]
topics: ["api", "asp-net", "asp-net-core", "csharp", "ef-core", "mcp", "orchestration", "orm-framework", "react", "sql-server"]
stars: 43
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T16:43:39Z"
lastCommitAt: "2026-11-13T18:33:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["hajdu-patrik"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd6f35bd7c6ae29d0ed564228c194d6057aa776ca12232e530672b2e582ebf7a/hajdu-patrik/ARSM"
---

# ARSM - Appointment and Resource Scheduling Management

ARSM is a workshop scheduling and operations app for auto service teams: mechanics and admins
organize appointments, claim work, price jobs and send quotes in one responsive dashboard.

Hungarian version: [README(HU).md](https://github.com/hajdu-patrik/ARSM/blob/HEAD/README(HU).md)

## Features

- Appointment intake, monthly calendar and day view, claim/assign flows, live updates (SSE)
- Customers and vehicles with repair history
- Parts and labour catalog with VAT-aware net/gross prices
- Quotes per vehicle: part and labour lines, Draft -> Sent -> Accepted/Rejected, PDF, e-mail to the customer
- Company results by year and month
- Mechanic and admin roles, admin password reset, account lockout, CSRF and rate limits

## Technology

| Layer | Technologies |
| ----- | ------------ |
| Backend | .NET 10, ASP.NET Core, EF Core, ASP.NET Core Identity, JWT cookies, QuestPDF |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, TanStack Query |
| Data | PostgreSQL (18 locally, 17 in production), S3-compatible object store (RustFS locally, Azure Blob in production) |
| Orchestration | .NET Aspire (`app/AutoService.AppHost`) |

##…

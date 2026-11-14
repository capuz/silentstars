---
repo: "IkhyeonJo/Maroik"
name: "Maroik"
description: "ASP.NET Core web app — finance & budgets, calendar, boards, kanban, file uploads, admin dashboard. DDD + Clean Architecture enforced by tests. Built solo, self-hosted in production."
readmeQualityOk: true
url: "https://github.com/IkhyeonJo/Maroik"
homepage: "https://www.maroik.com"
language: "C#"
languages: ["C#"]
languagePcts: [73]
topics: ["accounting", "asp-net-core", "authentication", "board", "calendar", "cms", "login-system", "postgresql", "restful-api"]
stars: 52
forks: 6
openIssues: 3
closedIssues: 6
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2021-09-10T18:56:51Z"
lastCommitAt: "2026-11-14T10:47:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 52
maintainers: ["IkhyeonJo"]
openGraphImageUrl: "https://opengraph.githubassets.com/20d0a90ca639eafd6a7ca638aa6181b8bc64893bd9bb6f3ef3433c0b41f84386/IkhyeonJo/Maroik"
---

# Maroik

## Seed accounts

| Role | Email | Password | Seeded by |
|---|---|---|---|
| Admin | `admin@maroik.com` | `demoO12!!` | `Debugging/Init.sql` |
| User (public demo) | `demo@maroik.com` | `demoO12!!` | `Debugging/Init.sql`, then `SeedDemo.sql` |

`SeedDemo.sql` runs after `Init.sql` on every database rebuild and puts the demo account back to these values. A database
restored from a backup keeps the backup's admin password.

Website: <https://www.maroik.com>

Contact: <admin@maroik.com>

## Screenshots

### Login

### User Dashboard

### File Manager

### Kanban Board

### Calendar

### Forum

### NonfactorGrid

### Budget

### User Profile

## How to Deploy

The server runs Ubuntu Server 26.04 and Maroik lives in `/home/ubuntu/Maroik`. Run every command below **as `ubuntu`,
not with `sudo`**: `Deploy.sh` refuses to run as root, because the folder must belong to `ubuntu` (it calls `sudo` itself
where it needs it). It asks how to deploy; without a terminal, pass the choice (`bash Maroik.DeployOps/Deploy.sh local`
or `github`):

| Choice | What it deploys |
|---|---|
| `1` / `local` — build here | The source in `/home/ubuntu/Maroik` as it is (a clone on any branch, or source…

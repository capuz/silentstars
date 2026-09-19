---
repo: "suryanshvermaa/ICNARI_2027_Conference_Website"
name: "ICNARI_2027_Conference_Website"
description: "🎓 ICNARI 2027 — NIT Patna Conference Website (WIP)"
readmeQualityOk: true
url: "https://github.com/suryanshvermaa/ICNARI_2027_Conference_Website"
homepage: "https://icnari27.nasl.in"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [52, 45]
topics: ["icnari27", "cmake", "docker", "jenkins", "aws-s3", "drogon", "reactjs"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-10T13:27:38Z"
lastCommitAt: "2026-09-19T08:13:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 17
maintainers: ["suryanshvermaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/d36de64ad8905fd9f565cb811d05688b4412f755536d076bdf7656a0117b2e4c/suryanshvermaa/ICNARI_2027_Conference_Website"
---

# 🎓 ICNARI 2027 — Conference Website (NIT Patna)

Conference website + admin dashboard for **ICNARI 2027**.

## ✨ What’s in this repo

- 🖥️ **Frontend**: React + Vite + Tailwind (public site + admin dashboard)
- ⚙️ **Backend**: C++ API built with Drogon
- 🗄️ **Data**: PostgreSQL
- 🪣 **Storage**: MinIO (S3-compatible)
- 🧰 **Ops**: Docker Compose, Nginx reverse-proxy configs, Jenkins pipeline, backup container

## 🗂️ Repository structure

- `frontend/` — Vite + React app
- `backend/` — Drogon API, OpenAPI spec, SQL init scripts, local/prod Docker Compose
- `backup/` — containerized scheduled backups (Postgres dump + MinIO mirroring)
- `assets/` — README images
- `*.nginx.conf` — Nginx reverse proxy configs for API, DB, and MinIO
- `Jenkinsfile` — CI/CD pipeline used for deployment

## 🧑‍💻 Local development

### 1) 🧱 Start PostgreSQL + MinIO

```bash
cd backend
docker compose up -d
```

Services (from `backend/docker-compose.yml`):

- 🐘 PostgreSQL: `localhost:5432`
- 🧊 MinIO S3 API: `http://localhost:9000`
- 🖱️ MinIO Console: `http://localhost:9001`
Database initialization:

- 🧾 `backend/sql/` is mounted into Postgres init (`/docker-entrypoint-initdb.d`).

### 2) 🔐…

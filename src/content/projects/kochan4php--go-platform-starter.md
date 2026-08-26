---
repo: "kochan4php/go-platform-starter"
name: "go-platform-starter"
description: "Production-ready Go microservices + React microfrontend starter with built-in observability, messaging, security, and Kubernetes-ready infrastructure."
readmeQualityOk: true
url: "https://github.com/kochan4php/go-platform-starter"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 24]
topics: ["api-gateway", "chi-framework", "distributed-systems", "docker", "elasticsearch", "go", "golang", "grafana", "kubernetes", "microfrontend"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-07T23:20:46Z"
lastCommitAt: "2026-08-26T04:16:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 62
maintainers: ["kochan4php"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3034ab35f4f1a7988bc1d0ab60828da93f921728dc0b63316599d591654b712/kochan4php/go-platform-starter"
---

# go-platform-starter

A production-shaped **Go microservices platform** behind a single Go gateway,
with a **React micro-frontend shell** — one Go module, one pnpm workspace,
spec-first OpenAPI contracts. Defaults sized for ~100k users. Every deployable
ships a Dockerfile, a thin Jenkinsfile, docker-compose files and Kubernetes
manifests with HPA.

```
                        ┌──────────────── edge nginx :80/443 ────────────────┐
   browser ────────────►│  /            → web (federation host)              │
                        │  /remote/auth/…→ web-auth · /remote/admin-users/…  │
                        │  /api/v1/… /docs → gateway :8000                   │
                        │  /ws           → gateway → realtime                │
                        └────────────────────────────────────────────────────┘

 gateway (:80 edge / :8010 lab) ──► auth · users · rbac · worker · realtime
                       │            │        │         │
                  Postgres (schema auth/users/rbac/audit)   Redis (cache·streams·pub/sub)
```

## Feature overview

**Backend (Go >= 1.27, chi v5, GORM, Redis 7)**

- **auth** — register/login/logout; refresh tokens with rotation and…

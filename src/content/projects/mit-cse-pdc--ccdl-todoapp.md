---
repo: "mit-cse-pdc/ccdl-todoapp"
name: "ccdl-todoapp"
description: "lab5-todo"
readmeQualityOk: true
url: "https://github.com/mit-cse-pdc/ccdl-todoapp"
language: "JavaScript"
languages: ["JavaScript", "Java"]
languagePcts: [49, 36]
stars: 13
forks: 126
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-22T10:25:21Z"
lastCommitAt: "2026-08-28T12:22:40Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 79
undervaluedScore: 33
maintainers: ["mohan-shenoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/33c6f98fe9d9f1dca3512ff231563115a84900c2b1d7155d6bce1f1b2e039fd8/mit-cse-pdc/ccdl-todoapp"
---

# Lab 5 — Full-Stack Todo App (Spring Boot + React + Caddy)

A 3-tier student lab: a Spring Boot REST API backed by PostgreSQL, a React
(Vite) frontend, and Caddy acting as a reverse proxy / static file server in
front of both.

```
├── backend/    Spring Boot REST API (deployed as a WAR to Tomcat)
├── frontend/   React (Vite) single-page app
├── caddy/      Caddyfile (reverse proxy + static hosting)
├── postman/    Postman collection for API contract testing
└── README.md   This guide
```

Architecture:

```
Browser --> Caddy (:3000) --> /api/*  --> Tomcat (:8080/todo) --> PostgreSQL (:5432)
                           --> /*      --> frontend/dist (static files)
```

Every file you actually need to edit is marked with a
`===== STUDENT TODO =====` comment block — search for that string if you
just want the list of things to change.

## Lab Time Budget (2.5 hours)

| Time | What |
|---|---|
| ~2 hours | Steps **3, 4, 6, 8, 10** below (plus forking/cloning per your Lab Manual) — get the app running end to end |
| ~15–20 min | Buffer for debugging (something *will* go wrong — that's normal, see step 4/8) |
| ~15 min | Fill in the **Observation Book** (last section of this guide) |…

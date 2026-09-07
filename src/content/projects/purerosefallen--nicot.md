---
repo: "purerosefallen/nicot"
name: "nicot"
description: "Nest.js interacting with class-validator + OpenAPI + TypeORM for Nest.js Restful API development."
readmeQualityOk: true
url: "https://github.com/purerosefallen/nicot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-24T01:06:28Z"
lastCommitAt: "2026-09-07T08:35:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 40
maintainers: ["purerosefallen"]
openGraphImageUrl: "https://opengraph.githubassets.com/9373d1d9a72924094241770fee00337da69bd3d1f726d526c79e49dc230b9001/purerosefallen/nicot"
---

# NICOT

**NICOT** is an entity-driven REST framework for **NestJS + TypeORM**.

You define an entity once, and NICOT generates:

- ORM columns (TypeORM)
- Validation rules (class-validator)
- Request DTOs (Create / Update / Query)
- RESTful endpoints + Swagger docs
- Unified response shape, pagination, relations loading

with **explicit, field-level control** over:

- what can be written
- what can be queried
- what can be returned

---

## Name & Philosophy

**NICOT** stands for:

- **N** — NestJS  
- **I** — **nesties** (the shared utility toolkit NICOT builds on)  
- **C** — class-validator  
- **O** — OpenAPI / Swagger  
- **T** — TypeORM  

The name also hints at **“nicotto”** / **“nicotine”**: something small that can be habit-forming. The idea is:

> **One entity definition becomes the contract for everything**  
> (DB, validation, DTO, OpenAPI, CRUD, pagination, relations).

NICOT’s design is:

- **Entity-driven**: metadata lives close to your domain model, not in a separate schema file.
- **Whitelist-first**: what can be queried or returned is **only** what you explicitly decorate.
- **AOP-like hooks**: lifecycle methods and query decorators let you inject logic without…

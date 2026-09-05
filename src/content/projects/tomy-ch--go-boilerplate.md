---
repo: "Tomy-ch/go-boilerplate"
name: "go-boilerplate"
description: "Contract-first Go backend foundation with Echo, OpenAPI, PostgreSQL, Onion Architecture, workers, outbox, idempotency, jobs, and observability."
readmeQualityOk: true
url: "https://github.com/Tomy-ch/go-boilerplate"
language: "Go"
languages: ["Go"]
languagePcts: [75]
topics: ["architecture", "clean-architecture", "golang", "openapi", "backend", "ddd", "domain-driven-design", "japan", "rest-api", "web-api"]
stars: 6
forks: 0
openIssues: 31
closedIssues: 334
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-07-01T17:01:02Z"
lastCommitAt: "2026-09-05T07:48:33Z"
lastReleaseAt: "2025-08-03T12:01:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 76
maintainers: ["Tomy-ch"]
openGraphImageUrl: "https://opengraph.githubassets.com/de747b68c4c79bcca067fb553211ecb976dc517e7ace309e629073ef54f481cf/Tomy-ch/go-boilerplate"
---

# go-boilerplate

A backend base project built with **Golang × Echo × OpenAPI × PostgreSQL × Onion Architecture**.

It integrates widely used OSS — `uber/fx` (DI), `sqlc` (type-safe SQL), `golang-migrate`
(migrations), `oapi-codegen` (OpenAPI codegen) and OpenTelemetry — into a **contract-driven,
type-safe, layered backend** with production-grade concerns (background processing,
reliability, observability) already wired.

> This README is intentionally minimal. Each topic links out to the README / design doc that
> owns it — see the [Documentation Map](#documentation-map). Those documents are the source of
> truth; this page is only the entry point.
>
> **Almost every directory carries its own README.** Read the one that owns the area before
> implementing in it or investigating it — it states the responsibilities and the prohibitions that
> bound a change. **A README does not inventory what is on disk** — an editor already shows that. It
> carries what a name cannot: why a set of directories is drawn the way it is, and the convention that
> explains the rest.

## Capabilities

Each item is a thin seam you extend; follow the link for the design and rules.

- **Onion Architecture +…

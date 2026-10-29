---
repo: "septagon-oss/platformkit"
name: "platformkit"
description: "Open-source Go backend for multi-tenant SaaS."
readmeQualityOk: true
url: "https://github.com/septagon-oss/platformkit"
homepage: "https://septagon-oss.github.io/pk-docs/"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["backend", "framework", "go", "golang", "modular-monolith", "multi-tenant", "oss", "saas", "saas-starter", "self-hosted"]
stars: 16
forks: 16
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-08T13:37:28Z"
lastCommitAt: "2026-10-29T10:36:24Z"
lastReleaseAt: "2026-07-26T09:21:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 57
maintainers: ["joaorufino"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1293648732/fa90fcd8-93fa-4048-81e7-0adbd5db4125"
discussionCount: 2
---

# PlatformKit

PlatformKit is a Go foundation for building multi-tenant SaaS applications.
Compose business modules, generate administration screens from resource schemas,
and build custom workflows with typed web components.

The foundation includes tenant isolation, authentication, permissions, events,
background jobs and audit trails. Reference modules add users, notifications,
billing, content, files, sites and tasks. Your application chooses the modules
and connects their dependencies explicitly in Go.

## Try it locally

Install the Go version declared in [go.mod](https://github.com/septagon-oss/platformkit/blob/HEAD/go.mod), then run this command from
a directory where you want to keep the application's data. The first start
needs internet access to download dependencies and PostgreSQL:

```sh
go run github.com/septagon-oss/platformkit/apps/platformkit@main start --addr 127.0.0.1:8080
```

This starts the reference application from `main`, with its own PostgreSQL 16
database and an initial tenant. No separate database or message broker is needed.
The HTTP server listens only on your machine.

Open [the sign-in page](http://platformkit.localhost:8080/app/admin/login) and use…

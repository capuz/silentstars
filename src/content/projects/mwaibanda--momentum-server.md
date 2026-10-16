---
repo: "MwaiBanda/Momentum-Server"
name: "Momentum-Server"
description: "Go Backend & React Typescript Content Management System(CMS) for Android & iOS apps"
readmeQualityOk: true
url: "https://github.com/MwaiBanda/Momentum-Server"
homepage: "https://services.momentumchurch.dev/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 23]
topics: ["fiber", "postgresql", "redis", "backend", "cms", "golang", "react", "typescript", "typescipt"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-02T04:08:59Z"
lastCommitAt: "2026-10-16T08:26:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 76
maintainers: ["MwaiBanda", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f90689c78fb4a3fdbebec993e0f22bf87bdcc47dce5452578563a85c5e6f635/MwaiBanda/Momentum-Server"
---

# Momentum Server

Backend and content-management platform for the Momentum Church mobile apps and
website.

[Live API](https://services.momentumchurch.dev/) ·
[CMS dashboard](https://services.momentumchurch.dev/dashboard) ·
[Swagger documentation](https://services.momentumchurch.dev/swagger/index.html)

## Overview

Momentum Server is a Go API backed by PostgreSQL and Redis. It supports the
Momentum product surface across:

- User accounts
- Sermons and events
- Messages and passages
- Meals and volunteer services
- Payments and transactions
- Push notifications

The repository also contains the React CMS used to manage messages,
notifications, and payment data. The CMS is compiled into static assets and
served by the Go application, so the project can be deployed as one container.

## Why this project

This project is an exploration of a maintainable full-stack architecture for a
small product team:

- Direct SQL and Goose migrations instead of an ORM abstraction.
- Explicit dependency boundaries between business logic and integrations.
- A backend composition root that makes runtime dependencies visible.
- A React CMS structured with the same domain, application,…

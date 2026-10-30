---
repo: "siemens/link-checker-service"
name: "link-checker-service"
description: "The self-hosted Link Checker web service runs cached and otherwise optimized broken link checks"
readmeQualityOk: true
url: "https://github.com/siemens/link-checker-service"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["self-hosted", "link-checker", "links", "links-management"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 7
watchers: 6
contributors: 6
recentReleases: 0
createdAt: "2020-09-28T08:35:00Z"
lastCommitAt: "2026-10-30T10:23:07Z"
lastReleaseAt: "2020-11-24T09:54:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 57
maintainers: ["d-led", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e1bba3474f8030b6042ac0f8ec8c0891e0c63a4a426947ee4958a8cab4d956/siemens/link-checker-service"
---

# Link Checker Service

The Link Checker web service runs cached and otherwise optimized broken link checks.

> **Security Notice:** This service fetches arbitrary, user-submitted URLs to check whether they are broken. By design, it issues outbound HTTP requests to any URL a client provides. In production, deploy behind authentication (JWT is built-in), restrict network egress (e.g. via NetworkPolicy), configure `domainBlacklistGlobs` to block internal/sensitive domains, set `maxURLsInRequest` to limit per-request resource consumption, and apply resource limits (CPU, memory, and concurrent connections) appropriate to your deployment environment. See the [configuration section](#configuration) for details.

Routes:

- `/checkUrls` checks a batch at once
- `/checkUrls/stream` returns results as they arrive using [JSON streaming](https://en.wikipedia.org/wiki/JSON_streaming)
- `/version` returns the server version
- `/stats` returns the link checker stats
- `/stats/domains` returns detailed domain stats
- `/livez`, `/readyz` health checks

## Quickstart Options

### In Docker

run the service dockerized, without installing Go, and navigate to the [sample UI](http://localhost:8092):…

---
repo: "AZX-PBC-OSS/TaskQ"
name: "TaskQ"
description: "Async-native, Postgres-backed background job library for Python 3.12+"
readmeQualityOk: true
url: "https://github.com/AZX-PBC-OSS/TaskQ"
homepage: "https://azx-pbc-oss.github.io/TaskQ/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["asyncio", "background-jobs", "fastapi", "job-queue", "oidc", "opentelemetry", "postgres", "postgresql", "python", "rate-limiting"]
stars: 5
forks: 1
openIssues: 30
closedIssues: 220
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-05-01T17:02:44Z"
lastCommitAt: "2026-09-26T08:46:36Z"
lastReleaseAt: "2026-07-22T22:57:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["rcbevans", "dependabot[bot]", "cya"]
openGraphImageUrl: "https://opengraph.githubassets.com/50d411320c1a9cbbd1d4b683f1b8c7e31344ee4292b2332f024559b5cf5293d3/AZX-PBC-OSS/TaskQ"
discussionCount: 5
---

# TaskQ

Async-native, Postgres-backed background job library for Python 3.12+.

> **Stability:** TaskQ is pre-1.0 and follows SemVer 0.x conventions, so breaking
> changes may land in minor version bumps (`0.x.0`), not just majors. Pin an
> exact or narrow version range in production until 1.0.

> [!WARNING]
> **The admin UI fails closed by default in non-dev environments.** It raises
> `RuntimeError` at startup if no `auth_dependency` is configured and
> `TASKQ_ENVIRONMENT` is not `dev`. Set `TASKQ_ADMIN_UI_REQUIRE_AUTH=false` to
> opt out (e.g. when relying on a reverse proxy), or configure SSO via the
> `taskq[oidc]` or `taskq[saml]` extras. See [guides/admin-ui.md](https://github.com/AZX-PBC-OSS/TaskQ/blob/HEAD/docs/guides/admin-ui.md#security).

## Features

- **Actors**: decorate plain `async def` (or sync) functions with `@actor`;
  payloads are validated with Pydantic models and dispatched as typed
  `ActorRef` handles.
- **Postgres-backed**: durable jobs, `SKIP LOCKED` dispatch, advisory-lock
  leader election, and a forward-only SQL migration runner. No external
  broker required.
- **Async-native**: built on `asyncio` and `asyncpg` from the ground up; no
  thread pools…

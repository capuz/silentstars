---
repo: "DavideCarvalho/nestjs-telescope"
name: "nestjs-telescope"
description: "Laravel Telescope-style observability dashboard for NestJS — requests, queries, exceptions, jobs, cache, mail; Horizon-style live queue console; Pulse-style health. Express & Fastify."
readmeQualityOk: true
url: "https://github.com/DavideCarvalho/nestjs-telescope"
homepage: "https://davidecarvalho.github.io/aviary/docs/telescope"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["bullmq", "dashboard", "debugging", "mikro-orm", "monitoring", "nestjs", "observability", "telescope", "typescript"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-02T23:09:32Z"
lastCommitAt: "2026-11-23T10:29:02Z"
lastReleaseAt: "2026-06-05T02:42:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 42
maintainers: ["DavideCarvalho", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4e7f1f0802f5fce8b29ce7261859656561e4e833018bf7fc9e3912d641a8584/DavideCarvalho/nestjs-telescope"
---

&nbsp;·&nbsp; part of the <a href="https://davidecarvalho.github.io/aviary/"><b>Aviary</b></a> ecosystem for NestJS 🦉

> Laravel Telescope, redesigned for NestJS. Watch every request, query, job,
> email, cache hit, and exception — correlated under one batch, off the response
> path, pluggable, and safe in production. Alert new errors to Slack, diagnose
> them with AI, capture frontend errors, and archive before you prune. Express
> **and** Fastify.

`@dudousxd/nestjs-telescope` is an application observability console for NestJS.
A set of watchers capture what happens *inside* a request — every query, queued
job, sent email, cache hit, and thrown exception — correlate it all under one
**batch** via `AsyncLocalStorage`, store it through a pluggable provider, and
expose it through a headless API plus an optional dashboard. It's the missing
Telescope for NestJS, designed framework-idiomatically rather than ported.

## Quick start

**1. Install** core and the dashboard:

```bash
pnpm add @dudousxd/nestjs-telescope @dudousxd/nestjs-telescope-ui
```

**2. Import** two modules. Request and exception capture wire themselves
automatically, and a zero-config SQLite store is on by default:

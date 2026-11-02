---
repo: "zoolutions/pgbus"
name: "pgbus"
description: "PostgreSQL-native job processing and event bus for Rails, built on PGMQ"
readmeQualityOk: true
url: "https://github.com/zoolutions/pgbus"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [90]
stars: 46
forks: 0
openIssues: 5
closedIssues: 222
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T23:15:16Z"
lastCommitAt: "2026-11-02T17:57:02Z"
lastReleaseAt: "2026-04-02T05:38:06Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 40
maintainers: ["mhenrixon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a6489887e725fadd776f893916b3617c57c121cad93d4d5e277dc08d9637c7e/zoolutions/pgbus"
fundingLinks: ["GITHUB:https://github.com/mhenrixon"]
---

# Pgbus

PostgreSQL-native job processing and event bus for Rails, built on [PGMQ](https://github.com/tembo-io/pgmq).

**Why Pgbus?** If you already run PostgreSQL, you don't need Redis for background jobs. Pgbus gives you ActiveJob integration, AMQP-style topic routing, dead letter queues, worker memory management, and a live dashboard -- all backed by your existing database.

📖 **Documentation:** [pgbus.zoolutions.llc](https://pgbus.zoolutions.llc) — guides, flow diagrams, and a full configuration reference. (This README stays the canonical GitHub reference.)

## Table of contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick start](#quick-start)
  - [1. Configure (optional)](#1-configure-optional)
  - [2. Use as ActiveJob backend](#2-use-as-activejob-backend)
  - [3. Event bus (optional)](#3-event-bus-optional)
  - [4. Start workers](#4-start-workers)
  - [5. Mount the dashboard](#5-mount-the-dashboard)
- [Reliability](#reliability)
  - [Job uniqueness](#job-uniqueness)
  - [Concurrency controls](#concurrency-controls)
  - [Circuit breaker and queue pause/resume](#circuit-breaker-and-queue-pauseresume)
  - [Client-level…

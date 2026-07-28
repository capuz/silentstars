---
repo: "gurenjs/guren"
name: "guren"
description: "Guren is a Bun-native TypeScript MVC framework that unites Laravel-like ergonomics with Hono, Inertia.js, React, and Drizzle ORM, aiming to deliver a fast, elegant full-stack workflow that keeps frontend and backend work in sync."
readmeQualityOk: true
url: "https://github.com/gurenjs/guren"
homepage: "https://guren.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["bun", "full-stack-web-development", "mvc-framework", "typescript"]
stars: 20
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-01T13:45:07Z"
lastCommitAt: "2026-07-28T14:57:00Z"
lastReleaseAt: "2026-03-29T23:52:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 55
maintainers: ["7nohe"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b4eae65ab732dd80088d836df0e62ea00fa8b1745ddb839f26adaa7483bf657/gurenjs/guren"
fundingLinks: ["GITHUB:https://github.com/7nohe"]
discussionCount: 1
---

# Guren

**A Laravel-inspired fullstack TypeScript framework, built for Bun.**

Routing, controllers, ORM, authentication, and Inertia.js + React frontend integration — all in one cohesive developer experience.

> **v1.0** — Stable. Breaking changes only in major releases, per the [release policy](https://github.com/gurenjs/guren/blob/HEAD/docs/en/guides/release-policy.md).

---

## Quick Start

```bash
# 1. Scaffold a new app with authentication (dependencies install automatically)
bunx create-guren-app my-app --auth
cd my-app

# 2. Run migrations and seed the demo user (SQLite by default — no server needed)
bun run db:migrate
bun run db:seed

# 3. Start the dev server
bun run dev
```

Open `http://localhost:3333` and sign in at `/login` with `demo@example.com` / `secret`.

### Add features as you go

```bash
bunx guren add auth            # Authentication
bunx guren add resource posts --fields "title:string,body:text"  # CRUD resource
bunx guren add queue           # Background jobs
bunx guren add mail            # Email sending
bunx guren add cache           # Cache layer
bunx guren add notifications   # Multi-channel notifications
bunx guren add storage         # File storage…

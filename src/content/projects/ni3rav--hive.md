---
repo: "ni3rav/hive"
name: "hive"
description: "a multi-tenant headless cms"
readmeQualityOk: true
url: "https://github.com/ni3rav/hive"
homepage: "https://hivecms.online"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-07-27T15:55:04Z"
lastCommitAt: "2026-07-15T05:52:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 61
maintainers: ["ni3rav", "vyeos", "nirav-maheta-noovosoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb98f3d9f166ebf6c5a19c5025bf1e6a83797b1b3cffc7d953f3e5b9f268e74c/ni3rav/hive"
---

# Hive

Full-stack headless content collaboration platform composed of an Express/Drizzle API (`backend/`) and a Vite/React client (`frontend/`). The codebase is organized as a lightweight monorepo where each package can be developed independently while sharing a common architecture and conventions.

## Architecture at a Glance

- **Backend** (`backend/`): Express 5 server with modular controllers for authentication, workspace membership, posts, authors, categories, tags, and invitations. Uses Drizzle ORM for schema migrations, Pino for structured logging, Resend for transactional email templates, and Zod-powered DTO validation.
- **Frontend** (`frontend/`): Vite + React 19 SPA styled with Tailwind, Radix UI, and motion libraries. State and server cache are driven by TanStack Query; forms rely on React Hook Form + Zod. Rich text editing is provided by TipTap.
- **Database**: PostgreSQL. The repo includes Docker instructions and Drizzle migrations (`backend/drizzle/`) for reproducible schema management.
- **Email + Notifications**: Reusable templates under `backend/src/templates` for password resets, verification, and workspace invitations sent through Resend.

## Prerequisites

-…

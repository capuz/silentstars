---
repo: "clifordpereira/nuxt-auto-crud"
name: "nuxt-auto-crud"
description: "Dynamic CRUD APIs based on drizzle schemas. Define your tables, get full REST functionality - no code needed."
url: "https://github.com/clifordpereira/nuxt-auto-crud"
homepage: "https://www.npmjs.com/package/nuxt-auto-crud"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["auto-crud", "crud", "crud-api", "nuxt", "rest-api"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-25T14:12:31Z"
lastCommitAt: "2026-06-28T06:55:54Z"
lastReleaseAt: "2025-12-05T10:48:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 30
maintainers: ["clifordpereira"]
openGraphImageUrl: "https://opengraph.githubassets.com/e80e75bdbe2be0cccf57f6960b28a15737453c964f675d059533007144bb530a/clifordpereira/nuxt-auto-crud"
discussionCount: 1
---

# nuxt-auto-crud (nac 2.x)

A Nuxt.js module providing dynamic **RESTful CRUD APIs** derived directly from your Drizzle schemas, without writing any code for CRUD operations.

---

## 🚀 Core Features

* **Zero-Codegen Dynamic RESTful CRUD APIs**: nuxt-auto-crud leverages Drizzle ORM, Zod, Nuxt, and Nitro to eliminate the need for manual CRUD coding.
* **Single Source of Truth (SSOT)**: Your Drizzle schemas (`server/db/schema`) define the entire API structure and validation.
* **Constant Bundle Size**: Since no code is generated, the bundle size remains virtually identical whether you have one table or one hundred (scaling only with your schema definitions).
---

## Supported Databases
* **SQLite (libSQL)**
* **MySQL**

---

## Installation Guide (SQLite)

### Option A: Starter Template
```bash
npx nuxi init -t gh:clifordpereira/nac-starter my-app
cd my-app
nuxt db generate
nuxt dev

```

### Option B: Manual Installation

```bash
bun create nuxt@latest my-app
cd my-app
npx nuxi module add hub
bun add drizzle-orm@beta @libsql/client nuxt-auto-crud
bun add -D drizzle-kit@beta typescript

```

#### Configuration

Update `nuxt.config.ts`:

```typescript
export default…

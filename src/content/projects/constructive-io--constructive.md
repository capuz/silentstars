---
repo: "constructive-io/constructive"
name: "constructive"
description: "Secure, Modular Postgres for Teams"
readmeQualityOk: true
url: "https://github.com/constructive-io/constructive"
homepage: "https://constructive.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 54
forks: 7
openIssues: 39
closedIssues: 45
watchers: 2
contributors: 47
recentReleases: 0
createdAt: "2024-12-28T02:52:25Z"
lastCommitAt: "2026-09-19T01:35:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["pyramation", "Zetazzz", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7d0759a9ca450c1042bc48cdea7a701cd7bdf214628dbbc177a77a843508db5/constructive-io/constructive"
---

# Constructive

</p>

  </a>
</p>

**Constructive** is a complete ecosystem for modular PostgreSQL development. Design your database schema, manage it with our package manager, and get a production-ready GraphQL API automatically. Build composable database modules, version them like npm packages, and deploy with confidence.

## 🚀 Quick Start

### Install & Setup

```bash
# Install pgpm globally
npm install -g pgpm

# Start local Postgres (via Docker) and export env vars
pgpm docker start
eval "$(pgpm env)"
```

> **Tip:** Already running Postgres? Skip the Docker step and just export your PG* vars. 

---

### Create a Workspace and Install a Package

```bash
# 1. Create a workspace
pgpm init workspace
cd my-app

# 2. Create your first module
pgpm init
cd packages/your-module

# 3. Install a package
pgpm install @pgpm/faker

# 4. Deploy everything
pgpm deploy --createdb --database mydb1
psql -d mydb1 -c "SELECT faker.city('MI');"
>  Ann Arbor 
```

### Starting a New Project and Adding a Change

```bash
# 1. Create workspace
pgpm init workspace
cd my-app

# 2. Create your first module
pgpm init
cd packages/new-module

# 3. Add some SQL migrations to sql/ directory
pgpm add…

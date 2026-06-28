---
repo: "constructive-io/constructive"
name: "constructive"
description: "Secure, Modular Postgres for Teams"
url: "https://github.com/constructive-io/constructive"
homepage: "https://constructive.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 49
forks: 7
openIssues: 40
closedIssues: 40
watchers: 2
contributors: 45
recentReleases: 0
createdAt: "2024-12-28T02:52:25Z"
lastCommitAt: "2026-06-28T01:34:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["pyramation", "NorOldBurden", "Zetazzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eebb12d01c71b6a889c1c6c6db69eb79b6e810f9c4cc3591d1cb0d22bee47bd/constructive-io/constructive"
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

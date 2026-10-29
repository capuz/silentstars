---
repo: "MUKE-coder/grit"
name: "grit"
description: "The Laravel + Filament experience for Go and React. One command scaffolds a production-ready monorepo (API, web, admin, mobile, desktop) with auth, 2FA, passkeys, jobs, mail, storage, AI and a verifiable audit log already wired."
readmeQualityOk: true
url: "https://github.com/MUKE-coder/grit"
homepage: "https://gritframework.dev"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["golang", "nextjs", "gin-framework", "gorm-orm", "admin-panel", "api-framework", "batteries-included", "code-generator", "expo", "full-stack"]
stars: 149
forks: 20
openIssues: 43
closedIssues: 85
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T03:12:03Z"
lastCommitAt: "2026-10-29T14:08:05Z"
lastReleaseAt: "2026-03-16T05:43:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 93
undervaluedScore: 35
maintainers: ["MUKE-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ebb82f4a822cf68bd1082e7aff194f42c334b7b5b7edaa7ad7f7561cc48c9b7/MUKE-coder/grit"
fundingLinks: ["CUSTOM:https://gritframework.dev/sponsor"]
---

Describe a resource. Get the Go model, the API, the migrations, the TypeScript types,
  the React hooks and the admin screen. Auth, jobs, storage and deploy are already there.

---

## Install

```bash
curl -fsSL https://gritframework.dev/install.sh | sh        # macOS, Linux, Git Bash
```

```powershell
irm https://gritframework.dev/install.ps1 | iex             # Windows PowerShell
```

No Go toolchain needed. `grit version` to check, `grit update` to self-update.

```bash
go install github.com/MUKE-coder/grit/v3/cmd/grit@latest    # with a Go toolchain
GRIT_VERSION=v3.320.0 curl -fsSL https://gritframework.dev/install.sh | sh   # pin a release
```

You need Go 1.21+, Node 20+, pnpm, and Docker for Postgres, Redis, MinIO and Mailhog.
[Full prerequisites](https://gritframework.dev/docs/prerequisites)

## Sixty seconds

```bash
grit new myapp --triple --next   # Web + Admin + API
cd myapp
docker compose up -d             # Postgres, Redis, MinIO, Mailhog
pnpm install
grit start
```

Open http://localhost:3000, register, and you are logged into an application that already
has authentication, two-factor, an admin panel, a database browser and API docs.

Or skip the install:…

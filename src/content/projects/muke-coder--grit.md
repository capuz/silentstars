---
repo: "MUKE-coder/grit"
name: "grit"
description: "Full-stack Go + React meta-framework. Scaffold a production-ready monorepo (API + web + admin + mobile + desktop) in one command — JWT/2FA/OAuth, jobs, mail, AI, file storage, observability, security batteries included."
readmeQualityOk: true
url: "https://github.com/MUKE-coder/grit"
homepage: "https://gritframework.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [77, 20]
topics: ["golang", "nextjs", "gin-framework", "gorm-orm", "admin-panel", "api-framework", "batteries-included", "code-generator", "expo", "full-stack"]
stars: 131
forks: 17
openIssues: 31
closedIssues: 53
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T03:12:03Z"
lastCommitAt: "2026-09-16T08:49:27Z"
lastReleaseAt: "2026-03-16T05:43:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 92
undervaluedScore: 33
maintainers: ["MUKE-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a942eac94679b67bb78027e8d2ce450dc76d9454da8eddeaabd3a563bdaf322/MUKE-coder/grit"
fundingLinks: ["CUSTOM:https://gritframework.dev/sponsor"]
---

</p>

<h1 align="center">Grit</h1>

  <strong>Go + React. Built with Grit.</strong>
</p>

</p>

  The full-stack Go + React framework. Choose your architecture, pick your frontend, and scaffold a production-ready application in seconds.
</p>

---

## What is Grit?

Grit is a full-stack meta-framework that fuses **Go** (Gin + GORM) with **Next.js** or **TanStack Router** (Vite) in a flexible architecture. One interactive CLI to scaffold a complete production-ready project with authentication, 2FA, admin panel, code generation, file storage, email, background jobs, AI integration, one-command deployment, and Docker setup.

## Install

One-line install — works on macOS, Linux, and Windows (PowerShell or Git Bash). No Go toolchain required:

```bash
curl -fsSL https://gritframework.dev/install.sh | sh
```

Pin a specific version:

```bash
GRIT_VERSION=v3.27.0 curl -fsSL https://gritframework.dev/install.sh | sh
```

Already have Go installed? `go install` still works as an alternative:

```bash
go install github.com/MUKE-coder/grit/v3/cmd/grit@latest
# or pin: go install github.com/MUKE-coder/grit/v3/cmd/grit@v3.27.0
```

Verify the install:

```bash
grit version
# grit version 3.27.0…

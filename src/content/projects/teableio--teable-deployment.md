---
repo: "teableio/teable-deployment"
name: "teable-deployment"
description: "Self-host deployment for the full Teable platform: Docker all-in-one and Kubernetes (Helm)"
readmeQualityOk: true
url: "https://github.com/teableio/teable-deployment"
homepage: "https://teable.ai"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [68, 30]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-14T10:37:52Z"
lastCommitAt: "2026-08-19T04:08:33Z"
lastReleaseAt: "2026-07-19T03:04:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/53e84b57a3af3c7b241e00ce21c84f2b8069e27faefe06829ccf06bfcb7f9c22/teableio/teable-deployment"
---

# Teable Self-Host Deployment

Run the full Teable platform on your own infrastructure.

Just want to try Teable (AI Spreadsheet, APP Builder, AI Workflows)? Use
[teable.ai](https://teable.ai) — nothing to deploy.

## What you deploy

Two planes working together:

- **The Teable app** — the product itself, with its PostgreSQL and Redis.
- **The AI runtime plane** — what powers AI chat, the App Builder and app
  deployments: a sandbox engine (AI sessions run inside sandboxes), the Infra
  Service (console + API that the app talks to), a git registry (source of the
  apps you build), object storage (attachments and build artifacts), and a
  preview gateway.

Everything hangs off **one base domain** — typically a subdomain of yours,
e.g. `teable.example.com`. Four DNS records cover the whole platform:

```
<domain>              the Teable app
infra.<domain>        Infra console + API (git and object storage ride it as paths)
*.app.<domain>        apps you built and deployed
*.sandbox.<domain>    sandbox previews in the browser
```

(Each name is only a default — every hostname can be overridden individually.)

Both deployment paths below install the same platform; they differ only in…

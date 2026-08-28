---
repo: "proompteng/lab"
name: "lab"
description: "Experimentation Lab"
readmeQualityOk: true
url: "https://github.com/proompteng/lab"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [48, 47]
stars: 8
forks: 0
openIssues: 10
closedIssues: 447
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-03-23T00:07:38Z"
lastCommitAt: "2026-08-28T15:19:20Z"
lastReleaseAt: "2024-08-25T04:14:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 74
maintainers: ["gregkonush", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74f4d4c181d6e179609819731f07218c34ffbf051e2d25a64ebc5541da76c44d/proompteng/lab"
postedAt: "2026-08-05T06:11:42.802Z"
---

# lab

Multi-language monorepo for the Proompteng product surfaces, agent platform, shared SDKs, and GitOps/infrastructure
automation.

The repository centers on:

- product surfaces and adjacent runtimes in `apps/`
- agent and control-plane services in `services/`
- shared TypeScript packages and deploy tooling in `packages/`
- Kubernetes, Argo CD, Helm, OpenTofu, and Ansible assets for running the stack

## What Lives Here

### Apps

- `apps/` mixes browser apps, desktop apps, runtime services, and a few templates/config-only directories
- `apps/landing`: Next.js marketing site backed by the shared Convex project in `packages/backend`
- `apps/app`: TanStack Start control-plane UI
- `apps/cms`: Payload CMS for landing content
- `apps/docs`: Fumadocs-based documentation app
- `apps/froussard`: Bun webhook bridge service in `apps/`
- `apps/reestr`, `apps/reviseur`, `apps/kabina`, `apps/nata`, `apps/kitty-krew`, `apps/alchimie`, `apps/discourse`:
  additional product and experiment surfaces

### Shared packages

- `packages/backend`: Convex backend, codegen, and seed flows used by frontend apps
- `packages/scripts`: typed Bun deploy/build/reseal automation used across services
-…

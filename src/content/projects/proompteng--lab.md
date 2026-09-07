---
repo: "proompteng/lab"
name: "lab"
description: "Experimentation Lab"
readmeQualityOk: true
url: "https://github.com/proompteng/lab"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [48, 46]
stars: 8
forks: 0
openIssues: 10
closedIssues: 447
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-03-23T00:07:38Z"
lastCommitAt: "2026-09-07T07:58:30Z"
lastReleaseAt: "2024-08-25T04:14:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 74
maintainers: ["gregkonush"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c9c30acd1061cce6a6bf21126104058f39a59f026f98f26fdd2ef8633d450ce/proompteng/lab"
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
- `apps/orbit-salvage`: Godot space-salvage game with a native desktop and browser build
- `apps/ricochet-rush`: Godot 3D survival shooter with native desktop and browser builds
- `apps/froussard`: Bun webhook bridge service in `apps/`
- `apps/reestr`, `apps/reviseur`, `apps/kabina`, `apps/nata`, `apps/kitty-krew`, `apps/alchimie`, `apps/discourse`:
  additional product and experiment surfaces

### Shared…

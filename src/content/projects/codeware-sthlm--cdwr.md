---
repo: "codeware-sthlm/cdwr"
name: "cdwr"
description: "Multi-tenant CMS platform on Payload and Next.js, with the Nx tooling that builds and ships it"
readmeQualityOk: true
url: "https://github.com/codeware-sthlm/cdwr"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["mongodb", "monorepo", "nx", "nx-plugin", "postgres", "react", "typescript", "github-action", "remix", "hono"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-10-08T15:38:49Z"
lastCommitAt: "2026-10-29T10:34:19Z"
lastReleaseAt: "2025-01-12T09:36:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 62
maintainers: ["hakalb", "codeware-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83dbad271318ff362116557bede147394879d6edfec8e6abcf054aff5559e592/codeware-sthlm/cdwr"
---

The Codeware Sthlm platform monorepo — a multi-tenant Payload CMS in production,
  and the Nx tooling that builds and ships it.
  &nbsp;
  &nbsp;

Three things live here, at different levels of maturity:

- **The platform** — a multi-tenant CMS built on [Payload](https://payloadcms.com) v3 and
  Next.js, serving tenant sites and their admin from one app. Custom domains with automated
  certificate issuance, per-tenant content scoping, forms, bookings and a themed admin.
- **[`@cdwr/nx-payload`](https://github.com/codeware-sthlm/cdwr/blob/HEAD/packages/nx-payload) and
  [`create-nx-payload`](https://github.com/codeware-sthlm/cdwr/blob/HEAD/packages/create-nx-payload)** — published Nx plugins that add Payload
  support to any Nx workspace. Developed here, against the platform that actually uses them.
- **The delivery pipeline** — release-driven deploys to [Fly.io](https://fly.io), where an app ships
  when its conventional commits produce a version bump. Per-pull-request preview environments, and
  the internal GitHub Actions that drive them.

## Contents 

- [Packages](#packages)
  - [Nx Plugins](#nx-plugins)
  - [GitHub Actions](#github-actions)
  - [Node…

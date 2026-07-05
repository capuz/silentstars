---
repo: "saga-ed/soa"
name: "soa"
description: "Modern TypeScript monorepo for building modular, schema-driven microservices.  Supports GraphQL (type-graphql), tRPC, and REST APIs with flexible deployment  options for educational environments."
readmeQualityOk: true
url: "https://github.com/saga-ed/soa"
homepage: "https://github.com/saga-ed/soa#introduction"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 6
forks: 0
openIssues: 33
closedIssues: 16
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-10-31T22:17:33Z"
lastCommitAt: "2026-07-05T20:59:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 53
maintainers: ["SethPaul", "skilgoreT", "jcward"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed2d5716e940cf2027da909c71f6da1105423c9ecb1c9d04a914f4579640a956/saga-ed/soa"
---

# Saga-ed/SOA

## Quickstart

```sh
pnpm install
pnpm check
```

- Always run `pnpm install` before building or running any commands for the first time.
- Run `pnpm check` before every commit or PR to ensure you haven't regressed functionality.

## Introduction

**saga-soa** is a modern, modular monorepo for building service-oriented architectures (SOA) in educational and experimental environments. It leverages [Turborepo](https://turbo.build/), [pnpm](https://pnpm.io/), and a collection of composable packages to enable scalable, introspectable, and schema-driven APIs. The project is organized into apps (web, docs) and packages (config, db, UI, etc.), supporting both serverless and traditional deployments.

Key features:

- Monorepo powered by Turborepo for fast, incremental builds
- Introspectable, schemaful APIs (type-graphql, tRPC, REST)
- Modular, logically composable microservices
- Flexible deployment: serverless or server
- Strong focus on developer experience and maintainability

## Build Out

This project is under active development. The following packages have some level of build out:

- **@saga-ed/config**: Strongly-typed configuration management using Zod schemas for…

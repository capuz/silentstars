---
repo: "adamtrip-solutions/create-convex-monorepo"
name: "create-convex-monorepo"
description: "Generate typed Convex monorepos with Next.js, Vite, TanStack Start and Expo."
readmeQualityOk: true
url: "https://github.com/adamtrip-solutions/create-convex-monorepo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-09-09T23:05:34Z"
lastCommitAt: "2026-09-19T02:45:31Z"
lastReleaseAt: "2026-09-19T02:45:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 49
maintainers: ["adamtrip", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f40cdb6168c66e11f0fa7797d2b0405673ef9c119972a930e697983cc4d635b3/adamtrip-solutions/create-convex-monorepo"
---

# create-convex-monorepo

A TypeScript CLI that generates pnpm or bun workspaces. Turborepo runs multiple frontends sharing one typed Convex backend. Choose Next.js, Vite + React, TanStack Start, React Router v7, Expo, Astro + React island, SvelteKit, Nuxt, or a combination. React apps support optional Clerk, Convex Auth, WorkOS AuthKit, or Better Auth authentication on their supported frameworks. SvelteKit and Nuxt support auth `none` only.

The generator composes framework templates and auth adapters. It does not copy a single starter and delete unwanted pieces. Choose blank apps or a messages example. The example includes a query and mutation, plus compile-time assertions for the shared API's argument and return types.

## Why this exists

Convex already generates an API from your backend functions. Sharing that API between independently bundled web and native apps should preserve its types without duplicating backend code. This project supplies the workspace wiring, framework-specific environment handling, and checks needed to keep that boundary intact.

## Usage

Requires Node.js 22.12 or newer and pnpm or bun for the generated workspace.

```sh
pnpm create…

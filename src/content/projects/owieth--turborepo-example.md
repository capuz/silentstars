---
repo: "owieth/turborepo-example"
name: "turborepo-example"
description: "Modern monorepo template — Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, Nextra docs, TypeScript 5.9, Turborepo, pnpm workspaces"
readmeQualityOk: true
url: "https://github.com/owieth/turborepo-example"
homepage: "https://owieth.github.io/turborepo-example/"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [55, 24]
topics: ["nextjs", "turbo", "turborepo-template", "monorepo", "nextjs16", "nextra", "pnpm", "react", "react19", "shadcn-ui"]
stars: 22
forks: 6
openIssues: 0
closedIssues: 28
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-08-15T13:03:42Z"
lastCommitAt: "2026-07-29T06:15:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["owieth", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/108521e0845be6729a826eb9a550388c4cc1517a7f88f0793af4bc6c74c749bb/owieth/turborepo-example"
---

# Turborepo Example

A modern monorepo template built with Next.js 16, React 19, Tailwind CSS v4, TypeScript 5.9, Turborepo, and pnpm workspaces.

## Architecture

```mermaid
graph TD
    A[apps/web] -->|imports| D[packages/ui]
    B[apps/docs] -->|imports| D
    A -->|extends| E[packages/tsconfig]
    B -->|extends| E
    A -->|extends| F[packages/eslint-config-custom]
    B -->|extends| F
    D -->|extends| E
    D -->|extends| F
```

## What's Inside

### Apps

| App         | Description                           | Port |
| ----------- | ------------------------------------- | ---- |
| `apps/web`  | Next.js application with Tailwind CSS | 3000 |
| `apps/docs` | Nextra documentation site             | 3001 |

### Packages

| Package                         | Description                                                 |
| ------------------------------- | ----------------------------------------------------------- |
| `packages/ui`                   | Shared React component library (shadcn/ui, Radix, Tailwind) |
| `packages/tsconfig`             | Shared TypeScript configurations                            |
| `packages/eslint-config-custom` | Shared ESLint configuration…

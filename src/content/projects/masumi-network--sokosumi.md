---
repo: "masumi-network/sokosumi"
name: "sokosumi"
description: "This is the monorepo of the Sokosumi Marketplace, the web-app is built with Next.js and TypeScript, with a strong focus on UX and security"
readmeQualityOk: true
url: "https://github.com/masumi-network/sokosumi"
homepage: "https://sokosumi.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 5
openIssues: 2
closedIssues: 84
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2025-02-03T12:40:15Z"
lastCommitAt: "2026-08-03T06:43:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 81
maintainers: ["mrosberghaus", "cursor[bot]", "PatrickTobler"]
openGraphImageUrl: "https://opengraph.githubassets.com/61e976658f64ce66c4708628ed9e160a9530f27a577ef04e9c8f81e728cc8322/masumi-network/sokosumi"
---

# Sokosumi Monorepo

Sokosumi is a modern, secure, and user-focused marketplace platform. This monorepo contains all core services, including the main web application and backend sync functions.

## Project Structure

```
sokosumi/
├── apps/
│   └── web/         # Next.js 16 web application (TypeScript, Tailwind, Shadcn UI)
├── packages/
│   └── database/    # Shared database layer with Prisma and repositories
├── docs/            # Documentation (future)
├── biome.jsonc      # Root Biome configuration
├── package.json     # Monorepo root config
├── pnpm-workspace.yaml # Monorepo workspace config
└── ...              # Other config and shared files
```

- **apps/web/**: Main user-facing web application (Next.js 16, React 19.2, Tailwind CSS, Shadcn UI, next-intl, Prisma, etc.)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/) (monorepo package manager)

### Clone and Install

```bash
git clone https://github.com/yourusername/sokosumi.git
cd sokosumi
pnpm install
```

### Setup Environment

- Copy and configure environment variables for each package (see `apps/web/.env.example` if present).

## Development

### Web…

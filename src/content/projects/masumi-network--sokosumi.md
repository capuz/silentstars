---
repo: "masumi-network/sokosumi"
name: "sokosumi"
description: "This is the monorepo of the Sokosumi Marketplace, the web-app is built with Next.js and TypeScript, with a strong focus on UX and security"
readmeQualityOk: true
url: "https://github.com/masumi-network/sokosumi"
homepage: "https://sokosumi.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 12
forks: 8
openIssues: 2
closedIssues: 84
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-02-03T12:40:15Z"
lastCommitAt: "2026-09-06T08:05:14Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 83
maintainers: ["mrosberghaus", "PatrickTobler", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1f36d07d14a9bbaabc94bf864efb52cf0d82216fdfd226102d89802b2c39f89/masumi-network/sokosumi"
---

# Sokosumi Monorepo

Sokosumi is a marketplace platform. This monorepo is the web app, the Core API, and shared packages.

## Project Structure

```
sokosumi/
├── apps/
│   ├── web/         # Next.js 16 web app (TypeScript, Tailwind, Shadcn UI)
│   ├── core/        # Hono API — owns all Postgres/Prisma access
│   └── cli/         # Developer CLI — VISION.md only until specced
├── packages/
│   ├── database/    # @sokosumi/database — Prisma client, helpers, repositories
│   ├── masumi/      # @sokosumi/masumi — protocol clients, hash, schemas
│   ├── utils/       # @sokosumi/utils — client-safe helpers
│   ├── net/         # @sokosumi/net — SSRF-safe fetch
│   ├── email/       # @sokosumi/email — renderers and locales
│   ├── chat/        # @sokosumi/chat — chat types
│   ├── ai-provider/ # @sokosumi/ai-provider — Sokosumi AI SDK provider
│   └── soko-bot/    # @sokosumi/soko-bot — Soko Bot contracts (runtime is in Core)
├── docs/            # Agent, domain, coworker, and design docs
├── scripts/         # local-env, cloud-agent-db, CI helpers
├── skills/          # First-party agent skill sources
├── biome.jsonc      # Root Biome configuration
├── package.json     # Monorepo root…

---
repo: "masumi-network/sokosumi"
name: "sokosumi"
description: "This is the monorepo of the Sokosumi Marketplace, the web-app is built with Next.js and TypeScript, with a strong focus on UX and security"
readmeQualityOk: true
url: "https://github.com/masumi-network/sokosumi"
homepage: "https://sokosumi.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 13
forks: 8
openIssues: 3
closedIssues: 84
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-02-03T12:40:15Z"
lastCommitAt: "2026-09-11T08:00:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 81
maintainers: ["mrosberghaus", "schaier-io", "francisluz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b37454b8936123d218d698894ac3c1db4c6249f13b710b91e450bd3d2f9f420/masumi-network/sokosumi"
postedAt: "2026-09-06T08:08:53.944Z"
---

# Sokosumi Monorepo

Sokosumi is a marketplace platform. This monorepo is the web app, the Core API, and shared packages.

## Project Structure

```
sokosumi/
├── apps/
│   ├── web/         # Next.js 16 web app (TypeScript, Tailwind, Shadcn UI)
│   ├── core/        # Hono API — owns all Postgres/Prisma access
│   ├── apple/       # Native macOS + iOS — Xcode (outside turbo and Biome)
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
├──…

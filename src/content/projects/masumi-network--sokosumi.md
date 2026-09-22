---
repo: "masumi-network/sokosumi"
name: "sokosumi"
description: "This is the monorepo of the Sokosumi Marketplace, the web-app is built with Next.js and TypeScript, with a strong focus on UX and security"
readmeQualityOk: true
url: "https://github.com/masumi-network/sokosumi"
homepage: "https://sokosumi.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 13
forks: 7
openIssues: 3
closedIssues: 84
watchers: 1
contributors: 13
recentReleases: 1
createdAt: "2025-02-03T12:40:15Z"
lastCommitAt: "2026-09-22T08:44:02Z"
lastReleaseAt: "2026-09-19T20:34:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 82
maintainers: ["mrosberghaus", "schaier-io", "enjojoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5b3103e5cce948e04db568e1d4453a7aee54a54ea992e40bbcb69d5a2c3fcd3/masumi-network/sokosumi"
postedAt: "2026-09-06T08:08:53.944Z"
---

# Sokosumi Monorepo

Sokosumi is a marketplace platform. This monorepo is the web app, the Core API, native Apple apps, the developer CLI, and shared packages.

## Project Structure

```
sokosumi/
├── apps/
│   ├── web/         # Next.js 16 web app (TypeScript, Tailwind, Shadcn UI)
│   ├── core/        # Hono API — owns all Postgres/Prisma access
│   ├── apple/       # Native macOS + iOS — Xcode (outside turbo and Biome)
│   └── cli/         # Developer CLI — Ink TUI and headless commands (SPEC + VISION)
├── packages/
│   ├── database/    # @sokosumi/database — Prisma schema, client, helpers
│   ├── masumi/      # @sokosumi/masumi — protocol clients, hash, schemas
│   ├── utils/       # @sokosumi/utils — client-safe helpers
│   ├── net/         # @sokosumi/net — SSRF-safe fetch
│   ├── email/       # @sokosumi/email — renderers and locales
│   ├── ai-provider/ # @sokosumi/ai-provider — Sokosumi AI SDK provider
│   └── soko-bot/    # @sokosumi/soko-bot — Soko Bot contracts (runtime is in Core)
├── docs/            # Agent, domain, coworker, and design docs
├── scripts/         # local-env, cloud-agent-db, CI helpers
├── skills/          # First-party agent skill sources
├──…

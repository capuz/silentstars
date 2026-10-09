---
repo: "masumi-network/sokosumi"
name: "sokosumi"
description: "This is the monorepo of the Sokosumi Marketplace, the web-app is built with Next.js and TypeScript, with a strong focus on UX and security"
readmeQualityOk: true
url: "https://github.com/masumi-network/sokosumi"
homepage: "https://sokosumi.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 13
forks: 7
openIssues: 3
closedIssues: 84
watchers: 1
contributors: 13
recentReleases: 2
createdAt: "2025-02-03T12:40:15Z"
lastCommitAt: "2026-10-09T10:50:51Z"
lastReleaseAt: "2026-09-19T20:34:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 85
maintainers: ["mrosberghaus", "enjojoy", "schaier-io"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d7e0b718f9569d5d890a126b6aaf39681e1398f7a735cb5bcb144cde786789a/masumi-network/sokosumi"
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
│   ├── cmo/         # Next.js 16 CMO app at app.cmo.xyz (Sign in with Sokosumi; no database)
│   ├── apple/       # Native macOS + iOS — Xcode (outside turbo and Biome)
│   └── cli/         # Developer CLI — Ink TUI and headless commands (SPEC + VISION)
├── packages/
│   ├── database/    # @sokosumi/database — Prisma schema, client, helpers
│   ├── core-client/ # @sokosumi/core-client — generated TypeScript client for Core's /v1 API
│   ├── masumi/      # @sokosumi/masumi — protocol clients, hash, schemas
│   ├── utils/       # @sokosumi/utils — client-safe helpers
│   ├── net/         # @sokosumi/net — SSRF-safe fetch and outbound webhook transport
│   ├── email/       # @sokosumi/email — renderers and locales
│   ├── ai-provider/ # @sokosumi/ai-provider — Sokosumi AI SDK provider
│   └── soko-bot/    # @sokosumi/soko-bot — Soko Bot…

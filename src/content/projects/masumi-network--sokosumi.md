---
repo: "masumi-network/sokosumi"
name: "sokosumi"
description: "This is the monorepo of the Sokosumi Marketplace, the web-app is built with Next.js and TypeScript, with a strong focus on UX and security"
readmeQualityOk: true
url: "https://github.com/masumi-network/sokosumi"
homepage: "https://sokosumi.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 13
forks: 8
openIssues: 3
closedIssues: 84
watchers: 1
contributors: 15
recentReleases: 9
createdAt: "2025-02-03T12:40:15Z"
lastCommitAt: "2026-11-02T13:22:46Z"
lastReleaseAt: "2026-10-12T14:51:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 88
maintainers: ["mrosberghaus", "PatrickTobler", "enjojoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c0f5dc09012f96c4e727fc344b1dde30bf0549e7108e2c6a77ce9f4513a373e/masumi-network/sokosumi"
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

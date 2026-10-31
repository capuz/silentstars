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
lastCommitAt: "2026-10-30T22:21:39Z"
lastReleaseAt: "2026-10-12T14:51:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 88
maintainers: ["mrosberghaus", "enjojoy", "PatrickTobler"]
openGraphImageUrl: "https://opengraph.githubassets.com/894954d7a5ff72c53469746d9b77d4baebf08878b3b6e9f1a904c7db18dd15b9/masumi-network/sokosumi"
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

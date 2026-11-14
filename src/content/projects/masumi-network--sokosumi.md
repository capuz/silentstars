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
lastCommitAt: "2026-11-14T00:47:32Z"
lastReleaseAt: "2026-10-12T14:51:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 88
maintainers: ["schaier-io", "PatrickTobler", "enjojoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e9c2e88b9d4edf89fd45eac9011c54c8c5211609bb1392d87a898fa209760ff/masumi-network/sokosumi"
postedAt: "2026-09-06T08:08:53.944Z"
---

# Sokosumi Monorepo

Sokosumi is a marketplace platform. This monorepo is the web app, the Core API, native Apple apps, the developer CLI, and shared packages.

Sokosumi Social supports connecting, scheduling, and publishing on X, YouTube, LinkedIn, Instagram, and Facebook in every workspace. TikTok and other platforms remain Coming soon. Ads is open in every workspace. See the [Social API notes](https://github.com/masumi-network/sokosumi/blob/HEAD/docs/coworker/social-posts-api.md) for publishing rules and access.

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
│   ├── masumi/      # @sokosumi/masumi — protocol…

---
repo: "linuxfoundation/lfx-self-serve"
name: "lfx-self-serve"
description: "LFX Self Serve UI"
readmeQualityOk: true
url: "https://github.com/linuxfoundation/lfx-self-serve"
homepage: "https://linuxfoundation.github.io/lfx-self-serve/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 16
forks: 8
openIssues: 615
closedIssues: 1303
watchers: 1
contributors: 53
recentReleases: 0
createdAt: "2025-07-14T21:22:45Z"
lastCommitAt: "2026-10-29T21:23:45Z"
lastReleaseAt: "2025-09-17T23:05:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 72
maintainers: ["juanpimartinuceda", "gaspergrom", "andrest50"]
openGraphImageUrl: "https://opengraph.githubassets.com/cffa15d361cbe51d6e3e2eed0826669b367e44770c17721e556a97e825f3c5f9/linuxfoundation/lfx-self-serve"
discussionCount: 1
---

# LFX One

This is a monorepo for the LFX One application, built
with Angular 20 and stable zoneless change detection.

## What's inside?

### Apps and Packages

- `apps/lfx-one`: Angular 20 SSR application with stable zoneless change detection and
  direct PrimeNG UI components

The app is 100% [TypeScript](https://www.typescriptlang.org/).

### Architecture

- **Frontend**: Angular 20 with stable zoneless change detection, Angular
  Signals, PrimeNG components, Tailwind CSS
- **UI Framework**: PrimeNG 20 with custom LFX UI Core preset and Tailwind CSS integration
- **Styling**: Tailwind CSS v3 with PrimeUI plugin, CSS layers architecture,
  Google Fonts (Inter + Roboto Slab)
- **Icons**: Font Awesome Pro via kits (no npm packages)
- **Backend**: Express.js server with Angular 20 SSR, Auth0 authentication, Pino logging
- **Infrastructure**: PM2 process management for production deployment

### Development Tools

This has comprehensive development tooling:

- **[TypeScript](https://www.typescriptlang.org/)** for static type checking with strict configuration
- **[ESLint](https://eslint.org/)** for code linting with Angular 20 specific rules
- **[Prettier](https://prettier.io)**…

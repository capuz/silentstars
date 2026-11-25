---
repo: "linuxfoundation/lfx-self-serve"
name: "lfx-self-serve"
description: "LFX Self Serve UI"
readmeQualityOk: true
url: "https://github.com/linuxfoundation/lfx-self-serve"
homepage: "https://linuxfoundation.github.io/lfx-self-serve/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 18
forks: 11
openIssues: 785
closedIssues: 1815
watchers: 1
contributors: 53
recentReleases: 0
createdAt: "2025-07-14T21:22:45Z"
lastCommitAt: "2026-11-25T02:10:48Z"
lastReleaseAt: "2025-09-17T23:05:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 73
maintainers: ["ShivIndeLF", "fayazg", "audigregorie"]
openGraphImageUrl: "https://opengraph.githubassets.com/3941f3ce533aea8e5f3f529c25eb8905eb1222cfb6dd45a23f8c8293a3cee8d9/linuxfoundation/lfx-self-serve"
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

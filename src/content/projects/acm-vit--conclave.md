---
repo: "ACM-VIT/conclave"
name: "conclave"
description: "Real-time meetings platform with web/mobile clients, SFU, and an apps SDK"
url: "https://github.com/ACM-VIT/conclave"
homepage: "https://conclave.acmvit.in"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [55, 22]
stars: 33
forks: 18
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-01-11T00:55:09Z"
lastCommitAt: "2026-07-03T06:24:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 50
maintainers: ["theg1239", "darkside4x"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f5fdcbb6ac1028b8d8f1e3f5a99bcd340d20bf8c6a33722de8c6bb3f8faffb6/ACM-VIT/conclave"
---

<h2>Conclave</h2>

<p>Real-time meetings platform with web/mobile clients, SFU, and an apps SDK</p>

<p>
  </a>
</p>

</div>

---

## Table of Contents

- [About](#about)
- [Monorepo Layout](#monorepo-layout)
- [Quick Start](#quick-start)
- [Mobile Development](#mobile-development)
- [Apps SDK Docs](#apps-sdk-docs)
- [Optional Services](#optional-services)
- [Contributing](#contributing)
- [Community & Conduct](#community--conduct)

---

## About

Conclave is a real-time meetings platform with:

- `apps/web`: Next.js web client and API routes
- `apps/mobile`: Expo/React Native mobile client
- `apps/conclave-skip`: Skip.dev project for native clients
- `packages/sfu`: mediasoup SFU and real-time socket handlers
- `packages/apps-sdk`: in-meeting apps runtime SDK (registry, provider, Yjs sync, awareness, uploads)
- `packages/shared-browser`: optional VNC-based shared browser service

---

## Monorepo Layout

```text
apps/
  web/
  mobile/
packages/
  sfu/
  apps-sdk/
  shared-browser/
scripts/
```

Prerequisites:

- Node.js 20+
- `pnpm` 9+
- Docker (optional, for deploy scripts and shared browser runtime image)

---

## Quick Start

1. Install dependencies:

```bash
pnpm install
```…

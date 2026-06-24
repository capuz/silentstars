---
repo: "kentcdodds/kody"
name: "kody"
description: "An experimental personal assistant platform built on Cloudflare Workers and MCP"
url: "https://github.com/kentcdodds/kody"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 103
forks: 10
openIssues: 3
closedIssues: 55
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-18T23:30:18Z"
lastCommitAt: "2026-06-24T00:23:51Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 32
maintainers: ["cursor[bot]", "kentcdodds", "kody-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bf5fddaccd7ef01f3aac4255a6cc194a431ad06074c278524b2f343413a876c/kentcdodds/kody"
---

<p>
    <strong>An experimental personal assistant platform built on Cloudflare Workers and MCP</strong>
  </p>

  <p>
  </p>
</div>

---

`kody` is an experimental personal assistant platform built on Cloudflare
Workers and the Model Context Protocol (MCP). It ships a Remix UI, Worker-based
request routing, package runtime plumbing, and OAuth-protected MCP endpoints.
The project favors a compact MCP surface with powerful `search` and Code Mode
`execute` flows over a large static tool catalog.

Kody is a multi-user personal assistant: each signed-in user gets a fully
isolated assistant (packages, jobs, secrets, values, memories, and related
state). Tests and fixtures often reference `me@kentcdodds.com` as the
maintainer's primary account; that address is not privileged at runtime. The
repo follows several [epicflare](https://github.com/epicweb-dev/epicflare)
starter conventions.

The repo is organized as an Nx monorepo, with shared modules in
`packages/shared` (`@kody-internal/shared`), the main app worker under
`packages/worker`, and mock Workers under `packages/mock-servers/*`.

## Quick Start

```bash
npm install
npm run dev
```

The dev server runs at `localhost:8787`.…

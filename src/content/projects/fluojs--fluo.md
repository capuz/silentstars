---
repo: "fluojs/fluo"
name: "fluo"
description: "Standard-First TypeScript Backend Framework"
readmeQualityOk: true
url: "https://github.com/fluojs/fluo"
homepage: "https://github.com/fluojs/fluo/tree/main/docs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["backend-framework", "bun", "cloudflare-workers", "deno", "dependency-injection", "nodejs", "typescript", "standard-decorators"]
stars: 24
forks: 0
openIssues: 1
closedIssues: 1933
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-11T08:16:06Z"
lastCommitAt: "2026-11-03T11:15:15Z"
lastReleaseAt: "2026-04-27T08:52:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["ayden94", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9ad258fbcc95f02d72f96dc2d3384947d27af0b4550298b85594520fd0204c4/fluojs/fluo"
discussionCount: 0
---

&nbsp;&middot;&nbsp;

**fluo** is a TypeScript backend framework built on TC39 standard decorators and explicit dependency injection. Build API servers with controllers, services, and modules, or connect React pages to the same HTTP pipeline for a full-stack application. Add database, authentication, and messaging packages as needed.

[Quick Start](#quick-start) · [Choose Your Application](#choose-your-application) · [Book](https://github.com/fluojs/fluo/blob/HEAD/book/README.md) · [Documentation](https://github.com/fluojs/fluo/blob/HEAD/docs/README.md) · [Examples](https://github.com/fluojs/fluo/blob/HEAD/examples/README.md)

## Quick Start

**Prerequisites:** Install Node.js 24.x and pnpm 10. The CLI and Babel 8 compiler toolchain require Node.js `>=24.11.0 <27`; Node.js runtime packages support `>=24.0.0 <27`. The CLI itself runs on Node.js even when generating a project for another runtime.

Start with the CLI published on npm; no repository clone is needed.

```bash
pnpm --allow-build=esbuild dlx @fluojs/cli new my-backend --package-manager pnpm
cd my-backend
pnpm dev
```

`--allow-build=esbuild` is a pnpm option that approves the CLI dependency's install script. If prompted,…

---
repo: "anolilab/lunora"
name: "lunora"
description: "Type-safe, real-time backend framework on your own Cloudflare account — Workers, Durable Objects, D1, R2, Queues. Convex-style DX, Vite-first."
readmeQualityOk: true
url: "https://github.com/anolilab/lunora"
homepage: "https://lunora.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["baas", "backend", "cloudflare", "cloudflare-workers", "convex", "d1", "durable-objects", "edge", "framework", "full-stack"]
stars: 284
forks: 10
openIssues: 5
closedIssues: 102
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-29T14:06:02Z"
lastCommitAt: "2026-10-14T08:59:16Z"
lastReleaseAt: "2026-06-21T22:57:27Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 28
maintainers: ["github-actions[bot]", "prisis"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f09ec0ecf6ff8ee48bbfc1d7f7a1978e203abcccf2c77aa7aee16bd2788a2d0/anolilab/lunora"
fundingLinks: ["GITHUB:https://github.com/prisis"]
discussionCount: 0
---

**Type-safe, real-time backend on your own Cloudflare account. Vite-first.**

[**Documentation**](https://lunora.sh/docs) · [**Website**](https://lunora.sh) · [**Packages**](https://lunora.sh/packages) · [**Quick start**](#quick-start)

---

            Daniel Bannert's open source work is supported by the community on <a href="https://github.com/sponsors/prisis">GitHub Sponsors</a>

---

## What is Lunora?

Lunora gives you Convex-style DX on your own Cloudflare account. You write type-safe queries, mutations, and actions in TypeScript, and Lunora deploys them as Cloudflare Workers. Durable Objects hold real-time state, D1 handles SQL, R2 stores blobs, and Queues run jobs. Nothing runs on servers we operate; everything lives in the Cloudflare account you already pay for.

Lunora is Vite-first. The dev loop, codegen, and client bindings plug into a Vite project through `@cloudflare/vite-plugin`, so local dev runs on workerd, the same runtime as production. Rsbuild and Rspack projects get the same loop through `@lunora/rspack`, and a standalone CLI covers everything else.

## Quick start

```bash
pnpm dlx lunorash@alpha init my-app
cd my-app
pnpm install
pnpm dev
```

> **Alpha.**…

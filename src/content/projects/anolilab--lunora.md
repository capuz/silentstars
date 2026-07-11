---
repo: "anolilab/lunora"
name: "lunora"
description: "Type-safe, real-time backend framework on your own Cloudflare account — Workers, Durable Objects, D1, R2, Queues. Convex-style DX, Vite-first."
readmeQualityOk: true
url: "https://github.com/anolilab/lunora"
homepage: "https://lunora.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["baas", "backend", "cloudflare", "cloudflare-workers", "convex", "d1", "durable-objects", "edge", "framework", "full-stack"]
stars: 168
forks: 5
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-29T14:06:02Z"
lastCommitAt: "2026-07-11T05:59:00Z"
lastReleaseAt: "2026-06-21T22:57:27Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 32
maintainers: ["github-actions[bot]", "prisis"]
openGraphImageUrl: "https://opengraph.githubassets.com/97c4ab33b7dea6d3b7a8545be20bd17802e5bdce4e6c276e47a65c5cb1eff783/anolilab/lunora"
fundingLinks: ["GITHUB:https://github.com/prisis"]
discussionCount: 0
---

**Type-safe, real-time backend on your own Cloudflare account. Vite-first.**

[**Documentation**](https://lunora.sh/docs) · [**Website**](https://lunora.sh) · [**Packages**](https://lunora.sh/packages) · [**Quick start**](#quick-start)

<br />

</div>

---

    <p>
        <sup>
            Daniel Bannert's open source work is supported by the community on <a href="https://github.com/sponsors/prisis">GitHub Sponsors</a>
        </sup>
    </p>
</div>

---

## What is Lunora?

Lunora is **Convex DX on your own Cloudflare account**. You write type-safe queries, mutations, and actions in TypeScript; Lunora turns them into Cloudflare Workers backed by Durable Objects for real-time state, D1 for SQL, R2 for blobs, and Queues for jobs. There are no proprietary servers in the loop — only the Cloudflare account you already pay for.

It is **Vite-first**: the dev loop, codegen, and client bindings plug into a Vite project via `@cloudflare/vite-plugin`, so dev runs on workerd (the same runtime as production). A standalone CLI fallback exists for non-Vite users.

## Quick start

```bash
pnpm dlx lunorash@alpha init my-app
cd my-app
pnpm dev
```

> **Alpha:** the npm package is **`lunorash`**…

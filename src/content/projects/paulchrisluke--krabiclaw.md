---
repo: "paulchrisluke/krabiclaw"
name: "krabiclaw"
description: "Multi-tenant Vue SaaS. Nuxt 4 + Cloudflare Pages + D1."
readmeQualityOk: true
url: "https://github.com/paulchrisluke/krabiclaw"
homepage: "https://krabiclaw.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [66, 27]
stars: 8
forks: 1
openIssues: 13
closedIssues: 346
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-02T23:22:07Z"
lastCommitAt: "2026-10-02T09:57:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 57
maintainers: ["paulchrisluke", "coderabbitai[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1227610080/f9ad3aec-ea37-4af9-9dae-003368d3b7fe"
---

# Krabiclaw

Multi-tenant platform SaaS. Nuxt 5 nightly + Nitro 3 + Cloudflare Workers + D1.

**Package manager: yarn only.** Never npm or pnpm.

---

## Scripts

| Command | What it does |
|---|---|
| `yarn dev` | Nuxt development server with HMR and locally emulated Cloudflare bindings at `http://localhost:3000`. |
| `yarn local:setup` | The only local setup entry point: migrate D1, refresh fixtures, create the local developer account, and verify the result. |
| `yarn dev:worker` | Build and run the production-like Worker locally with Wrangler at `http://localhost:3000`. |
| `yarn dev:worker:start` | Run the existing `.output` Worker build locally without rebuilding it. |
| `yarn build` | Production build → `.output/` |
| `yarn db:generate` | Generate a new `migrations/*.sql` file from `server/db/schema.ts` |
| `yarn drizzle:check` | Verify `server/db/schema.ts` hasn't drifted from the live D1 schema |
| `yarn stripe:listen` | Forward Stripe webhooks to localhost (local dev only) |
| `yarn canary:prod` | Production-safe authenticated browser canary (read-only checks). |
| `yarn canary:notifications` | Production provider-level email/WhatsApp notification canary. |

---

##…

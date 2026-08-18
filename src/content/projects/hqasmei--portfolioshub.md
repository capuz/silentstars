---
repo: "hqasmei/portfolioshub"
name: "portfolioshub"
description: "The best place to find portfolio inspiration"
readmeQualityOk: true
url: "https://github.com/hqasmei/portfolioshub"
homepage: "https://portfolioshub.com"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [67, 20]
stars: 71
forks: 13
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-06-19T18:08:49Z"
lastCommitAt: "2026-08-18T04:08:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 30
maintainers: ["hqasmei"]
openGraphImageUrl: "https://opengraph.githubassets.com/38120583b1fc14a71db347d7e9fcfe47de37a611ec8767be06bdce304ccf880b/hqasmei/portfolioshub"
---

# PortfoliosHub — SvelteKit

A SvelteKit 2 / Svelte 5 port of [portfolioshub](https://portfolioshub.com), deployed to Cloudflare
Workers. The Convex backend and Clerk tenant are unchanged from the original Next.js app — `convex/`
is a direct copy, so both apps can run against the same deployment during the migration.

## Stack

| Concern   | Package                                                        |
| --------- | -------------------------------------------------------------- |
| Framework | SvelteKit 2 + Svelte 5 (runes), `@sveltejs/adapter-cloudflare` |
| Backend   | Convex, via `convex-svelte`                                    |
| Auth      | Clerk, via the community `svelte-clerk`                        |
| UI        | Tailwind v4 + shadcn-svelte (bits-ui)                          |
| Forms     | `sveltekit-superforms` (SPA mode) + zod                        |
| Theme     | `mode-watcher`                                                 |
| Toasts    | `svelte-sonner`                                                |
| Markdown  | `mdsvex` for the legal pages, `marked` for changelog/roadmap   |

## Getting started

```bash
npm install
cp .env.example .env   # fill in the…

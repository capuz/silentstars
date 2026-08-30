---
repo: "unorouter/unorouter"
name: "unorouter"
description: "Storefront for unorouter.com. Next.js 16, React 19, Tailwind v4 frontend for browsing and purchasing AI model access."
readmeQualityOk: true
url: "https://github.com/unorouter/unorouter"
homepage: "https://unorouter.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-marketplace", "nextjs", "react", "storefront", "tailwind", "unorouter", "ai-api", "character-ai", "llm-gateway", "llm-router"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-15T22:40:51Z"
lastCommitAt: "2026-08-30T00:35:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5e7bc62e0f111c2ea778960e79ff81b59a157eb1c1e6cc438a55c3ea914d56f1/unorouter/unorouter"
---

# UnoRouter

A local-first frontend for the UnoRouter AI gateway. Three surfaces in one app:

1. **Gateway dashboard** - manage API keys, usage, billing, and credits for the UnoRouter API (a `new-api` gateway over 130+ upstream providers).
2. **Chat** - a full RisuAI-class roleplay/chat client. Use the gateway's catalog models (internal API) or bring your own provider (BYOK). Characters, lorebooks, presets, agents, in-chat image generation.
3. **AI API Model Tester** - probe any AI endpoint to verify it actually serves the model it claims, with a public rankings leaderboard.

Next.js 16 frontend + Elysia BFF. A per-user SQLocal/OPFS browser DB is the sole source of truth for chat/RP/tester state - everything works for guests, no account needed. Cross-device transfer is local export/import; the server DB holds only the public model-tester rankings.

## Stack

- Next.js 16, React 19 (compiler), Tailwind v4, shadcn/ui
- Jotai, React Query 5, nuqs, next-intl (18 locales)
- Elysia on Bun, TypeBox, Eden Treaty, Orval-generated upstream client
- Drizzle ORM: SQLocal over the SQLite WASM opfs-sahpool VFS (client, source of truth) + Turso/libSQL (server, rankings only)
- Vercel AI SDK…

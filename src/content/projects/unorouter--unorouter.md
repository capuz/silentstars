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
stars: 20
forks: 9
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-15T22:40:51Z"
lastCommitAt: "2026-10-15T08:31:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["0-don"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3202cf97a2e9908ae52d8428d7f78098208e79cd4f25e68c110034bdc3734bd/unorouter/unorouter"
---

# UnoRouter

Local-first frontend for the UnoRouter AI gateway (`new-api` fork, 130+ upstream providers). Next.js 16 + Elysia BFF on Bun. AGPL-3.0.

Surfaces:

- **Gateway dashboard**: API keys, usage logs, billing, credits, gift cards, affiliate, model catalog, price comparison, status page.
- **Chat**: RisuAI-class roleplay client. Catalog models through a same-origin proxy (the upstream token never reaches the browser) or bring your own OpenAI-compatible endpoint (browser talks to it directly). Characters, lorebooks, presets, loadouts, Lua triggers, sandboxed JS plugins, group chats, peer-to-peer rooms, in-chat image generation, SillyTavern card import.
- **AI API Model Tester**: probes an endpoint with nonce-tagged prompts to tell whether it serves the model it claims; public rankings leaderboard with server-issued (unforgeable) probe mode.

Chat and tester state live in ONE SQLocal/OPFS database per device in the browser; that copy is the only copy. Everything works for guests and offline. Cross-device transfer is export/import. The server DB (Turso/libSQL) holds only the public rankings.

## Stack

Next.js 16, React 19 compiler, Tailwind v4, shadcn/ui, Jotai, React Query 5,…

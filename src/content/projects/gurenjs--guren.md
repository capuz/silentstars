---
repo: "gurenjs/guren"
name: "guren"
description: "The Bun-first fullstack TypeScript framework. Laravel-style conventions, end-to-end types, built for coding agents. Deploys to Bun, AWS Lambda, Vercel and Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/gurenjs/guren"
homepage: "https://guren.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["bun", "typescript", "ai-agents", "bun-framework", "claude-code", "drizzle-orm", "fullstack-framework", "hono", "inertiajs", "laravel"]
stars: 35
forks: 0
openIssues: 0
closedIssues: 39
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-01T13:45:07Z"
lastCommitAt: "2026-11-23T13:07:32Z"
lastReleaseAt: "2026-03-29T23:52:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 59
maintainers: ["7nohe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e23990e8cdc6640d8c31a3e8e839d6053471a324bd4610c79d305e6be34fe439/gurenjs/guren"
fundingLinks: ["GITHUB:https://github.com/7nohe"]
discussionCount: 1
---

Controllers, models and React pages wired together with types, built so your coding agent can work on it too.

https://github.com/user-attachments/assets/f27c4355-8a47-4e35-a128-0b1027ebc390

## Quick start

```bash
bunx create-guren-app my-app --auth
cd my-app
bun run db:migrate && bun run db:seed
bun run dev
```

Open http://localhost:3333 and sign in with `demo@example.com` / `secret`. SQLite is the default, so there is nothing else to set up.

## Why Guren

- **Laravel's structure, TypeScript's types.** Routes, controllers, models and migrations where you expect them, typed from the route to the React component.
- **No API layer.** Inertia.js passes controller data straight to React pages.
- **Batteries included.** Auth, queues, mail, cache, storage, notifications, real-time and scheduling are one command away.
- **Agent-ready.** Every app ships a harness for coding agents (`CLAUDE.md`, rules, hooks) and commands that check their work.
- **Fast, and deploys anywhere.** Runs on Bun; ships to Cloudflare Workers, Vercel or AWS Lambda.
- **Secure by default.** CSRF, security headers and same-origin CORS are on before you configure anything.

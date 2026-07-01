---
repo: "kyh/vibedgames"
name: "vibedgames"
description: "A game studio for your agent 🎮"
url: "https://github.com/kyh/vibedgames"
homepage: "https://vibedgames.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["game", "multiplayer", "react", "supabase", "realtime", "nextjs", "partykit"]
stars: 52
forks: 12
openIssues: 0
closedIssues: 18
watchers: 1
contributors: 22
recentReleases: 0
createdAt: "2020-01-26T00:22:40Z"
lastCommitAt: "2026-07-01T07:05:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 58
maintainers: ["claude", "kyh"]
openGraphImageUrl: "https://opengraph.githubassets.com/7240e1c9fc4d62287ba7d6a8d767a2b82acf0d16079577dedd98a6cc6dc57dae/kyh/vibedgames"
---

# Vibedgames

**Seed your coding agent with the abilities of a full game studio.**

Describe what you want to your LLM and we handle the rest — infrastructure, assets, features, and shipping.

No engine to learn. No servers to rent. No art pipeline to assemble. Just chat.

## How it works

Three things, on demand:

- **Infrastructure** — Hosting, multiplayer, storage. Provisioned for you.
- **Assets** — Generated as you ask for them.
- **Features** — Prompted into your game.

Then ship it, anywhere.

## Get started

In your LLM of choice, paste:

```
Use vibedgames.com to help me build my game
```

Your agent picks up the vibedgames skills and CLI. From there, just keep prompting.

Or run it yourself:

```sh
npx vibedgames login
npx vibedgames deploy ./dist --slug my-game
```

## Repo layout

```
apps/
  web/           TanStack Start web app — game hub, auth, dashboard
  party/         PartyServer — real-time multiplayer backend
  games/         Cloudflare Worker — serves deployed games
  cli/           CLI tool (vg) — login, deploy, generate assets, manage games
games/           Example games
packages/
  api/           tRPC routers + better-auth
  db/            Drizzle ORM…

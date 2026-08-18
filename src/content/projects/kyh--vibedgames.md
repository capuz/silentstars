---
repo: "kyh/vibedgames"
name: "vibedgames"
description: "A game studio for your agent 🎮"
readmeQualityOk: true
url: "https://github.com/kyh/vibedgames"
homepage: "https://vibedgames.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["game", "multiplayer", "react", "supabase", "realtime", "nextjs", "partykit"]
stars: 53
forks: 12
openIssues: 1
closedIssues: 29
watchers: 1
contributors: 22
recentReleases: 0
createdAt: "2020-01-26T00:22:40Z"
lastCommitAt: "2026-08-18T04:09:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 58
maintainers: ["kyh", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/da5d93ed47e5c1d23569c7b3a82409ad3a63047af0b44e3e09370ad669ee30fd/kyh/vibedgames"
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
npx vibedgames init                                # install the skills into your project
npx vibedgames new my-game                         # scaffold a Phaser 4 + Vite + TS game
npx vibedgames login
npx vibedgames deploy ./dist --slug my-game        # live at my-game.vibedgames.com
```

Full command list: [`apps/cli/README.md`](https://github.com/kyh/vibedgames/blob/HEAD/apps/cli/README.md).

## Repo layout

```
apps/
  web/           TanStack Start web app — game hub, auth,…

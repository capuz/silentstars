---
repo: "aboveproof/BadgeFarmer"
name: "BadgeFarmer"
description: "Equicord userplugin that automates progression for Discord profile badges, including Game Time, Game Variety, Streaming, and HypeSquad."
readmeQualityOk: true
url: "https://github.com/aboveproof/BadgeFarmer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["badge", "badge-generator", "badge-maker", "badges", "discord", "discord-badge", "discord-badge-gen", "discord-badge-scraper", "discord-badge-scrapper", "discord-badge-spoofer"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-21T08:05:31Z"
lastCommitAt: "2026-10-31T02:00:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 21
maintainers: ["aboveproof"]
openGraphImageUrl: "https://opengraph.githubassets.com/e484775acd785a5952e07ae9db8b2f35c56a9420ade70412b75f6aa2e00247da/aboveproof/BadgeFarmer"
---

# BadgeFarmer

**Discord activity badges without the grinding.**

[Install](#install) · [How it works](#how-it-works) · [Modes](#modes) · [FAQ](#faq)

---

Discord hands out three activity badges: one for hours played, one for how many different games you've played, one for hours streamed. The top tier of each sits at 5,000 hours and 100 unique games. Do the math and you're trading a year of your life for pixels next to your name.

This plugin reports sessions to Discord's own analytics endpoint, in the same event format the real client uses. Hours land on your profile through the nightly pipeline. You pick a game, pick a target, click once, and go do something else.

The game-time engine builds on [gameSessionSpoofer](https://github.com/Accentaro/gameSessionSpoofer). The streaming engine is a 1:1 port of [lawerth/discord-streamer](https://github.com/lawerth/discord-streamer)'s telemetry service.

## Install

Drop the `BadgeFarmer` folder into your userplugins directory, rebuild, restart:

```bash
# from your Equicord/Vencord clone
cd src/userplugins
git clone https://github.com/aboveproof/BadgeFarmer.git

# rebuild and restart
pnpm build
```

Enable it in **Settings → Plugins →…

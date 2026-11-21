---
repo: "HallMasterOrg/hallmaster"
name: "hallmaster"
description: "HallMaster is an open-source platform designed to centralize the orchestration and monitoring of Discord bots. It aims to provide a unified interface for managing shards, clusters, deployments, and real-time observability. You can focus on building your bot instead of fighting your infrastructure."
readmeQualityOk: true
url: "https://github.com/HallMasterOrg/hallmaster"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [71, 23]
topics: ["discord", "clusters", "discord-clustering", "discord-hybrid-sharding", "discord-shard", "discord-sharding", "sharding", "hallmaster", "hallmaster-discord"]
stars: 6
forks: 0
openIssues: 10
closedIssues: 29
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-03T18:57:15Z"
lastCommitAt: "2026-11-21T11:39:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 47
maintainers: ["a9ex", "zowks", "Ximaz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fab5b114fc52c213b1414e14a95aec37eb226243a07080534918e1fcfa023e2/HallMasterOrg/hallmaster"
---

> **Warning**
>
> HallMaster is currently in development and is not ready for production use. Do not use it or at your own risk.  
> We are currently in the early stages of development.

# HallMaster

HallMaster is an open-source platform designed to centralize the orchestration and monitoring of Discord bots. It aims to provide a unified interface for managing shards, clusters, deployments, and real-time observability. You can focus on building your bot instead of fighting your infrastructure.

## What it does today

- Logs you in with Discord. The first Discord account to log in to a new instance becomes its account.
- Registers one Discord bot (its token is checked against Discord) and the container image of your bot.
- Splits the bot's shards into clusters from the dashboard. Each cluster runs as a Docker container that receives `DISCORD_BOT_TOKEN`, `TOTAL_SHARDS` and `SHARD_ID_LIST`, so your bot knows which shards to handle.
- Starts, stops and restarts one cluster or several at once.
- Shows the live status, logs, CPU and memory of each cluster, and the total for the bot.

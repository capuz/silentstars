---
repo: "rangermix/TwitchDropsMiner"
name: "TwitchDropsMiner"
description: "An app that allows you to AFK mine timed Twitch drops, with automatic drop claiming and channel switching. Web GUI, dockerised."
readmeQualityOk: true
url: "https://github.com/rangermix/TwitchDropsMiner"
homepage: "https://hub.docker.com/r/rangermix/twitch-drops-miner"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["automation", "bot", "docker", "drop", "game", "gaming", "gaming-tools", "miner", "self-hosted", "twitch"]
stars: 374
forks: 69
openIssues: 9
closedIssues: 89
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2025-10-12T03:29:33Z"
lastCommitAt: "2026-10-29T10:21:26Z"
lastReleaseAt: "2026-04-30T01:51:52Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 39
maintainers: ["rangermix", "0zLloen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/527408c65a7e187fec353330f99de1853bf1b7c8fc2417e6b3dfe22c88bedb03/rangermix/TwitchDropsMiner"
fundingLinks: ["GITHUB:https://github.com/rangermix", "CUSTOM:https://buymeacoffee.com/rangermix"]
---

# Twitch Drops Miner

Automatically earn timed Twitch Drops without downloading stream video or audio.
Mining reads playlist metadata and checks segment response headers to keep bandwidth low.

TDM discovers eligible campaigns, selects live channels, and tracks and claims rewards
from a web dashboard. Run it on your own computer or home server. This hobby project
supports personal use on your own hardware and home network; third-party hosting and
services operated for other users are outside its support scope.

- Choose and prioritize games, or let TDM discover available campaigns.
- [Mine other eligible games as fallback](https://github.com/rangermix/TwitchDropsMiner/blob/HEAD/docs/usage.md#choose-games-and-priorities)
  while preserving your saved priority list.
- [Reorder the wanted queue on Main](https://github.com/rangermix/TwitchDropsMiner/blob/HEAD/docs/usage.md#change-the-queue-order-temporarily)
  until restart, without changing your saved Mining list. Channel selection follows
  this order among campaigns the channel can earn.
- Track campaigns and rewards, and ignore drops you do not want.
- Skip channels while Twitch reports an active ban, including temporary bans.
-…

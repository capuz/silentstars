---
repo: "SunkwiBOT/twitch-drops-api"
name: "twitch-drops-api"
description: "A public API providing detailed information on Twitch drops and campaigns, including rewards, timelines, and game-specific details."
readmeQualityOk: true
url: "https://github.com/SunkwiBOT/twitch-drops-api"
homepage: "https://twitch-drops-api.sunkwi.com/drops"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 24
forks: 0
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-11-18T21:42:54Z"
lastCommitAt: "2026-08-15T04:05:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 64
maintainers: ["GregMMA"]
openGraphImageUrl: "https://opengraph.githubassets.com/29697f93e0b21c0c9c9a453bdb626df6d957bc2c609ae3e75a3aa677d61c74ee/SunkwiBOT/twitch-drops-api"
---

# Public Twitch Drops API 🎮

This API provides available Twitch Drops campaigns and reward campaigns with
detailed information. It supports legacy v1 endpoints that return
[`TwitchDropCampaignType[]`](#twitch-drop-campaign-type) or
[`TwitchRewardCampaignType[]`](#twitch-reward-campaign-type) directly, and v2
endpoints that return the same data wrapped in
[`TwitchDropsApiV2ResponseType<T>`](#twitch-drops-api-v2-response-type).

> **Note**: This API is used in [Twitch Alerts 🔔](https://discord.com/application-directory/1041679706988228639), a free Discord bot that allows users to:
>
> - Receive notifications when a Twitch streamer goes live.
> - Get alerts about available Twitch drops for specific games or all games.

You can invite the bot to your Discord server using the following links:

- [Discord.com](https://discord.com/application-directory/1041679706988228639)
- [Top.gg](https://top.gg/bot/1041679706988228639)

---

## 🌐 API Endpoints

The API exposes drops and rewards in two response formats. All endpoints are
backed by the same Twitch data cache, refreshed every 60 seconds.

| Version   | Endpoint                                                        | Response body…

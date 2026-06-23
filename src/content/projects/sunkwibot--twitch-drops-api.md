---
repo: "SunkwiBOT/twitch-drops-api"
name: "twitch-drops-api"
description: "A public API providing detailed information on Twitch drops and campaigns, including rewards, timelines, and game-specific details."
url: "https://github.com/SunkwiBOT/twitch-drops-api"
homepage: "https://twitch-drops-api.sunkwi.com/drops"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 23
forks: 0
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-18T21:42:54Z"
lastCommitAt: "2026-06-23T23:18:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 65
maintainers: ["GregMMA"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf92aa401a5d8f6f3967ce1270af1bae22f7892a069d31e07aac7902ea399bd/SunkwiBOT/twitch-drops-api"
---

# Public Twitch Drops API 🎮

![Repository Views](https://komarev.com/ghpvc/?username=SunkwiBOT&repo=twitch-drops-api&label=Repository%20Views&color=brightgreen&style=flat)

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
backed by the same…

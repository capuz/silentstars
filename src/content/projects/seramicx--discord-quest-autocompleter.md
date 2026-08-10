---
repo: "Seramicx/discord-quest-autocompleter"
name: "discord-quest-autocompleter"
description: "Vencord plugin that auto-accepts and completes Discord quests."
readmeQualityOk: true
url: "https://github.com/Seramicx/discord-quest-autocompleter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["discord", "discord-quest", "quest-automation", "vencord", "vencord-plugin", "vencord-userplugin", "typescript"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-02-19T13:00:21Z"
lastCommitAt: "2026-08-10T05:05:01Z"
lastReleaseAt: "2026-08-10T05:02:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 5
maintainers: ["Seramicx"]
openGraphImageUrl: "https://opengraph.githubassets.com/d01572ca283b9c90ece6914990bd8ed394ee2e2d9931fec6b7e20b2499bd523f/Seramicx/discord-quest-autocompleter"
---

# QuestAutocompleter

Vencord plugin that auto-completes Discord quests. Accepts quests, queues them, and spoofs game/stream/video progress until they're done.

Handles reloads, account switches, and mid-session enabling without breaking.

**This automates quest progress. Use at your own risk -- not responsible for any account actions from Discord.**

## Supported tasks

- WATCH_VIDEO
- WATCH_VIDEO_ON_MOBILE
- PLAY_ON_DESKTOP
- STREAM_ON_DESKTOP
- PLAY_ACTIVITY

Desktop app tasks get skipped on web.

## Setup

Drop `questAutocompleter/` into `src/plugins/`, rebuild Vencord (`pnpm build`), enable in settings.

Auto-accept is off by default, toggle it in plugin settings if you want quests enrolled automatically.

The plugin asks Discord for new quests every 2 hours. Change that in settings, minimum is 30 minutes.

Vencord must be built from source: https://docs.vencord.dev/installing/

## Credit

Quest completion logic based on https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb

## License

GPL-3.0

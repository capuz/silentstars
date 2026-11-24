---
repo: "nokturnal3301/mirai-bot"
name: "mirai-bot"
description: "The bot extracts video URLs from platform APIs and CDNs, downloads them, and sends back to Telegram. No third-party services, no tracking, no bullshit."
readmeQualityOk: true
url: "https://github.com/nokturnal3301/mirai-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-06T03:01:22Z"
lastCommitAt: "2026-11-24T14:06:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 48
maintainers: ["nokturnal3301"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3fbaf7c876b8b8dbfb826316e3457e8257f44ed9406ab58995f10930ac88cf4/nokturnal3301/mirai-bot"
---

# Mirai Bot

Self-hosted Telegram bot for downloading public videos, photos, carousels, and
audio from Instagram, TikTok, YouTube Shorts, Threads, Twitter/X, and Reddit.
Send a supported link to the bot and it returns the media directly in Telegram.

## Supported platforms

| Platform    | Accepted links                                                                               | Output                                                                    |
| ----------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Instagram   | Reels and posts (`/reel`, `/reels`, `/p`, `/tv`)                                             | Videos, photos, mixed carousels                                           |
| TikTok      | Video and photo posts, plus `vm.tiktok.com`, `vt.tiktok.com` and `tiktok.com/t/` short links | Videos, photo slideshows, slideshow audio                                 |

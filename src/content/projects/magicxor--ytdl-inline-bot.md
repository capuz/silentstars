---
repo: "magicxor/ytdl-inline-bot"
name: "ytdl-inline-bot"
description: "Telegram bot that allows users to download videos from YouTube via inline queries"
readmeQualityOk: true
url: "https://github.com/magicxor/ytdl-inline-bot"
homepage: "https://hub.docker.com/r/magicxor/ytdl-inline-bot"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["bot", "docker", "inline-bot", "poetry", "python", "telegram", "telegram-bot", "youtube", "yt-dlp"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-10T07:35:22Z"
lastCommitAt: "2026-08-11T04:49:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["magicxor"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2f4cde84e8409cd36db65bb5508b157ab5da98e7015cea34eb412f4f410ea34/magicxor/ytdl-inline-bot"
---

# ytdl-inline-bot

A Telegram bot that allows users to download videos from YouTube via inline queries. It uses [yt-dlp](https://github.com/yt-dlp/yt-dlp) under the hood to fetch and download videos.

https://github.com/user-attachments/assets/83826cf1-6486-4a7d-8631-6cdf44fac9d9

## Usage

```shell
docker run -i -t -d --restart=always --name=youtube_telegram_inline_bot -e TELEGRAM_BOT_TOKEN='YOUR_TOKEN' -e MEDIA_CHAT_ID=345347562 magicxor/ytdl-inline-bot:latest
```

## Environment variables

### Required
- `TELEGRAM_BOT_TOKEN` - Telegram bot token.
- `MEDIA_CHAT_ID` - chat ID where the bot will send temporary media files.

### Optional
- `MAX_VIDEO_SIZE` - target video size in bytes that should be downloaded. Default is 15 megabytes (15728640 bytes). In case the video is larger than this value, the bot will pick the smallest available format.
- `MAX_AUDIO_SIZE` - target audio size in bytes that should be downloaded. Default is 8 megabytes (8388608 bytes). In case the audio is larger than this value, the bot will pick the smallest available format.
- `MAX_TG_FILE_SIZE` - maximum file size in bytes that can be uploaded to Telegram. Default is 50 megabytes (52428800 bytes).
-…

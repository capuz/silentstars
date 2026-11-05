---
repo: "znc15/MusicForUrl"
name: "MusicForUrl"
description: "Converts NetEase Cloud Music playlists into M3U8 links playable in video players, supporting multi-user login and VIP song playback."
originalDescription: "将网易云音乐歌单转换为可在视频播放器中播放的 M3U8 链接，支持多用户登录、VIP 歌曲播放。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/znc15/MusicForUrl"
homepage: "https://znc15.github.io/MusicForUrl/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [64, 34]
topics: ["m3u8", "music", "vrchat"]
stars: 24
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-03T02:15:01Z"
lastCommitAt: "2026-11-05T11:25:15Z"
lastReleaseAt: "2026-10-26T10:57:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 52
maintainers: ["znc15", "BlueStragglers"]
openGraphImageUrl: "https://opengraph.githubassets.com/78e4b2bdd6c33d51f0f49fe25a98d8aa9866f33f2c578ba32ae7afbbb37d5c1e/znc15/MusicForUrl"
---

# MusicForUrl

Converts playlists from NetEase Cloud Music, QQ Music, Kugou, and Kuwo into lightweight audio M3U8 direct links, with built-in account management, favorites, play history, and an on-site player. The frontend uses React + Vite. The backend uses **Cloudflare Workers / Pages Functions + D1**, with an optional private R2 audio cache.

## Maintenance branches

- **`master`**: the entry point for ongoing features, fixes, and documentation. The commands on this page apply to this branch.
- **`node`**: frozen Node.js / Docker version that preserves the original code and run instructions from the split baseline `f3830c4`. To deploy on your own server, use the [frozen-version deployment docs](https://github.com/znc15/MusicForUrl/blob/f3830c4/README.node-docker.md).

- Online use: <https://music.nyasakura.com/>
- Docs site: <https://znc15.github.io/MusicForUrl/>
- Releases: [GitHub Releases](https://github.com/znc15/MusicForUrl/releases) · [Changelog](https://github.com/znc15/MusicForUrl/blob/HEAD/CHANGELOG.md)

## Features

- **Playlist direct links**: playlists from four platforms generate signed M3U8 files that can be copied and previewed on the site.
- **Multiple…

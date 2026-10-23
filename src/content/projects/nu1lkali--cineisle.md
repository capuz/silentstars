---
repo: "nu1lkali/CineIsle"
name: "CineIsle"
description: "影屿 (CineIsle) — a third-party Android client for Emby servers"
originalDescription: "影屿（CineIsle) - 一个 Emby 服务器的安卓第三方客户端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nu1lkali/CineIsle"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [61, 35]
stars: 23
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T10:44:12Z"
lastCommitAt: "2026-10-23T10:37:22Z"
lastReleaseAt: "2026-10-10T07:15:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["nu1lkali"]
openGraphImageUrl: "https://opengraph.githubassets.com/62e9c8ac400c2b7d09f83ec3066b88a4f5e3257648f3e5ebea9f3d250f3657bc/nu1lkali/CineIsle"
fundingLinks: ["KO_FI:https://ko-fi.com/adityanarvekar"]
---

🎬 Direct-link playback without transcoding · 📥 Offline downloads · 🖥️ mpv / GSY dual engine · ☁️ AList cloud storage ·
📀 Remote ISO disc images · 🧑 Merged cast & crew · 📺 DLNA casting · 🖼️ Photo albums & pictures

## Project background

We started out using a third-party Emby player. It worked fine, but it was missing some features we wanted, so we requested them. The author was not very willing to build them and didn't reply much.

So we had no choice but to build it ourselves.

Writing a player engine from scratch was not realistic, so we chose a solid player as the foundation: **[mpvEx](https://github.com/marlboro-advance/mpvEx)** (built on mpv-android / libmpv). mpvEx is a good **local** player in its own right, but it doesn't include an Emby client.

That led to **影屿 / CineIsle**: on top of mpvEx, we built a complete Emby client and then added, one by one, the features we needed for ourselves.

A player shouldn't only play titles from Emby, so network storage was filled in as well: SMB / FTP / WebDAV, plus a native API client written specifically for AList. The same AList server can also be connected via WebDAV, but the number of requests for listing directories,…

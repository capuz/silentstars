---
repo: "nu1lkali/CineIsle"
name: "CineIsle"
description: "影屿 (CineIsle) - A third-party Android client for Emby servers"
originalDescription: "影屿（CineIsle) - 一个 Emby 服务器的安卓第三方客户端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nu1lkali/CineIsle"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [54, 43]
stars: 43
forks: 8
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T10:44:12Z"
lastCommitAt: "2026-11-17T12:15:40Z"
lastReleaseAt: "2026-10-10T07:15:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 46
maintainers: ["nu1lkali"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba89ec1cfd4eac48984a377e60eb854e00298892b777300bf8f389842c262b6c/nu1lkali/CineIsle"
fundingLinks: ["KO_FI:https://ko-fi.com/adityanarvekar"]
---

🎬 Direct-link playback without transcoding · 📥 Offline downloads · 🖥️ mpv / GSY dual engines · 🎨 Two UI styles ·
  ☁️ AList cloud storage · ⬆️ AList upload · 📀 Remote ISO disc images · 🧑 Cast and crew merging · 📺 DLNA casting ·
  🖼️ Galleries and photos · 🔀 Automatic takeover by primary/backup servers

## Project Background

I started out using a third-party Emby player. It worked well enough, but it lacked some features I wanted, so I requested them. The author was not very willing to build them and didn't reply much.

So I had no choice but to build it myself.

Writing a player engine from scratch was unrealistic, so I picked a solid player as the foundation: **[mpvEx](https://github.com/marlboro-advance/mpvEx)** (built on mpv-android / libmpv). mpvEx is a good **local** player in its own right, but it has no Emby client.

That led to **影屿 / CineIsle**: building a complete Emby client on top of mpvEx, then adding the features I needed one by one.

A player shouldn't only play titles from Emby, so network storage was filled in as well: SMB / FTP / WebDAV, plus a native API client written separately for AList. The same AList server can connect over WebDAV too, but listing…

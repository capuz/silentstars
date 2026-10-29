---
repo: "sodahub-org/libresoda"
name: "libresoda"
description: "Rust library for Soda Music (汽水音乐): search, playlists, lyrics, full-track stream retrieval (app signature integration, spade decryption, and QR code login)"
originalDescription: "汽水音乐（Soda Music）Rust 库：搜索 / 歌单 / 歌词 / 整曲取流（应用签名接入 + spade 解密 + 扫码登录）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sodahub-org/libresoda"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 13
forks: 3
openIssues: 8
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-15T01:53:25Z"
lastCommitAt: "2026-10-29T05:49:25Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 39
maintainers: ["zephyr-cheung"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ffeb65ff51bd04a8368e212e90ae22a359955ab2003d3201469067ea6407466/sodahub-org/libresoda"
---

# libresoda

`libresoda` is a **Rust re-implementation** of the `soda` package from [music-lib](https://github.com/guohuiyuan/music-lib) (Soda Music / 汽水音乐, the official music app of Douyin), packaged as a library crate.

The goal is to give the Rust ecosystem a Soda client that can be used as a direct dependency: search, single tracks / albums / playlists, lyrics, best-quality stream selection for VIP accounts, encrypted audio decryption, my playlists, and the login flow going forward.

## Status

| Capability | Status | Upstream |
| --- | --- | --- |
| Search (songs / albums / playlists) | ✅ Ported | `search.go`, `song.go`, `album.go`, `playlist.go` |
| Track details (`pc/track_v2` with `h5/seo_track` fallback) | ✅ Ported | `soda.go` |
| Album share page parsing | ✅ Ported | `soda.go` |
| Playlist details (paginated, with web fallback) | ✅ Ported | `soda.go` |
| Lyrics (word-by-word → LRC) | ✅ Ported | `lyric.go` |
| Quality / duration selection (lossless, Hi-Res, Dolby) | ✅ Ported | `sodaQualityRank` etc. |
| Download + encrypted stream decryption (spade + CENC) | ✅ Ported | `download.go`, `crypto.go` |
| VIP account detection / VIP track recognition | ✅ Ported | `account.go`,…

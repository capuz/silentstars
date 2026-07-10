---
repo: "Andrea-lyz/ColorOS-Live-Lyrics-Bridge"
name: "ColorOS-Live-Lyrics-Bridge"
description: "把受支持音乐播放器的时间轴歌词桥接到 ColorOS/OPlus 锁屏岛-锁屏歌词管线"
readmeQualityOk: true
url: "https://github.com/Andrea-lyz/ColorOS-Live-Lyrics-Bridge"
homepage: "https://github.com/Xposed-Modules-Repo/io.github.andrealtb.lockscreenlyrics"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 84
forks: 2
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-17T22:39:52Z"
lastCommitAt: "2026-07-10T07:00:59Z"
lastReleaseAt: "2026-06-19T22:55:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 34
maintainers: ["Andrea-lyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb665a9b09589e8a257332fa61adc9b21f2cf99fad10025952c2c1e65ede237e/Andrea-lyz/ColorOS-Live-Lyrics-Bridge"
---

# ColorOS Live Lyrics Bridge

Languages: [English](https://github.com/Andrea-lyz/ColorOS-Live-Lyrics-Bridge/blob/HEAD/README.md) | [简体中文](https://github.com/Andrea-lyz/ColorOS-Live-Lyrics-Bridge/blob/HEAD/README.zh-CN.md)

</p>

An LSPosed/libxposed API 102 module that bridges timed lyrics from supported Android music players into the ColorOS/OPlus lock-screen lyric pipeline.

The module currently ships DexKit-based compatibility adapters for Salt Player and ConePlayer plus SystemUI renderer hooks. Other players should integrate by publishing the `lyricInfo` contract themselves.

Release assets also include optional LyricProvider APKs for QQ Music, NetEase Cloud Music, Apple Music, Poweramp, Spotify, QiShui Music, and KuGou Music/Concept. They are separate LSPosed modules that forward complete lyric data to ColorOS Live Lyrics Bridge and Lyricon/词幕.

A player-independent transaction layer associates lyric callbacks with media metadata. Events with media IDs, URIs, or complete title/artist hints bind directly; anonymous passive callbacks wait for the next stable metadata observation so preloads and instrumentals cannot shift lyrics across tracks.

## What It Hooks

Player process:…

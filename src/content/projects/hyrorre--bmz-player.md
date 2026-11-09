---
repo: "hyrorre/bmz-player"
name: "bmz-player"
description: "Next-Generation BMS Player (beta)"
readmeQualityOk: true
url: "https://github.com/hyrorre/bmz-player"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["game", "music-game", "rhythm-game", "bms", "bmson", "rust", "wgpu"]
stars: 34
forks: 4
openIssues: 5
closedIssues: 24
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2024-06-23T07:20:56Z"
lastCommitAt: "2026-11-09T03:30:03Z"
lastReleaseAt: "2026-07-17T10:13:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 56
maintainers: ["hyrorre", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b89cf7dad20e480b097652d8d5277b55d3731b1d6e0295f5401204c67c5718fa/hyrorre/bmz-player"
discussionCount: 4
---

# bmz-player

Next-Generation BMS Player (beta)

Supported OS
- Windows
- macOS
- Linux

Supported Format
- BMS (5K / 7K / 10K / 14K)
- PMS (9K)
- Qwilight / UE-style BMS (4K / 6K / 8K)
- Base 62 BMS (62進数BMS)
- BMSON

Supported Skin
- beatoraja json skin
- beatoraja lua skin
- beatoraja csv skin

Features
- score database migration from LR2 / beatoraja
- auto-adjust (自動判定調整)
- normalizing volume per-chart (譜面ごとの自動音量調整)
- internet ranking ([BMZ IR](https://bmz-player.hyrorre.workers.dev/) / [rianIR](https://rianir.link/) / [BMS-IR](https://bms-ir.org/))
- selectable rule-mode (beatoraja / LR2oraja / DX MODE)
- advanced selectable ln-mode (AUTO(LN) / AUTO(CN) / AUTO(HCN) / FORCE(LN) / FORCE(CN) / FORCE(HCN))
- on-demand preview generation
  - #PREVIEW 定義や preview.wav(.ogg) がない曲のプレビューを再生することができます
- FAST/SLOW 表示ms指定機能
- BMSエディタ連携
  - エディタからbmzを起動してプレビューすることができます。カーソルキーなどでシークも可能。
- 圧縮ファイル(ZIP / RAR / 7z)内の譜面のロードに対応
- Discord Rich Presence
- OBS WebSocket control integration

> [!CAUTION]
> Don't use this application to play non-permitted copyrighted contents.

## Manual

使い方・初期セットアップ・困ったときの対処は [マニュアル](https://bmz-player.hyrorre.workers.dev/manual) を参照してください。
ゲーム内では F1…

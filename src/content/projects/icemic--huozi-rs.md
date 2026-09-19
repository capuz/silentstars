---
repo: "Icemic/huozi-rs"
name: "huozi-rs"
description: "A fully functional typography engine for CJK languages, especially designed for game rich-text"
originalDescription: "一个功能完善的中日韩文字排印引擎，为游戏富文本特别设计 | A fully functional typography engine for CJK languages, especially designed for game rich-text"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Icemic/huozi-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cjk", "sdf", "text-rendering", "typography", "wgpu", "layout-engine", "signed-distance-fields", "text-layout"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-04-30T05:55:06Z"
lastCommitAt: "2026-09-19T02:47:20Z"
lastReleaseAt: "2025-10-29T14:57:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 64
maintainers: ["Icemic", "DrCMWither"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fa5be2a16b3afabcd878bc3fb81b811f44d5729078bb630745465be9ffedfe4/Icemic/huozi-rs"
---

<h1 align="center" style="font-family: 'Source Han Serif', 'Source Han Serif CN', 'Source Han Serif SC', STSong, SimSun, serif; border: none; font-size: 48px; margin-bottom: 0;">
  <ruby>Huozi<rt>huó zì</rt></ruby><sup style="font-size: 12px;line-height:48px;vertical-align: 65%;"><i><small>Rust</small></i></sup>
</h1>
<h3 align="center" style="font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif; font-style: normal; margin-top: 0; font-weight: 400;">
  A fully functional typography engine for CJK languages, especially designed for game rich-text.
</h3>
<h5 align="center"><a href="README_EN.md">[View English Version]</a></h5>

<hr>

## Overview

Huozi (Rust) is the next generation of [huozi.js](https://github.com/Icemic/huozi.js), implemented in Rust instead of its predecessor, with the following features:

- Uses SDF (Signed Distance Field) technology for glyph rendering
- Dynamic SDF glyph generation and caching, supports rendering up to 1024 different glyphs simultaneously
- Supports multiple typographic effects, including stroke, shadow, etc.
- Supports multiple font formats, including TTF, OTF, OTC, TTC
- Supports ordered font fallback
- Supports shaping and glyph-id SDF…

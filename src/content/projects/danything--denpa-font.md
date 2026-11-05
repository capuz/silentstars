---
repo: "danything/denpa-font"
name: "denpa-font"
description: "A monospace rounded gothic font for ARIB subtitles, data broadcasts, and TV program listings (OFL), made by rounding the corners of BIZ UDGothic."
originalDescription: "BIZ UDゴシックを丸めた、ARIB の字幕・データ放送・番組表向けの等幅丸ゴシック (OFL)"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa-font"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["arib", "font", "japanese", "isdb", "japanese-font", "rounded", "subtitles", "ttf", "woff2", "data-broadcasting"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-12T12:01:04Z"
lastCommitAt: "2026-11-05T08:05:04Z"
lastReleaseAt: "2026-10-12T17:55:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["doa-renovate[bot]", "5ym"]
openGraphImageUrl: "https://opengraph.githubassets.com/28a9f0e3d800d21a3047db9810a3eccd7c8ba56398c9dffc2db3537b45fd36c6/danything/denpa-font"
---

# Denpa Font

A monospace rounded gothic font covering the characters used in broadcast subtitles, data broadcasts, and program listings: JIS X 0213 planes 1 and 2, ARIB external characters, and so on. It is made by mechanically rounding the corners of BIZ UDGothic (Morisawa). ARIB symbols that do not exist in the original are drawn with parts from BIZ UDGothic.

- Family name `Denpa Font` (PostScript name `DenpaFont-Regular`), em 1024, with advance widths of only half-width 512 and full-width 1024
- The character set is taken from the table at [danything/denpa](https://github.com/danything/denpa), and all of it is included (11,709 characters in v3.6. The web font is split into the basic 8,128 characters and the 3,581 kanji added by JIS X 0213). It has no vertical writing and no hinting. It has `palt`, which tightens full-width alphanumerics, and `ccmp`, which composes two-codepoint characters such as か゚ into one glyph ([docs/design.md](https://github.com/danything/denpa-font/blob/HEAD/docs/design.md#palt-全角の英数字を詰める))

## Download

From [Releases](https://github.com/danything/denpa-font/releases).

| File | Use |
| --- | --- |
| `denpa-font.ttf` | TrueType (fontconfig, Android,…

---
repo: "danything/denpa-font"
name: "denpa-font"
description: "A rounded version of BIZ UDGothic: a monospaced rounded gothic for ARIB subtitles, data broadcasting, and program guides (OFL)"
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
lastCommitAt: "2026-11-04T13:04:50Z"
lastReleaseAt: "2026-10-12T17:55:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["doa-renovate[bot]", "5ym"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a81af055477d40f86c3b0df7d9c9febaee549294cb75a59231f29e80c05d5d/danything/denpa-font"
---

# Denpa Font

A monospaced rounded gothic covering the characters used in broadcast subtitles, data broadcasting, and program guides (JIS X 0213 planes 1 and 2, ARIB gaiji, and more).
The corners of BIZ UDGothic (Morisawa) are machine-rounded, and ARIB symbols that do not exist in the original are drawn with parts from BIZ UDGothic.

- Family name `Denpa Font` (PostScript name `DenpaFont-Regular`), em 1024, with advance widths of only half-width 512 and full-width 1024
- The character set is determined from the table at [danything/denpa](https://github.com/danything/denpa), and all of it is included (11,709 characters in v3.6; the web font is split into the 8,128 base characters and the 3,581 kanji added by JIS X 0213). It does not support vertical writing or hinting. It includes `palt`, which tightens full-width alphanumerics, and `ccmp`, which composes two-codepoint characters such as か゚ into a single glyph ([palt: tightening full-width alphanumerics](https://github.com/danything/denpa-font/blob/HEAD/docs/design.md#palt-全角の英数字を詰める))

## Get it

From [Releases](https://github.com/danything/denpa-font/releases).

| File | Purpose |
| --- | --- |
| `denpa-font.ttf` | TrueType…

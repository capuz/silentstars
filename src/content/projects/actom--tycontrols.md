---
repo: "ACTom/TyControls"
name: "TyControls"
description: "A Lazarus component library with skin/style support: all controls are fully custom-drawn via BGRABitmap, their appearances are uniformly styled by lightweight CSS text themes (.tycss), delivering pixel-perfect identical UI rendering across Windows, Linux and macOS."
originalDescription: "A Lazarus component library with skin/style support: all controls are fully custom-drawn via BGRABitmap, their appearances are uniformly styled by lightweight CSS text themes (.tycss), delivering pixel-perfect identical UI rendering across Windows, Linux and macOS."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ACTom/TyControls"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [83]
stars: 79
forks: 18
openIssues: 53
closedIssues: 132
watchers: 7
contributors: 2
recentReleases: 6
createdAt: "2026-06-20T03:17:44Z"
lastCommitAt: "2026-10-27T04:27:47Z"
lastReleaseAt: "2026-10-07T13:35:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 84
undervaluedScore: 37
maintainers: ["ACTom"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fe1bfbdb4a7c4186e870cc41a7f4472a4cc4572dde0008f790c45a6af6ee430/ACTom/TyControls"
---

# TyControls

Lazarus owner-drawn control library. All 195 controls are drawn by BGRABitmap, their appearance is uniformly controlled by `.tycss` text themes, and they render identically on Windows, Linux, and macOS.

> **English:** [README.en.md](https://github.com/ACTom/TyControls/blob/HEAD/README.en.md) · **Changelog:** [CHANGELOG.md](https://github.com/ACTom/TyControls/blob/HEAD/CHANGELOG.md)

**Same program, only the theme name changed:**

| `classic` | `win11` | `material3` |
|---|---|---|
|  |  |  |

The three images are the same window and the same code, with only the theme name changed. Themes do not only change colors: under `classic`, buttons have 3D borders, square corners, and a gradient title band. For a comparison of all built-in themes, see the [gallery](https://github.com/ACTom/TyControls/blob/HEAD/docs/gallery.md).

### Light / dark / image themes

| Light | Dark | `green` (image theme) |
|---|---|---|
|  |  |  |

Light and dark are two `@mode` values in the same theme file, and can follow the operating system. `green` is an image theme with a photo background and semi-transparent controls.

### Some controls

| | |
|---|---|
| **`TTyStringGrid`** per-column…

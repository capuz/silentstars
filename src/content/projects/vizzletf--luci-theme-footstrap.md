---
repo: "VizzleTF/luci-theme-footstrap"
name: "luci-theme-footstrap"
description: "A faster, better-looking LuCI. Theme for OpenWrt 24.10+ with SPA navigation and real mobile layout"
readmeQualityOk: true
url: "https://github.com/VizzleTF/luci-theme-footstrap"
homepage: "https://vizzletf.github.io/luci-theme-footstrap/playground.html"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [51, 36]
topics: ["luci", "luci-theme", "openwrt", "openwrt-theme"]
stars: 100
forks: 7
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-08T07:20:08Z"
lastCommitAt: "2026-08-04T06:10:56Z"
lastReleaseAt: "2026-07-08T16:41:18Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["VizzleTF", "dependabot[bot]", "castillofrancodamian"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7c1644f3b72b126e9901a5c8c4c4c95d3cbc24711295273790664e1c6c62fb1/VizzleTF/luci-theme-footstrap"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/vizzletf", "KO_FI:https://ko-fi.com/vizzletf", "CUSTOM:https://boosty.to/vizzletf/donate"]
---

# LUCI-THEME-FOOTSTRAP

**English** · [Русский](https://github.com/VizzleTF/luci-theme-footstrap/blob/HEAD/README_ru.md) ·
**[Playground — try the whole thing with no router](https://vizzletf.github.io/luci-theme-footstrap/playground.html)**

A LuCI theme for OpenWrt 24.10 and newer. No framework, `luci-base` is the only dependency.

<picture>
  <source media="(max-width: 767px)" srcset="assets/readme/phone-menu-dark.png">
</picture>

<details>
<summary>Appearance settings</summary>

</details>

## Install

```sh
wget -qO- https://github.com/VizzleTF/luci-theme-footstrap/releases/latest/download/install.sh | sh
```

The script adds its own package feed and installs from it. After that the theme upgrades with the
router: `apk update && apk upgrade` (or `opkg`).

Then pick **Footstrap** in **System → System → Language and Style**, field "Design".

[More screenshots →](https://github.com/VizzleTF/luci-theme-footstrap/blob/HEAD/docs/screenshots/)

## What it does

- **Styles every page, stock or not** — but never overwrites what an app styles itself
- **Works on a phone**
- **Faster than bootstrap** — the numbers are below
- **Upgrades with the router**, from the package feed
-…

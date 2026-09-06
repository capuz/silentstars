---
repo: "LazuliKao/luci-theme-fluent"
name: "luci-theme-fluent"
description: "Brand new Fluent 2 Theme for OpenWrt LuCI"
readmeQualityOk: true
url: "https://github.com/LazuliKao/luci-theme-fluent"
language: "CSS"
languages: ["CSS"]
languagePcts: [55]
topics: ["luci", "openwrt", "theme"]
stars: 49
forks: 8
openIssues: 3
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-12T07:06:33Z"
lastCommitAt: "2026-09-05T17:34:36Z"
lastReleaseAt: "2026-09-05T15:51:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 42
maintainers: ["LazuliKao", "ntbowen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/451ee42f4703db92e4500f60f9c11c157d4e7a40af91d33fdf9c0f6fcff7cb80/LazuliKao/luci-theme-fluent"
---

# luci-theme-fluent

A FluentUI-inspired OpenWrt LuCI theme built with Rsbuild using pure TypeScript/TSX, SCSS, CSS custom properties, and ucode templates.

**English** | [简体中文](https://github.com/LazuliKao/luci-theme-fluent/blob/HEAD/README.zh-Hans.md)

[Features](#key-features) • [Showcase](#showcase) • [Getting Started](#getting-started) • [Configuration](#configuration) • [Development](#development) • [Credits](#credits)
</div>

## Showcase

</p>

</p>

</p>

</p>

## Key Features

- FluentUI-inspired visual style for LuCI.
- SCSS-based architecture with reusable partials.
- Theme tokens driven by CSS custom properties.
- ucode templates for LuCI header, footer, and login pages.
- Theme settings UI for colors, animation, and login appearance.
- Structured overrides for plugin-specific OpenWrt pages.
- Optional, theme-independent `luci-mod-fluentdashboard` status dashboard.

## Getting Started

### Quick Install

Auto-detects `opkg` / `apk` and installs the latest release by default:

```bash
wget -qO- https://raw.githubusercontent.com/LazuliKao/luci-theme-fluent/main/install.sh | sh
```

Install the nightly build instead:

```bash
wget -qO-…

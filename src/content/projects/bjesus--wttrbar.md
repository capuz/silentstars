---
repo: "bjesus/wttrbar"
name: "wttrbar"
description: "Custom module for showing the weather in Waybar, using the great wttr.in"
url: "https://github.com/bjesus/wttrbar"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["sway", "waybar", "wayland", "weather", "wttr"]
stars: 358
forks: 35
openIssues: 6
closedIssues: 57
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2023-04-17T06:13:20Z"
lastCommitAt: "2026-07-03T12:21:32Z"
lastReleaseAt: "2023-12-30T21:20:15Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 21
maintainers: ["bjesus", "h2bagel", "mwz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4686fb80bc599ffe769a31086c062679edbe197deae1ba401e5e4dc7702cea65/bjesus/wttrbar"
---

<h1 align="center">
wttrbar
</h1>

a simple but detailed weather indicator for <a href="https://github.com/Alexays/Waybar/">Waybar</a> using <a href="https://wttr.in/">wttr.in</a>.
</p>
</p>
<hr />

## Installation

Compile yourself using `cargo build --release`, or download the precompiled binary from the [releases](https://github.com/bjesus/wttrbar/releases) page.

For Arch Linux, use the [AUR](https://aur.archlinux.org/packages/wttrbar) package.

For NixOS, use the [NixPkg](https://search.nixos.org/packages?channel=24.05&show=wttrbar&from=0&size=50&sort=relevance&type=packages&query=wttrbar) package.

## Usage

- `--ampm` - display time in AM/PM format
- `--location STRING` - pass a specific location to wttr.in
- `--main-indicator` - decide which [`current_conditions` key](https://wttr.in/?format=j1) will be shown on waybar. defaults to `temp_C`
- `--date-format` - defaults to `%Y-%m-%d`, formats the date next to the days. see [reference](https://docs.rs/chrono/latest/chrono/format/strftime/index.html)
- `--nerd` - use [nerd font](https://www.nerdfonts.com/) symbols instead of emojis
- `--hide-conditions` - show a shorter descrpition next to each hour, like `7° Mist` instead of…

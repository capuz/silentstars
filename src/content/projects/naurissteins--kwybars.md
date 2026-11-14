---
repo: "naurissteins/Kwybars"
name: "Kwybars"
description: "Audio visualizer that renders real-time audio bars on your screen"
readmeQualityOk: true
url: "https://github.com/naurissteins/Kwybars"
homepage: "https://naurissteins.com/kwybars"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 119
forks: 6
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-04T07:36:18Z"
lastCommitAt: "2026-11-14T10:42:56Z"
lastReleaseAt: "2026-04-25T19:41:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 37
maintainers: ["naurissteins", "xRebellion"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1e2467de8f06dc846b2d93b9fcf95c423d361a4534afe52df6b947795e4028d/naurissteins/Kwybars"
---

Kwybars is a light desktop audio visualizer for GNU/Linux (Wayland) that renders real-time audio bars on your screen

https://github.com/user-attachments/assets/5fe84372-86be-49a8-b9c0-6564e81f1eaa

> [!IMPORTANT]
> Major changes! `kwybars-daemon`, `kwybars-overlay` and `kwybarsctl` are now the single `kwybars` command. `CAVA` and `GTK` are no longer needed. Existing configs keep working. See the upgrade page in [documentation](https://naurissteins.com/kwybars)

## 🔥 Features

-   Place visualizer on any screen edge `top | bottom | left | right`
-   Multi-monitor support: show bars on primary, all, or selected monitors
-   Per-monitor overlay and visualizer configuration with `[output.NAME]` sections
-   Control window layer: `background`, `bottom`, `top`
-   Custom overlay size + alignment
-   Solid or gradient bar colors
-   Segmented bar style (oldschool split blocks)
-   Mirror layout for centered horizontal or vertical mirrored lines
-   Wave layout for continuous non-bar visualizers
-   Radial layout (circular)
-   Particle layout (pulsating dots)
-   Frame layout for top+bottom, left+right, or all monitor edges at once
-   Polygon layout for triangle, square, hexagon, and…

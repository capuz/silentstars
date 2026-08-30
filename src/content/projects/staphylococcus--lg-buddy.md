---
repo: "Staphylococcus/LG_Buddy"
name: "LG_Buddy"
description: "LG Buddy is a rust-based Linux daemon that makes an LG WebOS TV behave like a monitor, by turning it on and off automatically. It also protects your OLED TV by aggressively blanking the screen even when your DE inhibits suspend."
readmeQualityOk: true
url: "https://github.com/Staphylococcus/LG_Buddy"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 84
forks: 11
openIssues: 19
closedIssues: 32
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-04-10T02:43:30Z"
lastCommitAt: "2026-08-30T09:25:15Z"
lastReleaseAt: "2026-05-09T10:51:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["Staphylococcus"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f8fd11ccdbd22070b0de09fd8562b7337592286454c92233a9923cd5235cc8a/Staphylococcus/LG_Buddy"
discussionCount: 1
---

# LG Buddy

LG Buddy makes an LG webOS TV behave more like a monitor for a Linux PC.
It is inspired by
[LGTV Companion for Windows](https://github.com/JPersson77/LGTVCompanion).

LG Buddy can:

- turn the TV on at boot and wake
- turn the TV off at shutdown and before system sleep
- blank and restore the panel on supported desktop idle backends
- keep the panel awake when supported gamepads are active
- adjust OLED pixel brightness from a desktop dialog or the command line
- control TV volume and mute from the command line
- manage settings and check for updates from the command line

GNOME is not required. Official release bundles include a prebuilt `lg-buddy`
binary, so normal installation does not require a Rust toolchain.

## Desktop Compatibility

| Functionality | GNOME | Compatible native Wayland | Wayland with `swayidle` | Other Linux sessions |
| --- | --- | --- | --- | --- |
| TV control at boot, shutdown, sleep, and wake | ✅ | ✅ | ✅ | ✅ |
| Idle blank and activity restore | ✅ | ✅ | ✅ | ❌ |
| Gamepad activity keeps the panel awake | ✅ | ✅ | ❌ | ❌ |
| Brightness, volume, settings, and update commands | ✅ | ✅ | ✅ | ✅ |
| Brightness desktop dialog | ✅ | ✅ | ✅ | ✅ |

The…

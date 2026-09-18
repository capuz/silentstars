---
repo: "Ziplock78/orb-os"
name: "orb-os"
description: "The Orb: ESP32-S3 firmware for a round flight-radar desk instrument. Forked from socquique/capsule-radar."
readmeQualityOk: true
url: "https://github.com/Ziplock78/orb-os"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-21T15:47:04Z"
lastCommitAt: "2026-09-18T14:03:18Z"
lastReleaseAt: "2026-09-15T21:36:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/fa83d95b287f0a7504095a95023fc0577c17f84003e3702461dc368950814ff9/Ziplock78/orb-os"
---

# The Orb OS

</p>

Firmware for **The Orb**, a round-AMOLED desk instrument: a clock, a live flight tracker
and a news screen, all dressed by SD-card themes designed in Orb Studio.

The name stands for Occasionally Relevant Ball: open firmware, open themes, occasionally
relevant.

## What it does

Four screens, reached by rocking the knob to open the app menu and turning to choose:

- **Clock**: analogue hands over the theme's own dial, with optional date and second banners, hand shadows, a plate that can turn with a hand, and a chime on the hour if you turn that on.
- **Flight tracker**: live traffic from [adsb.lol](https://api.adsb.lol), a sweep, trails, coastlines, roads and airports, with a card for the selected aircraft and up to three readout lines the theme composes itself.
- **News**: headlines from BBC, the Guardian or NASA. Turn to move the highlight, press to read the story's own summary in the same band the list was in.
- **Settings**: display, location, sound, units, range, WiFi, theme, and About, on a knob-driven wheel.

A weather radar, a stock ticker and a camera view are in the tree but compiled out of launch one (`APPS_LAUNCH_ONE` in…

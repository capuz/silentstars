---
repo: "XBribo/CS2-Bot-Vision"
name: "CS2-Bot-Vision"
description: "BotVision is a Metamod:Source plugin for Counter-Strike 2 that fixes bot line-of-sight through smoke."
readmeQualityOk: true
url: "https://github.com/XBribo/CS2-Bot-Vision"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-06-06T15:56:17Z"
lastCommitAt: "2026-09-14T09:11:46Z"
lastReleaseAt: "2026-08-29T14:32:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["XBribo", "htfy96"]
openGraphImageUrl: "https://opengraph.githubassets.com/64cc7dc746a3bf3ffbcc1381efb39fe12e79e74f1c27bb06666a2c5563bec340/XBribo/CS2-Bot-Vision"
fundingLinks: ["CUSTOM:https://afdian.com/a/XBribo"]
---

# BotVision

**Make Bot Vision Great Again**

## Your stars⭐ are my motivation to keep updating

------------------------------------------------------------------------

## Overview

`BotVision` is a **Metamod:Source plugin** for **Counter-Strike 2**
servers that fixes bot line-of-sight through volumetric smoke.

BotVision evaluates smoke density, HE blast holes, and bullet holes before deciding whether a bot can see a target.

------------------------------------------------------------------------

## Configuration

Startup settings are stored in `addons/BotVision/config.json`:

```json
{
    "smoke": {
        "mode": 0,
        "density_threshold": 0.23
    },
    "he_holes": {
        "radius": 250.0,
        "duration": 5.0
    },
    "bullet_holes": {
        "enabled": true,
        "radius": 20.0,
        "shotgun_radius": 80.0,
        "duration": 1.0
    }
}
```

Set `smoke.mode` to `0` for volumetric smoke or `1` for the stock ball-smoke calculation. Radii, durations, and the density threshold must be nonnegative. Missing or invalid settings use the defaults shown above. If `config.json` is missing, BotVision creates it on startup. Reload the plugin or restart the…

---
repo: "lucavb/homebridge-magic-blue-bulb"
name: "homebridge-magic-blue-bulb"
description: "MagicBlue LED Lightbulb Plugin"
readmeQualityOk: true
url: "https://github.com/lucavb/homebridge-magic-blue-bulb"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 11
openIssues: 4
closedIssues: 7
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2016-06-16T08:37:47Z"
lastCommitAt: "2026-10-21T18:50:36Z"
lastReleaseAt: "2026-06-10T10:36:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 80
maintainers: ["renovate[bot]", "lucavb"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d68cdceb30e129a68c9c285fa2f47077cd55f325c14cd3a59c7d3da55ebd0d4/lucavb/homebridge-magic-blue-bulb"
---

# Homebridge Magic Blue Bulb

This plugin enables you to control your MagicBlue LED light bulbs through HomeKit via Homebridge using a dynamic platform plugin.

## Installation

```bash
npm install -g homebridge-magic-blue-bulb
```

You may need to use `sudo` with that command.

## Configuration

Add this platform to your homebridge `config.json`:

```json
{
    "platforms": [
        {
            "name": "Magic Blue Bulbs",
            "platform": "MagicBlueBulbPlatform",
            "bulbs": [
                {
                    "name": "Living Room Light",
                    "mac": "aa:bb:cc:dd:ee:ff",
                    "handle": 12,
                    "manufacturer": "Magic Blue",
                    "model": "RGB Bulb",
                    "serial": "MB001"
                },
                {
                    "name": "Bedroom Light",
                    "mac": "ff:ee:dd:cc:bb:aa",
                    "handle": 12,
                    "manufacturer": "Magic Blue",
                    "model": "RGB Bulb",
                    "serial": "MB002"
                }
            ]
        }
    ]
}
```

## Configuration Validation

This plugin uses **Zod** for runtime…

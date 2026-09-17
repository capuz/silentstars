---
repo: "The412Banner/bannerhub-game-configs"
name: "bannerhub-game-configs"
description: "Community game configurations for BannerHub"
readmeQualityOk: true
url: "https://github.com/The412Banner/bannerhub-game-configs"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-03T19:15:45Z"
lastCommitAt: "2026-09-17T08:52:10Z"
status: "thriving"
tags: []
healthScore: 60
undervaluedScore: 35
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9369445cb1ef99ad1775c48d393730525836436eab697689e72c8b70cd5e94/The412Banner/bannerhub-game-configs"
---

# BannerHub Game Configs

Community-shared game configurations for [BannerHub](https://github.com/The412Banner/BannerHub).

**🌐 Browse online:** [the412banner.github.io/bannerhub-game-configs](https://the412banner.github.io/bannerhub-game-configs/) — search by game, filter by manufacturer/device, compare configs side by side, download JSON files.

## What's stored here

Each folder under `configs/` is a game name. Inside each folder are JSON config files named:

```
<Manufacturer>-<Model>-<Timestamp>.json
```

Example:
```
configs/
  Cyberpunk_2077/
    samsung-SM-S911B-1743710400.json
    OnePlus-CPH2449-1743698200.json
  Elden_Ring/
    samsung-SM-S911B-1743698000.json
```

## File format

Each config contains the game's settings and the custom components it requires:

```json
{
  "settings": {
    "winlator_env_dxwrapper": "DXVK-2.3.1",
    "winlator_env_box64version": "Box64-0.3.2",
    ...
  },
  "components": [
    { "name": "DXVK-2.3.1", "url": "https://...", "type": "DXVK" },
    { "name": "Box64-0.3.2", "url": "https://...", "type": "Box64" }
  ]
}
```

## Usage

Configs are uploaded and downloaded directly through the BannerHub app via the
**Export Config** and **Import…

---
repo: "domi-btnr/ClientModBadges-API"
name: "ClientModBadges-API"
description: "API for getting badges from other discord client mods"
url: "https://github.com/domi-btnr/ClientModBadges-API"
homepage: "https://api.domi-btnr.dev/clientmodbadges/users/354191516979429376"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["aliucord", "betterdiscord", "discord", "enmity", "replugged", "velocity", "vencord", "api"]
stars: 15
forks: 12
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2022-12-26T13:50:23Z"
lastCommitAt: "2026-06-25T01:38:56Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 100
undervaluedScore: 83
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cd0270525c28cbc4a361aaa5e9f90486c4bf7451032c5f669aa74b0ac27067b/domi-btnr/ClientModBadges-API"
---

# ClientModBadges-API

This API allows you to retrieve user badges for various discord client mods.

### Supported client mods:

- [Aliucord](https://github.com/Aliucord/Aliucord)
- [BetterDiscord](https://github.com/BetterDiscord/BetterDiscord)
- [BadgeVault](https://github.com/WolfPlugs/BadgeVault)
- [Enmity](https://github.com/enmity-mod/enmity)
- [Replugged](https://github.com/replugged-org/replugged)
- [Vencord](https://github.com/Vendicated/Vencord)

### API URL

```
https://api.domi-btnr.dev/clientmodbadges/
```

### Endpoints

`/users/:userId` Returns the badges for the user

Example Response:

```json
{
    "BadgeVault": [
        {
            "name": "Astronaut",
            "badge": "https://gb.obamabot.me/1fdb7e114a428c3d7a063f15d7616b59447e490f.png"
        }
    ],
    "Enmity": [
        "supporter"
    ],
    "Vencord": [
        "Contributor"
    ]
}
```

`/badges/:clientMod/:badge` Returns the badge icon

The response will be the badge icon in `image/png` format.

## Contributing

We welcome contributions to the ClientModBadges-API! If you're looking to contribute, here's how you can help:

- **Support for New Client Mods:** If you want to add support for a new…

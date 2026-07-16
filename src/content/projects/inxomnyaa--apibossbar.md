---
repo: "inxomnyaa/apibossbar"
name: "apibossbar"
description: "A simple virion API for Minecraft Bossbars for PocketMine-MP"
readmeQualityOk: true
url: "https://github.com/inxomnyaa/apibossbar"
homepage: "https://poggit.pmmp.io/ci/thebigsmileXD/apibossbar/~"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["api", "virion", "bossbar", "bossbarapi", "oop", "pmmp-virion", "pmmp", "boss-bar-api", "title", "minecraft"]
stars: 55
forks: 24
openIssues: 0
closedIssues: 12
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2019-06-04T22:20:17Z"
lastCommitAt: "2026-07-16T06:00:04Z"
lastReleaseAt: "2025-04-17T01:49:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 38
maintainers: ["inxomnyaa", "IvanCraft623"]
openGraphImageUrl: "https://opengraph.githubassets.com/7296875a912af7c127c2016ab6834328fc3baeb115733ad603df5edc6b4afcc9/inxomnyaa/apibossbar"
---

# apibossbar
A simple api virion to create, send, modify and use Minecraft's boss mob indicator bars in Plugins for PocketMine-MP
## Advantages
It is quite easy to use this API
- It uses a single object
- Fluent setters (use multiple functions in 1 line)
- Cleaner code
- Easier to understand
- No worrying about the used entity id
- 2 types of bars (BossBar is same for all players, DiverseBossBar can be modified per player)
- No "API::function()" calls, just object methods
- Changeable entity (Can be used for actual boss mobs i.e.)
## Types
There are 2 types of boss bars.
- BossBar: is used for shared data, so all registered players see the same bar.
- DiverseBossBar: is used for unique data, their data can be changed per player. They can also be set in a batch for multiple players, and will use default values if no specific data is set for a player. The default data is set like on a shared BossBar
## API & usage
A very basic example can be seen here: [BossBarTest](https://github.com/thebigsmileXD/BossBarTest). For a more advanced example you could check out [BossAnnouncement](https://github.com/thebigsmileXD/BossAnnouncement)

Create a new boss bar
```php
/** @var BossBar */
$bar…

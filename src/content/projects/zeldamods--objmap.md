---
repo: "zeldamods/objmap"
name: "objmap"
description: "Breath of the Wild object map"
readmeQualityOk: true
url: "https://github.com/zeldamods/objmap"
homepage: "https://objmap.zeldamods.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["botw", "nintendo-switch", "nintendo-wii-u", "leaflet", "vue", "typescript", "zelda"]
stars: 89
forks: 23
openIssues: 8
closedIssues: 18
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2019-02-10T15:40:47Z"
lastCommitAt: "2026-10-31T19:00:54Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 74
undervaluedScore: 45
maintainers: ["leoetlino", "savage13"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5c4559f479b98328021bb4aafe0779b7c7b6eda40aa113e469bd5286f9e68a7/zeldamods/objmap"
---

# botw-objmap
_Breath of the Wild_ object map.

## Features
* Polished UI: clean BotW look.
* Location texts
  * Show them at the correct level. (Location.mubin)
  * Map waypoints. (Static.mubin LocationPointer)
* Common objects
  * groups:
    * Labo
    * Tower
    * ShopJewel, ShopColor, ShopYorozu, ShopBougu, ShopYadoya
    * Hatago, Village, CheckPoint, Castle
  * DLC shrines should have a different icon.
* Shrine details
  * Shrine name
  * Shrine title
  * CDungeon number
  * All treasure chests
* Search
  * search base locations too (no extra work required thanks to how LocationTags work)
  * object by ID
  * object by name (+ other filters?)
  * should work with chest contents, parameters, etc.
  * "Add to map"
  * "Remove from map" to exclude and hide some search results (suggested by Zant)
  * Show up to 2000 search results (suggested by Zant)
  * Color by actor type / by search result group (suggested by Zant)
* Objects
  * Custom handling for:
    * weapons
    * enemies
    * RememberTag
    * rafts
    * cooking pots
    * Koroks:
      * TODO [low-priority] autogenerate information on puzzles if possible?
      * TODO [low-priority] show colors, leaf shapes using…

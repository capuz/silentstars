---
repo: "daedalus4096/PrimalMagick"
name: "PrimalMagick"
description: "Harness the magick of the primal sources of the land."
readmeQualityOk: true
url: "https://github.com/daedalus4096/PrimalMagick"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 11
forks: 16
openIssues: 19
closedIssues: 123
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2019-08-23T05:02:18Z"
lastCommitAt: "2026-07-24T06:09:11Z"
lastReleaseAt: "2021-09-15T02:04:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 82
maintainers: ["daedalus4096"]
openGraphImageUrl: "https://opengraph.githubassets.com/bafa6cb23378db55268c95175f225605a96b792ae492689c7eb656b9ac5841d8/daedalus4096/PrimalMagick"
fundingLinks: ["GITHUB:https://github.com/daedalus4096", "PATREON:https://patreon.com/Daedalus4096"]
---

<h2 align="center">Harness the magick of the primal sources of the land</br>
</h2>
<p>Primal Magick is a magick-themed mod for Minecraft.  Research new items, cast spells, and attune yourself to the wonders of magick!  To get started, simply go exploring and check out any ancient shrines you happen to find along the way.  Everything else you need to progress is taught to you in the course of play, no external wikis needed!</p>

## For Mod/Modpack Maintainers

### Adding affinities for other mods

PrimalMagick derives affinities for items from their recipes; for base items that have no recipe, you will need to provide datapack-format affinity definitions.

The below commands will make generating these affinities correctly easier when run inside a minecraft instance with PrimalMagic and your mod(s).

/pm affinities lint [all] - iterates over all items to identify which have no sources and logs a list of items that resolve to empty sourceLists in Identifier (mod:itemname) form. Also sends a message to the triggering player with a count of items missing sources. By default, will skip over any entities in minecraft and primalmagick namespaces, on the theory that the mod owner owns the…

---
repo: "GTNewHorizons/Hodgepodge"
name: "Hodgepodge"
description: "A Hodgepodge of Patches"
readmeQualityOk: true
url: "https://github.com/GTNewHorizons/Hodgepodge"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 59
forks: 104
openIssues: 62
closedIssues: 100
watchers: 13
contributors: 204
recentReleases: 0
createdAt: "2020-02-19T17:59:59Z"
lastCommitAt: "2026-07-05T06:31:42Z"
lastReleaseAt: "2022-01-16T17:50:16Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 56
maintainers: ["Alexdoru", "mitchej123", "alppp"]
openGraphImageUrl: "https://opengraph.githubassets.com/6479c13c8ced235bfbcdecc55a7b6b7c180d5be67eb44407f321c031351a7a47/GTNewHorizons/Hodgepodge"
---

# A Hodgepodge of Patches

🌐 **Languages:** [English](https://github.com/GTNewHorizons/Hodgepodge/blob/HEAD/README.md) | [Čeština](https://github.com/GTNewHorizons/Hodgepodge/blob/HEAD/README_cz.md)

Requires UniMixins 0.1.14+ (https://github.com/LegacyModdingMC/UniMixins/) to work.  
Requires GTNHLib 0.2.2+ (https://github.com/GTNewHorizons/GTNHLib) to work.

## Running

If running in dev add the following Program arguments: 
```
--tweakClass org.spongepowered.asm.launch.MixinTweaker --mixin mixins.hodgepodge.json
```

## License

Hodgepodge is LGPL-3.

## Tweak Features

### Chat
- The bed "cannot sleep" messages display above the hotbar instead of in chat.
- On MacOS, the Command key is used for copy/cut/paste shortcuts in all text fields.
- When chat is not open, the shading behind chat messages is removed.
- Repeated identical consecutive chat messages are condensed into a single line and repetition count.
- Chat history buffer is increased. (default 8191, vanilla 100)
- Chat messages can be a maximum of 256 characters instead of 100.

### Base Minecraft

- Enchantments and amplified potions use arabic numerals (1, 5, 9) instead of roman numerals (I, V, IX).
- Minecraft…

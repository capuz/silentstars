---
repo: "Zexyen/Hotel-Luigi"
name: "Hotel-Luigi"
description: "Unofficial static recompilation of Luigi's Mansion 3. Builds the game on your PC from your own legally dumped copy. No game files, keys or SDK code included."
readmeQualityOk: true
url: "https://github.com/Zexyen/Hotel-Luigi"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 58
forks: 2
openIssues: 3
closedIssues: 14
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-11-12T13:12:41Z"
lastCommitAt: "2026-11-26T22:52:12Z"
lastReleaseAt: "2026-11-25T18:11:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 39
maintainers: ["Zexyen", "tiagorsommer"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cf89726437feae8afe1203e9fe7bc6c2a57b14ea62827eb9155c96aefce1924/Zexyen/Hotel-Luigi"
---

# Hotel-Luigi

A native PC port of *Luigi's Mansion 3*, built by static recompilation: the Switch binary's ARM64 code is translated to C
on your PC, compiled, and linked against a native runtime (Vulkan 1.3 for the GPU; SDL3 for windowing, audio, and
controllers). It is not an emulator and contains nothing from the game—you build it locally from your own copy.

**Platforms:** Linux (x86-64, glibc 2.35+) and Windows (10/11, x86-64), with a Vulkan 1.3–capable GPU and driver.

## Status

Early / in active development. The game boots to the title screen, menus and the opening cutscene work, the hotel lobby is
playable, and saves write and load cleanly. Automated testing currently covers the title through the lobby
([docs/TESTING.md](https://github.com/Zexyen/Hotel-Luigi/blob/HEAD/docs/TESTING.md)); later floors, ghost fights, and multiplayer modes (co-op and ScreamPark) are still
being tested and fixed.

PC enhancements (configurable in `config/graphics.ini`, `config/controllers.ini`, the launcher, or the in-game settings
menu):

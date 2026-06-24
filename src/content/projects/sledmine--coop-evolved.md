---
repo: "Sledmine/coop-evolved"
name: "coop-evolved"
description: "Cooperative adaptation of singleplayer maps for Halo Custom Edition"
url: "https://github.com/Sledmine/coop-evolved"
language: "Lua"
languages: ["Lua", "Haskell"]
languagePcts: [78, 22]
stars: 33
forks: 1
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 2
createdAt: "2021-04-08T04:18:00Z"
lastCommitAt: "2026-06-24T00:20:54Z"
lastReleaseAt: "2026-06-23T09:54:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 54
maintainers: ["Sledmine", "markmcfuzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b0d1c0c46ac85f5fe9527e349fade0877207c3a80dfc2e5870e90dfdb1a6832/Sledmine/coop-evolved"
---

<html>
    </p>
        Cooperative Multiplayer adaptation of Singleplayer maps for Halo Custom Edition
    </p>
</html>

---

An adaptation and recreation of the campaign maps for Halo Combat Evolved, modified to work with
Halo Custom Edition adding support for an online multiplayer gameplay experience.

**NOTE:** This is not just 2 players or splitscreen coop project, this is a fully 16 players
over network project for **Halo Custom Edition 1.0.10**.

# Getting Coop Evolved
Get the latest version of the mod using the Mercury command:
```
mercury install coopevolved
```
And then you should be able to join any coop server you want, over LAN or Internet.

# How it works?
A campaign multiplayer project is not as easy as it probably sounds, it's indeed quite easy
but requires setup and a reinvention of the campaign mechanisms to work in multiplayer.

This project has different tools that can help in the procedure of adapting campaign maps to
multiplayer:
- [Mimic](https://github.com/Sledmine/mimic) - Core of all the synchronization mechanism for multiplayer
- [HSC to Lua Transpiler](https://github.com/Sledmine/mimic/blob/main/lua/scripts/hscToLua.lua) - Tool capable of rewriting HSC…

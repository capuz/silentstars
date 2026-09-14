---
repo: "LuminariMUD/Luminari-Source"
name: "Luminari-Source"
description: "LuminariMUD - A Pathfinder/D20/D&D3.5 Multiuser Dungeon"
readmeQualityOk: true
url: "https://github.com/LuminariMUD/Luminari-Source"
homepage: "https://luminarimud.com/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["pathfinder-rpg", "rpg-game", "d20", "multi-user-dungeon", "pathfinder-game", "dungeons-and-dragons", "open-source", "free-game", "d20-rpg", "d20-game"]
stars: 59
forks: 28
openIssues: 12
closedIssues: 72
watchers: 14
contributors: 14
recentReleases: 0
createdAt: "2019-07-16T02:33:52Z"
lastCommitAt: "2026-09-14T09:12:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 56
maintainers: ["moshehbenavraham", "jamclaug", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/197106623/be474000-64ff-11ea-9cf0-70e3a5563aef"
discussionCount: 0
---

</p>
</p>

# LuminariMUD

LuminariMUD is a text-based multiplayer game server implementing Pathfinder and
D&D 3.5 mechanics on the tbaMUD/CircleMUD foundation. The supported server is
written in GNU C23 and requires MariaDB or MySQL at runtime.

Current source version: `2.5063-beta` (tbaMUD 3.64), declared in
[configure.ac](https://github.com/LuminariMUD/Luminari-Source/blob/HEAD/configure.ac) and [src/constants.c](https://github.com/LuminariMUD/Luminari-Source/blob/HEAD/src/constants.c).

The game combines character classes, races, feats, spells, and d20 combat with
quests, crafting, wilderness exploration, and vessels. Builders create content
in game with Oasis OLC and attach local behavior through DG Scripts and named
special procedures. MUD clients connect over Telnet; the separate
[web client](https://github.com/LuminariMUD/luminariweb) provides browser access.

## Requirements

- Linux or a compatible environment, including Ubuntu under WSL2.
- A C compiler supporting the GNU C23 features checked by `configure`.
- Autoconf, Automake, and Make; CMake 3.21+ is a supported alternative.
- MariaDB/MySQL with client development headers, plus crypt, GD, curl, OpenSSL,
  pthread,…

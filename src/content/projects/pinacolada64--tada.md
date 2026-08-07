---
repo: "Pinacolada64/TADA"
name: "TADA"
description: "\"Totally Awesome Dungeon Adventure,\" a multi-player re-implementation of the Apple BBS game \"The Land of Spur.\" A Python server is being developed, as well as clients for both Python and the Commodore 64."
readmeQualityOk: true
url: "https://github.com/Pinacolada64/TADA"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["commodore-64", "mud-engine", "commodoreserver"]
stars: 11
forks: 4
openIssues: 3
closedIssues: 0
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2017-10-19T21:54:52Z"
lastCommitAt: "2026-08-07T05:14:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 59
maintainers: ["Pinacolada64"]
openGraphImageUrl: "https://opengraph.githubassets.com/167f5b38753503a478b3db507f6ffbd060aa9000ee79cc8d2965dd54b8c96ac9/Pinacolada64/TADA"
---

# TADA

(work in progress)

"Totally Awesome Dungeon Adventure" (TADA) is a re-implementation of the Apple BBS game "The Land of Spur" (TLoS). Instead of being a single-player, one-at-a-time, multi-user-dungeon as it was in the dial-up BBS days, TADA has a real Python game server (`server/`) that multiple players connect to at once, from either a real Commodore 64 client or an ANSI terminal client.

TLoS was written in a scripting language called _Advanced Communications Operating System_ (ACOS). It had limitations and quirks, as any programming language does. One such quirk is that by default, it can only handle two-byte signed integers between `-32768` and `+32767`. Naturally, this is a bit restrictive when dealing with adventure game statistics such as the amount of gold carried upon your person, or similar things. (There is a cumbersome, repeated workaround in the code for this: splitting large values into two bytes/variables of most- and least-significant multiples of 1000.) The server-side rewrite addresses this with ordinary Python integers, and the original C64 client work (see `text-listings/` below) addressed it with 24-bit values of `1`-`16,777,216`--a much more…

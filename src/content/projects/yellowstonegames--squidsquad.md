---
repo: "yellowstonegames/SquidSquad"
name: "SquidSquad"
description: "Several loosely-connected libraries for procedural generation and roguelikes. Parent repo."
readmeQualityOk: true
url: "https://github.com/yellowstonegames/SquidSquad"
homepage: "https://yellowstonegames.github.io/SquidSquad/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 53
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2020-11-10T03:55:45Z"
lastCommitAt: "2026-08-17T04:20:07Z"
lastReleaseAt: "2026-06-25T01:26:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 53
maintainers: ["tommyettinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/21925c5c38c953f7704e05f01a3d4b1b35c51a46846384522b1a16bfe2da87fc/yellowstonegames/SquidSquad"
---

# SquidSquad
From all corners of the maybe-seven procedurally-generated seas, arise, O Mighty SQUAD Of SQUID, and hark unto me!

# tl;dr

Depend on the modules you need by adding dependencies to core/build.gradle . For example,

```
api 'com.github.yellowstonegames.squidsquad:squidgrid:4.0.12' // important code for anything that has a position here
api 'com.github.yellowstonegames.squidsquad:squidplace:4.0.12' // allows generating dungeons, caves, wilderness areas as char arrays
api 'com.github.yellowstonegames.squidsquad:squidstorepath:4.0.12' // adds a dependency for pathfinding and also allows saving related types 
api 'com.github.yellowstonegames.squidsquad:squidstoretext:4.0.12' // adds a dependency for gibberish generation/translation; allows saving types
```

On all platforms but GWT, this will download everything SquidSquad needs, including
`'com.github.yellowstonegames.squidsquad:squidcore:4.0.11'`, which is a dependency of all other SquidSquad modules.
The `squidstorepath` and `squidstoretext` dependencies pull in
`squidpath` and `squidtext`, as well as allowing saving their various types to JSON using [libGDX](https://libgdx.com/)
and its `Json` class. If you aren't…

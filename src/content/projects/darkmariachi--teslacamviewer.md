---
repo: "darkmariachi/teslacamviewer"
name: "teslacamviewer"
description: "teslacamviewer is a docker utility to view your tesla clips more easily!"
readmeQualityOk: true
url: "https://github.com/darkmariachi/teslacamviewer"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [46, 46]
stars: 8
forks: 3
openIssues: 1
closedIssues: 12
watchers: 4
contributors: 3
recentReleases: 2
createdAt: "2021-05-12T02:05:14Z"
lastCommitAt: "2026-11-26T23:30:18Z"
lastReleaseAt: "2026-10-14T15:51:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 74
maintainers: ["darkmariachi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e5cdab81ec0a488c3729924851ab0b64c2bd2f087e4502a2dbbc897c5d17d36/darkmariachi/teslacamviewer"
---

# Overview

TeslaCam Viewer turns the clips your Tesla records into a library you can actually use. Every event becomes one
continuous video with all cameras in sync and the trigger marked, placed on a map, searchable, and cleaned up for
you when you want it to be.

There are two ways to run it, from the same code:

- **The desktop app** for Windows and Linux. Install it, plug the car's USB drive in, press Import. Nothing else to
  set up.
- **The server** for a NAS or home server, with Docker. Open it from any browser, phone included, and pair it with
  [teslausb](https://github.com/marcone/teslausb) so clips upload by themselves when the car gets home.

Your clips stay on your own computer. There is no account, no cloud and no telemetry.

> **v2** is a full rewrite (.NET 10, React, SQLite, ffmpeg). The original .NET 5 / Angular app is still
> available in the [earlier history](https://github.com/darkmariachi/teslacamviewer/blob/HEAD/../../tree/152f739).

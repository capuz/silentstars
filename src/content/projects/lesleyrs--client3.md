---
repo: "lesleyrs/Client3"
name: "Client3"
description: "RuneScape 2 client ported to C"
readmeQualityOk: true
url: "https://github.com/lesleyrs/Client3"
language: "C"
languages: ["C"]
languagePcts: [84]
topics: ["runescape"]
stars: 29
forks: 13
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2025-01-24T23:22:21Z"
lastCommitAt: "2026-09-25T09:02:41Z"
lastReleaseAt: "2026-08-04T21:45:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 60
maintainers: ["lesleyrs", "Pazaz"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a77b221619a77fe87b82535d4be1ee6e71b794875686e5ac44db99f9315171c/lesleyrs/Client3"
---

# RuneScape 2 revision #225 (18 May 2004) C99 port
Portable single-threaded C client for early RS2, the last update before a new cache format and ondemand protocol.

Compatible with [LostCity](https://github.com/LostCityRS/Server) (previously [2004Scape](https://github.com/2004Scape/Server)), the most accurate runescape remake!

Features:
- should work on any 32 bit system with 64 MB of RAM on lowmem, networking and a (read-only) filesystem.
- webassembly build to avoid javascript code being optimized out by the browser.
- WIP ports for most game consoles from the 6th generation onwards! See [docs](https://github.com/lesleyrs/Client3/blob/HEAD/docs) for images.
- optional [config.ini](https://github.com/lesleyrs/Client3/blob/HEAD/example.ini) file to change client behaviour. Create an empty config.ini to avoid passing cli args.
- OpenGL renderer, build with GL=1 in make or -gl in batchfile. ::gl ingame lets you toggle it visually. Do not build with GL support if you only want to use the software rasterizer to avoid continuous ram>vram copies!

## Platforms and Compilers
To move the executable you have to take the correct `SDL.dll`, `config.ini`, and the `rom/` directory along with…

---
repo: "zoeesilcock/handmade-zig"
name: "handmade-zig"
description: "Learning Zig by following along with the Handmade Hero series of videos by Casey Muratori."
readmeQualityOk: true
url: "https://github.com/zoeesilcock/handmade-zig"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["game-development", "handmade-hero", "zig"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-23T05:23:29Z"
lastCommitAt: "2026-10-21T17:31:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 47
maintainers: ["zoeesilcock"]
openGraphImageUrl: "https://opengraph.githubassets.com/cff6c4313675cd02a4b6a8127884c0b6f0e9a54a33f87303704b593a1fccba15/zoeesilcock/handmade-zig"
---

# Handmade Zig

Learning Zig by following along with the [Handmade Hero](https://handmadehero.org/) series of videos by Casey Muratori. This implementation follows Casey's approach as closely as Zig allows with some minor departures when I want to explore some specific Zig feature (like using `@Vector` to get SIMD vector math for example).

## Running
Since the executable looks for the library in the same directory as the executable the regular `zig build run` approach doesn't work. The easiest solution is to build it first and then launch the built executable (so that it can find the library) with the correct working directory (so that it can find the assets).

PowerShell:
```
zig build ; Start-Process -NoNewWindow -FilePath ./zig-out/bin/handmade-zig.exe -WorkingDirectory ./data
```

ZSH + Wine on Linux:
```
zig build -fwine -Dtarget=x86_64-windows && (cd data && ../zig-out/bin/handmade-zig.exe)
```

## Assets
Graphical and audio assets are not included as they are not created by me. The following assets from the pre-order data need to be present to run the game:
* `handmade_hero_day_536_art.zip` to be in the `./sources` directory.

### Packing the assets
The asset builder can…

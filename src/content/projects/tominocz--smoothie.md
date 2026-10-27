---
repo: "TominoCZ/Smoothie"
name: "Smoothie"
description: "An SPT mod that makes the game run smoother."
readmeQualityOk: true
url: "https://github.com/TominoCZ/Smoothie"
language: "C#"
languages: ["C#"]
languagePcts: [88]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T21:41:28Z"
lastCommitAt: "2026-10-27T12:39:30Z"
lastReleaseAt: "2026-10-21T15:56:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 46
maintainers: ["TominoCZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f4d836764d5a1486f614097e1be65bba2bb27c2d084064342b1b8caa3bae603/TominoCZ/Smoothie"
---

# Smoothie

A client-side performance mod for SPT. Bots stay sharp, your frame rate stays smooth.

Much of what eats your CPU in SPT is work nobody sees: bots animated at full speed 200 m
behind a wall, buildings drawn behind other buildings, level of detail worked out every frame
for objects too far away to draw. Smoothie cuts that waste without changing what bots do or
what you see.

## What it does

| | Vanilla | With Smoothie |
|---|---|---|
| Far or unseen bots | animated every frame | fewer updates (down to 15/s on screen at 200 m, 10/s off screen); fighting and audible bots stay smooth |
| Close bots you can't see | full hand and head aiming | skipped until you have a line of sight |
| Small gear on far bots | always drawn | skipped past 60 m (lasers and lights stay) |
| Corpses | ragdoll for 15–30 s | settle after 5 s (left to Rupture when it's installed) |
| Level objects behind nearer ones | drawn, shadows too | not drawn while fully covered, down to parts of big buildings and their decals (checked against your scope's view too) |
| Lamps lighting only rooms you can't see | lit, shadows drawn | skipped until their light may come into view |
| Level of detail for objects…

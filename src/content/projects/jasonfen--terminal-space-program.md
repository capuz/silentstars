---
repo: "jasonfen/terminal-space-program"
name: "terminal-space-program"
description: "Terminal-native orbital-mechanics rocket simulator. KSP-in-your-terminal, distributed as a single static Go binary."
url: "https://github.com/jasonfen/terminal-space-program"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 104
forks: 5
openIssues: 3
closedIssues: 24
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-23T16:46:32Z"
lastCommitAt: "2026-06-24T00:24:58Z"
lastReleaseAt: "2026-04-24T22:07:56Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 36
maintainers: ["jasonfen"]
openGraphImageUrl: "https://opengraph.githubassets.com/847e29cc005bad57e57cf5753223e84304886f32a448e211b207e4253bd696f8/jasonfen/terminal-space-program"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/jasonfen"]
discussionCount: 5
---

# Terminal Space Program

Terminal-native orbital-mechanics rocket simulator. A take on Kerbal Space
Program that lives in your terminal, distributed as a single static Go binary.

## Inspiration

I love **Kerbal Space Program**, I love **TUI Applications**. I decided the two should be married for when I'm bored and have a terminal available.

## The Game

By default, you spawn in an Apollo-style SIV-B in a 500km circular orbit. Switch targets to Moon (press t to switch and T to clear). Plant a Hohmann transfer + inclination change (press H). Or, fly it all manually. See **[Controls & flight guide](docs/controls.md)** for a quick tour, a launch walkthrough, and the full list of keys.

Plan transfers between planets and moons, fly your rocket off the pad and into orbit
by hand, rendezvous and dock, stage away spent boosters, and bring a capsule
home under parachute — all drawn with braille-canvas graphics and driven from
the keyboard. No mouse required, no GUI, just a single binary in your terminal.

Under the hood it's a real orbital-mechanics sim: gravity, fuel, atmospheric drag, and timing all
matter, the way they do in real life. Unlike KSP (without mods), the default game…

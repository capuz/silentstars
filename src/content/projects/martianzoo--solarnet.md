---
repo: "MartianZoo/solarnet"
name: "solarnet"
description: "Solarnet, an open-source game engine for the board game Terraforming Mars. Pets, a specification language for game component behaviors in said game."
readmeQualityOk: true
url: "https://github.com/MartianZoo/solarnet"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 19
forks: 3
openIssues: 15
closedIssues: 45
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2022-11-13T14:42:31Z"
lastCommitAt: "2026-08-24T04:22:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 62
maintainers: ["kevinb9n"]
openGraphImageUrl: "https://opengraph.githubassets.com/da6eff3c6d5796700588861eda189137c72d3930d919e5cac583afaa73f1a46d/MartianZoo/solarnet"
---

# Solarnet

## Fast facts

* Solarnet is a work-in-progress **game engine** for the amazing board game *[Terraforming Mars](https://boardgamegeek.com/boardgame/167791/terraforming-mars)*. There are a few really cool things about it.

* If you just want to *play* the game, there's an *excellent* [open-source app](http://github.com/terraforming-mars/terraforming-mars) for doing that. Solarnet is unrelated to that (but very grateful for it).

* It's "just" a standalone library. Its only job is to *know the rules of the game*: "who can do what when, and what happens if they do?" It covers the "pure logic part" of the game. You can use it to set up game situations and see what happens ([example](https://github.com/MartianZoo/solarnet/blob/main/engine/src/commonTest/kotlin/dev/martianzoo/tfm/engine/cards/ExcentricSponsorTest.kt)).

* The unique behavior of each card, milestone, map area, colony tile, etc. is written in a bespoke language called Pets. These strings are ALL the game engine needs to know about a card (etc.) in order to play it correctly. Some examples:

| Class             | Example Pets syntax                                         |…

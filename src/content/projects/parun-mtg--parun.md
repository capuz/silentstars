---
repo: "parun-mtg/parun"
name: "parun"
description: "A Magic: The Gathering (MTG) rules engine."
readmeQualityOk: true
url: "https://github.com/parun-mtg/parun"
homepage: "https://parun.app/"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [99]
topics: ["haskell", "magic-the-gathering"]
stars: 11
forks: 1
openIssues: 47
closedIssues: 4702
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-07-21T03:37:26Z"
lastCommitAt: "2026-11-23T13:20:11Z"
lastReleaseAt: "2026-11-23T01:44:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["tfausak"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e4bfcc9943230e3dbc54719af4a4461dfdf1d7b41a52a1856d96bafe97534a9/parun-mtg/parun"
---

# Parun

> In times of peril, the vision the ancient paruns had for their city comes into focus.
> - [Band Together](https://gatherer.wizards.com/WAR/en-us/153/band-together)

Parun is a Magic: The Gathering (MTG) rules engine written in Haskell.

## Features

- Cards are represented as data, not code.
  There is no escape hatch to handle tricky cards.
  Each card must be encoded using the non-recursive card description language.

- The engine never makes a player's choice for them.
  Players have complete control over ordering triggers, picking targets, paying mana, and everything else.
  Choices are only skipped when they're indistinguishable and lead to the same result.

- Suspend and restore at any point.
  The entire game can be written to a JSON file and picked up again later.
  This makes saving games and stepping through simulations trivial.

- The engine is completely deterministic.
  Anything that needs input, whether that's a player's choice or the outcome of a shuffle, is modeled as a request.
  The same inputs always give the same outputs, so any bug can be reproduced.

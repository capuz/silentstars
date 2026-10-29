---
repo: "tfausak/parun"
name: "parun"
description: ":classical_building: Magic: The Gathering (MTG) rules engine."
readmeQualityOk: true
url: "https://github.com/tfausak/parun"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
topics: ["haskell", "magic-the-gathering"]
stars: 10
forks: 1
openIssues: 289
closedIssues: 2682
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-21T03:37:26Z"
lastCommitAt: "2026-10-29T21:24:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 50
maintainers: ["tfausak"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f7ac57b534fb46fba47214d2be8fbc4515e09b51630a8b397cea8cf016177ae/tfausak/parun"
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

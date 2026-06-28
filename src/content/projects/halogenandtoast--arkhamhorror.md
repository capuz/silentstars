---
repo: "halogenandtoast/ArkhamHorror"
name: "ArkhamHorror"
description: "An unofficial rules-compliant browser based version of Arkham Horror: The Card Game. Not produced, endorsed, or supported by, or affiliated with Fantasy Flight Games."
url: "https://github.com/halogenandtoast/ArkhamHorror"
homepage: "https://arkhamhorror.app"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [88]
topics: ["haskell", "vuejs", "postgresql", "sockets", "arkham-horror", "arkham-horror-lcg", "backend", "game"]
stars: 378
forks: 121
openIssues: 60
closedIssues: 4641
watchers: 9
contributors: 41
recentReleases: 1
createdAt: "2020-03-19T14:22:31Z"
lastCommitAt: "2026-06-28T01:46:41Z"
lastReleaseAt: "2026-05-19T02:52:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 42
maintainers: ["halogenandtoast", "Kwaice", "llwwbb"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ed50e283707076e44f1f4881bc9a89f78d60b948dd3c6dfa719b88612571266/halogenandtoast/ArkhamHorror"
---

# Arkham Horror LCG

The goal of this project is to implement a web version of Arkham Horror with as
many of the rules implemented as possible.

## Warning

This is very much a work in progress. Things may break at any time, but if they do,
please file a bug.

## Features

* Multiplayer up to 4 players
* Multiplayer solitaire
* Tarot Readings
* Deck import from ArkhamDB and arkham.build

## Finished Content

### Player Cards

* All player cards before 2026

### Campaigns

* Night of the Zealot
  * Return to Night of the Zealot
* The Dunwich Legacy
  * Return to The Dunwich Legacy
* The Path To Carcosa
  * Return to The Path To Carcosa
* The Forgotten Age
  * Return to The Forgotten Age
* The Circle Undone
  * Return to The Circle Undone
* The Dream-Eaters
* The Innsmouth Conspiracy
* Edge of the Earth

### Side Stories

* The Curse of the Rougarou
* Carnevale of Horrors
* Murder at the Excelsior Hotel
* The Midwinter Gala
* Film Fatale

## I just want to try this out on my computer

### Linux Users

Install [Docker][docker], then run:

```
curl -fsSL https://raw.githubusercontent.com/halogenandtoast/ArkhamHorror/main/install.sh | bash
```

This creates an `arkham-horror/`…

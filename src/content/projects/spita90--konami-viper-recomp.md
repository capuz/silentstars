---
repo: "spita90/konami-viper-recomp"
name: "konami-viper-recomp"
description: "Static recompilation of Konami Viper arcade games (Thrill Drive 2, GTI Club 2) to native code - no game data included"
readmeQualityOk: true
url: "https://github.com/spita90/konami-viper-recomp"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 5
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-29T20:22:25Z"
lastCommitAt: "2026-10-02T10:00:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 17
maintainers: ["spita90"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3471fa4d3062faf0da29ee1997c3032d62807ca065dabbbcefac251b9349c46/spita90/konami-viper-recomp"
---

# Konami Viper — static recompilation

Native PC ports of Konami's **Viper** arcade games: **Thrill Drive 2** and **GTI Club 2**
(_GTI Club: Corso Italiano_ / _Driving Party: Racing in Italy_).

The original PowerPC code is **statically recompiled** into C, so the game runs as native code
on your machine. A small shared runtime reimplements the arcade board: Voodoo3 graphics, sound,
I/O, CF card and timekeeper. This is not an emulator.

> **No game files are included.** You build the ports from your own dumps of the game and of
> the board BIOS (see [Required files](#required-files)).

</p>

## Two ways to play

Every game can run in two modes, from the same executable.

### Classic: the arcade cabinet

```sh
./td2
```

The faithful arcade experience. The game behaves as on the original cabinet:

- insert coins and press START;
- attract mode, rankings and TEST MODE are all the original ones;
- the game runs at its original 30 fps, with the original sound.

On first launch, the program calibrates the steering wheel and pedals for
you, as an operator would.

### Enhanced: like a PC game

```sh
./td2 --enhanced
```

The same game, set up like a PC game: menus, options (even graphic…

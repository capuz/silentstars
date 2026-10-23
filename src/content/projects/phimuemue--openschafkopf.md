---
repo: "phimuemue/openschafkopf"
name: "openschafkopf"
description: "Open Source Schafkopf"
readmeQualityOk: true
url: "https://github.com/phimuemue/openschafkopf"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["schafkopf", "game", "rust"]
stars: 21
forks: 6
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2017-08-13T10:02:12Z"
lastCommitAt: "2026-10-21T22:03:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 64
maintainers: ["phimuemue"]
openGraphImageUrl: "https://opengraph.githubassets.com/84193166daef3c429af3da69b9174f6c04795e08276b15bdba84aff3a96caa57/phimuemue/openschafkopf"
---

# OpenSchafkopf

This software allows to play and analyze the game [Schafkopf](https://en.wikipedia.org/wiki/Schafkopf). It supports the following variants (see [rulesets](https://github.com/phimuemue/openschafkopf/tree/main/rulesets) for examples):

* Rules: Rufspiel, Solo/Wenz/Farbwenz/Geier/Farbgeier (including Tout/Sie), Bettel, Ramsch
* Expensifiers: Schneider/Schwarz, Laufende, Stoss, Doppeln
* Misc: Kurze/lange Karte, Stock, Steigern

## Building

Requirements:
* [rust](https://www.rust-lang.org/en-US/install.html) stable
* [less](http://lesscss.org/) (tested with 3.13.1 and 4.2.1)

```
git clone https://github.com/phimuemue/openschafkopf.git
cd openschafkopf
cargo build --release
```

## Getting started

### Examples

The repository contains some [examples](https://github.com/phimuemue/openschafkopf/tree/main/examples) that show how the program can be used. They are meant to be run from the root folder.

### More details

```
./target/release/openschafkopf -h

schafkopf 

USAGE:
    openschafkopf [SUBCOMMAND]

OPTIONS:
    -h, --help    Print help information

SUBCOMMANDS:
    cli             Play in command line
    analyze         Analyze played games and spot suboptimal…

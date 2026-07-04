---
repo: "tlarrieu/dotfiles"
name: "dotfiles"
description: "My personnal config files"
url: "https://github.com/tlarrieu/dotfiles"
language: "Lua"
languages: ["Lua"]
languagePcts: [71]
topics: ["dotfiles", "theme", "xrdb"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2013-05-29T10:07:14Z"
lastCommitAt: "2026-07-04T19:20:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 66
maintainers: ["tlarrieu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8c535ae7abb9650925a8adbe2a4b1de72587708b7233d034b3cd69be4b306c1/tlarrieu/dotfiles"
---

# dotfiles

My personal config files.

## Disclaimer

This repository contains my personal config files for various applications.
This is first and foremost designed for my own needs (backup / bootstrapping
from various places).
I would ***not*** advise to run the Justfile as it will forcefully link everything,
plus a whole lot more.

## Installation

- install `just`: get it (_see how [here](https://just.systems/man/en/packages.html)_)
- `just` prints the available recipes
- `just bootstrap` to install everything

## Goals

- Maintain a coherent config backup / bootstrap
- Provide support for bépo (French dvorak variant, more about it [here](http://bepo.fr/wiki/Accueil))
- Provide standardized color scheme for various applications

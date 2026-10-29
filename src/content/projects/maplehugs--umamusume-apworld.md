---
repo: "maplehugs/umamusume_apworld"
name: "umamusume_apworld"
description: "Archipelago multiworld randomizer for Umamusume: Pretty Derby, with its own private server (based on UmamusumePS by systemless10)"
readmeQualityOk: true
url: "https://github.com/maplehugs/umamusume_apworld"
homepage: "https://uma.5maple.com"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["apworld", "archipelago", "archipelago-multiworld", "hachimi", "multiworld", "randomizer", "umamusume", "umamusume-pretty-derby"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T15:32:49Z"
lastCommitAt: "2026-10-29T12:25:04Z"
lastReleaseAt: "2026-10-10T21:25:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 53
maintainers: ["maplehugs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1413356310/b30835ae-5678-45ac-b753-c80a346ee748"
---

# Umamusume: Pretty Derby for Archipelago

An [Archipelago](https://archipelago.gg) world for **Umamusume: Pretty Derby**,
played on a private server that does the game side.

**Website: [uma.5maple.com](https://uma.5maple.com)** (download, setup guide,
YAML builder, bug reports) · **Trailer: [YouTube](https://youtu.be/2LHajuQtX-Y)**

Everything you need is in this repo:

- [`server/`](https://github.com/maplehugs/umamusume_apworld/blob/HEAD/server/README.md): the private server, [UmamusumePS](https://github.com/systemless10/UmamusumePS)
  by systemless10 with Archipelago support added, and its web panel.
- [`apworld/`](https://github.com/maplehugs/umamusume_apworld/blob/HEAD/apworld/): the world Archipelago generates seeds with.
- [`source_code_dll/`](https://github.com/maplehugs/umamusume_apworld/blob/HEAD/source_code_dll/README.md): `umapd_archipelago.dll`, the
  Hachimi Edge plugin the game needs to pick up what the server changes.

> [!WARNING]
> **Early and rough.** The Archipelago basics work (checks, items, generating
> and playing a seed), but it needs a lot more testing and balancing, and parts
> of it are still broken. If something fails, please report it on
>…

---
repo: "a55uka/nup"
name: "nup"
description: "NUP is a clean-room container format for unencrypted NX (Nintendo Switch 1/2) game dumps."
readmeQualityOk: true
url: "https://github.com/a55uka/nup"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 252
forks: 10
openIssues: 4
closedIssues: 13
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-11-01T16:35:40Z"
lastCommitAt: "2026-11-04T13:04:37Z"
status: "newborn"
tags: []
healthScore: 95
undervaluedScore: 21
maintainers: ["a55uka", "Kabosune"]
openGraphImageUrl: "https://opengraph.githubassets.com/971af9b750a8dd95f54f11f905e44ff47567cc4e3e5af29ee4169065f2d52160/a55uka/nup"
---

# NUP - NX Package Format

A container for unencrypted Nintendo Switch / Switch 2 game dumps. 
Spec sheet: **[SPEC.md](https://github.com/a55uka/nup/blob/HEAD/SPEC.md)**

```
base/            updates/458752/      dlc/040074a01bf13001/0/
├─ exefs/        ├─ exefs/            └─ romfs/          ──►  game.nup
└─ romfs/        └─ romfs/
```

NUP is a clean-room container format for **unencrypted NX (Nintendo Switch 1/2) game dumps**.

It stores ExeFS program files and full RomFS trees, this means it stores updates, base content 
and addons in one compressed file.

It can be used for either Switch 1 or Switch 2 games, of course that means you would have to
decrypt the game and package it into an nup. (which i am not aware of for Switch 1 Games).

## Tools

`tools/nup/` is the Python reference implementation:

```
pip install ./tools/nup          # or: PYTHONPATH=tools/nup python3 -m nup.cli
nup --help                       # overview of every subcommand
```

### Packing a dump

`pack` discovers packages by directory layout:

| directory | becomes |
|---|---|
| `base/` containing `exefs/` and/or `romfs/` | the `base` package |
| `updates/<decimal version>/` with `exefs/` and/or `romfs/`…

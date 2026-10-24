---
repo: "adamws/keyboard-pcbs"
name: "keyboard-pcbs"
description: "Collection of generated keyboard PCBs based on via layouts"
readmeQualityOk: true
url: "https://github.com/adamws/keyboard-pcbs"
homepage: "https://adamws.github.io/keyboard-pcbs/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 33]
topics: ["mechanical-keyboard", "kicad"]
stars: 28
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-15T17:51:20Z"
lastCommitAt: "2026-10-24T07:42:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 36
maintainers: ["adamws"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd7eb24e9c1b76e950659e5fb7cbeb55ceca418bee7a29259d28aac188ff135/adamws/keyboard-pcbs"
---

# keyboard-pcbs

Collection of generated keyboard PCBs based on [via](https://github.com/the-via/keyboards.git) layouts.

:link: Visit [https://adamws.github.io/keyboard-pcbs](https://adamws.github.io/keyboard-pcbs) to view results.

> [!WARNING]
> This is a showcase/benchmark of [kicad-kbplacer](https://github.com/adamws/kicad-kbplacer) plugin.
> All of the KiCad files are automatically generated and *may* contain errors.
> These *are not* production ready PCBs.

## How to run

The procedure of generating `keyboard-pcbs` website is split into two stages
which can be repeated locally using builder docker image.

- Download all layouts from [via](https://github.com/the-via/keyboards.git)
repository and generate KiCad schematic and PCB file for each one.

  ```bash
  $ docker run --rm -v $(pwd):/work \
      ghcr.io/adamws/keyboard-pcbs-maker:latest python via_layouts_to_boards.py generate
  ```

- Collect results from first stage and create static website to be deployed

  ```bash
  $ docker run --rm -v $(pwd):/work \
      ghcr.io/adamws/keyboard-pcbs-maker:latest python via_layouts_to_boards.py collect
  ```

> [!WARNING]
> This takes long time and is resource consuming.
> It…

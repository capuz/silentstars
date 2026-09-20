---
repo: "ritiek/dotfiles"
name: "dotfiles"
description: "NixOS and friends."
readmeQualityOk: true
url: "https://github.com/ritiek/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [72]
stars: 12
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-01-14T13:21:44Z"
lastCommitAt: "2026-09-20T08:44:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 72
maintainers: ["ritiek", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/129f47b48d8508d203e5d1387ebd61c4f6550097f153add14488d270147f3d35/ritiek/dotfiles"
---

# dotfiles

My dotfiles. For NixOS. As well as for Debian/Arch based distros maintained using
[chezmoi](https://www.chezmoi.io/). I previously used to maintain them by writing
custom shell scripts (in the [legacy](https://github.com/ritiek/dotfiles/tree/legacy) branch).

## Machines

- [mishy](https://github.com/ritiek/dotfiles/blob/HEAD/machines/mishy)
- [clawsiecats](https://github.com/ritiek/dotfiles/blob/HEAD/machines/clawsiecats)

--------------------

### Debian/Arch based distros

It has been some time since I last tried these out. Some things might not work as is.

Install [chezmoi](https://www.chezmoi.io/install/) and run:
```sh
$ chezmoi init ritiek
$ chezmoi apply -R
```

---
repo: "FemtoEmacs/Femto-Emacs"
name: "Femto-Emacs"
description: " Tiny emacs clone with configuring in FemtoLisp "
readmeQualityOk: true
url: "https://github.com/FemtoEmacs/Femto-Emacs"
language: "Scheme"
languages: ["Scheme", "C"]
languagePcts: [38, 32]
stars: 118
forks: 16
openIssues: 7
closedIssues: 2
watchers: 11
contributors: 8
recentReleases: 10
createdAt: "2016-08-21T02:10:58Z"
lastCommitAt: "2026-11-24T14:04:40Z"
lastReleaseAt: "2026-11-12T17:17:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 84
undervaluedScore: 43
maintainers: ["FemtoEmacs", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d09920130718a7c320f2f88b55b6086364bb0b349ca18d87fdb4a25f9c312e39/FemtoEmacs/Femto-Emacs"
---

# Chezweb, simply Emacs
Chezweb is a simpler implementation of Emacs, where simpler means fewer
features, but also means it's easier to learn and install.

The current version is [Chezweb 1.18](https://github.com/FemtoEmacs/Femto-Emacs/releases/tag/v1.18).

## Installation on Silicon macOS
There is no macOS installer yet. On the Mac, you build Chezweb from
its sources with one command, `make`, which takes care of everything
else; see [Building from sources](#building-from-sources).
The same steps work on Intel Macs.

## Installation on Linux
On Ubuntu (22.04 or later) and Debian (12 or later), download the
installer for your processor:
[Chezweb 1.18 for Linux Intel/AMD (chezweb_amd64.deb)](https://github.com/FemtoEmacs/Femto-Emacs/releases/download/v1.18/chezweb_amd64.deb)
for Intel and AMD, or
[Chezweb 1.18 for Linux ARM64 (chezweb_arm64.deb)](https://github.com/FemtoEmacs/Femto-Emacs/releases/download/v1.18/chezweb_arm64.deb)
for ARM (`dpkg --print-architecture` says which). Then, in the folder
where it is:

```sh
sudo apt install ./chezweb_amd64.deb
```

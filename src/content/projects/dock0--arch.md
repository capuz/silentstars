---
repo: "dock0/arch"
name: "arch"
description: "Minimal base Arch image"
readmeQualityOk: true
url: "https://github.com/dock0/arch"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [55, 45]
stars: 30
forks: 11
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2014-02-15T22:54:21Z"
lastCommitAt: "2026-07-09T20:44:56Z"
lastReleaseAt: "2014-07-12T02:13:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 63
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffa2ce9529392b2a24d5a8f6dacdcb5332161bac8a0f66f1893260cf2f7e6027/dock0/arch"
---

dock0/arch
=======

A minimal Arch container, used as the baseline for my other containers. It used to contain the [amylum](https://github.com/amylum/repo) repo, but I've moved that to [dock0/static_arch](https://github.com/dock0/static_arch). If you want an Archlinux container that has the whole [base](https://www.archlinux.org/groups/x86_64/base/) package group, check out [dock0/full_arch](https://github.com/dock0/full_arch).

## Usage

To build a new image, run `docker build .`

## License

The scripts in this repo are released under the MIT License. See the bundled LICENSE file for details. The packages and other content stored in root.tar.xz retains its original licenses.

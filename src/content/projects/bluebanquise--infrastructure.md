---
repo: "bluebanquise/infrastructure"
name: "infrastructure"
description: "Infrastructure around BlueBanquise"
readmeQualityOk: true
url: "https://github.com/bluebanquise/infrastructure"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
stars: 6
forks: 7
openIssues: 3
closedIssues: 7
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2019-11-03T21:28:04Z"
lastCommitAt: "2026-11-08T14:14:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 62
maintainers: ["oxedions", "sc-alex"]
openGraphImageUrl: "https://opengraph.githubassets.com/16964228df5ebfd617dabafa289a8d4147db20822f9bfd8d8811045f51886976/bluebanquise/infrastructure"
---

# Infrastructure

This is the BlueBanquise factory, to build packages and other stack needed elements.

Simply run `CI/engine.sh`. The script will need a strong CPU since arm64 packages are built via QEMU.

At the end, repositories are stored in `~/CI/repositories` on system where script is executed.

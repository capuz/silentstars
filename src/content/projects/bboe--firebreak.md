---
repo: "bboe/firebreak"
name: "firebreak"
description: "Unlock an Echo Dot (2nd Generation) over USB, move it between amonet targets, or return it to stock."
readmeQualityOk: true
url: "https://github.com/bboe/firebreak"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["amazon-echo", "amonet", "android", "echo-dot", "fireos", "firmware", "magisk", "mediatek", "root", "twrp"]
stars: 49
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-06T18:18:59Z"
lastCommitAt: "2026-11-04T20:55:43Z"
lastReleaseAt: "2026-10-26T06:51:37Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["bboe", "yes999zc"]
openGraphImageUrl: "https://opengraph.githubassets.com/126e966f7be06e248c4b4e32fcbdcb30d26a1ae7d21c31c2b4fd3055120ab608/bboe/firebreak"
fundingLinks: ["GITHUB:https://github.com/bboe", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bboe"]
---

# firebreak

firebreak unlocks an Echo Dot (2nd Generation) over USB, moves it between amonet
targets, or returns it to stock. Run it again with another target to move the
device. A stopped run picks up where it left off.

Unlocking a stock Dot needs `amonet-biscuit-v2.0.1.zip`, which amonet publishes
only on
[its XDA thread](https://xdaforums.com/t/unlock-root-twrp-unbrick-amazon-echo-dot-2nd-gen-2016-biscuit.4761416/).
A run downloads it unattended. If that fails, the run says so and opens your
browser for the thread instead, because the thread itself refuses an
unattended download. Either way the zip is checked against a pinned hash.
Moving an already-unlocked Dot between targets
needs that zip too, because the run checks the bootloader against the copy in
it, and so do the runs that go through the Dot's bootrom: `firebreak bootrom`, a
resume after `boot0` was erased, and `stock 5.5.0.3`.

| target | the device ends with | time |
| --- | --- | --- |
| `unlock fireos6` (default) | rooted Fire OS 6 [8149][fireos-8149] on amonet v2.0.1, TWRP 3.7.0; also needs `boot-root.zip`. On an Echo (2nd Generation), rooted Fire OS 6 [8149][fireos-radar-8149] on amonet-radar v1.0.1 | about 5…

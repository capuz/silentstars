---
repo: "tallcat4/std-t98-receiver-sharp"
name: "std-t98-receiver-sharp"
description: "Automatic single-channel ARIB STD-T98 receiver plugin for SDR#"
originalDescription: "Automatic single-channel ARIB STD-T98 receiver plugin for SDR#"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/tallcat4/std-t98-receiver-sharp"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [56, 24]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-10-24T08:51:12Z"
lastCommitAt: "2026-11-15T08:26:20Z"
lastReleaseAt: "2026-10-24T08:54:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 16
maintainers: ["tallcat4"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5fbaef832686ccd52e111e0454633e83cbed1893cc4aef9c3fb8714662cb809/tallcat4/std-t98-receiver-sharp"
---

# STD-T98 Receiver for SDR#

A plugin that demodulates ARIB STD-T98 in SDR#. It decodes AMBE+2 voice and automatically decodes scrambling codes, including enhanced scrambling (強化秘話) for Alinco digital simple radios.
Based on [std-t98-receiver](https://github.com/tallcat4/std-t98-receiver), [std-t98-cracker](https://github.com/tallcat4/std-t98-cracker), [std-t98-vocode](https://github.com/tallcat4/std-t98-vocode), and [SPEAR](https://github.com/tallcat4/SPEAR).

## Two add-ons

| | STD-T98 Receiver | STD-T98 97ch Monitor |
|---|---|---|
| Distribution file | `STD-T98-Receiver.zip` | `STD-T98-Monitor.zip` |
| Reception | 1 channel tuned in SDR# | All 97 channels of registered stations at once |
| History | None (recording is optional) | All channels saved automatically, playback via communication status diagram |

Install only what you need. If you install both, only one can receive at a time.

## Installation

Extract the zip and copy the folder inside `Plugins` to SDR#'s `Plugins` folder. When updating, overwrite the files but keep `secret-cache.json` (for Monitor, also keep `reception-v2.sqlite3` and the date-based history logs).

## STD-T98 Receiver

Pressing the Start Reception…

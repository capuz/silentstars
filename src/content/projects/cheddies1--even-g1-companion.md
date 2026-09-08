---
repo: "Cheddies1/even-g1-companion"
name: "even-g1-companion"
description: "An all new companion app for the Even G1 Glasses"
readmeQualityOk: true
url: "https://github.com/Cheddies1/even-g1-companion"
language: "C"
languages: ["C", "Dart"]
languagePcts: [64, 26]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-09T10:27:03Z"
lastCommitAt: "2026-09-08T08:17:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 21
maintainers: ["Cheddies1"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6d66e9b6143b7573ddcd9bb0aa429a969b7d0e60329dbcd55f2783cc5ee24ab/Cheddies1/even-g1-companion"
---

# Even G1 Companion

This repository is two things at once:

1. A reverse-engineered behaviour and protocol knowledge base for the Even
   Realities G1 smart glasses' BLE interface — built from HCI snoop captures
   of the official Android app and live testing on real hardware.
2. A personal Flutter companion app I use to drive the glasses for my own
   day-to-day use.

The companion app is **not** an official SDK, **not** a polished consumer
release, and **not** offered with support for other users — it is shaped
around my own workflow. Most people landing here will probably get more value
from the documentation than from running the app itself.

If you are investigating Even G1 BLE behaviour and want to skip past the
generic vendor demo material, the docs and the raw captures in this repo
should save you a lot of time.

## Start here for protocol and behaviour findings

If your interest is the protocol or the device's actual behaviour, these are
the documents to read first:

- [docs/even-g1-event-mapping.md](https://github.com/Cheddies1/even-g1-companion/blob/HEAD/docs/even-g1-event-mapping.md) — current
  trusted mapping of every observed `F5` sub-code, with confidence labels…

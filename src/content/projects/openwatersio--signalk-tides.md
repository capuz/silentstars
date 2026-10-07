---
repo: "openwatersio/signalk-tides"
name: "signalk-tides"
description: "A SignalK plugin that provides tidal predictions for the vessel's position from various online sources."
readmeQualityOk: true
url: "https://github.com/openwatersio/signalk-tides"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["marine", "marine-data", "sailing", "signalk", "signalk-plugin", "tides", "tidesandcurrents"]
stars: 5
forks: 12
openIssues: 5
closedIssues: 16
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-03-17T22:55:11Z"
lastCommitAt: "2026-10-07T10:30:41Z"
lastReleaseAt: "2026-07-08T12:06:07Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 91
maintainers: ["bkeepers", "dependabot[bot]", "clarkbw"]
openGraphImageUrl: "https://opengraph.githubassets.com/67a808b03cb2fd2e957a1fed946e6c8c7b234b30dc0378dab96f1809ea3f1684/openwatersio/signalk-tides"
fundingLinks: ["GITHUB:https://github.com/bkeepers"]
---

# signalk-tides

A SignalK plugin that provides offline tidal predictions for the vessel's position, powered by [Neaps](https://github.com/neaps/neaps).

Since 2.0, predictions are computed locally from harmonic constituents — no network access or API keys required.

## Installation

Install `signalk-tides` from the SignalK Appstore or manually by running `npm install signalk-tides` in the SignalK server directory (`~/.signalk`).

## Usage

This plugin depends on `navigation.position`.

It publishes the following [tide data](https://signalk.org/specification/1.7.0/doc/vesselsBranch.html#vesselsregexpenvironmenttide):

* `environment.tide.heightHigh`
* `environment.tide.timeHigh`
* `environment.tide.heightLow`
* `environment.tide.timeLow`
* `environment.tide.heightNow`
* `environment.tide.stationName`
* `environment.tide.state` — tide trend, `rising` or `falling`
* `environment.tide.timeToNextExtreme` — seconds until the next high or low water

### Tides API

The plugin mounts the [Neaps API](https://github.com/neaps/neaps) at `/signalk/v2/api/tides`, which serves station search, extremes, and timeline predictions. The synthetic station `vessel/default` resolves to the configured…

---
repo: "iobroker-community-adapters/ioBroker.sma-em"
name: "ioBroker.sma-em"
description: "ioBroker Adapter for SMA Energy Meter & Sunny Home Manager 2"
readmeQualityOk: true
url: "https://github.com/iobroker-community-adapters/ioBroker.sma-em"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["sma-energy-meter", "sma", "sma-em", "iobroker", "sunny-home-manager"]
stars: 28
forks: 20
openIssues: 0
closedIssues: 100
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2017-10-13T20:27:58Z"
lastCommitAt: "2026-11-01T10:44:53Z"
lastReleaseAt: "2024-01-26T10:54:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 67
maintainers: ["dependabot[bot]", "github-actions[bot]", "pdbjjens"]
openGraphImageUrl: "https://opengraph.githubassets.com/d99760bf9b6af9382cc631c8f1a899dee9a4d215f28e3910a9d9bc91ecaecaea/iobroker-community-adapters/ioBroker.sma-em"
---

# ioBroker.sma-em

## ioBroker Adapter for SMA Energy Meter

**Tests:**   

### Info

This adapter reads information from SMA Energy Meter (EMETER-20) and Sunny Home Manager 2 (HM-20).
It supports the SMA-EMETER-protocol-2. Thus also compatible energy meters from other manufacturers will work.

SMA Energy Meter and Sunny Home Manager 2 multicast datagrams with their energy measurement data to the network once or more times per second.
The SMA Energy Meter Adapter receives these multicast messages and stores them as iobroker states.

RELEASE NOTES:

Version 1.4.x includes a Breaking Change:

- node>=22, js-controller>=7.0.7 and admin>=7.7.22 required  
  Upgrade your ioBroker to at least this software level, if you want to install this adapter.

Version 1.3.x includes a Breaking Change:

- node>=20, js-controller>=7.0.7 and admin>=7.7.22 required  
  Upgrade your ioBroker to at least this software level, if you want to install this adapter.

Version 1.1.x includes some Breaking Changes:

- node>=18, js-contoller>=5 and admin>=6 required  
  Upgrade your ioBroker to at least this software level, if you want to use this adapter.

- Configurable Energy Meters per adapter instance…

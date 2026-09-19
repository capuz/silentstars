---
repo: "iobroker-community-adapters/ioBroker.fhem"
name: "ioBroker.fhem"
description: "Communication with FHEM over Telnet"
readmeQualityOk: true
url: "https://github.com/iobroker-community-adapters/ioBroker.fhem"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["iobroker", "fhem", "smarthome"]
stars: 14
forks: 7
openIssues: 12
closedIssues: 92
watchers: 5
contributors: 16
recentReleases: 0
createdAt: "2016-02-28T18:03:47Z"
lastCommitAt: "2026-09-19T01:36:40Z"
lastReleaseAt: "2023-08-13T18:59:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 49
maintainers: ["github-actions[bot]", "dependabot[bot]", "mcm1957"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fcd2b386eef545c06bed1a78408ca55aa3b91da66b133f1e23f0f6f9452f067/iobroker-community-adapters/ioBroker.fhem"
---

# ioBroker.fhem

This adapter allows to connect FHEM to ioBroker.

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

To enable the connection the telnet must be enabled in FHEM. To enable it (enabled by default) check following settings in `fhem.cfg`:

`define telnetPort telnet 7072 global`

Exactly same port and the IP address of FHEM host (or localhost if FHEM and ioBroker run on same PC) should be used for settings of adapter.

ioBroker sends at the start `jsonlist2` command to get all `Readings` from the list.

## Supported devices
Normally all devices are supported. But some of them are better integrated.

The problems appear especially by controlling of the states.
Because there is no clear attributes structure ioBroker tries to guess which `PossibleSets` fields can be used.
Actually only following attributes are supported:
- RGB: If RGB exists in `PossibleSets` and in `Readings` it will be…

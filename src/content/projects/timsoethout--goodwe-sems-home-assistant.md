---
repo: "TimSoethout/goodwe-sems-home-assistant"
name: "goodwe-sems-home-assistant"
description: "Sensor for Home Assistant pulling data from the GoodWe SEMS API for solar panel production metrics."
readmeQualityOk: true
url: "https://github.com/TimSoethout/goodwe-sems-home-assistant"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["goodwe-sems", "sems-portal", "hacs", "homeassistant", "pv"]
stars: 139
forks: 51
openIssues: 18
closedIssues: 137
watchers: 9
contributors: 21
recentReleases: 0
createdAt: "2019-01-04T21:12:46Z"
lastCommitAt: "2026-09-25T09:02:04Z"
lastReleaseAt: "2021-04-26T18:12:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 45
maintainers: ["TimSoethout", "Copilot", "F21"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eeed7cad77e13524a7fa494dceab91cbe85a2fc43800a741f62b0c4889b5577/TimSoethout/goodwe-sems-home-assistant"
fundingLinks: ["GITHUB:https://github.com/TimSoethout", "BUY_ME_A_COFFEE:https://buymeacoffee.com/TimSoethout", "CUSTOM:https://paypal.me/timsoethout"]
discussionCount: 10
---

# GoodWe SEMS API integration for Home Assistant

Integration for Home Assistant that retrieves PV data from the GoodWe SEMS and
SEMS+ APIs.

The integration uses the SEMS+ Web API for inverter discovery, live telemetry,
and energy counters. It falls back to the legacy SEMS monitor API when that
endpoint provides usable data. If the legacy response is empty, the SEMS+ Web
API is used automatically.

## Setup

### Easiest install method via HACS

The repository folder structure is compatible with [HACS](https://hacs.xyz) and is included by default in HACS.

Install HACS via: https://hacs.xyz/docs/installation/manual.
Then search for "SEMS" in the Integrations tab (under Community). Click
`HACS` > `Integrations` > `Explore and Download Repositories`, search for
`SEMS`, select the result, and click `Download`.

### Manual Setup

Copy all files in `custom_components/sems/` to `custom_components/sems/` in
your Home Assistant configuration directory.

## Configure integration

In the Home Assistant UI, go to `Settings` > `Devices & services`, click `Add
Integration`, and search for `GoodWe SEMS API`.

Log in with your GoodWe SEMS or SEMS+ credentials. The integration discovers
the…

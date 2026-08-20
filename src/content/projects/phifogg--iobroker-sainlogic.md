---
repo: "phifogg/ioBroker.sainlogic"
name: "ioBroker.sainlogic"
description: "An IoBroker Adapter for Sainlogic based weather stations"
readmeQualityOk: true
url: "https://github.com/phifogg/ioBroker.sainlogic"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["iobroker-adapter", "weather-station", "elv", "sainlogic"]
stars: 25
forks: 14
openIssues: 21
closedIssues: 146
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2020-04-23T17:29:22Z"
lastCommitAt: "2026-08-20T04:09:23Z"
lastReleaseAt: "2021-05-18T19:29:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 65
maintainers: ["dependabot[bot]", "github-actions[bot]", "phifogg"]
openGraphImageUrl: "https://opengraph.githubassets.com/9810465746e9cdc02bb4148147145ed57a88ae5a1cee9949bafe127d6006a532/phifogg/ioBroker.sainlogic"
---

# ioBroker.sainlogic

## sainlogic adapter for ioBroker

Read data from a sainlogic based weather station

## Supported devices

Basically any device working with the sainlogic hardware, the firmware usually reports as 'EasyWeather Vx.x.x)'.

Known working devices:

1. ELV WS980Wifi
1. Eurochron EFWS2900 (Listener mode only)
1. Froggit WH400SE
1. Froggit DP1500 (Ecowitt protocol only)
1. Sainlogic WS3500 (Listener mode only)
1. WH51 Moisture sensor
1. Ecowitt GW1000
1. Froggit WH3000SE (Listener mode only)

## Usage

The adapter supports two modes to show data of your weather station.

In Listener mode the adapter does support additional sensor if delivered from your weather station. Currently supported are temperature and humidity. If you have another additional sensor please raise a github issue and post your data string as this helps me to extend the functionality.

### Listener mode:

With latest firmware releases the weather station supports sending data to a custom server. The adapter will act as such a server. The setup needs two steps:

#### Configure Weather station

Use the 'WS View'app on your mobile device to configure the weatherstation. Configure the following…

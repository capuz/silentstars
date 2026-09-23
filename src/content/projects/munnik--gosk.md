---
repo: "munnik/gosk"
name: "gosk"
description: "Go SignalK implementation"
readmeQualityOk: true
url: "https://github.com/munnik/gosk"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 7
forks: 2
openIssues: 9
closedIssues: 6
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-10-06T21:49:48Z"
lastCommitAt: "2026-09-23T08:45:56Z"
lastReleaseAt: "2022-02-21T18:53:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 68
maintainers: ["munnik", "albert-smit"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e0a6ae40067428a91bce794e0b63c062d943f101ce79ec13e410fd7894cf3ae/munnik/gosk"
---

# GOSK

Go SignalK implementation and more.

## 1. Design

This implementation consist of several small programs that collect, map, store and publish sensor data from one or more vessels.

### 1.1. Micro services

GOSK is a set of micro services that collect, map, store, transport and publish data available on a ship. GOSK publishes data in the [SignalK Open Marine Data Standard](https://signalk.org/). All data is stored in both a raw format (before any mapping is done) and in a mapped format.

#### 1.1.1. Collectors

The only role of a collector is to collect raw data from the sensors on board. Collectors are made for specific protocols, e.g. a collector for NMEA0183 over UDP knows how to listen for data and a collector for Modbus over TCP knows how to pull data. Collectors have their individual configuration. Multiple collectors for the same protocol/transport can coexist in a system, e.g. 2 Canbus collectors for a port side and starboard engine.

#### 1.1.2. Raw store

The only role of a raw store is to store the raw data in a time series database. See below for the storage format.

#### 1.1.3. Mappers

The only role of a mapper is to translate data from a raw format to a…

---
repo: "jaszczurtd/Fiesta"
name: "Fiesta"
description: "Firmware for custom ECU based on RP2040"
readmeQualityOk: true
url: "https://github.com/jaszczurtd/Fiesta"
homepage: "https://www.ford-tech.pl/viewtopic.php?t=1699"
language: "C"
languages: ["C", "C++"]
languagePcts: [70, 23]
topics: ["car-project", "diesel-engine", "fiesta", "ford", "hobby-project", "rp2040", "ford-diesel", "jaszczurhal", "vp37", "iso14229"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-14T14:17:56Z"
lastCommitAt: "2026-10-16T08:26:27Z"
lastReleaseAt: "2026-05-04T22:08:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 49
maintainers: ["jaszczurtd"]
openGraphImageUrl: "https://opengraph.githubassets.com/d469d85fe4dec68f7b9bd372b8d49918ad977d46785fe337055956e445bed9d3/jaszczurtd/Fiesta"
---

# Fiesta

[Polski](https://github.com/jaszczurtd/Fiesta/blob/HEAD/README.pl.md)

Firmware and electronics for a Ford Fiesta 1.8 diesel with a custom engine
combining 1.8D indirect-injection and 1.8TDDI direct-injection parts and a VP37 pump.
[JaszczurHAL](https://github.com/jaszczurtd/JaszczurHAL) supplies the hardware
interfaces and development tools. Author: Marcin "Jaszczur" Kielesiński.

The project is a proof of concept. The complete system has not been validated
as an integrated installation in a road-going car. ECU and VP37 trials use a
separate engine on a steel frame. Clocks and the ECU's supervisory functions
have been used in the car without VP37 actuation.

## Modules

| Module | Purpose |
|---|---|
| [ECU](https://github.com/jaszczurtd/Fiesta/blob/HEAD/src/ECU/README.md) | Engine, VP37 and boost control, relay outputs, diagnostics and DTC storage. |
| [Clocks](https://github.com/jaszczurtd/Fiesta/blob/HEAD/src/Clocks/) | Factory gauges, TFT readouts and audible warnings. |
| [OilAndSpeed](https://github.com/jaszczurtd/Fiesta/blob/HEAD/src/OilAndSpeed/) | Oil pressure, vehicle speed and exhaust temperatures. |
|…

---
repo: "entur/tiamat"
name: "tiamat"
description: "Module also known as the backend for Stop Place Register (\"nasjonalt stoppestedregister - nsr\")"
readmeQualityOk: true
url: "https://github.com/entur/tiamat"
homepage: "https://stoppested.entur.org"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["netex", "publictransport", "nsr", "stopplaces", "java-11", "spring-boot", "abzu", "postgresql", "ror"]
stars: 26
forks: 10
openIssues: 21
closedIssues: 10
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2016-05-16T09:55:50Z"
lastCommitAt: "2026-10-29T10:20:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 59
maintainers: ["teppope", "assadriaz", "testower"]
openGraphImageUrl: "https://opengraph.githubassets.com/66c2e8ca16a91b90882eb083e1b75d9d02cd77cf370714e3f9f8591f4e5893d7/entur/tiamat"
---

# Tiamat 

Tiamat is the Stop Place Register.
It is used nationally in Norway, and other places.
Tiamat is created with technologies like Spring Boot, Hibernate, Postgis, Jersey and Jackson.

## Core functionality
### NeTEx imports
* Supports different pre steps and merging options for stop places, handling bad data quality.
* Assigns unique IDs to stop places (if desired).
* Validates incoming data against the XML schema.

#### Parking fields not carried over by a merging import

A `MERGE` import (the default `importType` when none is specified) that matches an *already stored*
`Parking` starts from a copy of the stored entity and applies only a fixed set of fields from the
incoming one: `keyValues`, `parkingType`, `centroid` and `parkingVehicleTypes`. The following fields
are not part of that set, so on a matching `MERGE` re-import their stored values are preserved
untouched rather than updated from the incoming data (and, importantly, they are not cleared either):
`name`, `parkingLayout`, `totalCapacity`, `rechargingAvailable`, `secure`, `parkingPaymentProcess`,
`parkingProperties`, `placeEquipments`, `paymentMethods`, `lighting`, `vehicleEntrances` (and their
access modes),…

---
repo: "OpenChargingCloud/WWCP_OCPI"
name: "WWCP_OCPI"
description: "Communication between the World Wide Charging Protocol (WWCP) and the Open Charge Point Interface (OCPI v2.1.1, v2.2.1, v2.3.0, v3.0)."
readmeQualityOk: true
url: "https://github.com/OpenChargingCloud/WWCP_OCPI"
language: "C#"
languages: ["C#"]
languagePcts: [88]
topics: ["ocpi", "e-mobility", "ev-roaming"]
stars: 29
forks: 8
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2015-09-01T15:37:45Z"
lastCommitAt: "2026-10-18T02:00:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 69
undervaluedScore: 50
maintainers: ["ahzf"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a87915e03cb301ae938a15718fe429d8e187c7a07af74d2cedce6a50a8b6aca/OpenChargingCloud/WWCP_OCPI"
fundingLinks: ["GITHUB:https://github.com/OpenChargingCloud"]
---

WWCP OCPI
=========

This software will allow the communication between World Wide Charging Protocol (WWCP) entities and entities implementing the [Open Charge Point Interface (OCPI)](https://github.com/ocpi/ocpi) which is defined and used by the [EVRoaming Foundation](https://evroaming.org). The focus of this protocol is a scalable, automated EV roaming setup between Charge Point Operators (EVSE Operators) and e-Mobility Service Providers. The focus of this protocol is communication within a **peer-to-peer** topology of CPOs, EMPs and other actors, but since v2.2 also roaming hubs are defined.

## Implementation Details and Differences

The following desribes differences of this implementation to the official protocol specification.
Most changes are intended to simplify the daily operations business or to support additional concepts/methods like the *European General Data Protection Regulation (GDPR)*, the *German Calibration Law (Eichrecht)*, the *Alternative Fuels Infrastructure Regulation (AFIR)* or the *Public Charge Point Regulations 2023* within the United Kingdom.

- The [OCPI v2.1.x ](https://github.com/OpenChargingCloud/WWCP_OCPI/blob/HEAD/WWCP_OCPIv2.1.1/README.md)…

---
repo: "OpenChargingCloud/WWCP_OCPP"
name: "WWCP_OCPP"
description: "Connectivity between the World Wide Charging Protocol (WWCP) and the Open Charge Point Protocol (OCPP v1.6/v2.0.1/v2.1)."
readmeQualityOk: true
url: "https://github.com/OpenChargingCloud/WWCP_OCPP"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["ocpp", "e-mobility", "charging", "chargingstation"]
stars: 71
forks: 26
openIssues: 9
closedIssues: 3
watchers: 13
contributors: 2
recentReleases: 0
createdAt: "2016-05-23T17:07:44Z"
lastCommitAt: "2026-11-08T12:00:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 44
maintainers: ["ahzf"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecac9a2363d7c10fa463ed57ccf31c668b2c1bab1f00e7bb35940f4006829cc4/OpenChargingCloud/WWCP_OCPP"
fundingLinks: ["GITHUB:https://github.com/OpenChargingCloud"]
---

# WWCP OCPP

This software libraries allow you to build _Open Charge Point Protocol_ services and use case specific gateways between OCPP and the World Wide Charging Protocol (WWCP), e.g. for *EV roaming*. The focus of the *Open Charge Point Protocol* as defined by the [_Open Charge Alliance (OCA)_](https://www.openchargealliance.org) is the communication between e-mobility *charging stations (charge points)*, *Local Controllers* and *Charging Station Operator Systems (CSMS)*.

## Versions

- **OCPP v2.1** is a based on the public OCA specification (DRAFT 2024-09-01) and currently under development. This version is tested regularly at *Open Charge Alliance Plugfests*.

- **OCPP v2.0.1** is provided via OCPP v2.1, as this version is backward compatible to v2.0.1.

- **OCPP v1.6** and the **Security Whitepaper** extensions are fully implemented and at least one tests exists for every charging station or CSMS message. This version was also tested on multiple *Open Charge Alliance Plugfests*.

- **OCPP v1.5** is no longer maintained. If you still need support for this version please send us an e-mail.

## Implementation Details and Differences

The official protocol specifications of…

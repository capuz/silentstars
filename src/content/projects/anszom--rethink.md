---
repo: "anszom/rethink"
name: "rethink"
description: "fully-local server for LG ThinQ devices (reverse-engineered)"
readmeQualityOk: true
url: "https://github.com/anszom/rethink"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 333
forks: 154
openIssues: 37
closedIssues: 48
watchers: 12
contributors: 55
recentReleases: 4
createdAt: "2023-11-19T18:20:52Z"
lastCommitAt: "2026-10-31T15:58:20Z"
lastReleaseAt: "2026-10-25T21:07:29Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 41
maintainers: ["anszom", "virtitnerd", "ehelbig1"]
openGraphImageUrl: "https://opengraph.githubassets.com/184b4ca77cbd66bf90971d50ed1565a139a00e8dddc0b747de2b93a9463e74d9/anszom/rethink"
discussionCount: 13
---

# rethink

The goal of this project is to de-cloud LG ThinQ-branded appliances, meaning to communicate with them without using the official LG app and cloud service.
The project is developed by reverse engineering various components of the ThinQ ecosystem.

## Status

A working version of `rethink-cloud` is now available. This is a service which emulates the cloud part of ThinQ and translates the protocol to
HomeAssistant-compatible MQTT.

An optional "bridge" mode is also supported, in which the messages are forwarded to the actual LG ThinQ cloud. This can be used as a reverse-engineering
aid, or simply to allow the user to still use the original LG app alongside HomeAssistant.

## Supported appliances

The following appliances are currently supported in rethink. The first column is the model name as reported by the appliance over ThinQ,
the second one is the model it is sold as.

#### Air conditioners

| ThinQ model                  | Appliance                                | Support                                                                                                             |
| ---------------------------- | ---------------------------------------- |…

---
repo: "openmuc/jeebus.ship"
name: "jeebus.ship"
description: "Java Implementation of the EEBus Smart Home IP (SHIP) specification."
readmeQualityOk: true
url: "https://github.com/openmuc/jeebus.ship"
homepage: "https://www.openmuc.org/eebus/ship/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["eebus", "energy-management", "iot", "java", "smart-home"]
stars: 14
forks: 4
openIssues: 7
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-02-26T12:12:07Z"
lastCommitAt: "2026-11-20T12:12:07Z"
lastReleaseAt: "2026-09-22T11:45:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 58
maintainers: ["wursthos", "Howaner"]
openGraphImageUrl: "https://opengraph.githubassets.com/e98e3005895115bf44fcaa9ceb58359d78eafabb7d3fa61fc5ee9924a451db0e/openmuc/jeebus.ship"
---

# jEEBus.SHIP

[//]: # (<img src="https://raw.githubusercontent.com/openmuc/jeebus.ship/HEAD/.idea/icon.svg" width="200" style="float: right" align="right"/>)

This repository contains the Java implementation of the Smart Home Internet Protocol
v1.0.1 (SHIP) which represents the transport layer of
the [EEBus Communication Standard](https://www.eebus.org/). It is developed and
maintained by the Team Smart Grid Communication at the Fraunhofer Institute for Solar
Energy Systems (ISE). For further information please refer
to [our website](https://www.openmuc.org/).

The SHIP Specification can be [downloaded](https://www.eebus.org/media-downloads/)
from the website of the EEBus Initiative e.V.

Our implementation provides dynamic discovery of EEBus service instances in the local
network and resolves other nodes through multicast DNS. It can be used to easily set
up a decentralized and secure websocket communication with TLS. For that, all
relevant states of chapter SHIP Data Exchange of the specification are supported.

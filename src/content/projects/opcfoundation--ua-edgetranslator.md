---
repo: "OPCFoundation/UA-EdgeTranslator"
name: "UA-EdgeTranslator"
description: "An industrial connectivity edge application translating from proprietary protocols to OPC UA leveraging the W3C Web of Things (WoT) thing descriptions."
readmeQualityOk: true
url: "https://github.com/OPCFoundation/UA-EdgeTranslator"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["opcua", "wot", "ethernetip", "lorawan", "modbus", "ocpp", "s7-protocol", "bacnet", "iec61850", "mcprotocol"]
stars: 108
forks: 28
openIssues: 1
closedIssues: 77
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2022-12-01T09:50:12Z"
lastCommitAt: "2026-10-24T08:09:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 48
maintainers: ["barnstee", "dependabot[bot]", "reissjason"]
openGraphImageUrl: "https://opengraph.githubassets.com/200b9ba5f89a986a20852e6b733ca335b632191bc16a2048dd27cf6a671c1d71/OPCFoundation/UA-EdgeTranslator"
---

# UA Edge Translator

## CI, Code Quality and Build Status

> **What the coverage badge measures:** the UA Edge Translator **server** assembly. The protocol drivers are built and their `IProtocolDriver` implementations are contract-tested (scheme, WoT binding URI, registry resolution and structure-type registration for every driver), but they are excluded from the coverage *percentage*. See [coverage.runsettings](https://github.com/OPCFoundation/UA-EdgeTranslator/blob/HEAD/coverage.runsettings).

## Table of Contents

- [Introduction](#introduction)
- [How It Works](#how-it-works)
- [Star History](#star-history)
- [Supported Southbound Asset Interfaces (Protocol Drivers)](#supported-southbound-asset-interfaces-protocol-drivers)
- [Installation](#installation)
- [Running UA Edge Translator from a Docker environment](#running-ua-edge-translator-from-a-docker-environment)
- [Running UA Edge Translator from a Kubernetes environment](#running-ua-edge-translator-from-a-kubernetes-environment)
- [Running UA Edge Translator from Azure IoT Edge/Hub](#running-ua-edge-translator-from-azure-iot-edgehub)
- [Mandatory Environment Variables](#mandatory-environment-variables)
- [Optional…

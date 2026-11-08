---
repo: "VogelPapaFinn/MX5-HybridDash"
name: "MX5-HybridDash"
description: "A hybrid instrument cluster for a Mazda MX-5 NB, which replaces the three small analog gauges and replaces them with 1.5\" IPS displays. The project aims to look like an OEM+ look and feel without destroying the old charm of the car."
readmeQualityOk: true
url: "https://github.com/VogelPapaFinn/MX5-HybridDash"
language: "C"
languages: ["C", "C++"]
languagePcts: [76, 23]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-08-14T15:03:43Z"
lastCommitAt: "2026-11-08T10:42:14Z"
lastReleaseAt: "2026-01-19T22:04:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["VogelPapaFinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d91972b90d61b685b76328f458978e27e19e70126c79ced087bdb2020f53366/VogelPapaFinn/MX5-HybridDash"
---

# MX5-HybridDash (v2)

A hybrid instrument cluster for a *Mazda MX-5 NB*, which replaces the three small analog gauges and replaces them with 1.5" IPS displays. The project aims to look like an *OEM+* look and feel without destroying the old charm of the car.

## Hardware

The project consists of four custom made PCBs of two types:
- A big Sensor PCB which sits on the back of the cluster, connects to the sensors & ECU and controls the displays
- Three small display PCBs which connect to the displays and receive instructions & data from the Sensor PCB

All four PCBs utilize a powerful ESP32-S3 microcontroller and the CAN bus to communicate with each other. This allows a robust communication without faulty data and provides the possiblity to expand the cluster with new hardware & features in the future-
The displays have a resolution of 360x360 on a 1.5" IPS panel, giving everything a high detailed look.

## Basic Features

Currently the displays can display:
* **RPM**
* **Speed**
* **Indicator (right & left)**
* **Oil Pressure (switch)**
* **Fuel Level**
* **Water Temperature**

This allows for example to calibrate the fuel level sensor so it is more accurate. In my car it shows…

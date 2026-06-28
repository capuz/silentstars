---
repo: "seud0nym/sigenergy2mqtt"
name: "sigenergy2mqtt"
description: "Publish Modbus data from Sigenergy to an MQTT Broker, with optional Home Assistant Auto-Discovery and PVOutput updating"
url: "https://github.com/seud0nym/sigenergy2mqtt"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 55
forks: 5
openIssues: 1
closedIssues: 46
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2025-04-29T05:41:21Z"
lastCommitAt: "2026-06-28T01:45:03Z"
lastReleaseAt: "2025-05-24T04:55:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 52
maintainers: ["seud0nym", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5feb1f545f0ef49bb81213cf73db7a5d3562eaa446e706b994fb1d84e3069d55/seud0nym/sigenergy2mqtt"
fundingLinks: ["CUSTOM:paypal.me/seud0nym"]
discussionCount: 29
---

`sigenergy2mqtt` is a bridge between the Modbus interface of the Sigenergy energy system and the MQTT lightweight publish/subscribe messaging protocol.

In addition, `sigenergy2mqtt` has several optional features: 

1. It can auto-discover Sigenergy devices and their device IDs without having to specify the host IP address.
1. It can publish the appropriate messages to allow Home Assistant to automatically discover the Sigenergy devices, simplifying Home Assistant configuration. 
1. Production and consumption data can automatically be uploaded to PVOutput. 
1. It can directly publish the Modbus data to an InfluxDB (v1/2) time series database for long-term storage and analysis.

## Pre-requisites

- Sigenergy ESS or PV Inverter, with Modbus-TCP enabled by your installer or through the mySigen app
- MQTT broker such as [Mosquitto](https://mosquitto.org/), either standalone or installed as an app to Home Assistant

## Installation

Follow the installation guides for supported environments:

* [Home Assistant](resources/homeassistant/README.md)
* [Docker](resources/docker/README.md)
* [Linux](resources/linux/README.md)

## Configuration

When parsing configuration options,…

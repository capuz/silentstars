---
repo: "arteck/ioBroker.xsense"
name: "ioBroker.xsense"
description: "iobroker Integration for X-Sense devices (Smokedetector, CO2)"
readmeQualityOk: true
url: "https://github.com/arteck/ioBroker.xsense"
homepage: "https://de.x-sense.com/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["devices", "iobroker", "x-sense", "xsense", "adapter", "co2", "smart-home", "somedetector"]
stars: 5
forks: 7
openIssues: 4
closedIssues: 37
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-07-26T15:27:55Z"
lastCommitAt: "2026-10-04T10:01:26Z"
lastReleaseAt: "2026-09-30T08:31:54Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 94
undervaluedScore: 100
maintainers: ["arteck", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/99a6aa479a0b3c74a842c9897bdf4a6995698968f24700a31f837d8d8ef400c7/arteck/ioBroker.xsense"
fundingLinks: ["GITHUB:https://github.com/arteck", "CUSTOM:https://paypal.me/ArthurRupp"]
---

# ioBroker.xsense
=================

[](https://github.com/arteck/ioBroker.xsense/blob/master/LICENSE)

**Version:** </br>

## XSense Adapter for ioBroker

This ioBroker adapter allows the integration of [XSense devices](https://de.x-sense.com/) into the ioBroker smart home system.  
It is designed to receive data from XSense smoke detectors, CO detectors, and other compatible devices, making them available in ioBroker for automation and monitoring.  
The adapter communicates with the XSense cloud server and provides an easy way to integrate XSense devices into existing ioBroker setups.  
An XSense Bridge SBS50 is required.

---

## ❗ WARNING
The adapter is **not** intended for alarm purposes — it is primarily for monitoring the device battery status.
I accept no liability if the place burns down.

---

### 🔧 Supported Devices
- Smoke detectors  
- Carbon monoxide detectors  
- Heat detectors  
- Water leak detectors  
- Hygrometers  
- Base stations (if supported)  

---

### ⚠️ Requirements
- An XSense account with registered devices  
- Internet connection for cloud communication
- MQTT Server for messages

---

### 📦 Preparation

Since XSense does not allow simultaneous…

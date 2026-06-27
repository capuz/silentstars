---
repo: "alexdelprete/ha-abb-fimer-pvi-vsn-rest"
name: "ha-abb-fimer-pvi-vsn-rest"
description: "ABB/FIMER PVI inverters - VSN300/VSN700 REST API integration for Home Assistant"
url: "https://github.com/alexdelprete/ha-abb-fimer-pvi-vsn-rest"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["abb", "fimer", "home-assistant", "home-assistant-component", "home-assistant-custom", "homeassistant", "inverter", "power-one", "rest-api", "sunspec"]
stars: 6
forks: 3
openIssues: 2
closedIssues: 13
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-10-26T00:18:17Z"
lastCommitAt: "2026-06-27T00:48:18Z"
lastReleaseAt: "2025-10-29T11:56:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 65
maintainers: ["alexdelprete", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d645fbf1eba312fe507996b60cf51c139daa4966161c2d5c70b29d22c9835001/alexdelprete/ha-abb-fimer-pvi-vsn-rest"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/alexdelprete"]
discussionCount: 6
---

# ABB/FIMER PVI VSN REST Integration

Home Assistant custom integration for ABB/FIMER/Power-One PVI inverters via **VSN300/VSN700 datalogger REST API**.

## Overview

This integration connects to VSN300 or VSN700 dataloggers to monitor ABB/FIMER/Power-One PV inverters. It communicates
via the datalogger's REST API and normalizes data to
SunSpec-compatible format for consistent Home Assistant entity creation.

### Features

- ✅ **Automatic Discovery**: Detects VSN model (VSN300/VSN700) and discovers all connected devices
- ✅ **VSN300 Support**: HTTP Digest authentication with X-Digest scheme
- ✅ **VSN700 Support**: HTTP Basic authentication
- ✅ **Multi-Device**: Supports inverters, meters, batteries, and storage devices
- ✅ **SunSpec Normalization**: VSN data mapped to SunSpec standard format
- ✅ **Device Hierarchy**: Proper device relationships (inverters via datalogger)
- ✅ **Complete Metadata**: Model, manufacturer, firmware version, serial numbers
- ✅ **Smart Device Recovery**: Automatic re-discovery of offline devices with repair notifications
- ✅ **Configuration UI**: Easy setup through Home Assistant UI
- ✅ **Multi-Language**: 10 European languages (EN, IT, FR, ES, PT, DE,…

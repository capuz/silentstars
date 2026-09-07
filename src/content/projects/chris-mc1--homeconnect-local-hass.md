---
repo: "chris-mc1/homeconnect_local_hass"
name: "homeconnect_local_hass"
description: "Home Connect integration for Home Assistant using direct communication over the local network"
readmeQualityOk: true
url: "https://github.com/chris-mc1/homeconnect_local_hass"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["custom-component", "hacs", "hacs-integration", "home-assistant", "home-assistant-integration", "home-connect", "homeassistant", "homeconnect"]
stars: 451
forks: 98
openIssues: 55
closedIssues: 183
watchers: 9
contributors: 39
recentReleases: 0
createdAt: "2025-03-02T19:37:59Z"
lastCommitAt: "2026-09-07T08:34:44Z"
lastReleaseAt: "2025-04-04T14:33:28Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 35
maintainers: ["chris-mc1", "renovate[bot]", "Dem0n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/f53a190c7e42320d74fb150063da6db23178be0f750b4d805980171189aa2839/chris-mc1/homeconnect_local_hass"
---

# Home Connect Local

The **Home Connect Local** allows users to integrate their home appliances supporting the  [Home Connect](https://www.home-connect.com/global) standard for Bosch and Siemens using direct communication over the local network.

## Install the Integration

1. Go to the HACS -> Custom Repositories and add this repository as a Custom Repository [See HACS Documentation for help](https://hacs.xyz/docs/faq/custom_repositories/)

2. Click the button bellow and click 'Download' to install the Integration:

3. Restart Home Assistant.

## Prerequisites

To use this integration, you must first create a Home Connect account and connect your appliances.

## Setup

1. Use the [Home Connect Profile Downloader](https://github.com/bruestel/homeconnect-profile-downloader) to download your Appliance profiles, select "openHAB" as target. The downloaded ZIP-file contains each Appliance encryption Key and feature descriptions
2. Click the button below or use "Add Integration" in Home Assistant and select "Home Connect Local".

3. Upload the downloaded Profile file.
4. Select the Appliance you want to setup.
5. When the initial connection to the Appliance fails, your asked to…

---
repo: "home-assistant-HomeWhiz/home-assistant-HomeWhiz"
name: "home-assistant-HomeWhiz"
description: "Home Assistant custom component for devices that can connect to HomeWhiz mobile app (Beko, Grundig, Bauknecht, Arcelik)"
readmeQualityOk: true
url: "https://github.com/home-assistant-HomeWhiz/home-assistant-HomeWhiz"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-assistant", "homeassistant", "integration", "homewhiz"]
stars: 159
forks: 55
openIssues: 11
closedIssues: 208
watchers: 7
contributors: 39
recentReleases: 0
createdAt: "2022-08-17T21:10:07Z"
lastCommitAt: "2026-10-26T09:18:14Z"
lastReleaseAt: "2022-12-27T09:57:54Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 45
maintainers: ["Asmir1975", "dependabot[bot]", "jwillemsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/da1236ee7852bbb6ec13ea995c99db956b3f5d5661f94319bea6839a0091f28a/home-assistant-HomeWhiz/home-assistant-HomeWhiz"
discussionCount: 9
---

# HomeWhiz Integration for Home Assistant

Integration for devices that support the HomeWhiz mobile app (Beko, Grundig, Bauknecht, Arcelik).<br />
Monitor and control them in Home Assistant, over local Bluetooth or the HomeWhiz cloud (Wi-Fi) depending on the model.

If you find this integration useful, please give it a ⭐ on GitHub.

## Installation

### Option 1. Using HACS (recommended)

- Search for `HomeWhiz` on the HACS integration page. The integration is part of the HACS default repository, so you do not need to add it manually as a custom repository.
- Install the integration and restart Home Assistant.

### Option 2. Manually

- Open the directory for your HA configuration (where `configuration.yaml` lives).
- If there is no `custom_components` directory, create it.
- Inside `custom_components`, create a new folder called `homewhiz`.
- Download _all_ files from the `custom_components/homewhiz/` directory in this repository.
- Place the downloaded files in the folder you created.
- Restart Home Assistant.

## Configuration

### <img src="https://cdn.simpleicons.org/bluetooth/0082FC" height="20" align="absmiddle" alt="" /> Bluetooth

- Connect the device to the HomeWhiz app…

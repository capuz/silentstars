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
stars: 145
forks: 45
openIssues: 13
closedIssues: 194
watchers: 8
contributors: 32
recentReleases: 0
createdAt: "2022-08-17T21:10:07Z"
lastCommitAt: "2026-07-11T05:56:48Z"
lastReleaseAt: "2022-12-27T09:57:54Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 43
maintainers: ["Asmir1975", "jwillemsen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3db297e92dde9df7e9e28b8fa97cfad5d521cc87136f08fa62c80c7bccd66899/home-assistant-HomeWhiz/home-assistant-HomeWhiz"
discussionCount: 13
---

</p>

# HomeWhiz Integration for Home Assistant

</div>

Integration for devices that support the HomeWhiz mobile app (Beko, Grundig, Bauknecht, Arcelik).<br />
Monitor and control them in Home Assistant, over local Bluetooth or the HomeWhiz cloud (Wi-Fi) depending on the model.

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

- Connect the device to the HomeWhiz app on your smartphone.
- Close the app.
- In Home…

---
repo: "golles/ha-knmi"
name: "ha-knmi"
description: "Custom component that integrates KNMI weather service (via Weerlive.nl) in to Home Assistant"
readmeQualityOk: true
url: "https://github.com/golles/ha-knmi"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["knmi", "weather", "home-assistant-component", "home-assistant", "homeassistant", "weerlive", "home-assistant-integration"]
stars: 163
forks: 12
openIssues: 4
closedIssues: 125
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2021-06-12T21:57:49Z"
lastCommitAt: "2026-10-24T08:08:58Z"
lastReleaseAt: "2021-12-23T23:19:29Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 43
maintainers: ["renovate[bot]", "golles", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b52cb8428ceb58b86f5483637c78d631ff975bd00c58816093111492742086/golles/ha-knmi"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/golles"]
---

# KNMI

KNMI custom component for Home Assistant. <br>
Weather data provided by KNMI, https://weerlive.nl.

## Installation

### HACS installation

The most convenient method for installing this custom component is via HACS. Simply search for the name, and you should be able to locate and install it seamlessly.

### Manual installation guide:

1. Utilize your preferred tool to access the directory in your Home Assistant (HA) configuration, where you can locate the `configuration.yaml` file.
2. Should there be no existing `custom_components` directory, you must create one.
3. Inside the newly created `custom_components` directory, generate a new directory named `knmi`.
4. Retrieve and download all files from the `custom_components/knmi/` directory in this repository.
5. Place the downloaded files into the newly created `knmi` directory.
6. Restart Home Assistant.

## Configuration is done in the UI

Within the HA user interface, navigate to "Configuration" -> "Integrations", click the "+" button, and search for "KNMI" to add the integration.

## Known limitations

This integration is translated into English and Dutch, including entity names and attributes, the data (from the API)…

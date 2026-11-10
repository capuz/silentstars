---
repo: "kingsleyadam/local-abbfreeathome-hass"
name: "local-abbfreeathome-hass"
description: "This is the Home Assistant custom_components (HACS) repository for Busch Jaeger/ABB-free@home"
readmeQualityOk: true
url: "https://github.com/kingsleyadam/local-abbfreeathome-hass"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["abb", "busch-jaeger", "free-at-home", "hacs", "hacs-integration", "home-assistant", "home-automation", "homeassistant", "homeassistant-integration"]
stars: 57
forks: 9
openIssues: 0
closedIssues: 98
watchers: 6
contributors: 6
recentReleases: 0
createdAt: "2024-09-30T12:29:43Z"
lastCommitAt: "2026-11-10T14:49:17Z"
lastReleaseAt: "2024-10-08T18:57:38Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 96
undervaluedScore: 53
maintainers: ["kingsleyadam", "derjoerg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1dfdf68b47f9823347ed2e2446a34573ebeae7dadf9139e4ea736dbb9621f8d/kingsleyadam/local-abbfreeathome-hass"
discussionCount: 52
---

# Home Assistant Integration - ABB-free@home

  [](https://github.com/astral-sh/ruff) [](https://opensource.org/licenses/MIT)

This is a custom component to integrate with [Home Assistant](https://www.home-assistant.io/) for the ABB-free@home system over the **local api server**.

The primary goal of this repository is to provide initial development for the integration into Home Assistant. The ultimate goal of this integration is to be merged into the Home Assistant code as a built-in integration.

Because of this, the integration will adhere to the strict [styling and code guidelines](https://developers.home-assistant.io/docs/development_guidelines/) provided by Home Assistant.

## Prerequisites

These are the prerequisites before being able to use this integration.

- Home Assistant 2026.5 or newer
- ABB-free@home System Access Point 2.0
- System Access Point running version 2.6.0 or newer

[ABB-free@home Local API Prerequisites](https://developer.eu.mybuildings.abb.com/fah_local/prerequisites)

> Note: Earlier hardware versions may also work, as reported [here](https://github.com/kingsleyadam/local-abbfreeathome-hass/discussions/148), if they are running firmware version 2.6.0…

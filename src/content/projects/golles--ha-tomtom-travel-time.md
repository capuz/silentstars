---
repo: "golles/ha-tomtom-travel-time"
name: "ha-tomtom-travel-time"
description: "A custom Home Assistant component that integrates TomTom travel time data"
readmeQualityOk: true
url: "https://github.com/golles/ha-tomtom-travel-time"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["home-assistant-component", "home-assistant-integration", "tomtom", "tomtom-api", "tomtom-travel-time"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-08-14T12:04:44Z"
lastCommitAt: "2026-10-24T08:07:53Z"
lastReleaseAt: "2026-10-18T13:02:42Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 62
maintainers: ["renovate[bot]", "golles", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2abf26697e352fd9d7651cf45c123f131ec1a447eaf78fb1ceea19eeb45411b7/golles/ha-tomtom-travel-time"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/golles"]
---

# TomTom Travel Time

The TomTom Travel Time integration provides travel time information using TomTom services.

## Installation

### Method 1: HACS (Recommended)

1. Open HACS in your Home Assistant instance.
2. Go to "Integrations".
3. Click the "+" button.
4. Search for "TomTom Travel Time".
5. Click "Download" and restart Home Assistant.

### Method 2: Manual Installation

1. Download the latest release from [GitHub releases](https://github.com/golles/ha-tomtom-travel-time/releases).
2. Extract the files to your Home Assistant `custom_components` directory:
   ```
   config/
   └── custom_components/
     └── tomtom_travel_time/
       ├── __init__.py
       ├── manifest.json
       └── ... (all other files)
   ```
3. Restart Home Assistant.

## API key

To use the TomTom Travel Time integration, you need a (free) TomTom API key. You can obtain one by signing up at the [TomTom Developer Portal](https://developer.tomtom.com/).

1. Go to **API & SDK Keys** and click **Create Key**.
2. Enter a name, e.g., **"Home Assistant Integration"**.
3. Under "Products", select **Routing API** and **Geocoding API**
4. Click **Create Key**.
5. Click on your new API key to copy it.

##…

---
repo: "carbon-design-system/carbon-addons-iot-react"
name: "carbon-addons-iot-react"
description: "A collection of React components shared between IBM Maximo Asset Monitor (Watson IoT), IBM Maximo Visual Inspection, and Graphite products."
readmeQualityOk: true
url: "https://github.com/carbon-design-system/carbon-addons-iot-react"
homepage: "https://carbon-design-system.github.io/carbon-addons-iot-react/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["ibm", "carbon-design-system", "carbon-addons", "ibm-watson-iot", "iot", "graphite", "maximo", "maximo-application-suite", "maximo-asset-monitor", "maximo-visual-inspection"]
stars: 104
forks: 90
openIssues: 232
closedIssues: 1585
watchers: 17
contributors: 114
recentReleases: 0
createdAt: "2018-12-12T15:30:42Z"
lastCommitAt: "2026-08-31T09:58:01Z"
lastReleaseAt: "2019-02-25T18:52:29Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 52
maintainers: ["carbon-bot", "abpaul1993", "anishkumar-bhut"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/161507858/52d47100-cd30-11ea-9710-d0ab9f7df748"
---

> [!WARNING]
> The `next` branch is no longer supported. These components are now being maintained in the [Graphite legacy-pal project](https://github.ibm.com/maximo-app-framework/graphite/tree/MAS-9.3/packages/legacy-pal).

# Key information for carbon-addons-iot-react v5.x.x

## ♻️ TL;DR ♻️

**Who is affected?**
Non-Graphite apps that consume PAL directly as of 5.0. Graphite apps are not affected because Graphite manages libraries/CSS, except when shipping custom React components that import Carbon or fonts/styles directly.

**What to change now?**
Declare your own @carbon/\* versions in your app’s regular dependencies (not devDependencies). Stay within ranges supported by PAL and mas-common-ui.

```
{
  "dependencies": {
    "@carbon/charts": "1.23.17",
    "@carbon/charts-react": "1.23.17",
    "@carbon/colors": "^11.38.0",
    "@carbon/icons-react": "11.46.0",
    "@carbon/layout": "^11",
    "@carbon/pictograms-react": "11.51.2",
    "@carbon/react": "^1.88.0"
  }
}
```

Fonts: Stop external or duplicate loads. Self-host IBM Plex or add explicit font declarations.
Styles: Use one entry point. Pick SCSS or CSS. Typically not both.

**Why?**
Eliminate version collisions and…

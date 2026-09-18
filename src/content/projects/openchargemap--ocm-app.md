---
repo: "openchargemap/ocm-app"
name: "ocm-app"
description: "The openchargemap.org web and mobile app"
readmeQualityOk: true
url: "https://github.com/openchargemap/ocm-app"
homepage: "https://map.openchargemap.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["ionic-framework", "typescript", "electric-vehicles", "chargingstation", "opendata"]
stars: 47
forks: 17
openIssues: 13
closedIssues: 26
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2017-09-02T00:40:38Z"
lastCommitAt: "2026-09-18T08:26:08Z"
lastReleaseAt: "2023-04-26T04:11:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 36
maintainers: ["webprofusion-chrisc", "jmontane", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/102162982/a102c580-52f5-11ea-991b-0d358bfd92b5"
---

# The Open Charge Map app (web and mobile)

This app provides the map user interface for browsing data on Open Charge Map (https://map.openchargemap.io). It can also be embedded by other websites using an iframe.

The app is implemented using the Angular version of the Ionic Framework.

## Configuration

The build/runtime configuration settings are in `/src/environments/environment.ts` and `environment.prod.ts`.
The `.prod.ts` version is used when you build with the `--prod` flag.

At a minimum the `apiBase` setting must be set to a working OCM API host and the `mapBoxToken` must be set to a real mapbox API key.

Feature toggles are defined by the `enabledFeatures` array, the app will check for the presence of a feature in this array before enabling related UI. This is where additional feature toggles would be defined and this allows dev and prod versions to have different features toggled on.

## Build Requirements (Windows/mac OS)

1. Install Ionic CLI
   `npm install -g @ionic/cli`

2. Install npm modules: `npm install` (depending on Angular version may require `npm install --legacy-peer-deps` or `npm install --force`)

3. To run in desktop browser: `ionic serve`

## Web…

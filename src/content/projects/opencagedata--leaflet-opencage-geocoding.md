---
repo: "OpenCageData/leaflet-opencage-geocoding"
name: "leaflet-opencage-geocoding"
description: "A Leaflet geocoding control that uses the OpenCage geocoding API"
readmeQualityOk: true
url: "https://github.com/OpenCageData/leaflet-opencage-geocoding"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["leaflet", "geocoder", "geocoding", "opencage-data", "opencage"]
stars: 22
forks: 11
openIssues: 0
closedIssues: 13
watchers: 11
contributors: 7
recentReleases: 0
createdAt: "2014-04-17T16:03:40Z"
lastCommitAt: "2026-08-27T14:25:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 57
maintainers: ["mtmail", "tsamaya", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16ac2bdd67b5661ac69f82566b6749581fe077b3fab163b0d55e085b0efc4831/OpenCageData/leaflet-opencage-geocoding"
---

# OpenCage Geocoding Control for Leaflet

A [Leaflet](http://leafletjs.com/) geocoding control that uses OpenCage's [geocoding API](https://opencagedata.com).

Check out a demo page in `/demo`. Or take a look at the live [demo](https://opencagedata.com/tutorials/geocode-in-leaflet).

Note: if you want location autosuggest then what you want is [OpenCage's geosearch](https://opencagedata.com/geosearch), not geocoding.

## Dependencies

Leaflet version 0.7+ to 1.9.x

For Leaflet version 2: check the [release branch v3.x](https://github.com/OpenCageData/leaflet-opencage-geocoding/tree/release/v3.0.0)

## Breaking changes

Starting with version 2.1, Bower is no longer supported. The package is now published on npm in both UMD and ESM formats.

Starting with version 2.4, this plugin uses the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). All modern browsers support it natively. If you need to support older browsers (IE11 and below), add a polyfill such as [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch):

## Installation

### Via npm

```bash
npm install @opencage/leaflet-opencage-geocoding
# or
pnpm add…

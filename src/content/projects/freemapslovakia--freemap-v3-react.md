---
repo: "FreemapSlovakia/freemap-v3-react"
name: "freemap-v3-react"
description: "Freemap Slovakia web application (www.freemap.sk)"
readmeQualityOk: true
url: "https://github.com/FreemapSlovakia/freemap-v3-react"
homepage: "https://www.freemap.sk/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["openstreetmap", "react", "slovakia"]
stars: 48
forks: 18
openIssues: 126
closedIssues: 727
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2017-02-24T13:18:19Z"
lastCommitAt: "2026-08-24T04:20:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 57
maintainers: ["zdila"]
openGraphImageUrl: "https://opengraph.githubassets.com/94bba97be874ef878bff61f1d5b9167ebb5064428dcbce54fc51a5f81eb7f2b0/FreemapSlovakia/freemap-v3-react"
fundingLinks: ["GITHUB:https://github.com/FreemapSlovakia", "CUSTOM:https://www.freemap.sk/#show=support-us"]
discussionCount: 0
---

# Freemap Slovakia Web Application

Source of [www.freemap.sk](https://www.freemap.sk), the web map portal maintained by [OZ Freemap Slovakia](https://oz.freemap.sk).

Freemap is a free, non-commercial web map application built on OpenStreetMap data. Its focus is a detailed outdoor map for hiking, cycling, cross-country skiing and horse riding across Europe, complemented by many additional base and overlay layers and by tools for search, route planning, drawing and measurement, GPX viewing, live tracking, personal maps, map embedding, and export.

This repository is the **frontend** — a React single-page application. It talks to:

- the [Freemap API server](https://github.com/FreemapSlovakia/freemap-v3-nodejs-backend) (`freemap-v3-api`) for accounts, photos, tracking, saved maps and purchases, and
- external tile, routing (GraphHopper) and geocoding (Nominatim / Overpass) services.

## Tech stack

- **React 19** + **Redux Toolkit** (application state is reflected in the URL hash)
- **Leaflet** / **react-leaflet** with **MapLibre GL** for vector layers
- **TypeScript**, type-checked with `tsc`
- **rspack** bundler, **Biome** for linting/formatting, **pnpm** as the package manager
-…

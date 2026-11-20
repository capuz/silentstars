---
repo: "FreemapSlovakia/freemap-v3-react"
name: "freemap-v3-react"
description: "Freemap Slovakia web application (www.freemap.sk)"
readmeQualityOk: true
url: "https://github.com/FreemapSlovakia/freemap-v3-react"
homepage: "https://www.freemap.sk/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["openstreetmap", "react", "slovakia"]
stars: 49
forks: 19
openIssues: 176
closedIssues: 770
watchers: 7
contributors: 24
recentReleases: 0
createdAt: "2017-02-24T13:18:19Z"
lastCommitAt: "2026-11-20T12:00:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 57
maintainers: ["zdila", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e0f4a086907e906a001a1b17fc1004262600aa0c2e863109fe7301bbad4a3b3/FreemapSlovakia/freemap-v3-react"
fundingLinks: ["GITHUB:https://github.com/FreemapSlovakia", "CUSTOM:https://www.freemap.sk/#show=support-us"]
discussionCount: 0
---

# Freemap Slovakia Web Application

Source of [www.freemap.sk](https://www.freemap.sk), the web map portal of [OZ Freemap Slovakia](https://oz.freemap.sk), a non-commercial civic association.

Freemap is a free web map application built on OpenStreetMap data. Its focus is a detailed outdoor map for hiking, cycling, cross-country skiing and horse riding across Europe, complemented by many additional base and overlay layers and by tools for search, route planning, drawing and measurement, GPX viewing, live tracking, personal maps, map embedding, and export.

This repository is the **frontend** — a React single-page application. It talks to:

- the [Freemap API server](https://github.com/FreemapSlovakia/freemap-v3-nodejs-backend) (`freemap-v3-api`) for accounts, photos, tracking, saved maps and purchases, and
- external tile and routing (GraphHopper) services, our own geocoder (Photon) and our own OSM data API (`freemap-osm-api`) for POIs, map details and element lookup.

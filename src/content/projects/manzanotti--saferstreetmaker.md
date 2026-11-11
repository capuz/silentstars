---
repo: "manzanotti/saferstreetmaker"
name: "saferstreetmaker"
description: "A map creator for adding potential active travel measures"
readmeQualityOk: true
url: "https://github.com/manzanotti/saferstreetmaker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 7
forks: 2
openIssues: 13
closedIssues: 97
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-09-04T17:13:58Z"
lastCommitAt: "2026-11-11T11:16:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 78
maintainers: ["manzanotti", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/55a2d64dcf6c0e190d1dd93403e6c13515f78a9c2be3a75ddaadfd187a5edccd/manzanotti/saferstreetmaker"
---

# saferstreetmaker

A map creator for adding potential active travel measures.

I got tired of using screenshots of Google Maps and Paint.net to create maps of potential active travel infrastructure, so, like all good developers, I decided to see if I could write my own solution. There is a live version of the site [https://saferstreetmaker.org], serving as a demo too.

Using the leaflet.js [https://leafletjs.com] mapping library to show OpenStreetMap [https://www.openstreetmap.org] maps. The default street view uses the standard `tile.openstreetmap.org` tile server; at map zoom 20, zoom-19 tiles are enlarged.

The project is written in TypeScript, uses yarn for package management, Tailwind [https://www.tailwindcss.com] for styling, and Vite for the dev server and production build. As my version of the site is being hosted as a Static Web App on Azure, I took the decision to pull in all third-party libraries from external CDNs, to make sure my site would stay within the, admittedly generous, traffic limits.

It also uses the following leaflet.js add-ons:

leaflet-draw
leaflet-svg-shape-markers
leaflet-path-drag
leaflet-toolbar
leaflet-geometryutil
leaflet-arrowheads

and lz-string…

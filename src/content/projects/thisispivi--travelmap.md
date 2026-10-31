---
repo: "thisispivi/TravelMap"
name: "TravelMap"
description: "✈️🗺️ A self-hosted travel archive and publishing app with an interactive map, visual itinerary editor, trip routes, place management, photo galleries, validation, and static-site deployment."
readmeQualityOk: true
url: "https://github.com/thisispivi/TravelMap"
homepage: "https://map.pivi.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 6
forks: 1
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-16T19:11:56Z"
lastCommitAt: "2026-10-31T09:53:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 58
maintainers: ["thisispivi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cfca9ecb96afe124a42ed2972cc589d2a6e8661b5637b18cdfac778a7b61395/thisispivi/TravelMap"
---

# [Travel Map](https://map.pivi.dev/)

A self-hosted travel archive and publishing application built with React,
TypeScript, and MapLibre. Travel Map combines an interactive public website with
a local visual editor for creating trips, managing places, attaching photos,
validating data, and preparing a static site for the web.

                

The [live demo](https://map.pivi.dev/) shows one completed map. A fresh clone
starts empty and is ready for your own trips, places, and media. Read the
[user guide](https://github.com/thisispivi/TravelMap/blob/HEAD/docs/GUIDE.md) for the complete setup and authoring workflow.

## Tech Stack

- **Public app**: React 19, React Router, MapLibre GL, React Map GL, Framer
  Motion, Lucide icons, and React Photo Album.
- **Editor**: React 19, Downshift, Fuse.js, Framer Motion, MapLibre GL, sharp
  for photo encoding, and continuous dataset validation.
- **Shared model**: TypeScript domain classes, schemas, parsing, and validation
  in the `@travelmap/core` workspace package.
- **Data**: Portable JSON documents for settings, countries, cities, trips,
  photo manifests, and transport companies.
- **Styling**: SCSS, PostCSS, shared design tokens,…

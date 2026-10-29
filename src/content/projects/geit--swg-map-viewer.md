---
repo: "Geit/swg-map-viewer"
name: "swg-map-viewer"
description: "A Map Viewer for Star Wars Galaxies. Allows the original Planets from Galaxies to be richly annotated with waypoints, markers and other content."
readmeQualityOk: true
url: "https://github.com/Geit/swg-map-viewer"
homepage: "https://swg-map-viewer.geit.uk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["star-wars-galaxies"]
stars: 11
forks: 3
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-05-19T21:29:14Z"
lastCommitAt: "2026-10-29T02:35:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 71
maintainers: ["renovate[bot]", "Geit"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad425f44a52d9e1e10a54f389c04b632a44450cf821796194070b6ff7677b5b1/Geit/swg-map-viewer"
---

# <img height="32" src="./packages/frontend/src/components/swg.svg"> Star Wars Galaxies Map Viewer
A Map Viewer for Star Wars Galaxies. Uses [Leaflet](https://leafletjs.com/) to allow the original Planets from Galaxies to be richly annotated with waypoints, markers and other content.

The Planet Selection screen is powered by [ThreeJS](https://threejs.org/), and [react-three-fiber](https://github.com/react-spring/react-three-fiber).

UI Elements are powered by [Material UI](https://material-ui.com/).

## Development
To bootstrap the project, you'll need a recent version of Node & Yarn v1 installed.

To install Node dependencies, simply run `yarn`.

You'll also need the following non-Node dependencies:
- [gdal2tiles-leaflet](https://github.com/commenthol/gdal2tiles-leaflet) should be cloned within a sibling directory, and any of it's dependencies installed on your machine.
    - This is used to split the source planet maps into tiled versions
    - Will also require `python3` to be available within your PATH.
- [pngquant](https://pngquant.org/) to be installed on your machine.
    - Used to compress output tiles to reduce bandwidth requirements by up to 70%. Tile compression can be…

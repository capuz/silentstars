---
repo: "ptv-logistics/leaflet-ptv-developer"
name: "leaflet-ptv-developer"
description: "Leaflet classes for extended PTV Developer Maps functionalities"
readmeQualityOk: true
url: "https://github.com/ptv-logistics/leaflet-ptv-developer"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [50, 50]
topics: ["leaflet", "ptv-developer", "maplibre-gl-js"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2022-03-28T07:27:07Z"
lastCommitAt: "2026-09-09T08:18:40Z"
lastReleaseAt: "2024-05-15T10:55:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 42
maintainers: ["mathias-hess", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c9d65b6750afa0ef41377b5da66d0f32d4675e8f672a712724adb187a5c17e7/ptv-logistics/leaflet-ptv-developer"
---

## Purpose

leaflet-ptv-developer provides classes to add [PTV Developer](https://developer.myptv.com/) specific features to Leaflet.

## Components

* [L.TileLayer.PtvDeveloper](#tilelayerptvdeveloper)

## How to build

```npm install``` 

or use the latest build at https://unpkg.com/leaflet-ptv-developer/dist/

### L.TileLayer.PtvDeveloper

The Layer class `L.TileLayer.PtvDeveloper` can be used to make PTV Developer [`data-tiles`](https://developer.myptv.com/Documentation/Raster%20Maps%20API/Code%20Samples/Data%20Tiles.htm) elements clickable or request tiles with specific parameters.

#### Additional options

* *disableMouseEvents* - disables all mouse click and hover events. Default: ```false```

#### Integration as single raster map

The easiest way to add a clickable layer is to use the class `L.TileLayer.PtvDeveloper`, append a clickable `data-tiles` layer (e.g. `restrictions` or `trafficIncidents`) to the profile and set the api key. The icons of the layer can now be clicked to display the object information. The options are the same as for `L.TileLayer`

```javascript
var map = L.map('map').setView(new L.LatLng(49.012, 8.4044), 17);

var interactiveTileLayer =…

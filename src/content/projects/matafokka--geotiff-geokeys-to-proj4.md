---
repo: "matafokka/geotiff-geokeys-to-proj4"
name: "geotiff-geokeys-to-proj4"
description: "A library that converts GeoTIFFs geokeys to Proj4 string"
readmeQualityOk: true
url: "https://github.com/matafokka/geotiff-geokeys-to-proj4"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["geotiff", "geokeys", "geo-keys", "proj", "proj4", "proj4js", "geotiff-keys", "geotiff-geokeys", "geotiff-geo-keys"]
stars: 31
forks: 4
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-07-19T17:46:14Z"
lastCommitAt: "2026-08-13T05:18:45Z"
lastReleaseAt: "2022-09-07T17:36:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 35
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0ed683602c5bf34e6bee8d2f1c819fdd4b0f574be862e617e9801efa60b7dbed/matafokka/geotiff-geokeys-to-proj4"
fundingLinks: ["KO_FI:https://ko-fi.com/matafokka"]
---

# geotiff-geokeys-to-proj4

This library converts GeoTIFF's geokeys to Proj4 string for correct image processing.

## [Documentation](https://matafokka.github.io/geotiff-geokeys-to-proj4/)

## Rationale

Every GeoTIFF has a Coordinate Reference System (CRS). CRS in combination with georeferencing data defines where pixel
coordinates physically are on Earth.

These CRS may be quite different from what you may find in, for example, Leaflet or OpenLayers where WGS
*(which is a CRS too)* is used by default.

To process the images, you need to convert image coordinates from one CRS to another.

[proj4js](https://github.com/proj4js/proj4js) is the simplest tool to do that. Give it an **input CRS**
(whatever GeoTIFF is using), an **output CRS** (whatever your software is using), and a **coordinate** on an image.
It'll transform coordinate from input to output CRS in a pinch.

**Note:** Proj4 calls CRS a projection which is quite confusing.

GeoTIFF encodes CRS information in **geokeys** - key-value pairs. Geokeys are really hard to handle and require external
data sources to get transformation parameters from. Here were this library comes in: it already includes all necessary
parameters…

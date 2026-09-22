---
repo: "heremaps/xyz-hub"
name: "xyz-hub"
description: "XYZ Hub is a RESTful web service for the access and management of geospatial data."
readmeQualityOk: true
url: "https://github.com/heremaps/xyz-hub"
language: "Java"
languages: ["Java"]
languagePcts: [93]
topics: ["geospatial", "restful-api", "geojson"]
stars: 75
forks: 44
openIssues: 0
closedIssues: 14
watchers: 15
contributors: 34
recentReleases: 0
createdAt: "2019-12-06T16:05:33Z"
lastCommitAt: "2026-09-22T08:45:42Z"
lastReleaseAt: "2020-03-11T16:42:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["goshev", "yogeshdhariyal", "roegi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/226364580/dd80a200-258e-11ea-8fe1-1263831edf9e"
---

---

XYZ Hub is a RESTful web service for the access and management of geospatial data.

# Overview
Some of the features of XYZ Hub are:
* Organize geo datasets in _spaces_
* Store and manipulate individual geo features (points, linestrings, polygons)
* Retrieve geo features as vector tiles, with or without clipped geometries
* Search for geo features spatially using a bounding box, radius, or any custom geometry
* Explore geo features by filtering property values
* Retrieve statistics for your _spaces_
* Analytical representation of geo data as hexbins with statistical information
* Connect with different data sources
* Build a real-time geodata pipeline with processors
* Attach listeners to react on events

XYZ Hub uses [GeoJSON](https://tools.ietf.org/html/rfc79460) as the main geospatial data exchange format. Tiled data can also be provided as [MVT](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md).

# Prerequisites

 * Java 17
 * Maven 3.9+
 * Postgres 15+ with PostGIS 3+
 * Redis 7+ (optional)
 * Docker 18+ (optional)
 * Docker Compose 1.24+ (optional)

# Getting started
Clone and install the project using:

```bash
git clone…

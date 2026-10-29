---
repo: "clarisma/geodesk-gol"
name: "geodesk-gol"
description: "Command-line utility for creating and managing Geo-Object Libraries (Latest version)"
readmeQualityOk: true
url: "https://github.com/clarisma/geodesk-gol"
homepage: "https://docs.geodesk.com/gol"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["database", "geodesk", "geospatial", "gis", "openstreetmap"]
stars: 23
forks: 7
openIssues: 26
closedIssues: 34
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-09-24T11:35:09Z"
lastCommitAt: "2026-10-29T14:06:53Z"
lastReleaseAt: "2025-12-10T00:07:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 64
maintainers: ["clarisma", "Jure-BB", "mohe2015"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7854318beede952afe19c865ca03bbe7ff0c83b3330c8bc6d7b782bcad7d5f2/clarisma/geodesk-gol"
---

# Geo-Object Librarian (GOL)

- Build and manage Geo-Object Libraries (GeoDesk's compact database format for OpenStreetMap features).

- Run [GOQL](http://docs.geodesk.com/goql) queries and export results in multiple formats.

## Setup

`gol` is a single self-contained executable. Simply [download](https://www.geodesk.com/download) and unzip.

## Usage

First, build a GOL from OpenStreetMap data:

```
gol build france france-latest.osm.pbf  
# produces france.gol
```

Extract the boundary of Paris as GeoJSON:

```
gol query france a[boundary=administrative][admin_level=6][name=Paris] > paris.geojson
```

Display the museums of Paris on a map:

```
gol map france red: na[tourism=museum] -a paris.geojson
```

Get the names and phone numbers of all restaurants in France:

```
gol query france na[amenity=restaurant] -f csv -k name,phone
```

[Full documentation](https://docs.geodesk.com/gol)

## Building from source

See [doc/build.md](https://github.com/clarisma/geodesk-gol/blob/HEAD/doc/build.md)

## Toolkits

Build fast and powerful geospatial applications with the GeoDesk OpenStreetMap Toolkits for [Java](https://github.com/clarisma/geodesk),…

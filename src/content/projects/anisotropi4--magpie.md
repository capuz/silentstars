---
repo: "anisotropi4/magpie"
name: "magpie"
description: "Extracts Open Street Map rail data for mainland Britain"
readmeQualityOk: true
url: "https://github.com/anisotropi4/magpie"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [79, 21]
stars: 9
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2020-05-25T17:51:37Z"
lastCommitAt: "2026-09-05T07:49:42Z"
lastReleaseAt: "2026-08-09T20:59:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 63
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b26957d3a038ecce8a5c8f346fa55ac1482def4b42cfad28829787c81e3398b0/anisotropi4/magpie"
---

# GB and Planet OSM Rail data

[OpenStreetMap (OSM)](https://www.openstreetmap.org) contains lots of data about the railway both for mainland Britain and Ireland but also the planet. The scripts in this project extract and filter data associated with rail from the full OSM dataset.

## Creating the GeoPKG railway datafile

* Download an appropriate `osm.pbf` format file and copy into the `data` directory. The Britain and Ireland file from: [Geofabrik](https://download.geofabrik.de/europe/britain-and-ireland.html). 

* Run the script to extracts associated geographic geometry into a GeoPKG file:

```
    $ ./run.sh
```

* This is `output/ine-rail.gpkg` and/or `output/planet-rail.gpkg`.
* Where relevant rail related data and railway features, line speed and electrification scheme are derived based on metadata.

### Notes on the Planet

* As [OSM](https://wiki.openstreetmap.org/wiki/Planet.osm) say: "Do not attempt to download the planet in a web browser." 

* There are altenative options documented in the [link](https://wiki.openstreetmap.org/wiki/Planet.osm) including cURL or bit torrent.

* The planet file is huge and processing the file is slow (over 90 minutes), and requires…

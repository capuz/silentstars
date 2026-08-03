---
repo: "bmeg/grip"
name: "grip"
description: "Graph Integration Platform"
readmeQualityOk: true
url: "https://github.com/bmeg/grip"
homepage: "https://bmeg.github.io/grip"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [75, 20]
topics: ["graphdb", "mongodb", "badger", "golang"]
stars: 27
forks: 10
openIssues: 19
closedIssues: 68
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2017-01-17T20:47:59Z"
lastCommitAt: "2026-08-03T06:44:22Z"
lastReleaseAt: "2025-09-15T22:24:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 44
maintainers: ["matthewpeterkort", "kellrott", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/102eb6b5330e18f105f6cddfcd49d9e16521a3d73fc3d45ae3b0c04f47616cff/bmeg/grip"
---

# GRIP

https://bmeg.github.io/grip/

GRIP stands for GRaph Integration Platform. It provides a graph interface on top of a variety of existing database technologies including: MongoDB, PostgreSQL, MySQL, MariaDB, Badger, and LevelDB.

Properties of an GRIP graph:

* Both vertices and edges in a graph can have any number of properties associated with them.
* There are many types of vertices and edges in a graph. Thus two vertices may have myriad types of edges
  connecting them reflecting myriad types of relationships.
* Edges in the graph are directed, meaning they have a source and destination.

GRIP also provides a query API for the traversing, analyzing and manipulating your graphs. Its syntax is inspired by
[Apache TinkerPop](http://tinkerpop.apache.org/). Learn more [here](https://bmeg.github.io/grip/).

## Pathway Commons
To load Pathway commons into a local instance of GRIP, first download the Pathway commons source file.
```
curl -O https://www.pathwaycommons.org/archives/PC2/v12/PathwayCommons12.All.BIOPAX.owl.gz
```

Start grip server (using Pebble driver)
```
grip server --driver=pebble
```

In another terminal, create the graph
```
grip create pc12
```

And load the…

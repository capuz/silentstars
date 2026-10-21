---
repo: "pivotal-cf/replicator"
name: "replicator"
description: "provide a tile, get another one."
readmeQualityOk: true
url: "https://github.com/pivotal-cf/replicator"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["tiles", "isolation-segments"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 2
watchers: 15
contributors: 83
recentReleases: 0
createdAt: "2017-03-17T17:35:37Z"
lastCommitAt: "2026-10-21T20:01:10Z"
lastReleaseAt: "2021-11-23T21:42:16Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 88
undervaluedScore: 57
maintainers: ["dependabot[bot]", "pvarambally", "goreleaserbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/031ef3be6d3531185daeb14bc2ab77ec6fffebd0d9e1c7c36b6f6202a787bfe1/pivotal-cf/replicator"
---

# Replicator

A program the replicates tiles

## Usage

An operator can use the `replicator` to create new copies of the Isolation Segment or Windows Runtime tiles. To do so, you will need the following:

1. a [name](#naming) for the copy
1. a copy of the original tile, downloaded from PivNet
1. a location to put the copy

With these things in hand, you can run the following command to replicate the tile:

```
$ replicator \
    -name "blue" \
    -path /absolute/path/to/tile.pivotal \
    -output /absolute/path/to/output.pivotal
```

## Naming

Naming your copy is important. You should pick a name that describes the tiles use.
There are a couple of constraints on tile names:

1. the name may only contain alphanumeric characters, `-`, `_`, and spaces
1. the name must be 10 characters or less

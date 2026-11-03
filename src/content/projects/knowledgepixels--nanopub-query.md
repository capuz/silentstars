---
repo: "knowledgepixels/nanopub-query"
name: "nanopub-query"
description: "The second-generation query service for Nanopublications."
readmeQualityOk: true
url: "https://github.com/knowledgepixels/nanopub-query"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["nanopublications", "sparql"]
stars: 6
forks: 4
openIssues: 22
closedIssues: 47
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2023-03-20T10:13:00Z"
lastCommitAt: "2026-11-03T12:47:04Z"
lastReleaseAt: "2026-04-08T10:15:15Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 83
maintainers: ["ashleycaselli", "tkuhn", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc518d3d5060fbda20ebd72e5389ec0de0f0109143e353e0385fc98a15903f08/knowledgepixels/nanopub-query"
---

# Nanopub Query

Nanopub Query is the second-generation query service for nanopublications.

## Available Instances

You can check out Nanopub Query at these instances:

- https://query.knowledgepixels.com/
- https://query.nanodash.net/
- https://query.petapico.org/

The current status of the live instances is shown at https://monitor.knowledgepixels.com/.

## Documentation

See the [JavaDocs](https://javadoc.io/doc/com.knowledgepixels/nanopub-query/latest/index.html) for the API and
source code documentation.

## Repos and Triples

Each nanopublications is loaded into different repos in the form of RDF4J triple stores. There are these general repos:

- `meta`: Stores some specific "admin-graph metadata" of the nanopublications (see below), but not the nanopublications
  themselves
- `full`: Stores all nanopublications in full and their admin-graph metadata (this is not scalable on the long term, so
  will be deprecated in the medium-term future)
- `last30d`: Stores all nanopublications of the last 30 days and their admin-graph metadata
- `text`: Stores all nanopublications for full-text search
- `admin`: Stores some further admin info, such as the full pubkeys for their hash…

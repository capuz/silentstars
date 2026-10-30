---
repo: "neo4j/graph-data-science-client"
name: "graph-data-science-client"
description: "A Python client for the Neo4j Graph Data Science (GDS) library"
readmeQualityOk: true
url: "https://github.com/neo4j/graph-data-science-client"
homepage: "https://neo4j.com/product/graph-data-science/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "neo4j", "machine-learning", "algorithms", "graph", "data-science", "graph-algorithms", "graph-database", "python3", "graph-data-science"]
stars: 248
forks: 59
openIssues: 4
closedIssues: 33
watchers: 11
contributors: 41
recentReleases: 0
createdAt: "2021-12-17T09:30:10Z"
lastCommitAt: "2026-10-30T10:23:40Z"
lastReleaseAt: "2022-08-11T09:28:52Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 97
undervaluedScore: 42
maintainers: ["FlorentinD", "AlfredClemedtson", "DarthMax"]
openGraphImageUrl: "https://opengraph.githubassets.com/150fd1e79be018c79fb073823981a3cd8e49da6e7bbe163ff83c1c88902d3ddb/neo4j/graph-data-science-client"
---

# Neo4j Graph Data Science Client

`graphdatascience` is a Python client for operating and working with the [Neo4j Graph Data Science (GDS) library](https://github.com/neo4j/graph-data-science).
It enables users to write pure Python code to project graphs, run algorithms, as well as define and use machine learning pipelines in GDS.

The API is designed to mimic the GDS Cypher procedure API in Python code.
It abstracts the necessary operations of the [Neo4j Python driver](https://neo4j.com/docs/python-manual/current/) to offer a simpler surface.
Additionally, the client-specific graph, model, and pipeline objects offer convenient functions that heavily reduce the need to use Cypher to access and operate these GDS resources.

`graphdatascience` is only guaranteed to work with GDS versions 2.0+.

Please leave any feedback as issues on [the source repository](https://github.com/neo4j/graph-data-science-client).
Happy coding!

## Installation

To install the latest deployed version of `graphdatascience`, simply run:

```bash
pip install graphdatascience
```

## Getting started

To use the GDS Python Client, we first need a `gds` object connected to a GDS deployment.
How to get one…

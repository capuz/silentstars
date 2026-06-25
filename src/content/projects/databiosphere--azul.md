---
repo: "DataBiosphere/azul"
name: "azul"
description: "Metadata indexer and query service used for AnVIL, HCA, LungMAP,  and CGP"
url: "https://github.com/DataBiosphere/azul"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["azul"]
stars: 11
forks: 4
openIssues: 742
closedIssues: 4105
watchers: 7
contributors: 39
recentReleases: 0
createdAt: "2018-06-29T03:18:14Z"
lastCommitAt: "2026-06-25T02:05:22Z"
lastReleaseAt: "2018-12-07T18:16:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 69
maintainers: ["dsotirho-ucsc", "achave11-ucsc", "hannes-ucsc"]
openGraphImageUrl: "https://opengraph.githubassets.com/86900d0c2ac9907dfa3070c15755c12319955958992051bed30dd971eb3df1f5/DataBiosphere/azul"
---

The Azul project contains the components that together serve as the backend to
Boardwalk, a web application for browsing genomic data sets.

# 1. Architecture Overview

## 1.1 Components

[Data Store]: https://github.com/HumanCellAtlas/data-store

Azul consists of two components: an indexer and a web service. The Azul indexer
is an AWS Lambda function that responds to web-hook notifications about bundle
addition and deletion events occurring in a [Data Store] instance. The indexer
responds to those notifications by retrieving the bundle's metadata from said
data store, transforming it and writing the transformed metadata into an
Elasticsearch index. The transformation extracts selected entities and
denormalizes the relations between them into a document shape that facilitates
efficient queries on a number of customizable metadata facets.

The Azul web service, another AWS Lambda function fronted by API Gateway, serves
as a thin translation layer between Elasticsearch and the Boardwalk UI,
providing features like pluggable authentication, field name translation and
introspective capabilities such as facet and entity type discovery.

Both the indexer and the web service allow for…

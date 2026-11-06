---
repo: "silk-framework/silk"
name: "silk"
description: "Silk Linked Data Integration Framework"
readmeQualityOk: true
url: "https://github.com/silk-framework/silk"
homepage: "http://silkframework.org/"
language: "Scala"
languages: ["Scala", "TypeScript"]
languagePcts: [61, 28]
stars: 252
forks: 59
openIssues: 41
closedIssues: 61
watchers: 25
contributors: 36
recentReleases: 0
createdAt: "2014-02-13T15:28:36Z"
lastCommitAt: "2026-11-06T13:19:52Z"
lastReleaseAt: "2020-12-17T15:20:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 39
maintainers: ["robertisele", "haschek", "andreas-schultz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b23c9c495c9f44ca38b065ea0ccd17b417b50233f6ffe11cc190ace22c8bdd00/silk-framework/silk"
---

# Silk Link Discovery Framework

Silk is an open source framework for integrating heterogeneous data sources. The primary uses cases of Silk include:

- Generating links between related data items within different Linked Data sources.
- Linked Data publishers can use Silk to set RDF links from their data sources to other data sources on the Web.
- Applying data transformations to structured data sources.

General information about Silk can be found on the official [website](http://silkframework.org).

## Documentation

Community documentation is maintained in the [doc](https://github.com/silk-framework/silk/blob/HEAD/doc/) folder.

## Requirements

### Local build

- JDK 21
- [Simple Build Tool](http://www.scala-sbt.org/) (sbt)
- [Yarn](https://yarnpkg.com) for React/JavaScript build pipeline (e.g. ^1.22.0)
- Node (version >=20)

sbt needs to be installed on the system. See [sbt download](https://www.scala-sbt.org/download) for instructions.

### docker based build

- docker (version >=17.05-xx)

## Running the Silk Workbench

- Execute: `sbt "project workbench" run`
- In your browser, navigate to 'http://localhost:9000'

## Running the Silk Workbench as docker container

- Build…

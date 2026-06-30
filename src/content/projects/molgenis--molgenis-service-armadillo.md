---
repo: "molgenis/molgenis-service-armadillo"
name: "molgenis-service-armadillo"
description: "Armadillo; a DataSHIELD implementation, part of the MOLGENIS suite"
url: "https://github.com/molgenis/molgenis-service-armadillo"
homepage: "https://molgenis.github.io/molgenis-service-armadillo/"
language: "Java"
languages: ["Java"]
languagePcts: [60]
topics: ["hacktoberfest"]
stars: 10
forks: 11
openIssues: 56
closedIssues: 198
watchers: 8
contributors: 51
recentReleases: 0
createdAt: "2020-02-14T13:11:01Z"
lastCommitAt: "2026-06-30T06:50:56Z"
lastReleaseAt: "2022-04-12T12:18:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 60
maintainers: ["marikaris", "timcadman", "mswertz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9627fb1210e1bc6ee375589c1d7c499c871acb32b88a901bc37359ef3c699797/molgenis/molgenis-service-armadillo"
---

# Armadillo suite

# Overview

Use MOLGENIS Armadillo to make data available for privacy protecting federated analysis using [DataSHIELD](https://datashield.org) protocol. Armadillo
service provides the following features:
* **manage data projects**. Projects can either hold tabular data in the efficient 'parquet' format or any other file use DataSHIELD
  'resources' framework.
* **grant users access permission**. We use a central OIDC service like KeyCloak or FusionAuth in combination with a trused identity provider like
  Life Sciences AAI to authenticate users.
* **configure DataSHIELD analysis profiles**. [DataSHIELD analysis profiles](https://www.datashield.org/help/standard-profiles-and-plaforms) are
  Docker images that contain a collection of multiple [DataSHIELD analysis packages](https://www.datashield.org/help/community-packages).

## Getting started

For installing and using Armadillo see our 
[Documentation](https://molgenis.github.io/molgenis-service-armadillo/pages/quick_start/). 

For developing and contributing see [our dev guides](https://molgenis.github.io/molgenis-service-armadillo/pages/dev_guides/).
 
### Quick start
#### Jar
1. Download the jar from our…

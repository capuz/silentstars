---
repo: "Fedict/dcattools"
name: "dcattools"
description: "Various DCAT tools for updating data.gov.be"
readmeQualityOk: true
url: "https://github.com/Fedict/dcattools"
homepage: "https://data.gov.be"
language: "Java"
languages: ["Java", "XSLT"]
languagePcts: [73, 27]
stars: 37
forks: 5
openIssues: 39
closedIssues: 435
watchers: 11
contributors: 4
recentReleases: 0
createdAt: "2015-09-29T18:14:04Z"
lastCommitAt: "2026-09-18T14:03:16Z"
lastReleaseAt: "2024-10-23T11:59:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 51
maintainers: ["barthanssens"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c468a722d35fac9f601187fad865238e02230c36a6b5674eff76ff9517c2fe4/Fedict/dcattools"
---

# DCAT tools

Various DCAT tools for harvesting metadata from Belgian open data portals, 
converting metadata to DCAT-AP files and updating the Belgian 
[data.gov.be](http://data.gov.be) portal.

The portal itself is a Drupal 10 website, based on Fedict's / BOSA's
[Openfed](https://drupal.org/project/openfed) distribution.

## Data

Only interested in the result ? The N-Triples and XML files (DCAT-AP) 
used to update data.gov.be can be found in the [dcat repository](https://github.com/fedict/dcat).

The DCAT-AP XML file is being used by the [European Data portal](https://data.europa.eu).

## Overview of the tools

### Requirements

These tools can be used with a Java runtime 17 or newer, on a headless machine, i.e. there is no fancy GUI.

Internet connection is obviously required, although a proxy can be used.

### Main parts

* Helper classes: for storing scraped pages locally, conversion tools etc.
* Various [scrapers](https://github.com/Fedict/dcattools/blob/HEAD/README-SCRAPER.md): getting metadata from various repositories
and websites, and turning the metadata into DCAT files
* Also part of the scrapers are a series of [SPARQL…

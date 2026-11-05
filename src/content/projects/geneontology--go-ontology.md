---
repo: "geneontology/go-ontology"
name: "go-ontology"
description: "Source ontology files for the Gene Ontology"
readmeQualityOk: true
url: "https://github.com/geneontology/go-ontology"
homepage: "http://geneontology.org/page/download-ontology"
language: "Makefile"
languages: ["Makefile", "Shell", "Scala"]
languagePcts: [33, 24, 21]
topics: ["ontology", "go", "owl", "obo", "obofoundry", "gene-ontology", "geneontology", "functional-annotation"]
stars: 255
forks: 47
openIssues: 634
closedIssues: 21055
watchers: 31
contributors: 68
recentReleases: 0
createdAt: "2015-06-19T23:29:57Z"
lastCommitAt: "2026-11-05T08:04:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["pgaudet", "edwong57", "raymond91125"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/37750722/d90ca416-78f8-49c5-8480-ebb9f2c91dfb"
---

# Repository for GO Ontology

This repository is primarily for the developers of the GO and contains the source code for the GO ontology. 

More general documentation about GO can be found on the [GO website](http://geneontology.org/); ontology files can be downloaded from the [GO website/downloads](http://geneontology.org/docs/download-ontology/).

You should __NOT__ use this repository to download production versions of GO.

## Ontology Editors

Instructions for editing the ontology can be found in the [GO wiki/Ontology section](http://wiki.geneontology.org/index.php/Ontology_Development#Editing_the_Ontology). 

[Status pages](https://geneontology.github.io/go-ontology/) — ontology developers can review changes in the repository since the last official ontology release

## Ontology Pipeline Overview

 - GitHub Actions performs tests on every commit or pull request - https://github.com/geneontology/go-ontology/actions?query=workflow%3ACI
 - A Jenkins job produces SNAPSHOT releases every second day- https://build.geneontology.org/job/geneontology/job/pipeline/job/snapshot/
    * The S3 bucket for go-data-product-snapshot/ontology/, mapped to…

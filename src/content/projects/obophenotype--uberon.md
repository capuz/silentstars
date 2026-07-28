---
repo: "obophenotype/uberon"
name: "uberon"
description: "An ontology of gross anatomy covering metazoa. Works in concert with https://github.com/obophenotype/cell-ontology"
readmeQualityOk: true
url: "https://github.com/obophenotype/uberon"
homepage: "http://obophenotype.github.io/uberon/"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [98]
topics: ["obofoundry", "uberon", "ontology", "anatomy", "monarchinitiative", "gross-anatomy", "metazoa", "anatomy-ontology", "geneontology"]
stars: 157
forks: 40
openIssues: 242
closedIssues: 2326
watchers: 26
contributors: 74
recentReleases: 0
createdAt: "2010-03-16T06:12:09Z"
lastCommitAt: "2026-07-28T14:53:05Z"
lastReleaseAt: "2022-02-21T18:52:27Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 45
maintainers: ["dosumis", "cmungall", "nicolevasilevsky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/564599/39114795-3fbe-4b0c-96d8-617862d3b7eb"
discussionCount: 2
---

# Uberon - a multi-species anatomy ontology

This repository contains the ontology *source*, and is primarily of
relevance to Uberon editors/developers.

For an overview of the ontology, plus usage instructions on how to
download the compiled versions of the ontology, please visit
[uberon.org](http://obophenotype.github.io/uberon/).

## A note on the taxonomic scope of Uberon

Uberon has a set of upper level terms that are universal. These are indicated with the [common_anatomy](http://purl.obolibrary.org/obo/uberon/core#common_anatomy) tag. However, 
Uberon editors will not take requests for terms from outside of the Metazoa. Plant anatomy term requests should be directed to the [PO](https://obofoundry.org/ontology/po.html), fungal anatomy terms to [FAO](https://obofoundry.org/ontology/FAO.html).  
Uberon also gives preference to anatomy term requests for vertebrates over invertebrates. Wherever possible term requesters are encouraged to work directly with existing invertebrate anatomy ontologies to get the terms they need.

## Content

This repository contains the editors version of the ontology
(src/ontology/uberon-edit.obo), and the material required to make a release.

##…

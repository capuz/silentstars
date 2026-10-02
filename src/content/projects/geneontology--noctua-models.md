---
repo: "geneontology/noctua-models"
name: "noctua-models"
description: "This is the data repository for the models created and edited with the Noctua tool stack for GO."
readmeQualityOk: true
url: "https://github.com/geneontology/noctua-models"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [100]
topics: ["noctua-models", "pathways", "geneontology", "go-cam", "ontology", "annotation"]
stars: 12
forks: 3
openIssues: 82
closedIssues: 51
watchers: 17
contributors: 10
recentReleases: 0
createdAt: "2015-06-30T18:16:10Z"
lastCommitAt: "2026-10-02T09:55:02Z"
lastReleaseAt: "2016-11-02T19:49:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 87
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d4349a71da611de0283d0e7d45407ddd81cd0aee086a20bf8f9d6598f0aed48a/geneontology/noctua-models"
---

# noctua-models

This is the data repository for the models created and edited with the Noctua tool stack for GO. See https://github.com/geneontology/noctua
for details on the Noctua tool.

The models are stored as OWL in the [models/](https://github.com/geneontology/noctua-models/blob/HEAD/models/) directory.

These models can be consumed computationally using the [OWALPI](https://github.com/owlcs/owlapi/) or debugged within Protege.

## OWL Modeling

The native form of a Noctua model is OWL. A Noctua model consists of *ABox* axioms (ie axioms about individuals) - this is in contrast to a traditional ontology which is *TBox* axioms (ie class axioms). We use the term 'LEGO model' when we are talking about an ABox with members that instantiate GO molecular function classes (ie an activity flow diagram). More generally 'Noctua model' for when we have minimal assumptions about ontologies used.

For the specification, see:

https://github.com/geneontology/minerva/blob/master/specs/owl-model.md

A brief description follows

## General modeling paradigm (informal)

A Noctua model is a collection of individuals, typed using one or more
ontologies, interconnected as a graph of triples…

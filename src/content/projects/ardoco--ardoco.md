---
repo: "ardoco/ardoco"
name: "ardoco"
description: "Mono Repo: Contains core, tlr, and inconsistency detection"
readmeQualityOk: true
url: "https://github.com/ardoco/ardoco"
homepage: "https://ardoco.de/approaches/"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["framework", "tlr", "traceability", "inconsistency-detection"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2024-12-04T15:20:51Z"
lastCommitAt: "2026-08-20T04:07:41Z"
lastReleaseAt: "2026-02-06T11:41:07Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 80
maintainers: ["dependabot[bot]", "Gram21", "dfuchss"]
openGraphImageUrl: "https://opengraph.githubassets.com/84648bc3d6392073896a5a524400128d311a2810695ab581eb135759258aa7c5/ardoco/ardoco"
---

# ARDoCo - Automating Requirements and Documentation Comprehension

The goal of the ARDoCo project is to connect architecture documentation and models with Traceability Link Recovery (TLR) while identifying missing or deviating elements (inconsistencies).
An element can be any representable item of the model, like a component or a relation.
To do so, we first create trace links and then make use of them and other information to identify inconsistencies.

Our recent approaches, such as [LiSSA](https://ardoco.de/approaches/lissa/), leverage Large Language Models (LLMs) and Information Retrieval (IR) to enable more generic and effective traceability link recovery across various artifact types.

ARDoCo is actively developed by researchers of the _[Modelling for Continuous Software Engineering (MCSE) group](https://mcse.kastel.kit.edu)_ of _[KASTEL - Institute of Information Security and Dependability](https://kastel.kit.edu)_ at the [KIT](https://www.kit.edu).

**Website**: [ardoco.de](https://ardoco.de)

This repository contains the framework and the approaches.
As such, there is the definition of our pipeline and the data handling as well as the definitions for the various pipeline…

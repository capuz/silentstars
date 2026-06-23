---
repo: "GenSpectrum/LAPIS"
name: "LAPIS"
description: "An API, a query engine, and a database schema for genomic sequences; currently with a focus on SARS-CoV-2"
url: "https://github.com/GenSpectrum/LAPIS"
homepage: "https://lapis.cov-spectrum.org/open/v2/docs/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [77]
topics: ["research", "genomics", "epidemiology", "covid-19", "sars-cov-2"]
stars: 31
forks: 6
openIssues: 65
closedIssues: 329
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2021-07-23T15:32:52Z"
lastCommitAt: "2026-06-23T06:42:30Z"
lastReleaseAt: "2024-07-22T13:34:43Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 62
maintainers: ["dependabot[bot]", "fengelniederhammer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d89ec1378d88092929c43b73b8a170e05a1e2f747aca0f9b91f2eed13fc7b739/GenSpectrum/LAPIS"
---

# Lightweight API for Sequences (LAPIS)

**LAPIS** (**L**ightweight **API** for **S**equences) is a webservice for querying genomic sequences.
It is designed for pathogen data to answer genomic epidemiological questions.
Main features include:

* **Data retrieval**: You can download sequences, metadata, alignments, translations, and annotation data.
* **Data aggregation**: You can flexibly group and aggregate sequences
  (e.g., to find out the number of sequences per country over time)
* **Powerful filters**: You can filter by metadata and combinations of mutations.
  It is possible to specify complex filter conditions using Boolean logic.
* **Easy to use**: It is a simple HTTP/REST API (application programming interface).
  For most cases, you can query it just by typing a URL into your browser.
  It can also be called from any programming language.
* **Many output formats**: You can download the metadata and aggregated data as JSON, CSV, or TSV.
  Sequences are provided as FASTA.
* **Very fast**: LAPIS was originally developed to query SARS-CoV-2 sequences
  and, therefore, capable to process millions of sequences efficiently.
  It uses…

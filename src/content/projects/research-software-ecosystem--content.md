---
repo: "research-software-ecosystem/content"
name: "content"
description: "A metadata commons to store research software metadata"
readmeQualityOk: true
url: "https://github.com/research-software-ecosystem/content"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["biohackeu20"]
stars: 48
forks: 35
openIssues: 46
closedIssues: 21
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2019-01-25T13:56:12Z"
lastCommitAt: "2026-10-12T11:15:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 53
maintainers: ["biotools-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/539243445a9365d0101aad992df80e3287bee18b8489eae9473bec0d83354bd0/research-software-ecosystem/content"
---

# Research Software Ecosystem (RSEc) contents repository
This repository contains the metadata aggregated for the Research Software Ecosystem (RSEc). The purpose of this repository is to act as a central place for the exchange of these metadata for multiple projects, including bio.tools, Biocontainers, Bioconda, OpenEBench, Debian Med, BIII.eu, etc.

# Contents outline
All software metadata are in the data folder of this repository, each software package/tool being in a distinct folder, which contains multiple files. Each of these files contains the metadata regarding the software coming from a specific resource, or reformatted in a specific format.

```
# Example for the contents of the 'fastqc' folder:
fastqc.biotools.json # metadata for the fastqc bio.tools entry (pulled by RSEc bot)
bioconda_fastqc.yaml # metadata for the bioconda fastqc package (pulled by RSEc bot)
biocontainers.yaml # metadata for the fastqc biocontainers image (pushed by biocontainers bot)
fastqc.oeb.metrics.json  # metadata for the OpenEBench fastqc package metrics (pulled by RSEc bot)
fastqc.debian.yaml  # metadata for the Debian Med fastqc package (pulled by RSEc bot)
fastqc.bioschemas.jsonld  # metadata…

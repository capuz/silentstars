---
repo: "research-software-ecosystem/content"
name: "content"
description: "A metadata commons to store research software metadata"
url: "https://github.com/research-software-ecosystem/content"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["biohackeu20"]
stars: 47
forks: 34
openIssues: 50
closedIssues: 14
watchers: 5
contributors: 21
recentReleases: 0
createdAt: "2019-01-25T13:56:12Z"
lastCommitAt: "2026-06-28T01:44:39Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 52
maintainers: ["biotools-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0ac5239798e337ad69c7b454bf7f06be73f5445f6229b163891edb3c82ba148/research-software-ecosystem/content"
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

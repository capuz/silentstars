---
repo: "EBI-Metagenomics/MGnifyR"
name: "MGnifyR"
description: "R package for searching, downloading and analysis of EBI MGnify metagenomics data"
readmeQualityOk: true
url: "https://github.com/EBI-Metagenomics/MGnifyR"
homepage: "https://ebi-metagenomics.github.io/MGnifyR/"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 23
forks: 10
openIssues: 3
closedIssues: 21
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2019-10-27T11:40:08Z"
lastCommitAt: "2026-11-07T13:55:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 42
maintainers: ["TuomasBorman"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ec1dec5a27ff169ed06a37cee61fdbb0ac0fa15a163bd7d545b70ecd83554cd/EBI-Metagenomics/MGnifyR"
---

# MGnifyR <img src="man/figures//mgnifyr_logo.png" align="right" width="120" />

An R package for searching and retrieving data from the
[EBI Metagenomics resource](https://www.ebi.ac.uk/metagenomics) (MGnify).
Browse studies, and fetch their taxonomic profiles as a single
`TreeSummarizedExperiment`. The data is retrieved from the summary tables that
MGnify provides for each study, so fetching even hundreds of studies is fast.

MGnifyR package is part of [miaverse](https://microbiome.github.io/) 
microbiome analysis ecosystem enabling usage of
[mia](https://bioconductor.org/packages/release/bioc/html/mia.html)
and other miaverse packages.

**This research has received funding from the Horizon 2020 Programme of the
European Union within the FindingPheno project under grant agreement No
952914.** FindingPheno, an EU-funded project, is dedicated to developing
computational tools and methodologies for the integration and analysis of
multi-omics data. Its primary objective is to deepen our understanding of the
interactions between hosts and their microbiomes. You can find more information
on [FindingPheno website](https://findingpheno.eu/).

## Installation

### Bioc-release

```
if…

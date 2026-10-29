---
repo: "SouthGreenPlatform/PanExplorer_workflow"
name: "PanExplorer_workflow"
description: "Snakemake worklow for bacterial pan-genome analysis. It can be run in the back-end of PanExplorer web application"
readmeQualityOk: true
url: "https://github.com/SouthGreenPlatform/PanExplorer_workflow"
language: "Perl"
languages: ["Perl"]
languagePcts: [93]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 11
contributors: 7
recentReleases: 0
createdAt: "2022-04-26T11:23:31Z"
lastCommitAt: "2026-10-29T21:25:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_watch"]
healthScore: 61
undervaluedScore: 39
maintainers: ["dereeper"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bd4058ef4c6b67bec413d1ba4e039cf34aae189182b4dd02f32330cd7350c26/SouthGreenPlatform/PanExplorer_workflow"
---

# PanExplorer_workflow

# About

This workflow is a snakemake worklow that can be run in the backend of the PanExplorer web application.

**Homepage:** [https://panexplorer.southgreen.fr/](https://panexplorer.southgreen.fr/)

It allows to perform a pan-genome analysis using published and annotated bacteria genomes, using different tools that can be invoked: Roary, PGAP, PanACoTA.

It provides a presence/absence matrix of genes, an UpsetR Diagram for synthetizing the matrix information and a COG assignation summary for each strain.

## Citation

[https://doi.org/10.1093/bioinformatics/btac504](https://doi.org/10.1093/bioinformatics/btac504)

## Authors

* Alexis Dereeper (IRD)

## Prerequisites - Tool dependencies

Using a singularity container, the only dependency you will need is **singularity**.

This singularity image (panexplorer.sif) already contains all dependencies required for running the workflow:

- Snakemake
- Roary
- PGAP
- Panaroo
- Panacota
- Minigraph/cactus
- PanGenome Graph Builder (PGGB)
- ncbi-blast+ (version BLAST 2.4.0+)
- R (version 4.2.0) and following packages:
  - optparse : ``install.packages("optparse")``
  - dendextend :…

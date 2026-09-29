---
repo: "open2c/distiller-sm"
name: "distiller-sm"
description: "a Snakemake version of distiller - the Open2C Hi-C mapping workflow"
readmeQualityOk: true
url: "https://github.com/open2c/distiller-sm"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["bioinformatics", "bioinformatics-pipeline", "hi-c", "hic", "snakemake", "snakemake-pipeline", "snakemake-workflow"]
stars: 5
forks: 3
openIssues: 8
closedIssues: 8
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2017-03-28T23:52:40Z"
lastCommitAt: "2026-09-29T10:05:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 44
maintainers: ["Phlya"]
openGraphImageUrl: "https://opengraph.githubassets.com/f43d5e2be63a25adfd9fd3e23edb1cf45c2f420348ac1106608fb3f6f962efd8/open2c/distiller-sm"
---

# distiller-sm

## A modular Hi-C mapping pipeline for reproducible data analysis.

The `distiller` pipeline aims to provide the following functionality:

- Align the sequences of Hi-C molecules to the reference genome
- Parse .sam alignment and form files with Hi-C pairs
- Filter PCR duplicates
- Aggregate pairs into binned matrices of Hi-C interactions

### Installation

First, clone the repository:

`git clone https://github.com/open2c/distiller-sm.git`

The recommended way to get all the requirements is to create a conda environment using `workflow/envs/environment.yml`.
We recommend using mamba to handle creation and modification of conda environments, like this:
```
cd distiller-sm
mamba env create -f workflow/envs/environment.yml
```
Other than snakemake, it just installs sra-tools, needed to run the test.
Feel free to simply install snakemake in any way you like.

To check your installation, first run the workflow with a small test dataset.
```
conda activate distiller-sm
sh setup_test.sh
snakemake --use-conda --cores $Ncores --configfile config/config.yml
```
This will also create all required conda environments which will be reused in future runs of the same workflow.…

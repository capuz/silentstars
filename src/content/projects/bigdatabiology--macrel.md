---
repo: "BigDataBiology/macrel"
name: "macrel"
description: "Predict AMPs in (meta)genomes and peptides"
readmeQualityOk: true
url: "https://github.com/BigDataBiology/macrel"
homepage: "http://big-data-biology.org/software/macrel"
language: "Python"
languages: ["Python", "Elm"]
languagePcts: [72, 23]
topics: ["metagenomics", "peptide", "bioinformatics", "biology", "genomics", "ngless"]
stars: 96
forks: 13
openIssues: 0
closedIssues: 27
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2019-07-01T02:35:37Z"
lastCommitAt: "2026-07-04T22:18:04Z"
lastReleaseAt: "2021-10-04T12:10:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 33
maintainers: ["luispedro"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e831f791bdc2cdffc5f507345653ef8b2dada0a52802f3d1099b0cc1790b8cf/BigDataBiology/macrel"
---

# Macrel: (Meta)genomic AMP Classification and Retrieval

Pipeline to mine antimicrobial peptides (AMPs) from (meta)genomes.

If you use this software in a publication please cite

>   Santos-Júnior CD, Pan S, Zhao X, Coelho LP. 2020.
>   Macrel: antimicrobial peptide screening in genomes and metagenomes.
>   PeerJ 8:e10555. DOI: [10.7717/peerj.10555](https://doi.org/10.7717/peerj.10555)

Run Macrel online: [https://big-data-biology.org/software/macrel](https://big-data-biology.org/software/macrel)

## License

MIT.

Macrel as a whole is under the **MIT** license.

## Install

The recommended method of installation is through
[bioconda](https://anaconda.org/bioconda/macrel):

```bash
conda create --name env_macrel -c bioconda macrel
conda activate env_macrel
macrel -h
```

Alternatively, just:

```bash
conda install -c bioconda macrel
```

To install from source, [read the docs](https://macrel.readthedocs.io/en/latest/install)

### Examples

> Macrel uses a _subcommand interface_. You run `macrel COMMAND ...` with the
> COMMAND specifying which components of the pipeline you want to use.

To run these examples, first download the example sequences from…

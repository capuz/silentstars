---
repo: "openvax/vaxrank"
name: "vaxrank"
description: "Ranked vaccine peptides for personalized cancer immunotherapy"
readmeQualityOk: true
url: "https://github.com/openvax/vaxrank"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 68
forks: 28
openIssues: 97
closedIssues: 356
watchers: 7
contributors: 5
recentReleases: 4
createdAt: "2016-05-02T17:32:56Z"
lastCommitAt: "2026-11-13T04:39:15Z"
lastReleaseAt: "2026-10-30T04:30:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 56
maintainers: ["iskandr"]
openGraphImageUrl: "https://opengraph.githubassets.com/730fbaa7832b2c7299a8d821cf85a256216a44597fc2cf4106abfecad4bdca55/openvax/vaxrank"
---

# Vaxrank

Vaxrank selects mutated protein fragments for personalized therapeutic cancer
vaccines. It is the antigen ranking and vaccine design component of the
[OpenVax](https://www.openvax.org/) pipeline.

It takes somatic variants, tumor RNA-seq and MHC alleles, or previously scored
candidate epitopes, and returns ranked antigen windows,
peptide or mRNA construct files, and reports for reviewing the evidence behind
each design. Unified mutation/CTA/viral inputs and the expanded peptide/mRNA
design workflows are experimental.

## Install

```sh
pip install vaxrank
pyensembl install --release 113 --species human   # match your reference genome
```

Vaxrank needs Python 3.11 or newer. PDF reports additionally need wkhtmltopdf or
WeasyPrint; see [installation](https://github.com/openvax/vaxrank/blob/HEAD/docs/installation.md).

## Quick start

Choose the vaccine type first: `peptide`, `mrna`, or both. This smoke example
uses the mouse B16 melanoma files in a repository checkout and a **random test
predictor**. It exercises the workflow; its scores are not biological predictions.

```sh
vaxrank \
    --vaccine-type peptide \
    --download-reference-genome-data \
    --vcf…

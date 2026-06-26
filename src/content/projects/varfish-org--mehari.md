---
repo: "varfish-org/mehari"
name: "mehari"
description: "VEP-like tool for sequence ontology and HGVS annotation of VCF files"
url: "https://github.com/varfish-org/mehari"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["genetics", "varfish", "variant-filtration", "variant-prioritization", "vcf"]
stars: 31
forks: 1
openIssues: 23
closedIssues: 86
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2023-03-03T12:29:59Z"
lastCommitAt: "2026-06-26T21:30:47Z"
lastReleaseAt: "2023-06-14T08:45:35Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 93
undervaluedScore: 56
maintainers: ["dependabot[bot]", "tedil", "varfish-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4301958668e0c67c02d69db1b4f30bf4d5dd4b960d9bb2422f85a4b270f41ea1/varfish-org/mehari"
---

# Mehari

Mehari is a software package for annotating VCF files with variant effect/consequence.
The program uses [hgvs-rs](https://crates.io/crates/hgvs) for projecting genomic variants to transcripts and proteins and thus has high prediction quality.

Other popular tools offering variant effect/consequence prediction include:

- [SnpEff](http://pcingola.github.io/SnpEff/)
- [VEP (Variant Effect Predictor)](https://www.ensembl.org/info/docs/tools/vep/index.html)

Mehari offers HGVS predictions that aim to mirror VariantValidator, the gold standard for HGVS variant descriptions, and consequence predictions compatible with VEP.
Further, it is written in the Rust programming language and can be used as a library for users' Rust software.

## Usage
To annotate variant consequences, gnomAD frequencies and clinVar information for sequence variants:
```sh
    mehari annotate seqvars \
      --transcripts resources/transcript_db \
      --frequencies resources/gnomad_db \
      --clinvar resources/clinvar_db \
      --input input.vcf \
      --output output.vcf
```
The corresponding database builds can be obtained from:
 - transcripts:…

---
repo: "pbeerli/migrate-5.0.7"
name: "migrate-5.0.7"
description: "MIgrate repository: current code, updated frequently"
readmeQualityOk: true
url: "https://github.com/pbeerli/migrate-5.0.7"
homepage: "https://peterbeerli.com/software/migrate/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["bayesian-inference", "population-genetics", "population-genomics", "coalescence", "coalescent-theory"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-04T19:49:04Z"
lastCommitAt: "2026-11-17T14:05:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 86
maintainers: ["pbeerli"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/977706740/4c01f797-9641-482b-84d2-8d2b29295d07"
---

# Migrate 6.1.93

Released November 2026

Migrate estimates effective population sizes, migration rates, divergence
times and related parameters of n populations from genetic data. It uses
coalescent theory and integrates over genealogies and mutation histories
with Markov chain Monte Carlo (Bayesian inference). Results are written to a
text outfile and to a PDF report with tables, posterior histograms and
skyline plots; the PDF is tagged for accessibility (PDF/UA-1).

Migrate 6.1 is the production line. Migrate 7 (repository migrate-7-codex)
is the modernized development line with the same input files, parmfile
options and models; bug fixes are applied to both.

Content
-------
- Quick installation (source code)
- Data types
- Models and analyses
- Output files
- Running the examples
- Parallel runs (MPI)
- Converting data
- History, documentation, guidance
- Contact
- License

Quick installation (source code)
--------------------------------
Requirements: a C compiler, autoconf, automake and pkg-config; optional
OpenMPI (for migrate-n-mpi). zlib and libharu (PDF output) are bundled and
used when no system version is found.

    git clone…

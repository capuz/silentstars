---
repo: "QSMxT/QSMxT"
name: "QSMxT"
description: "QSMxT is an end-to-end software toolbox for Quantitative Susceptibility Mapping. "
readmeQualityOk: true
url: "https://github.com/QSMxT/QSMxT"
homepage: "https://qsmxt.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 70
forks: 19
openIssues: 27
closedIssues: 134
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2020-12-21T00:24:36Z"
lastCommitAt: "2026-10-19T09:14:11Z"
lastReleaseAt: "2021-10-08T00:10:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 53
maintainers: ["astewartau"]
openGraphImageUrl: "https://opengraph.githubassets.com/348d4340f85327ae00529aa964a3996abeb3b136e88f5496ce54314d917cc4ac/QSMxT/QSMxT"
discussionCount: 19
---

# QSMxT

A fast, BIDS-native Quantitative Susceptibility Mapping (QSM) pipeline and
interactive TUI, built in Rust. QSMxT takes you from raw scanner DICOMs to
quantitative susceptibility maps with a single self-contained binary — no
environment to manage, no toolbox sprawl.

## 📖 Documentation: **<https://qsmxt.github.io/QSMxT/>**

The website has everything: installation, guides, the command reference, and
algorithm details. This README is just a quick pointer.

## Highlights

- **End-to-end pipeline** — masking, phase unwrapping, echo combination,
  background field removal, dipole inversion, and referencing.
- **Interactive TUI** — convert, configure, and run from the terminal; it also
  shows the equivalent CLI command as you go.
- **DICOM → BIDS** — built-in conversion with automatic series classification.
- **50+ algorithms** — five masking presets, 10 background-field removers, 20
  classical and 11 deep-learning dipole inversions, 8 χ-separation methods, and
  multi-orientation COSMOS / STI.
- **More than χ** — CLEAR-SWI, SMWI, T2\* / R2\* and R2 / R2′ maps, plus
  SynthSeg segmentation with per-structure statistics.
- **Methods text** — every run writes a methods…

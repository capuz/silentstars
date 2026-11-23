---
repo: "dapogon/cellcoal"
name: "cellcoal"
description: "CellCoal: coalescent simulation of single-cell NGS genotypes"
readmeQualityOk: true
url: "https://github.com/dapogon/cellcoal"
language: "C"
languages: ["C"]
languagePcts: [81]
stars: 15
forks: 4
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2018-08-03T11:56:24Z"
lastCommitAt: "2026-11-23T10:29:13Z"
lastReleaseAt: "2026-11-15T17:35:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 96
undervaluedScore: 78
maintainers: ["claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c08e3298bbc193603d2dac760bb7dc08ddedb26fbaa4ccd6bce06b4458ea105/dapogon/cellcoal"
discussionCount: 1
---

# CellCoal 2

**Coalescent simulation of single-cell sequencing data: from the genealogy of a tumour to the reads of every cell.**

&copy;2020 David Posada, University of Vigo, Spain <http://darwin.uvigo.es>

## What CellCoal does

CellCoal simulates the somatic evolution of a sample of cells and the single-cell sequencing experiment that observes them. It generates a coalescent genealogy of the cells (no recombination; a growing or birth-death population, or a tree you provide), together with a healthy outgroup cell, and evolves their diploid genomes along it with:

- **point mutations**: binary (0/1) or DNA data, infinite- and finite-sites models (JC, HKY, GTR), rate variation among sites and lineages, germline SNPs, and the 30 COSMIC mutational signatures or your own (`--signature-file`);
- **copy-number events**: point deletions and copy-neutral LOH, and **losses and gains of chromosome segments** (up to 4 copies per site by default) that happen on the branches of the tree, in random order together with the SNVs, so that the order of events matters. The phase of every copy is known and can be written out.

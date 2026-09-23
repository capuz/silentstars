---
repo: "Fraternalilab/POPScomp"
name: "POPScomp"
description: "Solvent Accessible Surface Areas of Biomolecules and their Complexes"
readmeQualityOk: true
url: "https://github.com/Fraternalilab/POPScomp"
homepage: "https://github.com/Fraternalilab/POPScomp"
language: "C"
languages: ["C", "Makefile"]
languagePcts: [57, 21]
topics: ["protein", "dna", "rna", "structure", "complex", "solvent-accessible-surface-area", "biomolecule", "solvation"]
stars: 19
forks: 4
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2019-04-20T21:13:18Z"
lastCommitAt: "2026-09-23T08:45:52Z"
lastReleaseAt: "2026-06-06T17:56:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 43
maintainers: ["jkleinj"]
openGraphImageUrl: "https://opengraph.githubassets.com/211ac17f2d5c2444cd7bfeadad1d16bdd2c438b1d34387c4343643c6a4ebb786/Fraternalilab/POPScomp"
---

## POPScomp: Solvent Accessible Surface Areas of Biomolecules and their Complexes

The POPScomp program computes the Solvent Accessible Surface Area (SASA)
of a given PDB structure. If the structure is a complex, *i.e.* composed of more than one chain
containing protein or RNA/DNA, POPScomp computes additionally the SASA buried between chains.
The name 'POPS' is derived from **P**arameter **OP**timised **S**urfaces, because its parametrisation
was performed by regression against a large set of protein and RNA/DNA structures.
Details of those routines are explained in the
[published papers](https://github.com/Fraternalilab/POPScomp/#References).
(Note: The POPScomp release in this repository combines both methods originally published as POPS and POPSCOMP).

## popscomp.org : an easy-to-rember URL
* [popscomp.org](http://popscomp.org) points to this GitHub repository. 

## Installation
There are 2 ways to (install and) use POPScomp,
please refer to the [Wiki](https://github.com/Fraternalilab/POPScomp/wiki) for details:

1. Download the latest [POPScomp *Docker* image](https://hub.docker.com/repository/docker/jkleinj150999/popscomp)
  and run the *Shiny* App on your local computer.…

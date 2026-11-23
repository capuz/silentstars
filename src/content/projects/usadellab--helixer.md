---
repo: "usadellab/Helixer"
name: "Helixer"
description: "Using Deep Learning to predict gene annotations"
readmeQualityOk: true
url: "https://github.com/usadellab/Helixer"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 316
forks: 37
openIssues: 27
closedIssues: 146
watchers: 14
contributors: 11
recentReleases: 0
createdAt: "2018-10-16T14:55:27Z"
lastCommitAt: "2026-11-23T10:24:35Z"
lastReleaseAt: "2026-07-01T13:48:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 32
maintainers: ["felicitas215"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e75e72c811293ecfc5a8f1aef20fe455f2951ae09fea8f3b45e43f21f81bdc/usadellab/Helixer"
---

Helixer is a tool for structural genome annotation. It utilizes Deep
Neural Networks and a Hidden Markov Model to directly provide primary
gene models in a gff3 file. It’s performant and applicable to a wide
variety of genomes. However, users should be aware that this software
is under ongoing development and improvements.

## Changelog Version 0.3.8 (short)
_please check out the releases for the full changelog_
- requires HelixerPost v0.4.0 (rebuild it) and GeenuFF v0.4.0; **for SECURITY** upgrade pip first
([manual installation](https://github.com/usadellab/Helixer/blob/HEAD/docs/manual_install.md#upgrade-pip-first)), as pip before 26.2.2 trusts
the compromised eMudhra emSign root certificate
- changed predictions: HelixerPost v0.4.0 fixes an HMM bug and raises the donor penalty and
donor/acceptor weight defaults, giving ~60-70 % fewer CDS pieces of 1 bp and a higher exon,
intron and gene F1, see the [performance comparison](https://github.com/usadellab/Helixer/blob/HEAD/docs/performance.md); the neural
network predictions and models are unchanged
- the 3-step workflow is 2.2 to 3.7 times faster (multithreaded post-processing, faster
`fasta2h5.py` and prediction HDF5 file…

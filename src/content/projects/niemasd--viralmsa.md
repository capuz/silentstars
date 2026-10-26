---
repo: "niemasd/ViralMSA"
name: "ViralMSA"
description: "Reference-guided multiple sequence alignment of viral genomes"
readmeQualityOk: true
url: "https://github.com/niemasd/ViralMSA"
homepage: "https://niema-lab.github.io/ViralWasm-Epi"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 72
forks: 11
openIssues: 3
closedIssues: 41
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-04-17T22:09:50Z"
lastCommitAt: "2026-10-26T18:06:17Z"
lastReleaseAt: "2020-10-05T16:43:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 43
maintainers: ["niemasd"]
openGraphImageUrl: "https://opengraph.githubassets.com/5770a6293eae879f1eac4b8e23241e06667c222b5aa6c20f8af3053cb6eee19c/niemasd/ViralMSA"
---

# ViralMSA
ViralMSA is a tool to perform reference-guided multiple sequence alignment of viral genomes. ViralMSA wraps around existing read mapping tools such as [Minimap2](https://doi.org/10.1093/bioinformatics/bty191), and as such, it can natively improve as methods of read mapping evolve. Importantly, this approach scales linearly with the number of sequences and can be massively parallelized. However, insertions with respect to the reference genome will be thrown away. This is fair for many viral analyses (e.g. phylogenetic inference, as insertions with respect to the reference likely lack phylogenetic information), but it may not be appropriate for all contexts.

To run ViralMSA, you can either install the command-line tool (instructions below), or you can use the [ViralWasm-Epi web app](https://niema-lab.github.io/ViralWasm-Epi) created by my student, [Daniel Ji](https://www.linkedin.com/in/danielji26), which is a complete WebAssembly port of ViralMSA and other downstream analyses, e.g. phylogenetic inference and molecular clustering, which runs fully client-side in your own web browser. The web app works well for reasonably small datasets (e.g. a few thousand full genomes),…

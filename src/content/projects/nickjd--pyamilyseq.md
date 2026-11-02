---
repo: "NickJD/PyamilySeq"
name: "PyamilySeq"
description: "PyamilySeq is a Python-based tool for clustering gene sequences into groups (families) based on sequence similarity identified by tools such as CD-HIT, DIAMOND or MMseqs2."
readmeQualityOk: true
url: "https://github.com/NickJD/PyamilySeq"
language: "HTML"
languages: ["HTML"]
languagePcts: [87]
stars: 5
forks: 1
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-04-27T19:17:38Z"
lastCommitAt: "2026-11-02T11:36:03Z"
lastReleaseAt: "2024-09-30T02:21:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 46
maintainers: ["NickJD"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5836dcf17f3b0d0164c7d39855a9435eb5b4b57aa623d89be6ffe9f6c4505df/NickJD/PyamilySeq"
---

# PyamilySeq

PyamilySeq builds gene-family and pangenome summaries from CD-HIT, MMseqs2,
BLAST, or DIAMOND clustering results. It supports species- and genus-level
prevalence groups, staged reclustering, sequence export and alignment, visual
exploration, input validation, and genomic-location analysis.

PyamilySeq extends the gene-family workflow developed for StORF-Reporter. If
you use it in published work, please cite the
[PyamilySeq publication](https://doi.org/10.1093/nargab/lqaf198).

## Core Guarantees

PyamilySeq uses one canonical family ledger for every downstream output.

## Features
- **End-to-End**: PyamilySeq can take a directory of GFF+FASTA files, run CD-HIT for clustering and process the results.
- **Clustering input**: Supports input from CD-HIT formatted files as well as CSV and TSV node-edge lists (MMseqs2 and -outfmt 6 from BLAST/DIAMOND).
- **Reclustering**: Allows for the addition of new sequences post-initial clustering - Ensures continuity of contemporary clustering results and highlights impact of novel gene predictions.
- **'Genus Mode'**: Unlike other 'pangenome' tools, PyamilySeq can identify gene groups found across multiple genera as unique entities…

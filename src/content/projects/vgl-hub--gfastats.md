---
repo: "vgl-hub/gfastats"
name: "gfastats"
description: "A single fast and exhaustive tool for summary statistics and simultaneous *fa* (fasta, fastq, gfa [.gz]) genome assembly file manipulation."
readmeQualityOk: true
url: "https://github.com/vgl-hub/gfastats"
language: "C++"
languages: ["C++", "Scilab"]
languagePcts: [49, 47]
stars: 131
forks: 10
openIssues: 2
closedIssues: 26
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2021-12-20T19:00:30Z"
lastCommitAt: "2026-11-17T14:43:19Z"
lastReleaseAt: "2022-09-07T11:58:12Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 24
maintainers: ["gf777"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/440277447/4f3e8b13-c215-4c23-ab8b-5b2c57bb97b9"
---

# gfastats

The swiss army knife for genome assembly.

**gfastats** is a single fast and exhaustive tool for **summary statistics** and simultaneous \*fa\* (fasta, fastq, gfa [.gz]) genome assembly file **manipulation**. **gfastats** also allows seamless fasta<>fastq<>gfa[.gz] conversion. It has been tested in genomes even >100Gbp.

Typical fast\* metrics include:

- scaffold, contig and gap size
- number of scaffolds, contigs and gaps
- total length of scaffolds, contigs and gaps
- scaffold, contig, gap N50 and statistics (full N\*/NG\* statistics with the `--nstar-report` flag)
- area under the curve (AuN/AuNG) values for scaffolds, contigs and gaps
- average scaffold, contig, gap size
- largest scaffold, contig and gap
- base composition and GC content
- soft-masked base counts (lower case bases)

Typical gfa metrics include (see also note below when evaluating gfa):

- Number of nodes and edges
- Average degree
- Number of connected components, and length of the largets connected component
- Number of dead ends
- Number of disconnected components, and their total length
- Number of bubbles

Metrics for each scaffold/contig can be generated with the `--seq-report` flag.

`Bed`…

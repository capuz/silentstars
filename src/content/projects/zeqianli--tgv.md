---
repo: "zeqianli/tgv"
name: "tgv"
description: "Genome viewer for you and your agents."
readmeQualityOk: true
url: "https://github.com/zeqianli/tgv"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bioinformatics", "genome-viewer", "ratatui", "rust", "tui"]
stars: 487
forks: 25
openIssues: 9
closedIssues: 24
watchers: 6
contributors: 7
recentReleases: 1
createdAt: "2025-03-20T19:31:46Z"
lastCommitAt: "2026-10-29T21:24:17Z"
lastReleaseAt: "2026-10-10T03:34:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 85
undervaluedScore: 28
maintainers: ["zeqianli", "alexg9010", "sahuno"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/952131779/c2962e1a-5325-4d9e-b5ac-ce0cb4f1c5df"
discussionCount: 5
---

# tgv: Genome viewer for you and your agents

https://github.com/user-attachments/assets/8b630f0e-6bcc-4aff-88f3-9e2465550f32

### Explore genomes everywhere.

tgv (Terminal Genome Viewer) is a fast genome viewer running directly in the terminal. Your SSH session is no longer a black box.
- Navigate genomes with vim-style commands (but the mouse works too).
- Rich file format support: BAM, VCF, BCF, BED, bigBed; object storage (s3); and any UCSC reference genome.
- tgv GUI coming soon.

### Designed for human-agent collaboration.

Agents can inspect the dataset and navigate the viewer while explaining their analysis.

### Mise-en-place so that your agents can cook.

tgv organizes messy omics data to a [performant data engine](https://pola.rs/posts/release-polars-2/) that's fully exposed to agents through MCP. A multi-omics analysis takes a few lines of SQL queries. 
- No more glue scripts chaining `samtools`, `bcftools`, and `awk`. 
- No more off-by-one bugs from mixing 0-based and 1-based tools. 
- No more wasted tokens.

## [**Installation**](https://github.com/zeqianli/tgv/blob/HEAD/doc/src/installation.md)

> [!NOTE]
> tgv is in early development. Please report bugs and we…

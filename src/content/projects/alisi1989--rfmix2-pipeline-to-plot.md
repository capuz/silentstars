---
repo: "alisi1989/RFMIX2-Pipeline-to-plot"
name: "RFMIX2-Pipeline-to-plot"
description: "Here we present a method to plot the outputs of RFMIX version 2"
url: "https://github.com/alisi1989/RFMIX2-Pipeline-to-plot"
language: "Python"
languages: ["Python", "q"]
languagePcts: [73, 27]
stars: 32
forks: 7
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-09-13T18:30:40Z"
lastCommitAt: "2026-07-01T07:04:43Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 28
maintainers: ["alisi1989"]
openGraphImageUrl: "https://opengraph.githubassets.com/220b99bc2a8b3cedd84ee3478d11c196706afb1acae42ddfee07439364c49996/alisi1989/RFMIX2-Pipeline-to-plot"
---

# AncestryGrapher Toolkit

Authors: Alessandro Lisi and Michael C. Campbell  
Human Evolutionary Genomics Lab, Department of Biological Sciences, Human and Evolutionary Biology section, University of Southern California

AncestryGrapher is a command-line toolkit for converting RFMix v2 local and global ancestry output into publication-ready ancestry visualizations. The toolkit contains two companion workflows:

- **GAP, Global Ancestry Painting:** summarizes and plots genome-wide ancestry proportions from RFMix `.rfmix.Q` files.
- **LAP, Local Ancestry Painting:** paints local ancestry tracts along human autosomes from RFMix `.msp.tsv` files.

The current LAP workflow also supports **FLARE ancestry VCFs** (`.anc.vcf` / `.anc.vcf.gz`) for SNP-aware visualization and variant-level reporting. When a user supplies a list of variants, LAP can draw haplotype-resolved SNP markers on the karyotype and write a LAP-VAR report describing the ancestry of the haplotype carrying each allele.

The repository keeps the original RFMix-oriented structure:

```text
RFMIX2-Pipeline-to-plot/
├── GAP/
│   └── Scripts/
│       ├── Gap_v2.py
│       ├── GAP_Plot.py
│       └── GAP.py                 #…

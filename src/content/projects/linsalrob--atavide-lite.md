---
repo: "linsalrob/atavide_lite"
name: "atavide_lite"
description: "A simpler version of atavide that relies only on slurm or PBS scripts. Some of the settings are specific for our compute resources. Read the docs at: "
readmeQualityOk: true
url: "https://github.com/linsalrob/atavide_lite"
homepage: "https://atavide-lite.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [52, 41]
topics: ["bioinformatics", "metagenomics", "metagenomics-analysis", "metagenomics-bioinformatics", "metagenomics-pipeline", "metagenomics-toolkit", "microbiome", "microbiome-analysis-pipelines", "microbiome-workflow"]
stars: 5
forks: 4
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-07-27T13:01:25Z"
lastCommitAt: "2026-10-25T22:11:49Z"
lastReleaseAt: "2026-01-28T05:11:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 95
maintainers: ["linsalrob", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d77eaa493a00a60932d22e85648185f704d693817f67f835822ea7ec906881c0/linsalrob/atavide_lite"
---

# atavide lite

Atavide lite is a simple, yet complete workflow for metagenomics data analysis, including QC/QA, optional host 
removal, annotation, assembly and cross-assembly, and individual read based annotations. 

Contributions are welcome. See [CONTRIBUTING.md](https://github.com/linsalrob/atavide_lite/blob/HEAD/CONTRIBUTING.md) for an inclusive guide to reporting issues,
adding support for another HPC cluster, using agentic AI carefully, and opening a pull request.

The motivation is based on the more complete [atavide pipeline](https://github.com/linsalrob/atavide) we built that 
uses snakemake as a workflow manager. We found that solution to be effective, but routine failure at different steps
was hard to debug and follow. In addition, as we move between compute resources, we need to adjust the time, resources, and 
memory requirements for each step, and that was not easy to do with snakemake.

Our goal is to provide a simple, easy to use, and easy to understand pipeline that can be used for metagenomics data 
analysis, but one that is broken down into individual steps that can be run one at a time, and that can be easily
modified to suit your compute resources. 

Our…

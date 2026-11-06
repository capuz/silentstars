---
repo: "zstephens/telogator2"
name: "telogator2"
description: "A method for measuring allele-specific telomere length and characterizing telomere variant repeat sequences from long reads."
readmeQualityOk: true
url: "https://github.com/zstephens/telogator2"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["longreads", "nanopore", "pacbio", "telomere", "telomeres"]
stars: 38
forks: 6
openIssues: 4
closedIssues: 26
watchers: 2
contributors: 5
recentReleases: 3
createdAt: "2022-11-04T14:51:42Z"
lastCommitAt: "2026-11-06T02:43:24Z"
lastReleaseAt: "2026-11-03T21:01:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 62
maintainers: ["zstephens", "DylanCosto", "ffavero"]
openGraphImageUrl: "https://opengraph.githubassets.com/831bd65fc78ce47c23073a824bd79f94d8f4131ad8a3c9e5bca476ebb4a10cd5/zstephens/telogator2"
---

# Telogator2

A method for measuring allele-specific TL and characterizing telomere variant repeat (TVR) sequences from long reads.

If this software has been useful for your work, please cite us at:

Stephens, Z., & Kocher, J. P. (2024). Characterization of telomere variant repeats using long reads enables allele-specific telomere length estimation. *BMC bioinformatics*, 25(1), 194.

https://link.springer.com/article/10.1186/s12859-024-05807-5

## Installation (conda env):

Telogator2 dependencies can be easily installed via conda:

```bash
git clone https://github.com/zstephens/telogator2.git && cd telogator2/

# create & activate conda environment
conda env create -f conda_env_telogator2.yaml
conda activate telogator2

# run test data
python telogator2.py -i test_data/hg002-ont-1p.fa.gz \ 
                     -o results/ \ 
                     -r ont
```

## Installation (pip):

```bash
python3.12 -m venv venv
source activate venv/bin/activate
pip install git+https://github.com/zstephens/telogator2.git@v2.2.2

# run test data
telogator2 -i test_data/hg002-ont-1p.fa.gz \ 
           -o results/ \ 
           -r ont \ 
           --minimap2 /path/to/minimap2
```

## Notes:

An…

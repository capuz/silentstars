---
repo: "Popov-Lab-UNC/DELi"
name: "DELi"
description: "A package for calling DEL selections and running data analysis on the results"
readmeQualityOk: true
url: "https://github.com/Popov-Lab-UNC/DELi"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["cheminformatics", "dna-encoded-library"]
stars: 17
forks: 7
openIssues: 15
closedIssues: 93
watchers: 2
contributors: 5
recentReleases: 2
createdAt: "2024-10-01T18:07:18Z"
lastCommitAt: "2026-07-07T06:38:01Z"
lastReleaseAt: "2026-07-07T05:48:25Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 75
undervaluedScore: 47
maintainers: ["Brandon-Cole", "jimmyjbling", "jasonlin90125"]
openGraphImageUrl: "https://opengraph.githubassets.com/cca3009a494662880212c5aee770e27ab056f470e6c8afca594f50c184cf621a/Popov-Lab-UNC/DELi"
---

# DELi

DELi (DNA-Encoded Library informatics) is a Python library for working with DELs.
It incorporates the whole pipeline post base-calling/sequencing including:
1. Barcode/DEL ID calling and cube file generation
2. Enumeration of chemical structures from building blocks
3. Disython and Monosynthon analysis
4. Generation of machine learning datasets and baseline models from DEL data
5. Various digestible reports to understand the DEL results

You can read the detailed documentation [here](https://dna-encoded-library-informatics-deli.readthedocs.io/en/latest/).

## Installing DELi
You can install DELi using pip on Python 3.13 or newer:

```shell
pip install deli-chem
```

Optional graph neural network (GNN) analysis dependencies:

```shell
pip install 'deli-chem[ml]'
```

## Getting Started

You can use DELi as a command line tool (see the [docs](https://dna-encoded-library-informatics-deli.readthedocs.io/en/latest/cli_docs.html) for more details) or as a python package
```python
import deli
print(deli.__version__)
```
> [!NOTE]
> installing DELi uses `deli-chem` but to use DELi after install make sure to use `deli` and that you have no other packages named `deli`

For an…

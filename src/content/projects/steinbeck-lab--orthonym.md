---
repo: "Steinbeck-Lab/Orthonym"
name: "Orthonym"
description: "Deterministic structure-to-IUPAC-name generator. Names are checked by an OPSIN round trip, the engine declines rather than guess, and --provenance says how each name was checked."
readmeQualityOk: true
url: "https://github.com/Steinbeck-Lab/Orthonym"
homepage: "https://orthonym.decimer.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["chemical-names", "cheminformatics", "chemistry", "iupac", "iupac-nomenclature", "nomenclature", "opsin", "preferred-iupac-name", "python", "rdkit"]
stars: 14
forks: 3
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-29T16:13:20Z"
lastCommitAt: "2026-10-29T10:36:57Z"
lastReleaseAt: "2026-10-23T09:39:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 59
maintainers: ["Kohulan"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be1d76d5a873d479e448a9ffe3da6218fac209dbe79f86b1a03217086ed4d9b/Steinbeck-Lab/Orthonym"
discussionCount: 1
---

**A SMILES string goes in. A verified IUPAC name comes out, or a clear "no". Never a guess.**

## Quick start

```bash
pip install orthonym                      # or: conda install -c conda-forge orthonym
orthonym --fetch-jars                     # one time: downloads and checks the OPSIN and centres jars
```

You need Python 3.10+ and a Java 11+ runtime on your `PATH` (the conda package brings Java with it).
More in [Install](https://github.com/Steinbeck-Lab/Orthonym/blob/HEAD/guide/start/install.md).

```python
from orthonym import name_compound

name_compound("CCO")                          # 'ethanol'
name_compound("CC(=O)Oc1ccccc1C(=O)O")        # '2-(acetyloxy)benzoic acid'
name_compound("Cn1cnc2c1c(=O)n(C)c(=O)n2C")   # '1,3,7-trimethyl-3,7-dihydro-1H-purine-2,6-dione'
name_compound("C/C=C/C")                      # '(2E)-but-2-ene'
name_compound("C[C@H](https://github.com/Steinbeck-Lab/Orthonym/blob/HEAD/O)CC")                  # '(2S)-butan-2-ol'
```

`name_compound` also takes an RDKit `Chem.Mol`, for example a molecule read from an SDF file.

```bash
orthonym "CCO"                                # ethanol
orthonym "CC(=O)Oc1ccccc1C(=O)O" --provenance # the name plus its…

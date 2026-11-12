---
repo: "jeremymcrae/bgen"
name: "bgen"
description: "fast bgen parser for python"
readmeQualityOk: true
url: "https://github.com/jeremymcrae/bgen"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [58, 32]
stars: 18
forks: 5
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-04-27T20:51:17Z"
lastCommitAt: "2026-11-12T05:38:21Z"
lastReleaseAt: "2020-06-03T19:00:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 69
maintainers: ["jeremymcrae"]
openGraphImageUrl: "https://opengraph.githubassets.com/03440b18a0d5d295884c3f175ca92f91f0c0e16d3050b148c34b0f3ec6b833af/jeremymcrae/bgen"
---

### Another bgen parser

This is a package for reading and writing [bgen files](https://www.well.ox.ac.uk/~gav/bgen_format).

This package uses cython to wrap c++ code for parsing bgen files. It can parse
genotypes from 500,000 individuals at ~800 variants per second within a single
python process (~1.2 billion probabilities per second with a 3GHz CPU).

This has been optimized for UKBiobank bgen files (i.e. bgen version 1.2 with
zlib compressed 8-bit genotype probabilities, but the other bgen versions and
zstd compression have also been tested using example bgen files).

#### Install
`pip install bgen`

#### Usage
```python
from bgen import BgenReader, BgenWriter

bfile = BgenReader(BGEN_PATH)
rsids = bfile.rsids()

# select a variant by indexing
var = bfile[1000]

# pull out genotype probabilities
probs = var.probabilities  # returns 2D numpy array
dosage = var.minor_allele_dosage  # returns 1D numpy array for biallelic variant

# iterate through every variant in the file
with BgenReader(BGEN_PATH, delay_parsing=True) as bfile:
  for var in bfile:
      dosage = var.minor_allele_dosage

# get all variants in a genomic region
variants = bfile.fetch('21', 10000, 5000000)

# or for…

---
repo: "bigbio/qpx"
name: "qpx"
description: "qpx (Quantitative Proteomics eXchange) format (aka quantms.io) a format to capture a full proteomics experiment"
readmeQualityOk: true
url: "https://github.com/bigbio/qpx"
homepage: "https://qpx.quantms.org"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 27
forks: 9
openIssues: 8
closedIssues: 104
watchers: 8
contributors: 18
recentReleases: 7
createdAt: "2023-04-26T09:39:02Z"
lastCommitAt: "2026-10-24T08:19:57Z"
lastReleaseAt: "2026-10-13T16:02:39Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 70
maintainers: ["Shen-YuFei", "ypriverol", "daichengxin"]
openGraphImageUrl: "https://opengraph.githubassets.com/90aaceed52a85ae13930c175e1bcbcefb328a63582604e0a714ed33dfff4adbc/bigbio/qpx"
---

# QPX

A Python package for working with mass spectrometry data in the QPX format.

## Features

- **Convert** data from OpenMS (native QPX and consensusXML), DIA-NN, MaxQuant, Spectronaut, FragPipe, CPTAC CDAP (`.psm`), mzIdentML, and SDRF to QPX Parquet format
- **Transform** QPX data: gene mapping, protein quantification (DirectLFQ, MaxLFQ, iBAQ, TopN, …), accession normalization, metadata updates
- **Query** datasets with SQL, filter rows, or preview with `head`
- **Inspect** dataset summaries, Arrow schemas, and Parquet metadata
- **Validate** datasets against the canonical QPX schema
- **Ontology** management for PSI-MS and PRIDE CV terms

### MuData Export (quantification results only)

QPX datasets can be exported to [MuData](https://mudata.readthedocs.io/) — the multi-modal container from the scverse ecosystem. This export is available **only for quantification results** (precursor/protein intensities and, optionally, protein expression and differential expression results).

```python
from qpx import Dataset
from qpx.mudata import build_mudata

ds = Dataset("path/to/PXD000000/")
mdata = build_mudata(ds)  # auto-detects label & available modalities…

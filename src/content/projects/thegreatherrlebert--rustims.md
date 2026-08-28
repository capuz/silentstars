---
repo: "theGreatHerrLebert/rustims"
name: "rustims"
description: "A Framework for IMS-MS Raw Data Processing written in Rust and Python."
readmeQualityOk: true
url: "https://github.com/theGreatHerrLebert/rustims"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [57, 42]
topics: ["bottom-up", "data-independent-acquisition", "high-throughput", "ion-mobility-spectrometry", "omics", "proteomics", "pyo3", "python", "rust-lang", "timstof"]
stars: 23
forks: 8
openIssues: 4
closedIssues: 17
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-09-08T09:05:28Z"
lastCommitAt: "2026-08-28T15:31:25Z"
lastReleaseAt: "2024-06-01T15:29:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 63
maintainers: ["theGreatHerrLebert", "singjc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/688863182/9a33d105-a11e-41e9-bab7-57072829e7ac"
---

# rustims

</p>

</p>

  <strong>High-performance framework for Ion-Mobility Spectrometry data processing</strong>
</p>

---

**rustims** is an open-source framework for processing raw data from Ion-Mobility Spectrometry (IMS) in proteomics mass spectrometry. Built with [Rust](https://www.rust-lang.org/) for performance and exposed to [Python](https://www.python.org/) via [PyO3](https://pyo3.rs/), it combines the speed of compiled code with the flexibility of Python workflows.

## Highlights

- **DDA & DIA Support** — Full pipelines for both Data-Dependent and Data-Independent Acquisition
- **TimSim** — Generate synthetic PASEF-like datasets for method development and benchmarking
- **Deep Learning Integration** — CCS and retention time prediction models
- **Rust Performance** — Core algorithms implemented in Rust for maximum throughput
- **Python API** — Easy integration with existing scientific Python workflows

## Quick Start

```bash
# Install what you need — dependencies are pulled in automatically (Python >=3.11)
pip install imspy-search        # DDA/DIA database search (includes core + predictors)
pip install imspy-simulation    # TimSim synthetic data generation
pip…

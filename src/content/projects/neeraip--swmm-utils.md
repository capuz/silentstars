---
repo: "neeraip/swmm-utils"
name: "swmm-utils"
description: "Utilities for interpreting EPA SWMM input (.inp) and report (.rpt) files."
readmeQualityOk: true
url: "https://github.com/neeraip/swmm-utils"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-31T21:17:20Z"
lastCommitAt: "2026-10-27T12:39:19Z"
lastReleaseAt: "2026-01-06T04:48:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 54
maintainers: ["ElangoThevar"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c16b36e599acfe52379da74baf373d1e77a316ca331ca45b206b94993edfa36/neeraip/swmm-utils"
---

# SWMM Utils

Utilities for interpreting EPA SWMM input (.inp), report (.rpt), and output (.out) files.

## Overview

This project provides a comprehensive toolkit for working with EPA SWMM (Storm Water Management Model) files:

- **[Input Files (.inp)](https://github.com/neeraip/swmm-utils/blob/HEAD/docs/SWMM_INPUT_FILE.md)** - Load, modify, and save SWMM models with typed properties. Support for .inp, JSON, and Parquet formats.
- **[Report Files (.rpt)](https://github.com/neeraip/swmm-utils/blob/HEAD/docs/SWMM_REPORT_FILE.md)** - Parse simulation results and extract all major sections (node depths, link flows, pumping, storage, LID performance, etc.)
- **[Output Files (.out)](https://github.com/neeraip/swmm-utils/blob/HEAD/docs/SWMM_OUTPUT_FILE.md)** - Extract binary SWMM output data with optional time series loading. Export to JSON or Parquet.

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/neeraip/swmm-utils.git
cd swmm-utils

# Install the package
pip install -e .
```

### Basic Usage

For detailed examples and API documentation for each file type, see:

- **[Input Files (.inp)…

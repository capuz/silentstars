---
repo: "shiyunliu-battery/Battery-Data-Steward"
name: "Battery-Data-Steward"
description: "Python library and CLI for converting battery cycler exports into clean, analysis-ready CSV and Parquet files with intake QA."
readmeQualityOk: true
url: "https://github.com/shiyunliu-battery/Battery-Data-Steward"
homepage: "http://bds.energy/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-26T21:47:10Z"
lastCommitAt: "2026-11-26T23:39:03Z"
lastReleaseAt: "2026-11-15T01:04:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 45
maintainers: ["shiyunliu-battery", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1250682410/ee5fc000-36f7-49bc-b595-eddddbe545c5"
---

# Battery Data Steward

**Inspect. Validate. Trace. Reuse.**

Evidence-aware battery data preprocessing and quality assurance.

Battery Data Steward (BDS) is an open-source Python toolkit that helps researchers
inspect raw battery data, identify quality risks, track preprocessing decisions,
and prepare reviewable datasets for downstream analysis.

BDS detects supported formats, explains column and unit mappings, identifies
time-axis and current-sign risks, reports unsupported fields, and converts
supported time-series and EIS data to CSV or Parquet with review reports.

```bash
bds inspect raw_export.csv
bds inspect unknown_headerless.csv --format json  # Candidate columns only; not applied
```

Inspection is local and non-mutating. It does not modify the source file,
insert missing samples, or silently change current values.

The package is vendor-neutral and independent. It is not certified by any cycler
vendor or standards body. Adapter support describes behavior implemented and
validated by this project; users should verify representative exports from their
own cycler software before using the package in automated production workflows.

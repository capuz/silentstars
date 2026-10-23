---
repo: "DailyDana/process-capability-analyzer"
name: "process-capability-analyzer"
description: "SPC, process capability and Gage R&R for manufacturing: X-bar/R, X-bar/S and I-MR charts with Western Electric and Nelson rules, Cp/Cpk vs Pp/Ppk kept distinct, crossed Gage R&R (ANOVA and AIAG Average & Range). Verified against published results."
readmeQualityOk: true
url: "https://github.com/DailyDana/process-capability-analyzer"
homepage: "https://spc-analyzer.streamlit.app/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["control-charts", "cpk", "manufacturing", "process-capability", "python", "quality-control", "six-sigma", "spc", "statistical-process-control", "streamlit"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2026-09-01T17:21:23Z"
lastCommitAt: "2026-10-22T22:28:36Z"
lastReleaseAt: "2026-10-13T15:44:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 26
maintainers: ["DailyDana"]
openGraphImageUrl: "https://opengraph.githubassets.com/45c2e923c72e62f7fd8fd93a4fadfc563eab4f1871c756cd9003f1ec56addeba/DailyDana/process-capability-analyzer"
---

# SPC / Process Capability Analyzer

**[Try it live -> spc-analyzer.streamlit.app](https://spc-analyzer.streamlit.app/)** — no install. The Gage R&R
page opens on the AIAG reference study and reproduces Minitab's published results
without any input.

Free, open-source statistics for the three questions a supplier answers before
shipping a new part: **is the gauge good enough** (Type-1 study and Gage R&R),
**is the process stable** (SPC charts), and **is it capable** (Cp/Cpk vs Pp/Ppk). Every method is
checked against published results, and every output is a **defensible
engineering statement**, not just a chart:

> *"Cpk = 1.09 from within-subgroup sigma, but the individuals chart shows an
> N1 outlier and an N2 run — this Cpk is not trustworthy evidence of future
> performance until the process is stabilized."*

It is intended for quality/manufacturing/process engineers who need SPC charts,
Cp/Cpk vs Pp/Ppk analysis, stability assessment, and audit-ready reports from
production measurement data.

## Key features

- **Type-1 gauge study (Cg/Cgk):** the Bosch Procedure 1 / VDA 5 study of the
  gauge alone, with the bias t-test, resolution check, confidence intervals for
  Cg and…

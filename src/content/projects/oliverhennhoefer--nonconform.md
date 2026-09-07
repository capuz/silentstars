---
repo: "OliverHennhoefer/nonconform"
name: "nonconform"
description: "Conformal Anomaly Detection & Change-Point Detection"
readmeQualityOk: true
url: "https://github.com/OliverHennhoefer/nonconform"
homepage: "https://oliverhennhoefer.github.io/nonconform/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["conformal-anomaly-detection", "false-discovery-rate", "uncertainty-quantification", "anomaly-detection", "outlier-detection", "change-point-detection", "exchangeability", "martingale"]
stars: 57
forks: 8
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-04-02T07:57:46Z"
lastCommitAt: "2026-09-07T08:35:00Z"
lastReleaseAt: "2025-06-28T08:13:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["OliverHennhoefer", "dependabot[bot]", "shivamlalakiya"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ee9176ea64e1c452996c8c0a15fe1b6d85c59efcd7865f79b1e852a4c9b6e1c/OliverHennhoefer/nonconform"
---

<h1 align="center">
  </a>
</h1>

  <strong>Calibrate scores. Control discoveries. Monitor change.</strong>
</p>

</p>

</p>

`nonconform` turns anomaly scores into conformal evidence for two primary
workflows: batch discovery control and sequential change monitoring. Wrap a
supported scikit-learn estimator, a [PyOD](https://pyod.readthedocs.io/) model,
or a custom detector:

- **Batch:** Use calibrated p-values directly or call `select(...)` to apply
  false discovery rate (FDR) control.
- **Stream:** Use conformal martingales to accumulate evidence against
  exchangeability and trigger configured alarms.

## Why nonconform?

- **Calibrate anomaly scores** into conformal p-values using reference data.
- **Control batch discoveries** by accounting for multiple tests within a
  fixed family.
- **Monitor streams for change** with conformal martingales, anytime evidence
  against exchangeability, and configurable alarms.
- **Keep your detector** through support for PyOD, recognized scikit-learn
  estimators, and protocol-compliant custom models.

  <strong>Works with</strong>
  &nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
</p>

## Installation…

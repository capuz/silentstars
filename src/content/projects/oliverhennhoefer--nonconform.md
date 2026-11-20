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
stars: 58
forks: 7
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-04-02T07:57:46Z"
lastCommitAt: "2026-11-20T12:26:59Z"
lastReleaseAt: "2025-06-28T08:13:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["OliverHennhoefer", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e274a472dd8965e583edf5e561e2b94aced35dd5255a534765c95ebe75011dd/OliverHennhoefer/nonconform"
discussionCount: 0
---

**Anomaly detectors return scores. `nonconform` turns them into flags with an error rate you choose.**

A detector ranks points by how unusual they look but leaves the cutoff to you.
The usual default, flagging the top 10% of scores, is a guess about how many
anomalies there are. `nonconform` calibrates the scores of your existing detector
against normal data, so the threshold follows from the error rate you can accept.

Same Isolation Forest, seven [benchmark datasets](https://pypi.org/project/oddball/),
averaged over 20 random splits:

| Dataset | Anomalies | PyOD default `predict()` | `nonconform`, `alpha=0.1` |
| --- | ---: | ---: | ---: |
| Shuttle | 100 | 188 flagged, 47% false | 105 flagged, 8% false |
| HTTP | 100 | 190 flagged, 47% false | 99 flagged, 8% false |
| Satimage-2 | 71 | 157 flagged, 56% false | 70 flagged, 9% false |
| Thyroid | 61 | 116 flagged, 48% false | 42 flagged, 7% false |
| Fraud | 100 | 178 flagged, 50% false | 45 flagged, 9% false |
| Mammography | 100 | 153 flagged, 58% false | 6 flagged, 5% false |
| Cardio | 27 | 49 flagged, 53% false | 3 flagged, 4% false |

---
repo: "trustyai-explainability/trustyai-service"
name: "trustyai-service"
description: "TrustyAI service"
readmeQualityOk: true
url: "https://github.com/trustyai-explainability/trustyai-service"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 17
openIssues: 6
closedIssues: 33
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2024-10-26T23:48:59Z"
lastCommitAt: "2026-10-19T09:14:35Z"
lastReleaseAt: "2026-06-24T11:36:27Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 91
maintainers: ["dependabot[bot]", "SudipSinha", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b38c598470aae50f3bb174f37ee2afce53bce769e063d37823c9e748e935cb9/trustyai-explainability/trustyai-service"
---

# TrustyAI Service

The TrustyAI Service is a REST API for Responsible AI workflows:
drift detection, fairness monitoring, and model explainability.
Built on FastAPI + Hypercorn, it consumes inference data from
KServe, stores it, and computes metrics on a schedule via
Prometheus.

Part of [Red Hat OpenShift AI](https://www.redhat.com/en/technologies/cloud-computing/openshift/openshift-ai)
and [Open Data Hub](https://opendatahub.io/).

**[Documentation](https://trustyai.org/docs/main/main)**
· **[API Reference](https://trustyai.org/docs/main/trustyai-service-api-reference)**

---

## Key Features

- **Real-time drift detection** on live inference streams
- **Automatic Prometheus metric publishing** on a configurable
  schedule
- **KServe-native** — consumes inference payloads directly via
  CloudEvents
- **Dual storage backends** — PVC (HDF5) or MariaDB
- **Runs anywhere** — locally, in Jupyter, or on Kubernetes

---

## Metrics

### Drift Detection

- Compare Means
  ([Welch's t-test](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html))
- Kolmogorov–Smirnov Test…

---
repo: "Cybersecurity-Certification-Hub/security-metrics"
name: "security-metrics"
description: "A repository of security metrics for continuous certification"
readmeQualityOk: true
url: "https://github.com/Cybersecurity-Certification-Hub/security-metrics"
language: "Open Policy Agent"
languages: ["Open Policy Agent"]
languagePcts: [87]
stars: 10
forks: 9
openIssues: 97
closedIssues: 68
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2024-03-27T14:33:59Z"
lastCommitAt: "2026-09-21T09:13:33Z"
lastReleaseAt: "2026-06-19T08:50:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 75
maintainers: ["anatheka", "lebogg", "pablodelarco"]
openGraphImageUrl: "https://opengraph.githubassets.com/db811af9084191bf22b719090ac77d0bc54173d2e44849f5c28a7625d0ef6299/Cybersecurity-Certification-Hub/security-metrics"
---

# Security Metrics
This repository collects security metrics that can be used for continuous certification. 

The repository is structured as follows.
- api: this folder is still preliminary. The idea is to define the metric data format in a programmatic way, e.g., using a protobuf file
- catalogs: the catalogs folder holds files for different certification catalogs, benchmarks, etc. These files encode the requirements of the catalogs and map them to metrics. This way, continuous certification tools that apply the metrics can map assess the degree of compliance of a given catalog later.
- metrics: this folder holds the actual metrics. It is structured into domains first and each domain contains a number of metric folders. Each of these metric folders holds the following information.
  - metric.yaml: This file describes the metric data, e.g., a description and its target value (see the structure explanation below)
  - metric.rego: This file encodes the metric data as a [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) file that can automatically be evaluated using the [OPA](https://www.openpolicyagent.org) engine.
  - data.json: This file contains the comparison…

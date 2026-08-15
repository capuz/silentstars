---
repo: "pdb-operator/pdb-operator"
name: "pdb-operator"
description: "Intelligent Pod Disruption Budget Management for Kubernetes"
readmeQualityOk: true
url: "https://github.com/pdb-operator/pdb-operator"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["golang", "kubernetes", "operator", "pdb", "availability", "kubernetes-operator", "poddisruptionbudget"]
stars: 31
forks: 1
openIssues: 1
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-02-28T10:42:12Z"
lastCommitAt: "2026-08-15T04:03:39Z"
lastReleaseAt: "2026-06-27T09:27:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 46
maintainers: ["nicknikolakakis", "dependabot[bot]", "muchezz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1169210608/ab70a7cf-f3b6-4fee-951d-fa07883b34c5"
discussionCount: 1
---

# PDB Operator

  <strong>
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
  </strong>
</p>

  </a>
  </a>
  </a>
  </a>
</p>

---

A Kubernetes operator that automates PodDisruptionBudget (PDB) management through policy-driven availability classes. Define your availability requirements declaratively and let the operator create, update, and reconcile PDBs across your cluster.

## Why PDB Operator?

Managing PodDisruptionBudgets at scale is painful. Teams forget to create them, set incorrect values, or leave stale PDBs behind. PDB Operator solves this by:

- **Policy-driven**: Define availability classes (`non-critical`, `standard`, `high-availability`, `mission-critical`, `custom`) and the operator calculates the right PDB settings
- **Selector-based**: Target workloads by labels, names, functions, or namespaces
- **Enforcement modes**: Choose `strict`, `flexible`, or `advisory` enforcement per policy
- **Maintenance windows**: Automatically relax PDBs during scheduled maintenance
- **Workload-aware**: Security workloads get automatically boosted availability
- **Self-cleaning**: PDBs are removed when a workload scales below 2 replicas and recreated when it…

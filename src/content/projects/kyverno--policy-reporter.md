---
repo: "kyverno/policy-reporter"
name: "policy-reporter"
description: "Monitoring and Observability Tool for the PolicyReport CRD with an optional UI."
readmeQualityOk: true
url: "https://github.com/kyverno/policy-reporter"
homepage: "https://kyverno.github.io/policy-reporter-docs/"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["kubernetes", "kyverno", "metrics", "grafana", "prometheus-metrics", "observability"]
stars: 389
forks: 134
openIssues: 8
closedIssues: 305
watchers: 7
contributors: 95
recentReleases: 0
createdAt: "2021-02-19T23:55:09Z"
lastCommitAt: "2026-10-14T08:57:28Z"
lastReleaseAt: "2021-02-23T09:26:29Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 41
maintainers: ["dependabot[bot]", "fjogeleit", "ANAMASGARD"]
openGraphImageUrl: "https://opengraph.githubassets.com/92487fb12517ebac196132b14f2fedd6b746eea3095c89b4bc3f56a0db3605a5/kyverno/policy-reporter"
---

# Policy Reporter 3.x

## Documentation

The documentation for Policy Reporter v3 can be found here: [https://kyverno.github.io/policy-reporter-docs/](https://kyverno.github.io/policy-reporter-docs/)

## Getting Started

## Installation with Helm v3

Installation via Helm Repository

### Add the Helm repository
```bash
helm repo add policy-reporter https://kyverno.github.io/policy-reporter
helm repo update
```

### Installation with Policy Reporter UI and Kyverno Plugin enabled
```bash
helm install policy-reporter policy-reporter/policy-reporter --create-namespace -n policy-reporter --set ui.enabled=true --set kyverno-plugin.enabled=true
kubectl port-forward service/policy-reporter-ui 8082:8080 -n policy-reporter
```

Open `http://localhost:8082/` in your browser.

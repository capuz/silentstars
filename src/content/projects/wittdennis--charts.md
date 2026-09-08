---
repo: "wittdennis/charts"
name: "charts"
description: "My Helm charts for stuff"
readmeQualityOk: true
url: "https://github.com/wittdennis/charts"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
stars: 5
forks: 10
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2024-11-13T13:24:14Z"
lastCommitAt: "2026-09-08T08:16:27Z"
lastReleaseAt: "2024-12-27T15:06:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 92
maintainers: ["wittdennis", "wittdennis-renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ca34d16095f599d12a82180adca089a980c931dea4ba46fed0f88f2f50dce94/wittdennis/charts"
---

# charts

Monorepo where I manage all helm charts that I created over time. For documentation on specific charts look at README files inside the chart directories.

## Installation

Every chart is published both to the classic Helm repository and as an OCI artifact. Use whichever
fits your tooling.

### OCI registry

```sh
helm install <release-name> oci://ghcr.io/wittdennis/helm-charts/<chart-name> --version <version>
```

For example, to install node-red:

```sh
helm install my-node-red oci://ghcr.io/wittdennis/helm-charts/node-red --version 2.0.3
```

### Helm repository

```sh
helm repo add wittdennis https://charts.derwitt.dev
helm repo update
helm install <release-name> wittdennis/<chart-name>
```

## Contributing

Contributions are always welcome! You can submit pull requests for new chart updates at any time. I'll try to work through them as swiftly as possible.

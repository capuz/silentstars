---
repo: "Adyen/kubectl-rexec"
name: "kubectl-rexec"
description: "tooling to make audited kubectl exec easy"
readmeQualityOk: true
url: "https://github.com/Adyen/kubectl-rexec"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["audit-log", "auditing", "kubectl-plugins"]
stars: 124
forks: 22
openIssues: 1
closedIssues: 0
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2024-12-13T09:38:19Z"
lastCommitAt: "2026-11-16T11:53:56Z"
lastReleaseAt: "2026-05-12T09:32:46Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 37
maintainers: ["n-marton", "renovate[bot]", "ncode"]
openGraphImageUrl: "https://opengraph.githubassets.com/020721b83a1b55cb961cce07423528fa016327b37724d6e2bfe9f5a86487a777/Adyen/kubectl-rexec"
---

# kubectl-rexec

Kubectl exec does not provide any kind of audit of what is actually done inside the container. The Rexec plugin is here to help with that.

## Contributing
We strongly encourage you to contribute to our repository. Find out more in our [contribution guidelines](https://github.com/Adyen/.github/blob/main/CONTRIBUTING.md)

## Requirements
In Kubernetes 1.30, the `TranslateStreamCloseWebsocketRequests` feature gate is enabled by default, making WebSocket the protocol between kubectl and kube-apiserver instead of SPDY. This solution handles only WebSockets, so the k8s cluster has to be either 1.30 or 1.29 with the `TranslateStreamCloseWebsocketRequests=true` feature flag. Versions below 1.29 are not supported.

## Installation
See the [Getting started](https://github.com/Adyen/kubectl-rexec/blob/main/STARTED.md) guide.

## Usage
See the [Getting started](https://github.com/Adyen/kubectl-rexec/blob/main/STARTED.md) guide.

## Testing
Run the unit and regression tests:

```sh
go test ./...
```

Run the complete exec contract suite in a disposable Kind cluster:

```sh
./scripts/e2e.sh
```

CI runs that suite against the oldest and newest supported Kubernetes versions.…

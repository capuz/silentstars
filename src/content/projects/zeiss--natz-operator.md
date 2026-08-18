---
repo: "ZEISS/natz-operator"
name: "natz-operator"
description: "👨‍✈️ An operator to setup NATS accounting"
readmeQualityOk: true
url: "https://github.com/ZEISS/natz-operator"
homepage: "https://zeiss.github.io/natz-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["golang", "k8s", "operator", "nats"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2024-09-15T18:33:42Z"
lastCommitAt: "2026-08-18T04:07:40Z"
lastReleaseAt: "2025-02-24T10:21:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 76
maintainers: ["github-actions[bot]", "dependabot[bot]", "katallaxie"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5548e75723400addda53a8194cb7d855337ece87031a553c8c8cb1f19e9ea6c/ZEISS/natz-operator"
---

# Kubernetes Operator for NATS Accounting

A Kubernetes operator for [NATS](https://nats.io/) accounting.

## Installation

[Helm](https://helm.sh/) can be used to install the `natz-operator` to your Kubernetes cluster.

```shell
helm repo add natz-operator https://zeiss.github.io/natz-operator/helm/charts
helm repo update
helm search repo natz-operator
```

## Usage

There are three custom account resources that can be used to configure the operator.

- `NatsKey`
- `NatsOperator`
- `NatsAccount`
- `NatsUser`
- `NatsConfiguration`
- `NatsGateway`
- `NatsConfig`
- `NatsActivation`

These can be configured with `NatsKey` to provide a private key and additional signing keys for the operator and accounts.

Creating the operator for the [NATS](https://nats.io/) accounting.

```yaml
apiVersion: natz.zeiss.com/v1alpha1
kind: NatsKey
metadata:
  name: natsoperator-sample-private-key
spec:
  type: Operator
---
apiVersion: natz.zeiss.com/v1alpha1
kind: NatsKey
metadata:
  name: natsoperator-demo-signing-key
spec:
  type: Operator
---
apiVersion: natz.zeiss.com/v1alpha1
kind: NatsOperator
metadata:
  name: natsoperator-sample
spec:
  privateKey:
    name: natsoperator-sample-private-key…

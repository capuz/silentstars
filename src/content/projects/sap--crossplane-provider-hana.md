---
repo: "SAP/crossplane-provider-hana"
name: "crossplane-provider-hana"
description: "Crossplane provider for SAP HANA"
readmeQualityOk: true
url: "https://github.com/SAP/crossplane-provider-hana"
homepage: "https://sap.github.io/crossplane-provider-docs/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["control-plane", "crossplane", "iad", "provider"]
stars: 6
forks: 8
openIssues: 14
closedIssues: 19
watchers: 1
contributors: 681
recentReleases: 2
createdAt: "2025-11-18T17:41:56Z"
lastCommitAt: "2026-10-09T10:50:22Z"
lastReleaseAt: "2026-08-10T15:40:38Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 88
maintainers: ["baronzhangdev", "n-losse", "mpechkurov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c63f4b18a2138d3f05fa2353ba1510a79b46a6b6fe61ba127e47dc341d45631c/SAP/crossplane-provider-hana"
---

# Crossplane Provider for SAP HANA

## About this project

`crossplane-provider-hana` is a [Crossplane](https://crossplane.io/) Provider for managing SAP HANA resources.

See the [examples directory](https://github.com/SAP/crossplane-provider-hana/blob/HEAD/examples/) for detailed usage guides and example manifests.

## Requirements and Setup

### Installation

1. Install Crossplane on your Kubernetes cluster:

```bash
helm repo add crossplane-stable https://charts.crossplane.io/stable
helm repo update
helm install crossplane \
--namespace crossplane-system \
--create-namespace crossplane-stable/crossplane
```

2. Install the HANA provider:

```bash
kubectl apply -f - <<EOF
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: crossplane-provider-hana
spec:
  package: ghcr.io/sap/crossplane-provider-hana/crossplane/provider-hana:latest
EOF
```

3. Configure the secret in `examples/provider/config.yaml` with the appropriate credentials and apply the provider config:

```bash
kubectl apply -f examples/provider/config.yaml
```

4. Create resources:

```bash
# For creating a user, see examples/user/
kubectl apply -f examples/user/user.yaml
```

### Development Setup

1.…

---
repo: "casdoor/casdoor-helm"
name: "casdoor-helm"
description: "Helm Chart for Casdoor: https://github.com/casdoor/casdoor"
readmeQualityOk: true
url: "https://github.com/casdoor/casdoor-helm"
homepage: "https://casdoor.org/docs/basic/try-with-helm"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
topics: ["casbin", "casdoor", "docker", "helm", "k8s", "kubernetes", "chart"]
stars: 10
forks: 11
openIssues: 1
closedIssues: 17
watchers: 2
contributors: 28
recentReleases: 0
createdAt: "2024-01-07T13:21:08Z"
lastCommitAt: "2026-08-27T14:25:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 89
maintainers: ["casbin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a69115a5f250e0b41a8dd9c8b46f0baa9a3611e1f4b07d0404bc4b8c7d9a841a/casdoor/casdoor-helm"
---

# Casdoor Helm Chart

[Casdoor](https://casdoor.org) is an open-source Identity and Access Management (IAM) platform supporting OAuth 2.0, OIDC, SAML, and LDAP. This repository provides the official Helm chart for deploying Casdoor on Kubernetes.

Official documentation: <https://casdoor.org/docs/basic/try-with-helm>

---

## Prerequisites

- Kubernetes 1.19+
- Helm v3.8+

---

## Installation

```shell
helm install casdoor oci://registry-1.docker.io/casbin/casdoor-helm-charts --version <version>
```

Check available versions on [Docker Hub](https://hub.docker.com/r/casbin/casdoor-helm-charts/tags).

To install with a custom values file:

```shell
helm install casdoor oci://registry-1.docker.io/casbin/casdoor-helm-charts \
  --version <version> \
  -f my-values.yaml
```

---

## Upgrading

```shell
helm upgrade casdoor oci://registry-1.docker.io/casbin/casdoor-helm-charts --version <version>
```

---

## Uninstalling

```shell
helm uninstall casdoor
```

---

## Configuration

Override any value from [values.yaml](https://github.com/casdoor/casdoor-helm/blob/HEAD/charts/casdoor/values.yaml) using `--set` or a custom values file.

### Core parameters

| Parameter | Description |…

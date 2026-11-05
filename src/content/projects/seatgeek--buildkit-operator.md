---
repo: "seatgeek/buildkit-operator"
name: "buildkit-operator"
description: "An operator for managing BuildKit instances on Kubernetes"
readmeQualityOk: true
url: "https://github.com/seatgeek/buildkit-operator"
homepage: "https://chairnerd.seatgeek.com/resilient-builds-with-buildkit-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["buildkit", "containerd", "kubernetes", "kubernetes-operator"]
stars: 35
forks: 3
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 7
recentReleases: 1
createdAt: "2025-07-18T18:41:42Z"
lastCommitAt: "2026-11-05T14:05:23Z"
lastReleaseAt: "2026-08-25T19:52:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 60
maintainers: ["renovate[bot]", "colinodell", "fatmcgav"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd6de7f1521cb571379e9ccbe97eee111211ed146e58bc5c69aa6aadbc6c18be/seatgeek/buildkit-operator"
---

# buildkit-operator

An operator for managing BuildKit instances on Kubernetes.

## Getting Started

Install [mise](https://mise.jdx.dev) for managing tool versions, then:

```bash
make init    # Install tools (Go, kind, frpc) and download dependencies
make create  # Create a local Kind cluster
make run     # Run the operator
```

Run `make help` to see all available targets.

## How it Works

First, deploy one or more `BuildkitTemplate` resources that define the configuration and scheduling for BuildKit instances:

```yaml
apiVersion: buildkit.seatgeek.io/v1alpha1
kind: BuildkitTemplate
metadata:
  name: buildkit-arm64
  namespace: some-ns
spec:
  # This is a simplified example; many other spec fields are available.
  rootless: true
  port: 1234

  buildkitdToml: |
    [log]
      format = "json"

    [worker.oci]
      enabled = true
      max-parallelism = 3
      cniPoolSize = 16

    [worker.containerd]
      enabled = false

  resources:
    default:
      requests:
        cpu: 500m
        memory: 8Gi
      limits:
        memory: 8Gi
    maximum:
      cpu: 8
      memory: 16Gi

  scheduling:
    nodeSelector:
      kubernetes.io/arch: arm64
      kubernetes.io/os: linux…

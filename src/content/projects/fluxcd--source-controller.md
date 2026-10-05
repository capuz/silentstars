---
repo: "fluxcd/source-controller"
name: "source-controller"
description: "The GitOps Toolkit source management component "
readmeQualityOk: true
url: "https://github.com/fluxcd/source-controller"
homepage: "https://fluxcd.io"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["gitops-toolkit"]
stars: 283
forks: 257
openIssues: 84
closedIssues: 342
watchers: 24
contributors: 89
recentReleases: 0
createdAt: "2020-04-05T08:55:42Z"
lastCommitAt: "2026-10-05T10:46:36Z"
lastReleaseAt: "2020-07-03T08:11:39Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 46
maintainers: ["matheuscscp", "stefanprodan", "stealthybox"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/253192913/917a8380-c6bf-11ea-8e2c-51d8b749010e"
---

# Source controller

The source-controller is a Kubernetes operator, specialised in artifacts acquisition
from external sources such as Git, OCI, Helm repositories and S3-compatible buckets.
The source-controller implements the
[source.toolkit.fluxcd.io](https://github.com/fluxcd/source-controller/blob/HEAD/docs/spec/README.md) API
and is a core component of the [GitOps toolkit](https://fluxcd.io/flux/components/).

## APIs

| Kind                                                  | API Version                   |
|-------------------------------------------------------|-------------------------------|
| [GitRepository](https://github.com/fluxcd/source-controller/blob/HEAD/docs/spec/v1/gitrepositories.md)      | `source.toolkit.fluxcd.io/v1` |
| [OCIRepository](https://github.com/fluxcd/source-controller/blob/HEAD/docs/spec/v1/ocirepositories.md)      | `source.toolkit.fluxcd.io/v1` |
| [HelmRepository](https://github.com/fluxcd/source-controller/blob/HEAD/docs/spec/v1/helmrepositories.md)    | `source.toolkit.fluxcd.io/v1` |
| [HelmChart](https://github.com/fluxcd/source-controller/blob/HEAD/docs/spec/v1/helmcharts.md)               | `source.toolkit.fluxcd.io/v1` |
|…

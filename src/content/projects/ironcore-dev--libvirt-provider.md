---
repo: "ironcore-dev/libvirt-provider"
name: "libvirt-provider"
description: "Libvirt provider implementation of the IronCore compute interface"
readmeQualityOk: true
url: "https://github.com/ironcore-dev/libvirt-provider"
homepage: "https://ironcore-dev.github.io/iaas/architecture/providers/libvirt-provider.html"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["compute", "kubernetes", "libvirt"]
stars: 11
forks: 11
openIssues: 1
closedIssues: 129
watchers: 5
contributors: 21
recentReleases: 1
createdAt: "2023-10-05T11:19:55Z"
lastCommitAt: "2026-11-04T13:05:27Z"
lastReleaseAt: "2026-08-27T08:19:28Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 87
maintainers: ["dependabot[bot]", "friegger", "maxmoehl"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a7a2a454ab55d8675ee739b1ad004ca9bd03d687723bdb6faaa15c12d86724/ironcore-dev/libvirt-provider"
discussionCount: 1
---

# libvirt-provider

`libvirt-provider` is a Libvirt based provider implementation of the [ironcore](https://github.com/ironcore-dev/ironcore) `Machine` type.

Please consult the [project documentation](https://ironcore-dev.github.io/libvirt-provider/) for additional information.

### How it works
This project aims to follow the Kubernetes [Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)

It uses [Controllers](https://kubernetes.io/docs/concepts/architecture/controller/)
which provides a reconcile function responsible for synchronizing resources until the desired state is reached on the cluster

## Licensing

Copyright 2025 SAP SE or an SAP affiliate company and IronCore contributors. Please see our [LICENSE](https://github.com/ironcore-dev/libvirt-provider/blob/HEAD/LICENSE) for
copyright and license information. Detailed information including third-party components and their licensing/copyright
information is available [via the REUSE tool](https://api.reuse.software/info/github.com/ironcore-dev/libvirt-provider).

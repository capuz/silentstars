---
repo: "crossplane-contrib/provider-upjet-harbor"
name: "provider-upjet-harbor"
description: "Upjet-based Crossplane v2 provider for Harbor — manages Harbor resources via the goharbor/terraform-provider-harbor Terraform provider."
readmeQualityOk: true
url: "https://github.com/crossplane-contrib/provider-upjet-harbor"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 5
forks: 3
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 15
recentReleases: 4
createdAt: "2026-05-15T15:50:50Z"
lastCommitAt: "2026-11-06T13:20:04Z"
lastReleaseAt: "2026-09-08T06:14:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 68
maintainers: ["jonasz-lasut", "renovate[bot]", "oliverbaehler"]
openGraphImageUrl: "https://opengraph.githubassets.com/679d3fea7d2e6aac973008910bb14f0b0e831e35ed0dfe9a4ebaf9ed47cb24bc/crossplane-contrib/provider-upjet-harbor"
---

# Upjet-based Crossplane provider for Harbor

> [!CAUTION]
> **xpkgs in the `jonasz-lasut` namespace were deleted as of the v1.4.0 release.** Please migrate to the official `crossplane-contrib` namespace.

Provider Upjet-Harbor is a [Crossplane](https://crossplane.io/) provider that
is built using [Upjet](https://github.com/crossplane/upjet) code
generation tools and exposes XRM-conformant managed resources for
[Harbor](https://goharbor.io/), wrapping the
[goharbor/terraform-provider-harbor](https://github.com/goharbor/terraform-provider-harbor)
Terraform provider.

## Getting Started

Install the provider into a Crossplane control plane. The provider package is
published from this repository's CI on tag pushes; see
[Releases](https://github.com/crossplane-contrib/provider-upjet-harbor/releases) for
the published image references.

```yaml
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: provider-upjet-harbor
spec:
  package: <image-from-releases>
```

Then configure credentials for your Harbor instance via a
`ProviderConfig` / `ClusterProviderConfig`. Examples live under…

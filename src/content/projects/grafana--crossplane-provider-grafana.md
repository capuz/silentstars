---
repo: "grafana/crossplane-provider-grafana"
name: "crossplane-provider-grafana"
description: "Crossplane provider of https://github.com/grafana/terraform-provider-grafana"
url: "https://github.com/grafana/crossplane-provider-grafana"
homepage: "https://marketplace.upbound.io/providers/grafana/provider-grafana"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 48
forks: 26
openIssues: 4
closedIssues: 88
watchers: 105
contributors: 1310
recentReleases: 0
createdAt: "2022-11-22T02:42:59Z"
lastCommitAt: "2026-07-03T12:39:24Z"
lastReleaseAt: "2023-03-02T14:28:13Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 50
maintainers: ["renovate-sh-app[bot]", "Duologic", "terraform-provider-grafana[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/718d4b527822990a9f6f2d6fe0e80d2c1f8c149b6dfab4af630ca386c191bc2b/grafana/crossplane-provider-grafana"
---

# Provider Grafana

`provider-grafana` is a [Crossplane](https://crossplane.io/) provider that is built using [Upjet](https://github.com/upbound/upjet) code generation tools and exposes XRM-conformant managed resources for the Grafana API.

> **This tool is experimental**
>
> The code in this repository should be considered experimental. Documentation is only
> available alongside the code. It comes without support, but we are keen to receive
> feedback on the product and suggestions on how to improve it, though we cannot commit to
> resolution of any particular issue. No SLAs are available. It is not meant to be used in
> production environments, and the risks are unknown/high.
>
> Additional information can be found in [Release life cycle for Grafana Labs](https://grafana.com/docs/release-life-cycle/).

## Getting Started

Install the provider by using the following command after changing the image tag to the [latest release](https://marketplace.upbound.io/providers/grafana/provider-grafana):

```
up ctp provider install xpkg.upbound.io/grafana/provider-grafana:v2.2.0
```

Alternatively, you can use declarative installation:

```yaml
apiVersion: pkg.crossplane.io/v1
kind:…

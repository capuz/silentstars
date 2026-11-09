---
repo: "clux/homelab"
name: "homelab"
description: "helm charts and dashboards for homelabs"
readmeQualityOk: true
url: "https://github.com/clux/homelab"
language: "Just"
languages: ["Just"]
languagePcts: [86]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-31T20:59:57Z"
lastCommitAt: "2026-11-09T12:00:01Z"
lastReleaseAt: "2024-10-14T08:41:47Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 55
undervaluedScore: 35
maintainers: ["clux", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b510b66fba491a0b0f72139899c109d29974185f6276ef22dd6e9b2790d3cfc3/clux/homelab"
fundingLinks: ["GITHUB:https://github.com/clux"]
---

# Kubernetes Homelab Automation and Helm Charts

Minimal helm chart wrappers for minimal home lab setups. Matches my k3s setup.

## Chart Usage

Add the [helm](https://helm.sh) repo:

```console
helm repo add clux https://clux.github.io/homelab
```

then `helm search repo clux` to see the charts.

## Charts

- [promstack](https://github.com/clux/homelab/tree/main/charts/promstack) :: A low-footprint prometheus/observability chart
- [cx-dashboards](https://github.com/clux/homelab/tree/main/charts/cx-dashboards) :: A set of modern dashboards for small clusters with prometheus backlinks
- [flux](https://github.com/clux/homelab/tree/main/charts/flux) :: Minimal [flux](https://fluxcd.io/flux/components/) for gitops from this repo
- [renovate](https://github.com/clux/homelab/tree/main/charts/renovate) :: Minimal [renovate](https://docs.renovatebot.com/examples/self-hosting/) running [clux/renovate](https://github.com/clux/renovate)
- [forgejo](https://github.com/clux/homelab/tree/main/charts/forgejo) :: Basic [forgejo](https://forgejo.org/) setup (no runners)
- [cilium](https://github.com/clux/homelab/tree/main/charts/cilium) :: Basic [cilium](https://docs.cilium.io/en/stable/) for k3s…

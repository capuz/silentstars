---
repo: "home-operations/ocharted"
name: "ocharted"
description: "A stateless OCI registry proxy that serves classic Helm repositories as OCI artifacts"
readmeQualityOk: true
url: "https://github.com/home-operations/ocharted"
language: "Go"
languages: ["Go"]
languagePcts: [61]
stars: 8
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-07-28T12:41:27Z"
lastCommitAt: "2026-08-28T12:22:13Z"
lastReleaseAt: "2026-08-27T02:04:13Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 56
maintainers: ["sticky-gecko[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/16b43909a79af7981b4b544ff9190bbe8826744c61842b15ccfe4fb91eaf58aa/home-operations/ocharted"
---

# ocharted

> To OCI, your classic Helm repos are _uncharted_ territory. Point this proxy
> at them and consider them **ocharted**.

A stateless OCI registry proxy for classic Helm repositories. Point it at any
HTTP Helm repo and every chart in it becomes pullable as an OCI artifact — no
onboarding, no storage, no publish pipeline:

```
oci://<ocharted-host>/<upstream-host[/path]>/<chart>
```

So `https://charts.jetstack.io`'s `cert-manager` chart is
`oci://ocharted.example.com/charts.jetstack.io/cert-manager`, usable in a Flux
`OCIRepository` or with `helm install oci://...` even though upstream never
published OCI artifacts.

## How it works

ocharted implements the read-only subset of the OCI distribution spec (`tags/list`,
`manifests`, `blobs`) and derives every response on demand from the upstream
repository:

- **Tags** are the chart versions in the upstream `index.yaml` (SemVer `+`
  build metadata maps to `_`, Helm's own OCI convention).
- **The chart layer** is the upstream tarball byte-for-byte, verified against
  the digest the index publishes.
- **The config blob** is the chart's `Chart.yaml` rendered as canonical JSON,
  sourced from inside the tarball so repo-side…

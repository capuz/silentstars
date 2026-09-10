---
repo: "PlatformRelay/Kollect"
name: "Kollect"
description: "Your cluster, in Git, diffable — Kubernetes inventory operator: CRD-native GVK selection, CEL extraction, export to Git, databases, and streams."
readmeQualityOk: true
url: "https://github.com/PlatformRelay/Kollect"
homepage: "https://platformrelay.github.io/Kollect/"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [68, 31]
topics: ["golang", "inventory", "kubernetes", "kubernetes-operator", "operator", "audit", "cel", "crd", "gitops"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-06-04T23:26:43Z"
lastCommitAt: "2026-09-10T08:19:56Z"
lastReleaseAt: "2026-07-31T15:00:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 63
maintainers: ["konih", "github-actions[bot]", "renovate-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1259848350/683d0093-fae6-4466-a67e-3447a7b8d04d"
---

</a>
</p>

</p>

# Kollect

**Turn Kubernetes state into durable inventory.** Declare what matters once. Kollect keeps it
current and delivers it to Git, object storage, databases, and event streams. Select resources by
GVK, extract the attributes you need with CEL or JSONPath, and every sink receives the same
canonical rows in parallel.

**Start with one sink. Grow to a whole platform.** A single pipeline can write an inspectable Git
history, a queryable database record, an object-store snapshot, or an event stream—without scripts
or API-server hammering. As adoption grows, nothing gets rebuilt: the same rows fan out to more
sinks, and `KollectScope` keeps it multi-tenant. Every team owns its inventory as **configuration,
not code**, in its own namespace; consumers read **export data**, never unbounded list/watch against
the live cluster.

**Read the docs:** **[platformrelay.github.io/Kollect](https://platformrelay.github.io/Kollect/)** — architecture,
quick start, CR reference, ADRs, and examples. This README is the front door; the site is the map.

Install paths: **Helm OCI on GHCR** is primary (`oci://ghcr.io/platformrelay/charts/kollect` — the
chart moved off…

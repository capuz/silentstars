---
repo: "openkubes/openkubes"
name: "openkubes"
description: "A framework for building sovereign Kubernetes platform distributions"
readmeQualityOk: true
url: "https://github.com/openkubes/openkubes"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [78, 20]
stars: 21
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-05-23T21:20:40Z"
lastCommitAt: "2026-07-30T06:08:09Z"
lastReleaseAt: "2026-07-22T18:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["arashkaffamanesh", "stks01", "Santiago-Gawenda"]
openGraphImageUrl: "https://opengraph.githubassets.com/44611eac0fdeec90e492dd9c20242dcdd95431f29a5ad91321b8a534612a02d6/openkubes/openkubes"
---

# OpenKubes

### Kubernetes is a platform for building platforms.

### OpenKubes builds Kubernetes Platform*S*.

<sub>The capital S is intentional.</sub>

*Bare Metal · Edge · On-Premises · Multi-Cloud*

</div>

---

> **OpenKubes is a framework for building sovereign Kubernetes platform distributions.**
> It defines stable contracts between platform layers — and lets the ecosystem provide the implementations.

> *OpenKubes owns the contracts, not the components.*

> **OpenKubes defines the framework. OKP proves it can run.**
> **OpenKubes Platform (OKP)** is its official reference distribution and conforms to the OpenKubes contracts. Deploy OKP as provided, adapt it, or use OpenKubes to build your own OpenKubes-conformant distribution.
> → [Naming &amp; terminology](https://github.com/openkubes/openkubes/blob/HEAD/NAMING.md)

---

## Platform Architecture

---

## The OpenKubes Family

> The mother owns the contracts, not the components. The children do the work.

Each repository owns exactly one capability contract — `ok-linux` (Host OS), `ok-cluster` (Cluster Lifecycle), `ok-storage`, `ok-observability`, `ok-gitops`, `ok-apps` — while this repository holds the contracts, the…

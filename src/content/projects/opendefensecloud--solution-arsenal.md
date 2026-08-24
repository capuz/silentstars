---
repo: "opendefensecloud/solution-arsenal"
name: "solution-arsenal"
description: "Solution Arsenal (SolAr) is an application catalog based on Open Component Model packages (ocm.software) and fleet rollout management for these solutions onto Kubernetes Clusters."
readmeQualityOk: true
url: "https://github.com/opendefensecloud/solution-arsenal"
language: "Go"
languages: ["Go"]
languagePcts: [74]
topics: ["catalog", "kubernetes", "open-component-model"]
stars: 8
forks: 2
openIssues: 62
closedIssues: 194
watchers: 0
contributors: 11
recentReleases: 4
createdAt: "2025-12-03T06:01:09Z"
lastCommitAt: "2026-08-24T04:23:24Z"
lastReleaseAt: "2026-06-30T08:03:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 69
maintainers: ["cbrgm", "rebEllieous", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42f2b424be63e10854743f3aa2aa1eb672f1044207222243c84ad7f6d89cf9da/opendefensecloud/solution-arsenal"
---

# Solution Arsenal

Solution Arsenal (SolAr) is an application catalog based on Open Component
Model packages (ocm.software) and fleet rollout management for these solutions
onto Kubernetes Clusters. It features a catalog of solutions, which are
application bundles provided as OCM packages from an OCI compliant registry.
Additionally Kubernetes clusters can be registered with SolAr to turn them into
deployment targets for the solutions from the catalog. The deployment itself
then uses OCM Controllers with fluxCD as a deployer
(https://ocm.software/docs/concepts/kubernetes-controllers/).

<br style="clear: left;"/>

## Features and Requirements

### Non-functional Technical Requirements

- SolAr has a backend written entirely in golang 1.25 or newer
- SolAr aims for a golang report card with A+ status
- SolAr aims for a test coverage of above 85% in general
- VERY IMPORTANT: The backend is implemented as an API Extension Server to Kubernetes. The starting point is the apiserver-kit provided here: <https://github.com/opendefensecloud/apiserver-kit>
- SolAr follows the Kubernetes Resource Model and thus is entirely configurable via Kubernetes Resources
- SolAr has an extensive web ui…

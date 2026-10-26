---
repo: "home-operations/k8s-schemas"
name: "k8s-schemas"
description: "Community project for building JSON schemas to be used in Kubernetes manifests"
readmeQualityOk: true
url: "https://github.com/home-operations/k8s-schemas"
homepage: "http://k8s-schemas.home-operations.com/"
language: "YAML"
languages: ["YAML"]
languagePcts: [77]
stars: 21
forks: 9
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-05-16T14:12:19Z"
lastCommitAt: "2026-10-26T20:25:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 49
maintainers: ["renovate[bot]", "sticky-gecko[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/a566c583e48ed68bd87fe998a1c2d1bb143352d20fe14b69f034814fd451cd8d/home-operations/k8s-schemas"
---

# k8s-schemas

JSON schemas for the Kubernetes CRDs used across the home-operations ecosystem.
Point a YAML editor at these schemas and your cluster manifests get
autocomplete, hover documentation, and validation against the real upstream
API.

The rendered site is at
[`k8s-schemas.home-operations.com`](https://k8s-schemas.home-operations.com),
and the same content is mirrored as a cosign-signed OCI artifact at
`ghcr.io/home-operations/k8s-schemas:latest`.

## How it works

Each upstream project gets a small `vendir.yml` under `sources/`. The build
fetches that upstream's CRDs at the pinned version, keeps only the
`CustomResourceDefinition` documents, and hands the whole set to
[`crd-schema-publisher`](https://github.com/sholdee/crd-schema-publisher),
which renders a single searchable docs site.

A handful of operators (KubeVirt, CDI, …) only register their CRDs at install
time rather than shipping them as static YAML. Those sources add a `kind.yaml`
alongside the `vendir.yml`; the build spins up a throwaway
[kind](https://kind.sigs.k8s.io/) cluster, lets the operator reconcile, and
dumps the registered CRDs.

The site is published to GitHub Pages and the same payload is pushed as…

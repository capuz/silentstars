---
repo: "home-operations/k8s-schemas"
name: "k8s-schemas"
description: "Community project for building JSON schemas to be used in Kubernetes manifests"
url: "https://github.com/home-operations/k8s-schemas"
homepage: "http://k8s-schemas.home-operations.com/"
language: "YAML"
languages: ["YAML"]
languagePcts: [74]
stars: 14
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-16T14:12:19Z"
lastCommitAt: "2026-06-24T00:20:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["sticky-gecko[bot]", "eleboucher", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/8874e87556fb5a85f70959351508697209133d2f8216996df013b046ce4abbce/home-operations/k8s-schemas"
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

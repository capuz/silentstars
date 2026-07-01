---
repo: "sholdee/crd-schema-publisher"
name: "crd-schema-publisher"
description: "Browsable CRD docs and IDE validation schemas, straight from your Kubernetes cluster"
url: "https://github.com/sholdee/crd-schema-publisher"
homepage: "https://sholdee.github.io/crd-schema-publisher/"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["cloudflare-pages", "json-schema", "kubeconform", "kubernetes", "custom-resource-definitions", "helm-chart", "kubernetes-controller"]
stars: 23
forks: 3
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-04-09T04:01:09Z"
lastCommitAt: "2026-07-01T07:06:16Z"
lastReleaseAt: "2026-04-19T09:02:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 47
maintainers: ["pull-bunyan[bot]", "sholdee", "eleboucher"]
openGraphImageUrl: "https://opengraph.githubassets.com/5443367209d203de9cfaa6ec2810bec2822bab2ad5026b0e47512187b0d09c65/sholdee/crd-schema-publisher"
---

</p>

<h1 align="center">crd-schema-publisher</h1>

  CRD docs and IDE validation, straight from the cluster.
</p>

</p>

Extracts CRD schemas from Kubernetes or YAML, converts Kubernetes built-in resource schemas from `/openapi/v2`, and publishes a searchable documentation site with interactive schema pages.

</p>

</p>

## Why

Static CRD catalogs go stale, miss internal CRDs, and depend on external infrastructure. `crd-schema-publisher` publishes schemas from your own cluster and can serve or sync them wherever you host static files.

- Always accurate for installed CRDs, internal CRDs, and optional Kubernetes built-ins.
- Self-hosted output for Cloudflare Pages, local serving, S3-compatible storage, git, or any static web server.
- Single static binary in a distroless nonroot container.
- Controller-grade watch mode with informers, leader election, debounced refreshes, health probes, and metrics.

## Quickstart

Install the Helm chart in controller mode:

```bash
helm install crd-schema-publisher oci://ghcr.io/sholdee/charts/crd-schema-publisher \
  --namespace crd-schema-publisher \
  --create-namespace \
  --set existingSecret.name=crd-schema-publisher-cloudflare
```…

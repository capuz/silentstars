---
repo: "apache/dubbo-kubernetes"
name: "dubbo-kubernetes"
description: "Build a native mesh using gRPC and xDS"
readmeQualityOk: true
url: "https://github.com/apache/dubbo-kubernetes"
homepage: "https://kdubbo.github.io"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["dubbo", "kubernetes", "service-mesh", "consul", "microservice", "microservices"]
stars: 200
forks: 88
openIssues: 1
closedIssues: 121
watchers: 53
contributors: 180
recentReleases: 0
createdAt: "2018-07-17T09:31:28Z"
lastCommitAt: "2026-07-20T06:34:27Z"
lastReleaseAt: "2025-12-01T13:01:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 42
maintainers: ["mfordjody"]
openGraphImageUrl: "https://opengraph.githubassets.com/d03f45526194cd2e2144499ce62ba790f7773c1f08e5d1a9c3c97e2e010f1c2c/apache/dubbo-kubernetes"
---

# Apache Kdubbo (dubbo-mesh)

Dubbo inherent mesh implemented for the underlying cluster management platform can directly receive policies from the control plane and obtain features such as load balancing, service discovery, and observability without requiring a sidecar proxy.

## Introduction

> [!WARNING]
> Current version is in the **Alpha** phase. The `0.5.0` release will be the first **RC** phase.
>
Dubbo’s control plane provides an abstraction layer over the underlying cluster management platform.

Dubbo component composition:

- **dubbod** — Dubbo xDS control plane. It provides service discovery, configuration and certificate issuance.
- **dxgate** — Dubbo delegated gateway for Gateway API.

## Repositories

Projects are distributed across the code directory repositories:

- [dubbo/api](https://github.com/kdubbo/api). — Defines the component level APIs for the Dubbo control plane.

- [dubbo/xds-api](https://github.com/kdubbo/xds-api). — Define the xDS API for the Dubbo control plane.

- [dubbo/client-go](https://github.com/kdubbo/client-go). — Defines the Kubernetes clients automatically generated for Dubbo control plane resources.

-…

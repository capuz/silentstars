---
repo: "operator-framework/operator-controller"
name: "operator-controller"
description: "A new and improved management framework for extending Kubernetes with Operators"
readmeQualityOk: true
url: "https://github.com/operator-framework/operator-controller"
homepage: "https://operator-framework.github.io/operator-controller/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 213
forks: 85
openIssues: 14
closedIssues: 623
watchers: 12
contributors: 74
recentReleases: 0
createdAt: "2022-04-25T21:21:53Z"
lastCommitAt: "2026-09-16T08:48:12Z"
lastReleaseAt: "2023-11-28T16:41:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 45
maintainers: ["dependabot[bot]", "pedjak", "tmshort"]
openGraphImageUrl: "https://opengraph.githubassets.com/c55b5a5860838a3e7b2385c524756cf5c35a48fc7a76e4cdb54f89e6b72e999a/operator-framework/operator-controller"
discussionCount: 15
---

# operator-controller
The operator-controller is the central component of Operator Lifecycle Manager (OLM) v1.
It extends Kubernetes with an API through which users can install extensions.

## Overview

OLM v1 is the follow-up to [OLM v0](https://github.com/operator-framework/operator-lifecycle-manager). Its purpose is to provide APIs, 
controllers, and tooling that support the packaging, distribution, and lifecycling of Kubernetes extensions. It aims to:

- align with Kubernetes designs and user assumptions
- provide secure, high-quality, and predictable user experiences centered around declarative GitOps concepts
- give cluster admins the minimal necessary controls to build their desired cluster architectures and to have ultimate control

OLM v1 consists of two different components:

* operator-controller
* catalogd

For a more complete overview of OLM v1 and how it differs from OLM v0, see our [overview](https://github.com/operator-framework/operator-controller/blob/HEAD/docs/project/olmv1_design_decisions.md).

## Documentation

The documentation currently lives at [website](https://operator-framework.github.io/operator-controller/). The source of the documentation exists in…

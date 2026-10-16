---
repo: "kubebao/openbao-operator"
name: "openbao-operator"
description: "The OpenBao Operator manages the lifecycle of OpenBao clusters on Kubernetes. It handles the orchestration complexity, PKI, backups, upgrades, and secure multi-tenancy, so you can focus on consuming secrets."
readmeQualityOk: true
url: "https://github.com/kubebao/openbao-operator"
homepage: "https://docs.kubebao.org/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["kubernetes", "kubernetes-operator", "openbao", "secret-management"]
stars: 31
forks: 7
openIssues: 4
closedIssues: 14
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-03T19:19:17Z"
lastCommitAt: "2026-10-16T08:26:50Z"
lastReleaseAt: "2026-07-04T15:14:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["dc-tec", "dependabot[bot]", "robertdebock"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1127385211/45d424fc-b17f-4415-8d7e-f4051d5f5499"
discussionCount: 0
---

**Secure lifecycle management for OpenBao on Kubernetes.**

[Get started](#get-started) • [Compatibility](#compatibility) • [Documentation](#documentation) • [Contributing](#contributing)

> [!WARNING]
> **Pre-GA Release**: OpenBao Operator is intended for real deployments, but the CRD API remains `v1alpha1`, minor releases may introduce breaking changes, and support is best-effort for the latest stable line only. For production, use the `Hardened` profile, keep admission enforcement enabled, pin explicit versions, and validate upgrades in staging.

---

OpenBao Operator is a Kubernetes operator for [OpenBao](https://openbao.org) that automates lifecycle management: provisioning, TLS, backups/restores, upgrades, horizontal read scaling, and multi-tenancy controls.

OpenBao Operator is maintained by [KubeBao](https://kubebao.org), an independent open-source project. It is not an official OpenBao project.

## Get started

Follow the **[Getting started guide](https://docs.kubebao.org/docs/get-started/)** to choose a deployment
model, install the operator, onboard a namespace, and create your first OpenBao cluster.

The documentation covers evaluation and production prerequisites,…

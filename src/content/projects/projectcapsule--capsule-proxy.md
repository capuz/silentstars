---
repo: "projectcapsule/capsule-proxy"
name: "capsule-proxy"
description: "Reverse proxy for Capsule Operator."
readmeQualityOk: true
url: "https://github.com/projectcapsule/capsule-proxy"
homepage: "https://github.com/projectcapsule/capsule"
language: "Go"
languages: ["Go"]
languagePcts: [75]
topics: ["kubernetes", "multitenant", "multitenancy", "kubernetes-controller", "capsule"]
stars: 64
forks: 62
openIssues: 1
closedIssues: 200
watchers: 5
contributors: 42
recentReleases: 0
createdAt: "2020-09-16T13:52:50Z"
lastCommitAt: "2026-10-15T08:32:17Z"
lastReleaseAt: "2022-04-08T10:37:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 63
maintainers: ["renovate[bot]", "oliverbaehler", "bakito"]
openGraphImageUrl: "https://opengraph.githubassets.com/21863a720c48334681680ebd998b46f32fa622bd49582c4f846b4eccfe170d94/projectcapsule/capsule-proxy"
discussionCount: 3
---

# Capsule Proxy

This project is an add-on for [Capsule](https://github.com/projectcapsule/capsule), the operator providing multi-tenancy in Kubernetes.

`capsule-proxy` allows to overcome the limitations of Kubernetes API Server on listing owned cluster-scoped resources, like Namespace, Ingress and Storage Classes, Nodes, and others covered by Capsule.

## ProxySetting access boundary

Namespace-scoped `ProxySetting` objects support delegation within their associated
tenant. Their deprecated `spec.subjects[].clusterResources` field is ignored by
the proxy and must be omitted or empty. Administrators must move any intended
cluster-resource grants to `GlobalProxySettings`, with `ProxyClusterScoped` enabled.
Access to create or modify `GlobalProxySettings` must remain administrator-controlled.

When upgrading, roll out the fixed proxy to every replica and update the
`ProxySetting` CRD. The runtime restriction also protects against grants stored
before the CRD update; updating the CRD alone does not neutralize existing grants
on older proxy replicas. Remove obsolete namespaced grants after migration.

## Documentation

You can find more detailed documentation…

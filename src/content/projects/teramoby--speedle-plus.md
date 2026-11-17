---
repo: "teramoby/speedle-plus"
name: "speedle-plus"
description: "Speedle: open source access management. Based on the Speedle open source project and maintained by previous Speedle maintainers."
readmeQualityOk: true
url: "https://github.com/teramoby/speedle-plus"
homepage: "https://engine.speedle.io"
language: "Go"
languages: ["Go"]
languagePcts: [61]
topics: ["access-control", "fine-grained-access-control", "authorization", "microservice", "rbac", "abac", "acl", "compliance", "entitlements", "policy"]
stars: 62
forks: 16
openIssues: 5
closedIssues: 125
watchers: 8
contributors: 4
recentReleases: 5
createdAt: "2020-05-26T23:33:38Z"
lastCommitAt: "2026-11-17T11:18:29Z"
lastReleaseAt: "2026-11-17T08:35:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["caiwl", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/267174078/6de19a80-ac34-11ea-97e3-44af27605d9f"
discussionCount: 1
---

# Speedle

Speedle is an open-source authorization engine written in Go. Applications ask it whether a subject may perform an action on a resource, and it answers allow or deny in milliseconds from centrally managed policies, so authorization logic stays out of application code. It supports role-based (RBAC) and attribute-based (ABAC) access control; deny policies override grants, and anything not granted is denied.

Speedle consists of the Speedle Policy Definition Language (SPDL), the Policy Management Service (PMS, the policy administration point), the Authorization Decision Service (ADS, the policy decision point, which can also be embedded in Go applications), the `spctl` command-line tool, and integration samples for Docker, Kubernetes and Istio. See the [overview](https://engine.speedle.io/docs/overview/) for how these map to common authorization terms.

This project is based on the original Speedle open source project, which is hosted at https://github.com/oracle/speedle under UPL.

## Who are we

We are the founding members of Speedle project. Now we are not Oracle employees and consequently not contributors of Speedle project on GitHub anymore. But we still stay with…

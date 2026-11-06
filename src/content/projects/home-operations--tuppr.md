---
repo: "home-operations/tuppr"
name: "tuppr"
description: "Kubernetes controller to upgrade Talos and Kubernetes"
readmeQualityOk: true
url: "https://github.com/home-operations/tuppr"
homepage: "https://tuppr.home-operations.com/"
language: "Go"
languages: ["Go", "YAML"]
languagePcts: [63, 27]
topics: ["kubernetes", "talos", "0ver"]
stars: 335
forks: 29
openIssues: 4
closedIssues: 76
watchers: 2
contributors: 27
recentReleases: 0
createdAt: "2025-09-16T22:01:48Z"
lastCommitAt: "2026-11-06T02:22:24Z"
lastReleaseAt: "2025-09-20T23:51:45Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 40
maintainers: ["renovate[bot]", "sticky-gecko[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d1408255fe782defa3c2a6c55acccefbff06d068516ab047b85ea47201a0ad/home-operations/tuppr"
---

# tuppr

A Kubernetes controller for automated, orchestrated upgrades of **Talos Linux**
and **Kubernetes**. Declare a target version in a custom resource; tuppr plans
and executes the rollout - draining, upgrading, rebooting, and health-checking
each node in turn (or in parallel batches) - always driving the upgrade from a
healthy node, so it never self-upgrades the node it runs on.

📖 **Docs site: <https://tuppr.home-operations.com/>** - requirements,
quickstart, upgrade coordination, Talos and Kubernetes upgrade options,
notifications (Apprise + chaski), monitoring, operations, and chart values.

## When to use it

- You run Talos Linux and want version upgrades driven by the Kubernetes API
  (GitOps-friendly) instead of running `talosctl upgrade` by hand.
- You want the rollout orchestrated: health-gated, one plan at a time, with
  drain, reboot, and node-readiness verification handled for you.
- You want to keep the Kubernetes version in step through the same declarative
  flow.

## When _not_ to use it

- You need tuppr to pick a _safe_ version for you. It upgrades to exactly the
  version you specify and does not enforce Talos's sequential upgrade path -
  that is your…

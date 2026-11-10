---
repo: "dumkin/k10s"
name: "k10s"
description: "A fast desktop client for fleets of Kubernetes clusters."
readmeQualityOk: true
url: "https://github.com/dumkin/k10s"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [62, 33]
topics: ["desktop-app", "devops", "kubeconfig", "kubernetes", "kubernetes-dashboard", "kubernetes-gui", "multi-cluster", "rust", "sre", "tauri"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-10-04T13:46:23Z"
lastCommitAt: "2026-11-10T11:07:56Z"
lastReleaseAt: "2026-10-08T13:18:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 41
maintainers: ["dumkin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1404460902/fb6dacda-9117-4805-874d-494675cab04d"
---

Every cluster in one live table. Made for people without cluster-admin. Driven from the keyboard.

k10s is for people who look after many clusters at once: the zones of one data center, regions, staging and production. Often they can see only a few namespaces in each. k10s puts all of those clusters in one table, checks your permissions before you act, and stays fast when the fleet is large.

It's free and open source. No account, no telemetry, no license server.

## Why k10s

### Built for a fleet, not for one cluster

Pick any number of contexts, and their objects land in one live table with a cluster column and a status strip on top. Clusters connect in parallel and independently, so a slow or broken one never holds the rest back. Contexts that differ only by a zone, like `prod-eu-z1`, `prod-eu-z2` and `prod-eu-z3`, fold into one group you select with a click. Columns are merged by name across clusters: an operator that is newer in one zone doesn't shift the table. You get one SSO prompt for all of them, tokens are renewed before they expire, and watches restart by themselves after sleep or a network change.

### Works without cluster-admin

Most clients assume you can list…

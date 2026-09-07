---
repo: "ravirann/lumen"
name: "lumen"
description: "Open-source, local-first Kubernetes desktop workbench for cluster exploration, debugging, and operations."
readmeQualityOk: true
url: "https://github.com/ravirann/lumen"
homepage: "https://github.com/i-am-uranium/lumen"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [75, 24]
topics: ["devops", "k8s", "kubernetes", "kubernetes-cluster", "kubernetes-dashboard"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-04T05:48:27Z"
lastCommitAt: "2026-09-07T08:35:29Z"
lastReleaseAt: "2026-05-09T17:20:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["dependabot[bot]", "clkravi", "ravirann"]
openGraphImageUrl: "https://opengraph.githubassets.com/be4c8979a767e42a5f673daf9f8300517663c06ac2f73ff536db5c6d4b5d64e9/ravirann/lumen"
---

# Lumen

Lumen is an open source desktop workbench for Kubernetes clusters. It gives operators and developers a fast local UI for cluster discovery, workload triage, logs, events, YAML inspection, port forwarding, Helm release operations, and pod shell sessions.

Lumen exists for teams and individuals who want a capable Kubernetes dashboard without sending cluster access through a hosted SaaS control plane.

## Scope

Lumen is intentionally local-first:

- Reads cluster access from the user's kubeconfig.
- Talks directly to Kubernetes APIs from the Tauri app.
- Does not require a hosted backend, gateway, or SaaS account.
- Keeps cluster state and UI preferences on the user's machine.

## Features

- Multi-context fleet view with health probes and soft-disconnect.
- Namespace-aware workload explorer for core Kubernetes resources and long-tail resource families.
- Resource detail drawer with events, YAML, labels, owner references, pod metrics, container state, and kind-specific insights.
- Rich detail views for RBAC, storage, services, ingress, NetworkPolicy, HPA, PDB, ResourceQuota, and LimitRange resources.
- Logs with virtualized rendering, search, pause/resume, bounded buffers,…

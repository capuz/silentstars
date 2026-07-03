---
repo: "mogenius/mogenius-operator"
name: "mogenius-operator"
description: "mogenius-operator is a Go (>=1.25) service that coordinates cluster resources, patterns, metrics collection, and auxiliary runtime capabilities for the mogenius platform."
url: "https://github.com/mogenius/mogenius-operator"
homepage: "https://mogenius.com"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["cloud", "golang", "kubernetes", "operator", "helm-charts"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2022-12-20T20:43:37Z"
lastCommitAt: "2026-07-03T06:23:29Z"
lastReleaseAt: "2023-09-28T06:29:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 73
maintainers: ["beneiltis", "semantic-release-bot", "mogenius-renovate-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3eddc40c4ea3785d9f11395e13216263892aa40d971751917802eee7f0152d2/mogenius/mogenius-operator"
---

</p>
<h1 align="center">mogenius-operator</h1>

---

Go (≥1.25) operator that manages CRDs, Helm deployments, metrics collection, WebSocket communication, and IaC for the mogenius platform.

---

## Architecture

Modular packages under `src/`:

- `cmd/` – CLI entry points (cluster, nodemetrics, system, config).
- `core/` – lifecycle, reconcilers, socket API, node metrics collector.
- `kubernetes/` – resource CRUD, backups, issuers, cronjobs, etc.
- `crds/` – Custom Resource Definitions (Workspace, User, Grant).
- `k8sclient/` – Kubernetes client provider & kubeconfig.
- `valkeyclient/` – Valkey/Redis caching & time-series helpers.
- `websocket/` – WebSocket multiplexing with auto-reconnect.
- `xterm/` – Terminal/shell access over WebSocket.
- `helm/` – Helm SDK integration & chart management.
- `iacmanager/` – Infrastructure-as-Code orchestration.
- `networkmonitor/` – Network traffic collection (eBPF via snoopy, or procdev).
- `containerenumerator/` – Container PID discovery via cgroup inspection.
- `cpumonitor/`, `podstatscollector/`, `rammonitor/` – CPU, pod & RAM telemetry.
- `config/` – Immutable config with validation & change callbacks.
- `logging/` – Structured slog with…

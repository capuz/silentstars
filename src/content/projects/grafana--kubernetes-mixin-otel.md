---
repo: "grafana/kubernetes-mixin-otel"
name: "kubernetes-mixin-otel"
description: "An OTel-native version of kubernetes-mixin"
readmeQualityOk: true
url: "https://github.com/grafana/kubernetes-mixin-otel"
language: "Jsonnet"
languages: ["Jsonnet", "Go"]
languagePcts: [54, 24]
stars: 13
forks: 2
openIssues: 10
closedIssues: 2
watchers: 3
contributors: 55
recentReleases: 0
createdAt: "2025-09-26T15:34:16Z"
lastCommitAt: "2026-11-03T19:05:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 54
maintainers: ["renovate-sh-app[bot]", "sleepyfoodie", "skl"]
openGraphImageUrl: "https://opengraph.githubassets.com/11fb4f88abed68022069a871c56d708df1267b15512c6c9ae0ed1146b4f2580d/grafana/kubernetes-mixin-otel"
---

# kubernetes-mixin-otel

## Local development

Run the following command to setup a local [k3d](https://k3d.io/stable/) cluster:

```shell
make dev
```

You should see the following output if successful:

```shell
╔═══════════════════════════════════════════════════════════════╗
║             🚀 Development Environment Ready! 🚀              ║
║                                                               ║
║   Run `make dev-port-forward`                                 ║
║   Grafana will be available at http://localhost:3000          ║
║                                                               ║
║   Data will be available in a few minutes.                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

To delete the cluster, run the following:

```shell
make dev-down
```

## KWOK (lightweight alternative)

For a lightweight simulated cluster (no real containers), use [KWOK](https://kwok.sigs.k8s.io/):

```shell
make kwok
```

This creates a simulated Kubernetes cluster with fake nodes/pods (default: 50 nodes, 200 pods), useful for testing dashboard queries without heavy resource…

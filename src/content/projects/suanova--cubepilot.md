---
repo: "suanova/cubepilot"
name: "cubepilot"
description: "Kubernetes-native AI assistant platform with per-user OpenClaw agents, persistent sessions, skills, and streaming chat."
readmeQualityOk: true
url: "https://github.com/suanova/cubepilot"
language: "Go"
languages: ["Go"]
languagePcts: [78]
stars: 5
forks: 1
openIssues: 17
closedIssues: 30
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T12:28:28Z"
lastCommitAt: "2026-09-07T08:35:15Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 93
undervaluedScore: 53
maintainers: ["zhujian7", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f00199f43a40850602709f5a6bebe78a214cb021cb73b2d7d2727c852e179340/suanova/cubepilot"
---

# CubePilot

CubePilot is the intelligent assistant of the CubeStack platform. It implements
the two core capabilities described in the module design document (extension
points E1/E2, FR-M2/M3):

1. **Per-user agent instance lifecycle (K8s Pod)** -- the Instance Manager
   controller provisions / self-heals / optionally reclaims per-user OpenClaw
   Pods through the Kubernetes API. Sessions and memory survive instance
   rebuilds (each instance has its own PVC).
2. **Conversational loop** -- a real OpenClaw runtime (DeepSeek V4 Flash) acts
   under the guidance of the capability catalog (Skills), calls `exec` to run
   `kubectl` against the same cluster, and streams results back to the Portal
   over SSE.

## Architecture

```
browser (host) -- kubectl port-forward --- inside the kind cluster:
  cubepilot Deployment (assistant service + instance-manager controllers)
     ├--- per-user OpenClaw Pod  svc/agent-<user> (ClusterIP:18789)
     │         exec --- kubectl (in-cluster SA token) --- same kind cluster
     └--- K8s API (controller-runtime / client-go): Pod/PVC/Service lifecycle
```

- Per-user isolation = **Pod + dedicated PVC** (NFR-002); sessions persist on
  each PVC…

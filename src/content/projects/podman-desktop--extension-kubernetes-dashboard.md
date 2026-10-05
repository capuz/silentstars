---
repo: "podman-desktop/extension-kubernetes-dashboard"
name: "extension-kubernetes-dashboard"
description: "Kubernetes Dashboard extension for Podman Desktop"
readmeQualityOk: true
url: "https://github.com/podman-desktop/extension-kubernetes-dashboard"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [75, 23]
topics: ["hacktoberfest", "kubernetes", "podman-desktop"]
stars: 17
forks: 18
openIssues: 64
closedIssues: 127
watchers: 1
contributors: 16
recentReleases: 1
createdAt: "2025-06-26T12:56:10Z"
lastCommitAt: "2026-10-05T10:47:55Z"
lastReleaseAt: "2026-09-24T11:02:03Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 77
maintainers: ["dependabot[bot]", "feloy", "cdrage"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1c8a55aedfca6704a096e7305a974b1245e24722c2014f9d25f7f2d0fcbf07c/podman-desktop/extension-kubernetes-dashboard"
---

# Kubernetes dashboard for Podman Desktop

Monitor Kubernetes clusters from Podman Desktop.

## Topics

- [Technology](#technology)
- [Use case](#use-case)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Advanced usage](#advanced-usage)
- [Preferences](#preferences)
- [Known issues](#known-issues)
- [Contributing](#contributing)

## Technology

Kubernetes dashboard uses
[`@kubernetes/client-node`](https://github.com/kubernetes-client/javascript) to access
the current Kubernetes context. Resource watches keep the dashboard current after
cluster changes.

The extension service sends state through an RPC layer. A Svelte 5 webview presents
the cluster resources in Podman Desktop.

```text
Kubernetes API
      ↕
@kubernetes/client-node
      ↕
Extension service ↔ RPC ↔ Svelte webview
```

## Use Case

The Kubernetes dashboard extension is intended to provide an overview / informative peak to your Kubernetes cluster with some light administration work.

- Review cluster workloads without a separate dashboard, done all within Podman Desktop.
- Inspect resource status, events, YAML files, and permissions.
- Apply YAML, patch resources, and delete…

---
repo: "ironcore-dev/boot-operator"
name: "boot-operator"
description: "Kubernetes-based controller to manage Boot Infrastructure e.g. HTTPBoot, IPXEBoot"
url: "https://github.com/ironcore-dev/boot-operator"
homepage: "https://ironcore.dev/boot-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 6
forks: 5
openIssues: 12
closedIssues: 37
watchers: 14
contributors: 17
recentReleases: 0
createdAt: "2024-03-22T11:57:24Z"
lastCommitAt: "2026-06-29T07:24:02Z"
lastReleaseAt: "2025-04-17T09:40:41Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 76
maintainers: ["dependabot[bot]", "hardikdr", "atd9876"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1ff6be20ee3c0fa0faf185f59c654053262fdab8c80079289a057f9e71df4cc/ironcore-dev/boot-operator"
discussionCount: 0
---

# boot-operator

The Boot Operator is a Kubernetes controller designed to streamline the management of Boot infrastructure such as HTTPBoot within Kubernetes environments. This operator simplifies network booting processes by automating HTTPBoot UKI URL generation and ignition content delivery based on Kubernetes Custom Resource Definitions (CRDs).

## Key Components
- __HTTP Boot Server__: Serves dynamic HTTP Boot Responses and ignition content through HTTP endpoints, tailored to individual machine specifications.

- __Reconciler__: Configures the HTTP Server based on the desired state specified in `HTTPBootConfig` CRs, ensuring the server's configuration aligns with cluster resources.

- __Translator (Optional)__: Converts `BootConfig` CustomResources from MetalAPI provided by `Ironcore` into the format expected by the HTTPBoot Operator, enhancing integration capabilities.

## HTTP Server Endpoints
- `/ignition/{UUID}`: Matches an `HTTPBootConfig` using the provided `{UUID}` (Spec.systemUUID) and serves the associated ignition content.

- `/httpboot`: Identifies the corresponding `HTTPBootConfig` based on the requester's system IP (Spec.SystemIP). It then returns the customized…

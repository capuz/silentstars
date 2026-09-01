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
stars: 5
forks: 17
openIssues: 68
closedIssues: 103
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2025-06-26T12:56:10Z"
lastCommitAt: "2026-09-01T08:50:51Z"
lastReleaseAt: "2026-02-10T15:07:55Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 89
maintainers: ["dependabot[bot]", "cdrage", "feloy"]
openGraphImageUrl: "https://opengraph.githubassets.com/19547bd30ea41c31f7b616448552aad5ce2d8b8183212f3be208085ee10da614/podman-desktop/extension-kubernetes-dashboard"
---

# Kubernetes Dashboard Podman Desktop Extension

Kubernetes Dashboard is an open source extension for Podman Desktop to monitor Kubernetes clusters.

The Kubernetes Dashboard detects your Kubeconfig file, and connects to the current Kubernetes context.
Any change of Kubernetes context (either from Podman Desktop or by editing the Kubeconfig file with another tool)
is detected by the dashboard, which disconnects from the previous current context and connects to the new one.

## Resources

A Dashboard page provides a synthetic view of the main resources present in the Kubernetes context:

- non-namespaced resources: nodes and namespaces,
- namespaced resources: workloads (deployments, pods, jobs, cronjobs), services (services, ingresses, routes) and configuration and storage (persistent volume claims, configmaps, secrets).

You can access from the dashboard, or from the menu, the list of resources of a specific kind (for example, the list of Pods).

From this list, you have access to the details for a specific resource, including:

- a summary of the resource (extracted from the metadata, spec and status of the resource),
- a raw JSON representation of the resource,
- a utility to…

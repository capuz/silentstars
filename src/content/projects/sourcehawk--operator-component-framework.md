---
repo: "sourcehawk/operator-component-framework"
name: "operator-component-framework"
description: "Composable framework for building Kubernetes operators."
readmeQualityOk: true
url: "https://github.com/sourcehawk/operator-component-framework"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["controllers", "framework", "kubernetes", "kubernetes-controllers", "kubernetes-operators", "operators"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 40
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T19:26:35Z"
lastCommitAt: "2026-10-03T22:04:49Z"
lastReleaseAt: "2026-05-24T16:17:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 52
maintainers: ["sourcehawk", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175488137/1fc01f71-2b20-45f1-8334-06a8497f04c8"
---

# Operator Component Framework

A Go framework for building Kubernetes operators that stay maintainable as they grow. It pulls reconciliation mechanics,
status reporting, and lifecycle behavior into reusable building blocks (**components** and **resource primitives**), so
your controllers stay thin and focused on construction and orchestration, without sacrificing customizability where it
matters.

> [!NOTE]
>
> This framework is not a replacement for [controller-runtime](https://github.com/kubernetes-sigs/controller-runtime).
> It is a library you use inside controller-runtime reconcilers, such as in Kubebuilder-generated projects, to manage
> the layers between the reconciler and the Kubernetes resources it manages.

## Architecture

An operator built with this framework has two layers between the controller and raw Kubernetes objects:

```mermaid
graph TB
    subgraph controller [" "]
        R["⚪ Your Reconciler"]
    end

    subgraph components [" "]
        C1["🔵 Web Interface component"]
        C2["🔵 Monitoring component"]
    end

    subgraph primitives [" "]
        P1["🟢 ConfigMap"]
        P2["🟢 Deployment"]
        P3["🟢 Service"]
        P4["🟢…

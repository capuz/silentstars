---
repo: "kubeflow/dashboard"
name: "dashboard"
description: "Kubeflow Central Dashboard is the web interface for Kubeflow"
readmeQualityOk: true
url: "https://github.com/kubeflow/dashboard"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [42, 26]
stars: 20
forks: 68
openIssues: 26
closedIssues: 82
watchers: 4
contributors: 255
recentReleases: 0
createdAt: "2024-07-10T23:10:35Z"
lastCommitAt: "2026-10-15T08:32:52Z"
lastReleaseAt: "2026-06-02T22:24:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 72
maintainers: ["dependabot[bot]", "Raakshass", "christian-heusel"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba56a420d41e9c41f0c021160f73ec37484eb2792743acedf874fd27aa755dd0/kubeflow/dashboard"
---

# Kubeflow Dashboard

[Kubeflow Dashboard](https://www.kubeflow.org/docs/components/central-dash/overview/) is the web-based hub of a Kubeflow Platform.
It exposes the access controlled web interfaces for Kubeflow components and more.

> [!NOTE]
> 
> Historically, the dashboard code lived in the [`kubeflow/kubeflow`](https://github.com/kubeflow/kubeflow) repository.
> Please see [`kubeflow/kubeflow#7549`](https://github.com/kubeflow/kubeflow/issues/7549) for more information.

## What is Kubeflow Dashboard?

Key features of Kubeflow Dashboard include:

- Access to the [web interfaces](https://www.kubeflow.org/docs/components/central-dash/overview/#navigation) of Kubeflow components.
- Authorization using [Kubeflow Profiles](https://www.kubeflow.org/docs/components/central-dash/profiles/) and Kubernetes Namespaces.
   - _Note, authentication depends on how you [install](https://www.kubeflow.org/docs/started/installing-kubeflow/#kubeflow-platform) your Kubeflow Platform, and is not directly handled by Kubeflow Dashboard._
- Ability to [Customize](https://www.kubeflow.org/docs/components/central-dash/customize/) and include links to third-party applications.

## Components

In this…

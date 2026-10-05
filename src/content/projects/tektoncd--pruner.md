---
repo: "tektoncd/pruner"
name: "pruner"
description: "A Kubernetes controller that automatically manages the lifecycle of Tekton resources by cleaning up completed PipelineRuns and TaskRuns based on configurable policies."
readmeQualityOk: true
url: "https://github.com/tektoncd/pruner"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["kubernetes", "customresource-pruner", "event-driven-controller", "tekton-pruner"]
stars: 6
forks: 19
openIssues: 10
closedIssues: 10
watchers: 1
contributors: 23
recentReleases: 2
createdAt: "2025-08-18T14:02:32Z"
lastCommitAt: "2026-10-05T10:47:17Z"
lastReleaseAt: "2026-08-14T12:54:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 91
maintainers: ["dependabot[bot]", "infernus01", "khrm"]
openGraphImageUrl: "https://opengraph.githubassets.com/755cf1194592fd563cd556df022ae9d649cac144af3e26c6fc62b7a5ab2a913d/tektoncd/pruner"
discussionCount: 0
---

# Tekton Pruner

Tekton Pruner manages the lifecycle of Tekton resources by automatically cleaning up completed PipelineRuns and TaskRuns based on configurable time-based (TTL) and history-based policies.

> 📖 **For comprehensive architecture details, design decisions, and data flows, see [ARCHITECTURE.md](https://github.com/tektoncd/pruner/blob/HEAD/ARCHITECTURE.md)**

## Overview

Tekton Pruner provides event-driven and configuration-based cleanup through four controllers:
- **Main Pruner Controller**: Processes cleanup based on ConfigMap settings
- **Namespace Pruner Config Controller**: Watches namespace-level ConfigMaps
- **PipelineRun Controller**: Handles PipelineRun events
- **TaskRun Controller**: Handles standalone TaskRun events

## Key Features

- **Time-based Pruning (TTL)**: Delete resources after specified duration (in seconds) using `ttlSecondsAfterFinished`
- **History-based Pruning**: Retain fixed number of runs using `successfulHistoryLimit`, `failedHistoryLimit`, or `historyLimit`
- **Hierarchical Configuration**: Allows users to specify cluster-wide or per Namespace or per group of resources within a Namespace
- **Flexible Selectors**: Group resources by…

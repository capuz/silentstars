---
repo: "dev-hato/actions-workflow-metrics"
name: "actions-workflow-metrics"
description: "A GitHub Actions for collecting system metrics during workflows and outputting Mermaid charts"
readmeQualityOk: true
url: "https://github.com/dev-hato/actions-workflow-metrics"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-01-25T14:10:29Z"
lastCommitAt: "2026-10-19T09:14:10Z"
lastReleaseAt: "2026-07-21T23:15:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["renovate[bot]", "massongit", "Goryudyuma"]
openGraphImageUrl: "https://opengraph.githubassets.com/194a7c6685c2221960d12691b5245f55c0395bb9420a4a541b95895ccbeac416/dev-hato/actions-workflow-metrics"
---

# actions-workflow-metrics

English | [日本語](https://github.com/dev-hato/actions-workflow-metrics/blob/HEAD/README.ja.md)

A GitHub Actions for collecting system metrics during workflows and outputting Mermaid charts.

## Features

- **System Metrics Collection**: Collects CPU load and memory usage in real-time during workflow execution
- **Per-Step Metrics**: Breaks down metrics for each workflow step using the GitHub API
- **Mermaid Chart Generation**: Visualizes collected metrics as Mermaid stacked bar charts
- **Job Summary Output**: Automatically displays charts in GitHub Actions job summary

## Output Example

The following charts and data are output.

### CPU Loads

Stacked bar chart of system/user CPU load.

### Memory Usages

Stacked bar chart of active/available memory.

### Artifacts

JSON data of CPU Loads and Memory Usages.

## Usage

This action is designed to be executed at the **beginning** of a workflow.

```yaml
name: Example Workflow

on: [push]

jobs:
  example:
    runs-on: ubuntu-latest
    permissions:
      # Required for private repositories
      actions: read
    steps:
      # Run actions-workflow-metrics at the beginning of the workflow
      - name:…

---
repo: "Jiahong-Que-9527/SoloLakehouse"
name: "SoloLakehouse"
description: "A Git-first Data & AI engineering initiative across Google Cloud, Databricks, and self-hosted infrastructure. One source of truth for independent projects, reproducible workflows, and automated delivery."
readmeQualityOk: true
url: "https://github.com/Jiahong-Que-9527/SoloLakehouse"
homepage: "https://github.com/Jiahong-Que-9527/SoloLakehouse"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-engineering", "data-platform", "lakehouse", "minio", "mlflow", "trino", "apache-iceberg", "apache-superset", "dagster", "docker-compose"]
stars: 63
forks: 13
openIssues: 5
closedIssues: 17
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-25T21:14:43Z"
lastCommitAt: "2026-11-15T11:22:48Z"
lastReleaseAt: "2026-07-31T22:55:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 35
maintainers: ["Jiahong-Que-9527"]
openGraphImageUrl: "https://opengraph.githubassets.com/357ec08f7d120ebb6015a7ea7868d6b04c240fd96d399ed8372dc09a04733a8c/Jiahong-Que-9527/SoloLakehouse"
discussionCount: 0
---

# SoloLakehouse

SoloLakehouse is a Git-first Data & AI engineering initiative. It brings
independent projects together across Google Cloud, Databricks and self-hosted
infrastructure, with an emphasis on reproducible data and ML workflows.

The current `main` contains project briefs, a reusable project template and
the engineering roadmap. The six projects below are planned. The earlier
self-hosted lakehouse is retained as a versioned reference.
[Legacy reference snapshot](https://github.com/Jiahong-Que-9527/SoloLakehouse/tree/741e6da82cdc2cad207aa6ee707b8fb157b0174a)

## Architecture

The illustration shows the target architecture. Its Local lane depicts Argo CD.
The current [roadmap](https://github.com/Jiahong-Que-9527/SoloLakehouse/blob/HEAD/docs/roadmap.md) uses Flux for the planned K3s milestones.

### Project delivery flow

```mermaid
flowchart TB
    accTitle: SoloLakehouse target project delivery
    accDescr: GitHub holds project definitions. Planned Actions checks select affected projects. Each project can release independently to Google Cloud, Databricks, or local infrastructure.

    repo["GitHub repository<br/>Code · contracts · configuration"]
    scope["GitHub…

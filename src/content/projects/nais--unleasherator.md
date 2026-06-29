---
repo: "nais/unleasherator"
name: "unleasherator"
description: "Kubernetes Operator for Unleash feature toggle service"
url: "https://github.com/nais/unleasherator"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["frontend-plattform", "kubernetes", "kubernetes-operator", "unleash", "unleash-operator"]
stars: 11
forks: 4
openIssues: 13
closedIssues: 54
watchers: 1
contributors: 18
recentReleases: 0
createdAt: "2023-01-04T13:24:56Z"
lastCommitAt: "2026-06-29T07:22:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 68
maintainers: ["dependabot[bot]", "Starefossen", "sechmann"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/585160518/9afa4e9c-e435-4b5f-aa1a-862e6c0accb1"
---

# Unleasherator

Kubernetes operator for managing [Unleash](https://getunleash.io) - the open-source feature toggle service.

It has support for creating and managing Unleash instances and API tokens across multiple clusters or environments and only depends on Kubernetes native resources.

Used in production at the Norwegian Labour and Welfare Administration (NAV).

```mermaid
graph LR
  postgres[PostgreSQL]

  subgraph Kubernetes
    subgraph unleasherator-system
      unleasherator[Unleasherator]
    end

    subgraph my-namespace
      unleash[Unleash]
      apiToken[ApiToken]
      tokenSecret[Secret]

      deployment[Deployment]
    end
  end

  unleasherator -- manages --> unleash
  unleasherator -- manages --> apiToken
  apiToken -..- unleash
  apiToken -..-> tokenSecret
  unleash -- uses --> postgres

  tokenSecret -..-> deployment
```

## Description

Unleasherator is a Kubernetes operator for managing Unleash instances and API tokens across multiple clusters or environments. It is built using the [Kubebuilder](https://book.kubebuilder.io/) framework and is cloud and infrastructure agnostic.

## Key Features

- **Unleash Instance Management**: Deploy and manage Unleash…

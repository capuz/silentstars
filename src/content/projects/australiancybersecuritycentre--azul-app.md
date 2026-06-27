---
repo: "AustralianCyberSecurityCentre/azul-app"
name: "azul-app"
description: "This repo contains the Helm Charts for Azul."
url: "https://github.com/AustralianCyberSecurityCentre/azul-app"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [60, 40]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-11-07T00:51:41Z"
lastCommitAt: "2026-06-27T00:38:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/51ae17ad37a86b8b3d6138fde7606088157d98114ea1075d723a1da973942e33/AustralianCyberSecurityCentre/azul-app"
---

# Azul base app

This repo contains the Helm Charts for Azul.

## Validation

[json schema](https://json-schema.org/understanding-json-schema/reference) validates the `values.yaml` entries.
Azul helm charts use the [draft-07](https://json-schema.org/draft-07/schema)
schema version.

This is the latest release that Helm supports (see[here](https://github.com/helm/helm/pull/11340)
and [here](https://github.com/helm/helm/issues/10732)) and vscode knows how to parse.

## ./azul

The main Helm Chart for Azul.
Ensure you read and understand the contents of `values.yaml`.

You'll need to create your own `values.yaml` with content relevant to your specific deployment environment.

### Redis

Redis is integrated into the Azul chart as its very unlikely you'll ever want to run redis elsewhere.

Redis can be updated by updating the image in the images list.

## ./infra

The Helm chart to deploy optional infrastructure related components of Azul is located in `infra`.
This allows installation of services that Azul relies on such as Opensearch and Minio.

In production it is recommended that large components such as Opensearch, Kafka and Minio
be installed outside the K8s cluster on dedicated…

---
repo: "camunda/keycloak"
name: "keycloak"
description: "Camunda's Keycloak Docker image: AWS-wrapped and PostgreSQL-compatible"
readmeQualityOk: true
url: "https://github.com/camunda/keycloak"
homepage: "https://hub.docker.com/r/camunda/keycloak"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [88]
topics: ["c8", "camunda", "container", "docker", "keycloak", "team-infrastructure-experience"]
stars: 11
forks: 4
openIssues: 2
closedIssues: 14
watchers: 3
contributors: 47
recentReleases: 0
createdAt: "2023-08-10T13:56:51Z"
lastCommitAt: "2026-09-07T08:34:53Z"
lastReleaseAt: "2024-05-06T08:42:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 76
maintainers: ["renovate[bot]", "leiicamundi", "Kerruba"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dcae94a5a93d412e97405fc0c4fa650c8bea0790067db0680a81a4923fe0c0b/camunda/keycloak"
---

# Camunda Keycloak Container Image

This Docker image provides a generic Keycloak setup based on [bitnami/keycloak](https://hub.docker.com/r/bitnami/keycloak) or the [official Keycloak image from Quay.io](https://quay.io/repository/keycloak/keycloak). It also includes:
* an optional AWS wrapper, allowing for the use of AWS Identity and Access Management (IAM) Roles for Service Accounts (IRSA) for database authentication.
* an optional [Camunda Identity](https://docs.camunda.io/docs/self-managed/components/management-identity/overview/) login theme

## Image Variants

This repository provides three main image variants:

> **⚠️ Important Note about Bitnami Images**
> Due to [Bitnami's catalog changes](https://github.com/bitnami/containers/issues/83267), starting August 28th, 2025, new Bitnami container images are no longer published to Docker Hub. This repository now consumes images from the `docker.io/bitnamilegacy` repository for continued support.

Users should consider migrating to **Quay-based images** which are actively maintained and recommended for production use.

### 🦆 Quay-based Images (`docker.io/camunda/keycloak:quay-*` and `latest`) **[Recommended]**
Based on the…

---
repo: "matzegebbe/k8s-copycat"
name: "k8s-copycat"
description: "A Kubernetes controller that synchronizes container images from cluster workloads to external registries."
readmeQualityOk: true
url: "https://github.com/matzegebbe/k8s-copycat"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["container", "k8s", "kubernetes", "operator"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-08-28T20:32:37Z"
lastCommitAt: "2026-09-08T08:15:14Z"
lastReleaseAt: "2025-09-25T07:02:34Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 78
maintainers: ["dependabot[bot]", "matzegebbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/513d89eb3d666a722bb659ccd1824832d731b3419fd924ca6a48560df456da7f/matzegebbe/k8s-copycat"
---

# k8s-copycat

> Your cluster’s insurance policy: A non-invasive controller that preserves and replicates every container image your workloads need to a registry you control.

## Table of Contents

- [Overview](#overview)
- [Why k8s-copycat?](#why-k8s-copycat)
- [Key Capabilities](#key-capabilities)
- [Getting Started](#getting-started)
  - [Deploy with Kubernetes manifests](#deploy-with-kubernetes-manifests)
- [Configuration](#configuration)
  - [Environment variables](#environment-variables)
  - [Digest-based mirroring](#digest-based-mirroring)
  - [Watching workloads](#watching-workloads)
  - [Repository prefix templating](#repository-prefix-templating)
  - [Lifecycle policies](#lifecycle-policies)
  - [Example configuration](#example-configuration)
  - [Registry credentials](#registry-credentials)
- [Troubleshooting mirrors](#troubleshooting-mirrors)
- [Inspiration](#inspiration)

## Overview

k8s-copycat monitors **Deployments**, **StatefulSets**, **DaemonSets**, **Jobs**, **CronJobs**, and **Pods** to mirror their container images into **AWS ECR** or any other Docker-compatible registry. It keeps your recovery registry in sync with what is actively running—no image swaps,…

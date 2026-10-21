---
repo: "lyngbak-cloud/container-os"
name: "container-os"
description: "Minimal, production-ready container operating systems by Miget — built on Ubuntu and Alpine with selectable runtimes (Docker, Podman) for secure, cloud-native workloads."
readmeQualityOk: true
url: "https://github.com/lyngbak-cloud/container-os"
homepage: "https://miget.com"
language: "Python"
languages: ["Python", "Dockerfile"]
languagePcts: [63, 28]
topics: ["alpine", "cloud-native", "docker-runtime", "immutable-os", "microvm", "paas", "paas-services", "podman", "ubuntu", "container-os"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-15T15:04:58Z"
lastCommitAt: "2026-10-21T17:31:04Z"
lastReleaseAt: "2026-01-22T20:09:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 52
maintainers: ["ktaraszk"]
openGraphImageUrl: "https://opengraph.githubassets.com/5043ccc5abbf6e37319ef7dfa80de7120d9b9ca1a29e5417c3e34e491cd6b77c/lyngbak-cloud/container-os"
---

# Miget Container OS

Miget Container OS provides the base runtime used by [Miget's](https://miget.com) Platform-as-a-Service and Cloud offerings. Each image bundles the tooling required to run container workloads inside a Miget MicroVM, delivering strong isolation while keeping familiar Docker or Podman workflows.

## What is a MicroVM?

Miget MicroVMs are lightweight virtual machines tailored for container execution. They boot a minimal userland, expose only the services required for workload orchestration, and rely on hardware virtualization for strong isolation. Compared with traditional nested containers, MicroVMs eliminate the need for user-namespace tricks or rootless shims-the workload runs with full privileges inside the VM while the host maintains isolation boundaries.

## Current Release: 1.0.33

### Component Versions

| Component | Ubuntu 22.04<br/>dockerd | Ubuntu 22.04<br/>podman | Ubuntu 24.04<br/>dockerd | Ubuntu 24.04<br/>podman | Alpine 3.19<br/>dockerd | Alpine 3.19<br/>podman | Alpine 3.20<br/>dockerd | Alpine 3.20<br/>podman | Alpine 3.21<br/>dockerd | Alpine 3.21<br/>podman | Alpine 3.22<br/>dockerd | Alpine 3.22<br/>podman |…

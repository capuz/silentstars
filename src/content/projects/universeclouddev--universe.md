---
repo: "universeclouddev/Universe"
name: "Universe"
description: "Distributed single-JAR cluster orchestrator for deploying and managing application instances across nodes"
readmeQualityOk: true
url: "https://github.com/universeclouddev/Universe"
homepage: "https://git.lunarlabs.dev/Scala/Universe/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["cloud", "cluster", "deployer", "deployment", "devops", "docker", "hazelcast", "kotlin", "ktor", "kubernetes"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-07T23:53:34Z"
lastCommitAt: "2026-07-06T07:04:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["AndyReckt", "ohemilyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e38720ae593ef269fdc95ce3215ef962b3ba5c71744c0b5ec1e41102bdb0419/universeclouddev/Universe"
---

# Universe

A single-JAR orchestrator for deploying and managing application instances across a cluster of nodes. Originally inspired by Minecraft cloud systems (CloudNet, SimpleCloud), Universe is designed as a general-purpose instance orchestrator with a clean extension API.

## Features

- **Master/Wrapper Cluster** — One Master node exposes a REST API; any number of Wrapper nodes execute instances via Hazelcast task dispatch.
- **Template-Based Deployment** — Instances are created from templates (file trees) with dynamic variable replacement.
- **Pluggable Runtimes** — Built-in `screen` and `tmux` runtimes; Docker and Kubernetes support via extensions.
- **Remote Template Storage** — S3-backed template storage extension for centralized template management.
- **Mesh Networking** — Tailscale extension exposes mesh-network IPs as template variables for cross-node connectivity.
- **Console & REST Commands** — Full command system accessible via console or HTTP API.
- **Single Fat JAR** — Master and Wrapper run from the same JAR; node type is determined by configuration.
- **GitOps & ArgoCD** — Sync templates from Git; export Kubernetes manifests for ArgoCD tracking.

##…

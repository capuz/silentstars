---
repo: "tibuntu/homeassistant-kubernetes"
name: "homeassistant-kubernetes"
description: "Homeassistant integration for Kubernetes"
readmeQualityOk: true
url: "https://github.com/tibuntu/homeassistant-kubernetes"
homepage: "https://tibuntu.github.io/homeassistant-kubernetes/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["home-assistant", "homeassistant", "homeassistant-custom-component", "homeassistant-integration", "k8s", "kubernetes", "smarthome"]
stars: 25
forks: 3
openIssues: 1
closedIssues: 32
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-07-19T07:19:04Z"
lastCommitAt: "2026-07-19T06:11:53Z"
lastReleaseAt: "2025-08-30T10:07:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["tibuntu", "AlyanPremani05"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fee171e9ca9548dc9c98693b3163c5c4a0011395c275b5fa2ae12b18d8fb647/tibuntu/homeassistant-kubernetes"
discussionCount: 2
---

# Home Assistant Kubernetes Integration

A Home Assistant integration for monitoring and controlling Kubernetes clusters.

## Features

- **Cluster Monitoring**: Monitor pods, nodes, deployments, statefulsets, daemonsets, cronjobs, and ingresses
- **Node Sensors**: Per-node sensors for status, IP addresses, memory/CPU resources, real-time usage metrics, and system information
- **Multi-Namespace Support**: Monitor a single namespace or all namespaces
- **Workload Control**: Scale, start, stop, and rolling-restart deployments, statefulsets, and daemonsets from Home Assistant
- **Pod Management**: Delete individual pods directly from the sidebar panel (requires HA admin role); per-pod sensors expose container-state diagnostics — CrashLoopBackOff, ImagePullBackOff, OOMKilled (including a recovered OOMKill that already restarted, via `last_terminated_reason`), and scheduling failures — plus a derived `problem`/`problem_reason` attribute for easy automations and alerts
- **Job Management**: Delete Jobs (including failed Jobs) via the sidebar panel or `kubernetes.delete_job` service; cascades to pods
- **CronJob Management**: Control CronJob suspension state and trigger jobs manually…

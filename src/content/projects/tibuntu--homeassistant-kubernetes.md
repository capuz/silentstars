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
stars: 29
forks: 8
openIssues: 1
closedIssues: 54
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-07-19T07:19:04Z"
lastCommitAt: "2026-11-21T11:37:43Z"
lastReleaseAt: "2025-08-30T10:07:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["tibuntu", "kryptt", "lukashankeln"]
openGraphImageUrl: "https://opengraph.githubassets.com/53cc46eb27d38a975c0f2e3050804ee1d8b8f1fbd76212f93bed23286bbcf94f/tibuntu/homeassistant-kubernetes"
discussionCount: 0
---

# Home Assistant Kubernetes Integration

A Home Assistant integration for monitoring and controlling Kubernetes clusters.

## Features

- **Cluster Monitoring**: Monitor pods, nodes, deployments, statefulsets, daemonsets, cronjobs, ingresses, services, Gateway API HTTPRoutes, and HorizontalPodAutoscalers
- **Real-Time Updates**: The Kubernetes Watch API streams resource changes into Home Assistant within seconds (enabled by default; falls back to interval polling automatically when watch is unavailable; a missing `watch` permission surfaces as a *Missing permissions* repair issue)
- **Node Sensors**: Per-node sensors for status, IP addresses, memory/CPU resources, real-time usage metrics, and system information, plus per-node Ready and pressure binary sensors
- **Cluster Alert Sensors**: *Degraded Workloads*, *Problem Pods*, *Restarting Pods*, *Nodes Under Pressure*, and *Failed Jobs* count what needs attention cluster-wide and list the offending resources in an attribute — one automation covers the whole cluster
- **Multi-Namespace Support**: Monitor a single namespace or all namespaces
- **Workload Control**: Scale, start, stop, and rolling-restart deployments, statefulsets, and…

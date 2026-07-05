---
repo: "gilesknap/tpi-k3s-ansible"
name: "tpi-k3s-ansible"
description: "Infrastructure as code"
readmeQualityOk: true
url: "https://github.com/gilesknap/tpi-k3s-ansible"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [51, 43]
stars: 33
forks: 5
openIssues: 13
closedIssues: 22
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2024-10-06T10:28:33Z"
lastCommitAt: "2026-07-05T20:56:03Z"
lastReleaseAt: "2026-04-08T20:46:15Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 59
maintainers: ["renovate[bot]", "gilesknap"]
openGraphImageUrl: "https://opengraph.githubassets.com/de76d5c759b65decd26186470465c22089693592b61367929af5486d8a816719/gilesknap/tpi-k3s-ansible"
discussionCount: 3
---

# K3s Cluster Commissioning

An **Infrastructure-as-Code** Ansible project that commissions a
[K3s](https://k3s.io/) Kubernetes cluster on
[Turing Pi](https://turingpi.com/) v2.5 boards (RK1 / CM4 compute modules)
and arbitrary additional Linux servers — fully idempotent and repeatable.

All cluster customisation lives in just **two files**
(`group_vars/all.yml` and `kubernetes-services/values.yaml`),
so you can fork the repo, edit those files, and have your own cluster running
in minutes.

## Architecture at a glance

The cluster is GitOps-first: Ansible bootstraps K3s and ArgoCD, then
ArgoCD syncs everything else from `kubernetes-services/` in this repo.
Stateful data lives on **static `local-nvme` PVs** — one per workload,
pinned to a specific node — with **daily and weekly CronJob backups to
NFS** on a NAS. This keeps operations simple (no replicated CSI driver)
while still surviving cluster rebuilds and giving off-cluster
point-in-time restore. See the
[**Interactive Architecture Showcase**](https://gilesknap.github.io/tpi-k3s-ansible/_static/architecture.html)
for a visual tour, the [architecture…

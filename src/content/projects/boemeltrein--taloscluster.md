---
repo: "Boemeltrein/TalosCluster"
name: "TalosCluster"
description: "My Kubernetes HomeCluster"
readmeQualityOk: true
url: "https://github.com/Boemeltrein/TalosCluster"
language: "Shell"
languages: ["Shell", "PowerShell"]
languagePcts: [56, 44]
topics: ["k8s-at-home", "kubernetes-cluster", "truecharts", "kubesearch"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-24T08:58:28Z"
lastCommitAt: "2026-11-14T10:41:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 66
maintainers: ["boemel-renovate[bot]", "Boemeltrein"]
openGraphImageUrl: "https://opengraph.githubassets.com/c45bc73d1e14f6f1787f4d27721c48a0b4fccc3fd89e36235eb4867fb8dafe97/Boemeltrein/TalosCluster"
---

# 🧊 Personal Talos Kubernetes Cluster · Boemeltrein 

*A self-hosted, GitOps-driven Kubernetes cluster built on Talos Linux, focused on reliability, observability, and clean automation.*

&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;

&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;

---

## 📌 Overview

This repository contains the full **GitOps-managed configuration** for my personal Kubernetes cluster.  
The cluster runs on **Talos Linux** and is fully declarative: every component, application, and configuration is defined in Git and continuously reconciled using **FluxCD**.

The cluster is deployed as a **single-node Talos Linux virtual machine running on a TrueNAS host**.  
The focus of this environment is learning, experimentation, and long-running homelab workloads rather than high availability.

Key goals of this setup:

* 🔁 **Reproducibility** – rebuild the entire cluster from Git  
* 🔒 **Immutability & Security** – minimal OS, no SSH, API-driven management  
* 📈 **Observability** – metrics, alerts, and status visibility  
* 🤖 **Automation-first** – updates, deployments, and testing without manual…

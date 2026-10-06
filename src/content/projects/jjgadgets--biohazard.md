---
repo: "JJGadgets/Biohazard"
name: "Biohazard"
description: "Glorifying jank that works | JJGadgets' HomeLab monorepo"
readmeQualityOk: true
url: "https://github.com/JJGadgets/Biohazard"
homepage: "https://jjgadgets.tech"
language: "Lua"
languages: ["Lua", "Vim Script", "Shell"]
languagePcts: [44, 24, 23]
topics: ["fluxcd", "gitops", "homelab", "infrastructure-as-code", "k8s-at-home", "talos", "yaml", "cilium", "kubernetes", "networkpolicy"]
stars: 91
forks: 17
openIssues: 30
closedIssues: 42
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-04-11T20:24:00Z"
lastCommitAt: "2026-10-06T10:42:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 47
maintainers: ["tinfoild[bot]", "JJGadgets"]
openGraphImageUrl: "https://opengraph.githubassets.com/bed14193b5d31e42d49d545a8ef27f23f3bbaa7b83bbfd0ddf729e1a29815882/JJGadgets/Biohazard"
discussionCount: 2
---

# Biohazard - JJ's Homelab Monorepo

**<ins>Glorifying jank that *works*.</ins>**

Powered by Flux, Kubernetes, Cilium, Talos, and jank. Amongst others.

<br><br>

---

## Overview

This is a mono repository for all the machines in my home infrasturcture, mainly focused around Kubernetes. The main goal is automation and being as hands-off as possible in manual labour and repeated tasks, while remaining agile in making changes to the cluster.

I also explore security solutions within my homelab, due to having my own PII and personal data on my infrastructure, as well as implementing security practices in a practical home "production" environment so that I can understand how things work and how each "security positive" change may impact the end user experience, resource usage, maintenance burden and other factors.

---

## Kubernetes

### Biohazard

This is my production home Kubernetes cluster. It is powered by Talos Linux, which allows for a Kubernetes-centric and appliance-like admin experience. This is a hyperconverged setup, with most of the compute handled here, as well as highly available (HA) application storage and critical data storage in the form of Rook-Ceph, backed up…

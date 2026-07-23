---
repo: "Negashev/aldaas"
name: "aldaas"
description: "App with Large Data as a service (for example postgres/mysql with 10gb+ storage)"
readmeQualityOk: true
url: "https://github.com/Negashev/aldaas"
homepage: "https://habr.com/ru/companies/rostelecom/articles/785562/"
language: "Shell"
languages: ["Shell", "Go Template", "Dockerfile"]
languagePcts: [47, 32, 22]
topics: ["argo", "ceph", "cicd", "docker", "kubernetes"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-18T16:02:54Z"
lastCommitAt: "2026-07-23T06:14:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["Negashev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/590523991/9267bcac-4a9d-4c05-b613-f8664af195e1"
discussionCount: 0
---

# aldaas
**A**pp with **L**arge **D**ata **a**s **a** **s**ervice - lifts a copy of the database from backups, and through a light proxy gives access to temporary databases and deletes these databases it it's not use.

### motivation
Your developers need a production-like database - to rollout their migrations or testing, but so that the developer databases do not overlap, besides, it takes a very long time for each developer to download a heavy database to their computer, sometimes it is tens of gigabytes, it is also necessary for CI/CD pipelines. 

### how it works
- rook.io snapshots!
- argo workflow+events automation
- light client (argo cli + aldaas script) as proxy to large DB

### configuration
I love rancher) and use [fleet](https://fleet.rancher.io) for quick prepare ceph and argo

- create kubernetes cluster (1.26 or high) with VolumeSnapshot feature
- install rook-ceph in with Volume Snapshot Class [see example](https://github.com/Negashev/aldaas/blob/main/fleet/ceph/fleet.yaml)
- install argo-events with `webhook.enabled`
- install argo-workflows with `server.ingress.enabled` and default serviceAccountName for workflow like…

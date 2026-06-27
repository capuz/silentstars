---
repo: "dream-num/helm-charts"
name: "helm-charts"
description: "Deployments for Univer Servers"
url: "https://github.com/dream-num/helm-charts"
homepage: "https://univer.ai/guides/sheet/server/docker"
language: "Shell"
languages: ["Shell"]
languagePcts: [72]
stars: 14
forks: 4
openIssues: 2
closedIssues: 4
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2023-12-06T08:13:41Z"
lastCommitAt: "2026-06-27T06:24:19Z"
lastReleaseAt: "2024-07-19T12:36:02Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 52
maintainers: ["jikkai", "zsq1234"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b5029485df7ea3d01f41c129c0518d60e91834a594dea2d838916bd6e8fa086/dream-num/helm-charts"
---

# Helm charts

The univer server deploy use in k8s and docker compose.

- [EN](./README.md)
- [CN](./README-CN.md)

## Install by docker compose

[Readme](./docker-compose/README.md)

## Install by k8s

1. Install [helm](https://helm.sh/docs/intro/install/).

2. Delpoy service.
```bash
helm install -n univer --create-namespace \
    --set global.istioNamespace="univer" \
    univer-stack oci://univer-acr-registry.cn-shenzhen.cr.aliyuncs.com/helm-charts/univer-stack

kubectl rollout restart -n univer deployment/collaboration-server
kubectl rollout restart -n univer deployment/universer
```

3. Set dns resolve to try demo.
```bash
# you can edit your local hosts file to simple resolve dns.
# default domain is: univer.example.com

open: http://univer.example.com
```

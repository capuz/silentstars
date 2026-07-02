---
repo: "WISVCH/gke-cluster"
name: "gke-cluster"
description: "The repo for the google cloud cluster config"
url: "https://github.com/WISVCH/gke-cluster"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 5
closedIssues: 0
watchers: 7
contributors: 17
recentReleases: 0
createdAt: "2022-10-03T15:31:43Z"
lastCommitAt: "2026-07-02T06:33:31Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 78
undervaluedScore: 65
maintainers: ["ChristiaanHuygens", "VicVsl", "robertdijk"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcdb4728535248fdc2c635c71d58cb43d37d2c3de0f0295fd4f7b2a40d4d1d4b/WISVCH/gke-cluster"
---

# WISCH Kubernetes Cluster

Welcome to the WISVCH Kubernetes Cluster repo. This repository is a collection of config files that make up the currently running kubernetes cloud deployment of WISVCH. The kubernetes cluster is configured to use:

- Kubernetes
- Fluxv2
- Helm
- Mozilla sops
- The CH charts repository: https://github.com/WISVCH/charts

It is recommended to read up on Kubernetes, fluxV2 and Helm before contributing.

## Quick start guide

Adding an application to the release cluster:

- Make a pull request at https://github.com/WISVCH/charts with a new chart.
- Add the secrets to the `./secrets` folder according to the instructions of the README.md in that folder
- Add the app to the `./apps` folder according to the instructions of the README.md in that folder

## Miscellaneous

FLux was originally bootstrapped with the command:

```bash
flux bootstrap github --components-extra=image-reflector-controller,image-automation-controller --read-write-key --owner=WISVCH --repository=gke-cluster --branch=main --path=./clusters/release --token-auth --personal
```

Age is used for secret encryption.
The public key is:…

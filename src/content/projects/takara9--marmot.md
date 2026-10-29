---
repo: "takara9/marmot"
name: "marmot"
description: "A simple, fast virtual server execution environment for verification, experimentation, and learning"
originalDescription: "検証、実験、そして学習のための、簡便で高速な仮想サーバーの実行環境"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/takara9/marmot"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [69, 29]
stars: 9
forks: 1
openIssues: 78
closedIssues: 201
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-06-26T12:32:25Z"
lastCommitAt: "2026-10-29T12:24:45Z"
lastReleaseAt: "2025-11-16T08:43:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 72
maintainers: ["takara9", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcc40914e2f0688a1bb22ed232343ce72d74b8bea67cd5ea9df231299ad44097/takara9/marmot"
discussionCount: 1
---

# Marmot — A simple, Kubernetes-ready private cloud you can start with a single server

**Just write YAML and run `mactl create -f`**, and within minutes you get "virtual servers", "virtual networks", "storage", and even "Kubernetes clusters" and "NLB/ALB" on a single Linux server in your hands.

*English: Marmot is a simple, declarative private cloud built on KVM. Define VMs, networks, volumes and even Kubernetes clusters in YAML, and run them from a single Ubuntu server.*

---

## Marmot in 30 seconds

Create virtual machines the same way you would write a Kubernetes manifest.

```yaml
# server-20.yaml
apiVersion: v1
kind: Server
metadata:
    name: server-20
spec:
    cpu: 1
    memory: 1024
    mmImage: ubuntu24.04
    auth:
        publicKey: "ssh-ed25519 AAAA... For marmot VMs"   # your own public key
        users:
         - ubuntu
    networkInterface:
        - networkname: host-bridge
```

```console
$ mactl create -f server-20.yaml
$ mactl get server
NAME        NODE      STATUS    CPU  RAM(MB)  IP-ADDRESS     NETWORK       AGE
----        ----      ------    ---  -------  ----------     -------       ---
server-20   marmot3   RUNNING   1    1024     192.168.1.20…

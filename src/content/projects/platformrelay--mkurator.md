---
repo: "PlatformRelay/MKurator"
name: "MKurator"
description: "Kubernetes Operator for IBM Message Queue"
readmeQualityOk: true
url: "https://github.com/PlatformRelay/MKurator"
homepage: "https://platformrelay.github.io/MKurator/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["ibm-mq", "kubebuilder", "kubernetes", "kubernetes-operator"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-02T16:48:35Z"
lastCommitAt: "2026-09-10T08:20:38Z"
lastReleaseAt: "2026-06-06T08:34:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["konih", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257411833/18a41b58-2ec1-483e-bf9e-ddf1df3de542"
---

</p>

# MKurator

A Kubernetes operator for declaratively managing **resources on an existing
IBM MQ Queue Manager** — queues, topics, channels, channel auth, and authority
records — over the mqweb REST API.

### Operator docs (start here)

Published site: **[platformrelay.github.io/MKurator](https://platformrelay.github.io/MKurator/)**

| Goal | Guide |
| --- | --- |
| First queue in minutes | [Quick start](https://platformrelay.github.io/MKurator/QUICKSTART/) |
| Install + connect + day-2 use | [Install and use](https://platformrelay.github.io/MKurator/INSTALL_AND_USE/) |
| Upgrade / webhook notes | [Upgrade](https://platformrelay.github.io/MKurator/UPGRADE/) |
| Metrics & scraping | [Observability](https://platformrelay.github.io/MKurator/OBSERVABILITY/) |

> [!IMPORTANT]
> MKurator manages objects **on an IBM MQ queue manager you already run**. It does
> **not** deploy or scale queue managers. The target QM must expose **mqweb**
> (Administrative REST) over HTTPS; credentials come from a Kubernetes `Secret`.

Status: the only served and stored API is **`messaging.mkurator.dev/v1beta1`**.
`v1alpha1` and the conversion webhook were removed in v0.15.0; follow the
[upgrade…

---
repo: "JetBrains/teamcity-operator"
name: "teamcity-operator"
description: "TeamCity Kubernetes Operator"
readmeQualityOk: true
url: "https://github.com/JetBrains/teamcity-operator"
homepage: "https://www.jetbrains.com/teamcity/"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 20
forks: 6
openIssues: 10
closedIssues: 4
watchers: 0
contributors: 16
recentReleases: 2
createdAt: "2025-10-28T13:36:53Z"
lastCommitAt: "2026-11-19T12:01:24Z"
lastReleaseAt: "2026-11-18T16:34:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 61
maintainers: ["AntonAleksandrov13", "felipecrs", "Yunir"]
openGraphImageUrl: "https://opengraph.githubassets.com/84a1342234a5cffaa3992afa1110773cc343b7f6ba72003a7e35a20e5ca73a6b/JetBrains/teamcity-operator"
---

# TeamCity Kubernetes Operator

TeamCity Operator is a Kubernetes operator that deploys and manages TeamCity servers using a Custom Resource Definition (CRD).

- Helm chart: charts/teamcity-operator
- CRD group/version: jetbrains.com/v1beta1, kind: TeamCity
- Sample manifests: `config/samples/v1beta1` (see also `config/samples/teamcity_full.yaml`)
- Annotations reference: see [Annotations](#annotations) below
- Development guide: docs/DEVELOPMENT.md
- Upgrade policy: [docs/UPGRADE-POLICY.md](https://github.com/JetBrains/teamcity-operator/blob/HEAD/docs/UPGRADE-POLICY.md)
- Security policy and vulnerability reporting: [SECURITY.md](https://github.com/JetBrains/teamcity-operator/blob/HEAD/SECURITY.md)
- Common questions: see [FAQ](#faq) below

## Installation

### Prerequisites

- Kubernetes v1.26.0+
- cert-manager installed in the cluster
  - Tested with cert-manager v1.14.3
  - Install example:
    ```shell
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.14.3/cert-manager.yaml
    ```

### Install the Operator via Helm

Install release 0.0.21 of the chart from GitHub Releases:

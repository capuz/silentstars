---
repo: "procinger/turing-pi-v2-cluster"
name: "turing-pi-v2-cluster"
description: "Turing Pi V2 K3S Cluster bootstrapping with Ansible and Argo CD. Dependency monitoring and updating with Renovate Bot. Running CI tests with the K8S E2E Framework."
readmeQualityOk: true
url: "https://github.com/procinger/turing-pi-v2-cluster"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["turing-pi2", "rk1", "homelab", "k3s", "kubernetes", "turing-pi", "gitops", "argocd"]
stars: 26
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-25T15:10:28Z"
lastCommitAt: "2026-07-08T05:41:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["renovate[bot]", "procinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/2921cb992cac3f8c6b3f16a114bacc27b6feb03ad4b91f3b3dc417403b0148f4/procinger/turing-pi-v2-cluster"
---

# Turing Pi v2 K3S Cluster with RK 1 Compute Modules
This project uses an Ansible playbook to install a K3S 4 node cluster on the RK1 computer modules from the [Turing Pi Project](https://turingpi.com/).
This involves installing 3 control-planes and 1 agent node.

After the successful K3S installation, Argo CD is installed and linked to this repository using the [App of Apps pattern (cluster bootstrapping)](https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/).
This simplifies the handling of the various Helm charts, their configurations and updates.

Includes tools and operators
- [Cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- [Argo CD](https://github.com/argoproj/argo-helm/tree/main/charts/argo-cd)
- [Prometheus Kube Stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)
- [Longhorn CSI](https://github.com/longhorn/longhorn)
- [Istio & Gateway](https://github.com/istio/istio/tree/master/manifests/charts)
- [http echo server](https://github.com/mendhak/docker-http-https-echo)
- [K3S System Upgrade…

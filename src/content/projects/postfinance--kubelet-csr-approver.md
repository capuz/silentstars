---
repo: "postfinance/kubelet-csr-approver"
name: "kubelet-csr-approver"
description: "Kubernetes controller to enable automatic kubelet CSR validation after a series of (configurable) security checks"
readmeQualityOk: true
url: "https://github.com/postfinance/kubelet-csr-approver"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["kubernetes", "kubelet", "controller-runtime", "controller", "go"]
stars: 272
forks: 43
openIssues: 2
closedIssues: 43
watchers: 5
contributors: 32
recentReleases: 0
createdAt: "2021-11-19T16:17:46Z"
lastCommitAt: "2026-08-05T06:07:36Z"
lastReleaseAt: "2023-03-31T04:37:34Z"
status: "thriving"
tags: []
healthScore: 77
undervaluedScore: 22
maintainers: ["luanaBanana", "dependabot[bot]", "clementnuss"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d8f6dde3dc7c893bad74825207711a6680ec9d35b82cd1ce5704771c0a9a613/postfinance/kubelet-csr-approver"
---

# kubelet-csr-approver

Kubelet CSR approver is a Kubernetes controller whose sole purpose is to
auto-approve [`kubelet-serving` Certificate Signing Request
(CSR)](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/#kubelet-serving-certs),
provided these CSRs comply with a series of configurable, provider-specific,
checks/verifications.

Inspired by existing projects (such as
[`kubelet-rubber-stamp`](https://github.com/kontena/kubelet-rubber-stamp)), it
implements additional verifications to prevent an attacker from forging
Certificates.

Kubelet CSR approver is being kept up-to-date in accordance with the [most recent three Kubernetes minor releases](https://kubernetes.io/releases/).

## Quick start

1. deploy `kubelet-csr-approver` on your k8s cluster using the manifests
   present in [`deploy/k8s`](https://github.com/postfinance/kubelet-csr-approver/blob/HEAD/deploy/k8s)
2. change the `/var/lib/kubelet/config.yaml` file and restart your kubelet once
   having included the following field: `yaml serverTLSBootstrap: true`
3. at that point, there should be a number of CSRs on your cluster, that the
   `kubelet-csr-approver` will approve (or deny) depending…

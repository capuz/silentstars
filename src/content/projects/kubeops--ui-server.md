---
repo: "kubeops/ui-server"
name: "ui-server"
description: "Kubernetes UI Server"
url: "https://github.com/kubeops/ui-server"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 27
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 149
recentReleases: 0
createdAt: "2020-04-14T03:49:09Z"
lastCommitAt: "2026-06-27T06:22:54Z"
lastReleaseAt: "2022-12-02T09:37:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 50
maintainers: ["tamalsaha", "ArnobKumarSaha", "1gtm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/255504251/cf982ab4-dab2-4c3d-bfd0-112e35a31fac"
---

# ui-server

Kubernetes UI Server is an [extended api server](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/) for Kubernetes.
This exposes a number of apis for a Kubernetes cluster, such as:

- `WhoAmI` service returns the user info of the user making the api call.
- `PodView` resource exposes actual resource usage by a Pod. The resource usage information is read from Prometheus.

## Deploy into a Kubernetes Cluster

You can deploy UI Server using Helm chart found [here](https://github.com/kubeops/installer/tree/master/charts/kube-ui-server).

```console
helm repo add appscode https://charts.appscode.com/stable/
helm repo update

helm install kube-ui-server appscode/kube-ui-server
```

## Usage

```console
$ kubectl create -f artifacts/whoami.yaml -o yaml --validate=false

apiVersion: authentication.k8s.io/v1
kind: SelfSubjectReview
metadata:
  creationTimestamp: "2024-06-10T18:41:37Z"
status:
  userInfo:
    groups:
    - kubeadm:cluster-admins
    - system:authenticated
    username: kubernetes-admin
```

## How It Woks

Identity Server is a Kubernetes extended apiserver (EAS). As an EAS, it has [access to the…

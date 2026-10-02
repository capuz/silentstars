---
repo: "nginx/nginx-ingress-helm-operator"
name: "nginx-ingress-helm-operator"
description: "NGINX Ingress Operator for NGINX and NGINX Plus Ingress Controllers. Based on the Helm chart for NGINX Ingress Controller - https://github.com/nginxinc/helm-charts"
readmeQualityOk: true
url: "https://github.com/nginx/nginx-ingress-helm-operator"
language: "Mustache"
languages: ["Mustache", "Makefile"]
languagePcts: [56, 30]
topics: ["kubernetes", "operator", "k8s"]
stars: 49
forks: 26
openIssues: 2
closedIssues: 46
watchers: 12
contributors: 34
recentReleases: 0
createdAt: "2022-03-07T00:11:48Z"
lastCommitAt: "2026-10-02T10:00:08Z"
lastReleaseAt: "2023-06-30T16:20:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 56
maintainers: ["renovate[bot]", "github-actions[bot]", "haywoodsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5e182c43f52df2d3c15fb47a9c826d6de1274a03dbdbc7710e74c4e22c96f85/nginx/nginx-ingress-helm-operator"
discussionCount: 1
---

# NGINX Ingress Operator

The NGINX Ingress Operator is a Kubernetes/OpenShift component which deploys and manages one or more [NGINX/NGINX Plus Ingress Controllers](https://github.com/nginx/kubernetes-ingress) which in turn handle Ingress traffic for applications running in a cluster.

Learn more about operators in the [Kubernetes Documentation](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/).

To install a specific version of the NGINX Ingress Controller with the operator, a specific version of the NGINX Ingress Operator is required.

Up until version 0.5.1, this Operator was Go based. Version 1.0.0 marks an incompatible upgrade as this release switched the Operator to being Helm-based, built from the [NGINX Ingress Controller Helm chart](http://helm.nginx.com/#nginx-ingress-controller). The configuration for the Helm chart can be seen in the [NGINX Ingress Controller documentation](https://docs.nginx.com/nginx-ingress-controller/install/helm#configuration).

The following table shows the relation between the versions of the two projects:

| NGINX Ingress Controller | NGINX Ingress Operator |
| ------------------------ | ---------------------- |
| 5.6.x…

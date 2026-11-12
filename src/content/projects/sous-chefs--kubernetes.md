---
repo: "sous-chefs/kubernetes"
name: "kubernetes"
description: "Development repository for the kubernetes cookbook"
readmeQualityOk: true
url: "https://github.com/sous-chefs/kubernetes"
homepage: "https://supermarket.chef.io/cookbooks/kubernetes"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [96]
topics: ["chef", "kubernetes", "hacktoberfest", "chef-cookbook", "chef-resource", "managed-by-terraform"]
stars: 39
forks: 26
openIssues: 1
closedIssues: 10
watchers: 18
contributors: 8
recentReleases: 0
createdAt: "2015-03-20T07:15:10Z"
lastCommitAt: "2026-11-12T11:40:14Z"
lastReleaseAt: "2023-02-23T15:31:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 39
maintainers: ["damacus", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/badd04b2bd28c115faa1d20512a1a11934eaca08f0ef258501ad8160d4346c89/sous-chefs/kubernetes"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/sous-chefs"]
---

# kubernetes cookbook

Manage Kubernetes Pods, Services and ReplicationControllers through the core/v1 API.
The cookbook connects to an existing cluster; it does not install Kubernetes.

## Requirements

* Chef Infra Client 17 or later.
* A supported Ruby platform with the build tools needed by kubeclient's native dependencies.
* An operator-controlled kubeconfig with permission to manage the selected resources and namespace.
* An existing Kubernetes cluster exposing core/v1 with server-side apply (stable since Kubernetes 1.22).

Platform support remains independent of the cluster's operating system. Linux integration tests
cover maintained Debian, Ubuntu, RHEL derivatives, Amazon Linux, Fedora and openSUSE images.

## Resources

* [kube_pod](https://github.com/sous-chefs/kubernetes/blob/HEAD/documentation/kube_pod.md)
* [kube_service](https://github.com/sous-chefs/kubernetes/blob/HEAD/documentation/kube_service.md)
* [kube_replication_controller](https://github.com/sous-chefs/kubernetes/blob/HEAD/documentation/kube_replication_controller.md)

All resources accept [connection properties](https://github.com/sous-chefs/kubernetes/blob/HEAD/documentation/connection.md). They create…

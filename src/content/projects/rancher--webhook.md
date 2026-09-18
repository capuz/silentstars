---
repo: "rancher/webhook"
name: "webhook"
description: "Rancher webhook for Kubernetes"
readmeQualityOk: true
url: "https://github.com/rancher/webhook"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 30
forks: 87
openIssues: 10
closedIssues: 18
watchers: 39
contributors: 78
recentReleases: 0
createdAt: "2020-09-09T04:41:10Z"
lastCommitAt: "2026-09-17T18:59:09Z"
lastReleaseAt: "2020-09-26T02:16:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 57
maintainers: ["renovate-rancher[bot]", "rancher-pr-and-push-webhook[bot]", "crobby"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c0b050c5df10c9ff6d853a489d897fcf1a1325bc6a54d0951628ad3ed88cff5/rancher/webhook"
---

# Rancher Webhook

 Rancher webhook is both a validating admission webhook and a mutating admission webhook for Kubernetes.

[Explanation of Webhooks in Kubernetes](
https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/)

## Background

The Rancher Webhook is an instance of a Kubernetes admission controller.
Admission controllers are a standard Kubernetes mechanism to intercept requests to a cluster's
API server and perform validation or mutation of resources prior to their persistence in
the cluster database.
The validation and mutation are performed by custom code whose logic is defined by the instance of an admission controller.
Cluster administrators may create many such controllers that perform custom validation or mutation in series.
The Rancher Webhook is one such controller that runs both in the local cluster and all downstream clusters automatically.

A typical admission controller, such as Rancher's webhook, works as a web-server that receives requests forwarded
by the main API server. If the Webhook runs its custom validation logic for the resource in question
and rejects it because the object's structure violates some custom rules,…

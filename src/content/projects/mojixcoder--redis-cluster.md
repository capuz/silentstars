---
repo: "mojixcoder/redis-cluster"
name: "redis-cluster"
description: "Redis Cluster Kubernetes Helm Charts"
readmeQualityOk: true
url: "https://github.com/mojixcoder/redis-cluster"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
topics: ["helm", "kubernetes", "redis", "redis-cluster"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-03T10:54:38Z"
lastCommitAt: "2026-11-02T15:17:46Z"
lastReleaseAt: "2026-06-20T11:38:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 33
maintainers: ["mojixcoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f42b64cc20ec2bfdbb8cee60d8a93fcca0d761f9365ba8ba6714ea8ef832a64/mojixcoder/redis-cluster"
---

## Redis Cluster Kubernetes Helm Charts

This repository contains Redis cluster helm charts that can survive pod restarts in which the pod IPs get changed afterwards, the cluster will be recovered successfully.

### Parameters

| Name | Description | Example |
|--|--|--|
 `nameOverride` | String to override `redis-cluster.name` template | `redis-cluster`
`fullnameOverride` | String to override `redis-cluster.fullname`  `template` | `redis-cluster`
`securityContext.enabled` | Whether to enable pod's container security context or not | `false`
`securityContext` | Pod's security context | `{}`
`minReadySeconds` | minimum number of seconds for which a newly created Pod should be running and ready without any of its containers crashing, for it to be considered available | `10`
`priorityClassName` | Priority indicates the importance of a Pod relative to other Pods | `high-priority`
`serviceAccount.enabled` | Enable or disable service account | `false`
`serviceAccount.name` | Name of the service account | `default`
`redis.image` | Redis docker image | `redis:8.10`
`redis.port` | Redis server port | `6379`
`redis.bus` | Redis cluster bus port | `16379`
`redis.securityContext.enabled` |…

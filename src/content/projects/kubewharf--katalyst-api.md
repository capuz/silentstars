---
repo: "kubewharf/katalyst-api"
name: "katalyst-api"
description: "katalyst aims to provide a universal solution to help improve resource utilization and optimize the overall costs in the cloud. This repo is the core api for Katalyst, including crd, clientSet, informer, pd, general const variables and utils"
readmeQualityOk: true
url: "https://github.com/kubewharf/katalyst-api"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 55
forks: 57
openIssues: 2
closedIssues: 1
watchers: 9
contributors: 47
recentReleases: 0
createdAt: "2023-01-17T09:17:16Z"
lastCommitAt: "2026-10-23T08:47:06Z"
lastReleaseAt: "2023-07-07T05:33:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 54
maintainers: ["luomingmeng", "xu282934741", "tituschewxj"]
openGraphImageUrl: "https://opengraph.githubassets.com/081a92e61f21f4410fb5ec41890d0983d37c1bc8a9c77fa23c7114b80ccdac6b/kubewharf/katalyst-api"
---

English | [简体中文](https://github.com/kubewharf/katalyst-api/blob/HEAD/README.zh.md)

## Overview

katalyst aims to provide a universal solution to help improve resource utilization and optimize the overall costs in the cloud. The main feature includes:
- QoS-Based Resource Model: provide pre-defined QoS Model along with multiple enhancements to match up with QoS requirements for different kinds of workload; 
- Elastic Resource Management: provide both horizontal & vertical scaling implementations, along with an extensible mechanism for out-of-tree algorithms;
- Topology-Awared Scheduling and Allocating: expend ability of native scheduler and kubelet to support topology-awared resource scheduling, making it easy to support heterogeneous devices;
- Fine-Grained Resource Isolation: provide real-time and fine-grained resource oversold, allocation and isolation strategies for each QoS with auto-tuned workload profiling

Katalyst contains three main projects:
- [Katalyst-API](https://github.com/kubewharf/katalyst-api.git): Katalyst core API, including CRD, Protocol, QoS Model and so on;
- [Katalyst-Core](https://github.com/kubewharf/katalyst-core.git): Katalyst core implementations;
-…

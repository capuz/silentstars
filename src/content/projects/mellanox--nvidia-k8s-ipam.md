---
repo: "Mellanox/nvidia-k8s-ipam"
name: "nvidia-k8s-ipam"
description: "IPAM plugin for kubernetes"
readmeQualityOk: true
url: "https://github.com/Mellanox/nvidia-k8s-ipam"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 35
forks: 17
openIssues: 5
closedIssues: 4
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2023-04-27T17:42:47Z"
lastCommitAt: "2026-09-09T08:18:19Z"
lastReleaseAt: "2024-09-18T15:19:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 54
maintainers: ["rollandf", "dependabot[bot]", "almaslennikov"]
openGraphImageUrl: "https://opengraph.githubassets.com/89a4e9c2561106e5d5fe8acf52bbaec3337b3edaf55b56a16e9117649a90953c/Mellanox/nvidia-k8s-ipam"
---

# NVIDIA IPAM Plugin

An IP Address Management (IPAM) CNI plugin designed to operate in a Kubernetes environment.
This Plugins allows to assign IP addresses dynamically across the cluster while keeping speed
and performance in mind.

NVIDIA IPAM plugin supports allocation of IP ranges and Network prefixes for nodes.

* [IPPool CR](#ippool-cr) can be used to create an IP Pool. This type of pool can be used to split a single IP network into multiple unique IP ranges and allocate them for nodes. The nodes will use the same network mask as the original IP network.

  This pool type is useful for flat networks where Pods from all nodes have L2 connectivity with each other.

  **Example:**
	```
  network: 192.168.0.0/16
  gateway: 192.168.0.1
  perNodeBlockSize: 4 (amount of IPs)

  node1 will allocate IPs from the following range: 192.168.0.1-192.168.0.4 (gateway is part of the range)

  node2 will allocate IPs from the following range: 192.168.0.5-192.168.0.8

	First Pod on the node1 will get the following IP config:
		IP: 192.168.0.2/16 (gateway IP was skipped)
		Gateway: 192.168.0.1

	First Pod on the node2 will get the following IP config:
		IP: 192.168.0.5/16
		Gateway:…

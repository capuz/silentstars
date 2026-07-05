---
repo: "siutsin/otaru"
name: "otaru"
description: "Bare-Metal Home Lab for Kubernetes and Technical Playground"
readmeQualityOk: true
url: "https://github.com/siutsin/otaru"
language: "Shell"
languages: ["Shell", "HCL"]
languagePcts: [34, 33]
topics: ["kubernetes", "raspberry-pi", "homelab", "k3s", "gitops"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-09-15T22:01:51Z"
lastCommitAt: "2026-07-05T20:56:05Z"
lastReleaseAt: "2024-10-04T23:14:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["renovate[bot]", "siutsin", "otaru-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a35d790ce2ab5afd8ebfb3053e55f59133258f06acfc467af0185c1af37febc/siutsin/otaru"
---

# otaru

> Over-Engineering at Its Finest

Bare-metal `k3s` home lab and technical playground.

The only rule: Raspberry Pi 🍓. Why? Why not ¯\\\_(ツ)\_/¯

## Architecture

Current cluster layout:

- Dedicated `192.168.10.0/24` VLAN for cluster nodes and service virtual IPs
- `k3s` with embedded etcd on three control-plane nodes
- Flannel `wireguard-native` for pod networking
- MetalLB + Envoy Gateway for service and ingress virtual IPs, with the Envoy Gateway controller in `envoy-gateway-system` and the ingress proxy in `gateway`
- Istio ambient mesh with Kiali for service mesh observability

## Hardware

| Node              | Device                                                         | Role           | Storage                                |
|-------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| `raspberrypi-00`  | [Raspberry Pi 5 8GB][rpi5]                                     | Control plane  | [Lexar NM620 256GB][lexar-nm620]       |
| `raspberrypi-01`  | Raspberry Pi 5 8GB                                             | Control plane  | [Crucial P3 Plus 4TB][crucial-p3-plus] |
|…

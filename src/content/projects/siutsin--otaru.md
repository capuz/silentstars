---
repo: "siutsin/otaru"
name: "otaru"
description: "Bare-Metal Home Lab for Kubernetes and Technical Playground"
readmeQualityOk: true
url: "https://github.com/siutsin/otaru"
language: "Python"
languages: ["Python", "Shell", "HCL"]
languagePcts: [30, 30, 23]
topics: ["kubernetes", "raspberry-pi", "homelab", "k3s", "gitops", "inference-server"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-09-15T22:01:51Z"
lastCommitAt: "2026-10-23T09:32:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 68
maintainers: ["renovate[bot]", "siutsin", "otaru-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/476e71eacb66d459581454fe5c38b7c421f040178d491f294f46f7f226515bb8/siutsin/otaru"
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
- MCP servers (Kubernetes and UniFi) are JWT-gated at Envoy Gateway;
  local agents reach them through a workstation agentgateway that
  injects short-lived Hydra tokens (see
  [MCP authentication](https://github.com/siutsin/otaru/blob/HEAD/documentation/mcp-auth.md))

## Hardware

| Node              | Device                                                         | Role           | Storage                                |
|-------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| `raspberrypi-00`  |…

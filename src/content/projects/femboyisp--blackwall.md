---
repo: "femboyisp/blackwall"
name: "blackwall"
description: "WIP: A deceptive firewall - all ports appear open by default; real services are opt-in. nftables, interactive honeypot engine, multi-tenant, BGP/XDP-ready."
readmeQualityOk: true
url: "https://github.com/femboyisp/blackwall"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["bgp", "ddos-mitigation", "ddos-protection", "deception", "ebpf", "firewall", "honeypot", "ipv6", "networking", "nftables"]
stars: 10
forks: 0
openIssues: 13
closedIssues: 61
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-17T14:18:06Z"
lastCommitAt: "2026-07-07T06:38:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 47
maintainers: ["vxfemboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/be21fbcdd98ca4aedd4ae2f2ce3096bebb027bfd1816132afa6624061c7737b4/femboyisp/blackwall"
---

# Blackwall

**A Rust deception firewall and DDoS-mitigation platform for operators running their own IP space.**

By default, every address and port across your IPv4/IPv6 prefixes *appears* open and running a
service — scanners and attackers can't tell which ports are real. A port only becomes a genuine,
forwarded service when you explicitly open it (via a declarative config file, the API, or Incus
auto-discovery); everything else is answered by an interactive honeypot engine that behaves like
the real thing. Blackwall is built for high packet rates and multi-tenant hosting, with a fast
nftables data plane and an on-box XDP/eBPF fast-drop path today, BGP scrubbing, and DNS fast-flux,
with SYN-cookie/AF_XDP acceleration on the roadmap.

> ⚠️ **Status:** active development. Sub-project **A** (deception firewall) is feature-complete
> through M3 — the nftables data plane enforces deception (TPROXY/NFQUEUE → honeypot engine) and
> real-service forwarding, with protocol emulators, Incus discovery, CAKE shaping, and DNS/banner
> fast-flux. Sub-project **D** ships volumetric detection (D1), and **C** (BGP control plane) ships
> RTBH end to end plus FlowSpec auto-mitigation. Sub-project…

---
repo: "takehaya/bpf-ninja"
name: "bpf-ninja"
description: "bpf-ninja🥷 is a tool that can capture packets before they are processed by XDP/TC/cgroup, while minimizing the impact on existing XDP programs."
readmeQualityOk: true
url: "https://github.com/takehaya/bpf-ninja"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 18
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-24T03:33:57Z"
lastCommitAt: "2026-10-11T10:15:25Z"
lastReleaseAt: "2026-06-11T05:31:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["takehaya", "takehaya-release-please-use-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad4e5adc4f579340a9552a3004def1c2bfcd1d2020c466f10922c49d6f3c202f/takehaya/bpf-ninja"
---

# bpf-ninja

> [!NOTE]
> This project was renamed from **xdp-ninja** (July 2026): the tool has outgrown XDP — it also observes tc-bpf programs, and more BPF hook points are planned. GitHub redirects the old repository URL, but the Go module path changed to `github.com/takehaya/bpf-ninja`, so `go install` / imports need the new path. Environment variables are now `BPF_NINJA_*` (the old `XDP_NINJA_*` names are no longer read).

bpf-ninja captures packets at BPF hook points — XDP, tc-bpf, cgroup-skb, and netfilter, with more planned. `tcpdump` runs below XDP and can't show what XDP or tc-bpf did to the packet, and cBPF filters can't walk into VXLAN / GTP / MPLS / SRv6 inner headers. Attach via fentry/fexit to a running XDP without modifying it, or `--mode xdp` for standalone capture on a netdev. Filters use the built-in DSL by default — chains like `eth/ipv4/udp/vxlan/eth/ipv4/tcp`. Plain tcpdump syntax via [cbpfc](https://github.com/cloudflare/cbpfc) is still accepted via `--cbpf`, kept for backwards compatibility and planned to retire once the DSL surface stabilises. Output is pcap (pcapng) to stdout.🥷

## Install

```bash
# One-liner (downloads pre-built binary from GitHub…

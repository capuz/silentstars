---
repo: "takehaya/bpf-ninja"
name: "bpf-ninja"
description: "bpf-ninja🥷 is a tool that can capture packets before they are processed by XDP/TC/cgroup, while minimizing the impact on existing XDP programs."
readmeQualityOk: true
url: "https://github.com/takehaya/bpf-ninja"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 18
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-24T03:33:57Z"
lastCommitAt: "2026-11-05T08:05:11Z"
lastReleaseAt: "2026-06-11T05:31:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["takehaya", "takehaya-release-please-use-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3eb78fa2bc2564d24084ba943cf68421f1c5a591425fb91d16324e988a3c3c98/takehaya/bpf-ninja"
---

# bpf-ninja

> [!NOTE]
> Formerly xdp-ninja. GitHub redirects the old repository URL. The Go module path is `github.com/takehaya/bpf-ninja`, and environment variables use the `BPF_NINJA_*` prefix; `XDP_NINJA_*` names are not read.

bpf-ninja captures packets at BPF hook points: XDP, tc, cgroup-skb and netfilter.
tcpdump cannot show what an XDP or tc program did to a packet, and cBPF filters cannot read the inner headers of VXLAN, GTP, MPLS or SRv6.

- It attaches fentry or fexit to a running program without changing it, so you see the packet the program received, or the packet and verdict it produced.
- `--mode xdp` captures on a netdev that has no XDP program.
- Filters use a built-in DSL that walks through encapsulations, such as `eth/ipv4/udp/vxlan/eth/ipv4/tcp`.
- Output is pcap-ng, to stdout or to per-CPU files.
- The tcpdump syntax (`--cbpf`, through [cbpfc](https://github.com/cloudflare/cbpfc)) is kept for compatibility in an optional libpcap build and is planned for removal.
- The experimental [`inject-run`](https://github.com/takehaya/bpf-ninja/blob/HEAD/docs/en/inject-run.md) adds hooks to selected XDP or tc programs as an unmodified loader loads them (Linux x86-64).…

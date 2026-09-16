---
repo: "daeuniverse/honk"
name: "honk"
description: "Inspired by dae & sing-box, it's an ebpf based proxy with clash-api"
readmeQualityOk: true
url: "https://github.com/daeuniverse/honk"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 85
forks: 11
openIssues: 15
closedIssues: 46
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-07-20T13:05:16Z"
lastCommitAt: "2026-09-16T08:47:46Z"
lastReleaseAt: "2026-08-19T01:54:11Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 37
maintainers: ["Zakkaus", "Glassyiris", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/796e4c57ca2211fc1757817a8272f823a3149ebfe1b33f88929b29742c16dbee/daeuniverse/honk"
---

# honk

English | [中文](https://github.com/daeuniverse/honk/blob/HEAD/README.zh.md)

---

## What Is honk?

**honk** is a Rust transparent-proxy engine for Linux, inspired by [dae](https://github.com/daeuniverse/dae) for its eBPF datapath and configuration surface, and by [sing-box](https://github.com/SagerNet/sing-box) for its outbound groups, multi-protocol dialers, and Clash-compatible API.

It is **not** a line-for-line port of either project. The packet path retains dae's TC + `dae0`/`daens` model; a single userspace routing IR is compiled into generation-owned BPF policy functions on Linux 6.12+. The outbound and control stacks follow sing-box-oriented designs.

> **Status: experimental (`v0.0.1-alpha`).** honk is an early alpha release. Expect breaking changes, incomplete features (see TODO), and limited real-world validation. It is not recommended for production use.

License: **GPL-3.0-only**.

The always-compiled, reliability-first Score group policy is selected explicitly with `policy: score`; omitted policy still defaults to Selector. Score learns only in process memory from actual traffic plus DNS, real QUIC handshakes, probes, delay tests, warm-up, and direct or…

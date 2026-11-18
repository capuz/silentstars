---
repo: "alainmarcel/uhdm2rtlil"
name: "uhdm2rtlil"
description: "Yosys SystemVerilog 1800-2023 Synthesis that matches Verilator (RTL matches gate-level simulation)"
readmeQualityOk: true
url: "https://github.com/alainmarcel/uhdm2rtlil"
language: "SystemVerilog"
languages: ["SystemVerilog"]
languagePcts: [74]
stars: 8
forks: 2
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 6
createdAt: "2025-06-19T04:57:46Z"
lastCommitAt: "2026-11-18T10:27:04Z"
lastReleaseAt: "2026-11-07T16:08:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 85
maintainers: ["alaindargelas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f2b1dca631d58c6c9a43b9360e8309dead470ec16383998994d97171486a82d/alainmarcel/uhdm2rtlil"
postedAt: "2026-07-12T06:25:03.412Z"
---

# UHDM to RTLIL Frontend

**Gates** (every PR + nightly) — a PR lands only on a clean run:

**IP sweeps** (every other day; half of them on odd days, half on even days) — one badge per sweep workflow, in the order [docs/supported_ip.md](https://github.com/alainmarcel/uhdm2rtlil/blob/HEAD/docs/supported_ip.md) lists them; each links to its per-module report:

A Yosys frontend that enables SystemVerilog synthesis through UHDM (Universal Hardware Data Model) by converting UHDM representations to Yosys RTLIL (Register Transfer Level Intermediate Language). Focused on creating post-synthesis (Gate-level) netlists that matches RTL simulation using Verilator as the golden standard.

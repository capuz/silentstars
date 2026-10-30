---
repo: "alainmarcel/uhdm2rtlil"
name: "uhdm2rtlil"
description: "Yosys SystemVerilog Synthesis that matches Verilator (RTL matches gate-level simulation)"
readmeQualityOk: true
url: "https://github.com/alainmarcel/uhdm2rtlil"
language: "IL Assembly"
languages: ["IL Assembly", "Verilog"]
languagePcts: [40, 38]
stars: 8
forks: 2
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2025-06-19T04:57:46Z"
lastCommitAt: "2026-10-30T07:25:22Z"
lastReleaseAt: "2026-10-15T16:31:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 85
maintainers: ["alaindargelas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9bf56a6fe67156d5271e119456de86fe7217b756edffd3e2b0304ba4fdd2b23/alainmarcel/uhdm2rtlil"
postedAt: "2026-07-12T06:25:03.412Z"
---

# UHDM to RTLIL Frontend

**Gates** (every PR + nightly) — a PR lands only on a clean run:

**Nightly IP sweeps** — one badge per sweep workflow, in the order [docs/supported_ip.md](https://github.com/alainmarcel/uhdm2rtlil/blob/HEAD/docs/supported_ip.md) lists them; each links to its per-module report:

A Yosys frontend that enables SystemVerilog synthesis through UHDM (Universal Hardware Data Model) by converting UHDM representations to Yosys RTLIL (Register Transfer Level Intermediate Language). Focused on creating post-synthesis (Gate-level) netlists that matches RTL simulation using Verilator as the golden standard.

> ### ✅ Every result is verified
> Nothing here is counted as "working" on a read-only or vacuous pass. Every
> synthesized netlist is proven correct by **formal equivalence** — Yosys
> `equiv_induct` plus a sound **SAT-from-reset miter** against the Yosys
> Verilog-frontend golden — **and/or** by **high-activity randomized Verilator
> co-simulation** against the original RTL. A SAT miter also adjudicates every
> divergence so an inductive-proof gap is never mistaken for a real bug.
> See…

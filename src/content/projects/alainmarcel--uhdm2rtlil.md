---
repo: "alainmarcel/uhdm2rtlil"
name: "uhdm2rtlil"
description: "Yosys SystemVerilog Synthesis that matches Verilator (RTL matches gate-level simulation)"
readmeQualityOk: true
url: "https://github.com/alainmarcel/uhdm2rtlil"
language: "IL Assembly"
languages: ["IL Assembly", "Verilog"]
languagePcts: [41, 38]
stars: 8
forks: 2
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2025-06-19T04:57:46Z"
lastCommitAt: "2026-09-24T05:01:43Z"
lastReleaseAt: "2026-08-24T16:42:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 85
maintainers: ["alaindargelas"]
openGraphImageUrl: "https://opengraph.githubassets.com/9702c2a6e875b9b85c77c4770141d117037053e20805f945f0b336cd3ba4a907/alainmarcel/uhdm2rtlil"
postedAt: "2026-07-12T06:25:03.412Z"
---

# UHDM to RTLIL Frontend

A Yosys frontend that enables SystemVerilog synthesis through UHDM (Universal Hardware Data Model) by converting UHDM representations to Yosys RTLIL (Register Transfer Level Intermediate Language). Focused on creating post-synthesis (Gate-level) netlists that matches RTL simulation using Verilator as the golden standard.

> ### ✅ Every result is verified
> Nothing here is counted as "working" on a read-only or vacuous pass. Every
> synthesized netlist is proven correct by **formal equivalence** — Yosys
> `equiv_induct` plus a sound **SAT-from-reset miter** against the Yosys
> Verilog-frontend golden — **and/or** by **high-activity randomized Verilator
> co-simulation** against the original RTL. A SAT miter also adjudicates every
> divergence so an inductive-proof gap is never mistaken for a real bug.
> See **[Verification Methodology](#verification-methodology)** below.

## Overview

This project bridges the gap between SystemVerilog source code and Yosys synthesis by leveraging two key components:

1. **Surelog** - Parses SystemVerilog and generates UHDM
2. **UHDM Frontend** - Converts UHDM to Yosys RTLIL

This enables full SystemVerilog synthesis…
